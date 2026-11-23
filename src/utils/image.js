const CLOUDINARY = /^https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\//;

export const isCloudinary = (src = "") => typeof src === "string" && CLOUDINARY.test(src);

/** Insert Cloudinary transforms (auto format/quality, width) into an upload URL. */
export function cloudinaryUrl(src, width, quality = "auto") {
    if (!isCloudinary(src)) return src;
    return src.replace("/image/upload/", `/image/upload/f_auto,q_${quality},c_limit,w_${width}/`);
}

/** next/image loader: Cloudinary does the resizing, everything else is passed through. */
export function cmsImageLoader({ src, width, quality }) {
    return isCloudinary(src) ? cloudinaryUrl(src, width, quality || "auto") : src;
}

/** srcSet string for plain <img> tags. */
export function cmsSrcSet(src, widths = [480, 800, 1200, 1600]) {
    if (!isCloudinary(src)) return undefined;
    return widths.map((w) => `${cloudinaryUrl(src, w)} ${w}w`).join(", ");
}
