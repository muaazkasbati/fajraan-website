import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSec from "@/components/HeroSec";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import FaqsSection from "@/components/FaqsSection";
import { SolutionGrid } from "@/components/SolutionsSection";
import solutions from "@/utils/solutions.json";

const SITE = "https://www.fajraan.tech";

export async function getStaticPaths() {
    return { paths: solutions.map((s) => ({ params: { slug: s.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
    const solution = solutions.find((s) => s.slug === params.slug);
    if (!solution) return { notFound: true };
    return { props: { solution } };
}

export default function SolutionDetail({ solution: s }) {
    const url = `${SITE}/solutions/${s.slug}`;
    const title = `${s.name} Software | Setup & Customisation - Fajraan Tech`;
    const desc = `${s.intro} Customised, branded and launched by Fajraan Tech.`;
    const demo = `/contact?interest=${encodeURIComponent(`${s.name} demo`)}`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <link rel="canonical" href={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={`${SITE}/images/og/og-image.webp`} />
                <meta name="twitter:card" content="summary_large_image" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                name: `${s.name} by Fajraan Tech`,
                                applicationCategory: "BusinessApplication",
                                operatingSystem: "Web, iOS, Android",
                                description: s.intro,
                                url,
                                publisher: { "@type": "Organization", name: "Fajraan Tech", url: SITE },
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "BreadcrumbList",
                                itemListElement: [
                                    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                                    { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE}/solutions` },
                                    { "@type": "ListItem", position: 3, name: s.name, item: url },
                                ],
                            },
                        ]),
                    }}
                />
            </Head>
            <Header />
            <main id="main">
                <HeroSec crumbs={[{ label: "Solutions", href: "/solutions" }, { label: s.name }]} title={s.title} intro={s.intro}>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button link href={demo}>Book a demo</Button>
                    </div>
                </HeroSec>

                <section className="pb-14 md:pb-20">
                    <div className="wrap">
                        <dl className="grid grid-cols-1 border-y border-line sm:grid-cols-3">
                            {[
                                ["Standard setup", "About 10 days"],
                                ["Branding", "Your name, logo & domain"],
                                ["Your data", "Migrated for you"],
                            ].map(([k, v], i) => (
                                <div key={k} className={`py-5 sm:px-6 ${i ? "border-t border-line sm:border-t-0 sm:border-l" : "sm:pl-0"}`}>
                                    <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">{k}</dt>
                                    <dd className="t-h4 mt-1 text-primary">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <section className="section bg-paper">
                    <div className="wrap">
                        <SectionHead index="01" eyebrow="Modules" title="Everything included, ready to switch on." />
                        <ol className="mt-14 grid gap-px border border-line bg-line md:mt-20 md:grid-cols-2 lg:grid-cols-3">
                            {s.modules.map((mod, i) => (
                                <Reveal as="li" key={mod.title} delay={(i % 3) * 60} className="bg-white p-7 md:p-8">
                                    <span className="t-num text-[13px] font-semibold text-secondary">{String(i + 1).padStart(2, "0")}</span>
                                    <h3 className="t-h4 mt-3 text-primary">{mod.title}</h3>
                                    <p className="mt-2 text-[15px] text-muted">{mod.text}</p>
                                </Reveal>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="section">
                    <div className="wrap grid gap-14 lg:grid-cols-2">
                        <Reveal>
                            <p className="t-eyebrow"><span className="t-num">02</span><span aria-hidden="true" className="opacity-40">/</span>Built for</p>
                            <ul className="mt-6 border-t border-line">
                                {s.audience.map((a) => (
                                    <li key={a} className="t-h4 flex gap-4 border-b border-line py-4 text-primary">
                                        <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-secondary" />
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                        <Reveal delay={80}>
                            <p className="t-eyebrow"><span className="t-num">03</span><span aria-hidden="true" className="opacity-40">/</span>Connects with</p>
                            <ul className="mt-6 flex flex-wrap gap-2">
                                {s.integrations.map((x) => (
                                    <li key={x} className="rounded-full border border-line px-4 py-2 text-[15px] text-ink">{x}</li>
                                ))}
                            </ul>
                            <p className="mt-8 text-muted">
                                Need a feature that isn&apos;t listed? We build custom modules and AI features on top of the platform.{" "}
                                <Link href="/services/ai-agents-llm-development" className="font-semibold text-primary underline decoration-secondary underline-offset-4">See AI add-ons</Link>
                            </p>
                        </Reveal>
                    </div>
                </section>

                <FaqsSection index="04" items={s.faqs} />

                <section className="section bg-paper">
                    <div className="wrap">
                        <SectionHead eyebrow="Other platforms" title="More software we set up" aside={<Button variant="text" link href="/solutions">All platforms</Button>} />
                        <div className="mt-14">
                            <SolutionGrid exclude={`/solutions/${s.slug}`} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
