export const CMS_BASE = "https://cms-backend.fajraan.com/api/posts";

/**
 * fetch + JSON with a hard timeout and one retry, so a slow or flaky CMS
 * can't hang a build or ISR regeneration. Throws on non-2xx.
 */
export async function cmsFetch(path, { timeout = 7000, retries = 1 } = {}) {
    const url = path.startsWith("http") ? path : `${CMS_BASE}${path}`;
    let lastErr;
    for (let attempt = 0; attempt <= retries; attempt++) {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), timeout);
        try {
            const res = await fetch(url, { signal: ctrl.signal, headers: { accept: "application/json" } });
            if (!res.ok) {
                const err = new Error(`CMS ${res.status} for ${url}`);
                err.status = res.status;
                // 4xx won't get better on retry
                if (res.status >= 400 && res.status < 500) throw err;
                lastErr = err;
                continue;
            }
            return await res.json();
        } catch (err) {
            if (err.status && err.status < 500) throw err;
            lastErr = err;
        } finally {
            clearTimeout(timer);
        }
    }
    throw lastErr;
}

/** Same as cmsFetch but resolves to `fallback` instead of throwing. */
export async function cmsFetchSafe(path, fallback = null, opts) {
    try {
        return await cmsFetch(path, opts);
    } catch (err) {
        console.error("[cms]", err.message);
        return fallback;
    }
}

const IS_BUILD = process.env.NEXT_PHASE === "phase-production-build";

/**
 * For getStaticProps on detail pages.
 * - CMS says 404 / empty  -> { notFound: true }
 * - CMS unreachable at build -> { notFound: true, revalidate: 60 } (retry soon, don't fail the build)
 * - CMS unreachable during ISR -> throw, so Next keeps serving the last good page
 *   instead of replacing a live page with a 404.
 */
export async function cmsDetail(path) {
    try {
        const json = await cmsFetch(path);
        if (!json?.data) return { notFound: true };
        return { data: json.data };
    } catch (err) {
        if (err.status === 404) return { notFound: true };
        if (IS_BUILD) {
            console.error("[cms] build fetch failed, will retry via ISR:", err.message);
            return { notFound: true, revalidate: 60 };
        }
        throw err;
    }
}
