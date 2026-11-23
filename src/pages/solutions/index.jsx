import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSec from "@/components/HeroSec";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { SolutionGrid, allSolutions } from "@/components/SolutionsSection";
import services from "@/utils/servicesNew.json";

const SITE = "https://www.fajraan.tech";
const TITLE = "Ready-Made ERP, School, Courier & Business Software | Fajraan Tech";
const DESC = "ERP, school management, courier management, CRM, HR & payroll, inventory & POS, clinic, property and LMS platforms, customised to your workflow and launched under your brand by Fajraan Tech.";

export default function Solutions() {
    const steps = services.find((s) => s.slug === "saas-platforms")?.content?.approach?.steps || [];
    return (
        <>
            <Head>
                <title>{TITLE}</title>
                <meta name="description" content={DESC} />
                <link rel="canonical" href={`${SITE}/solutions`} />
                <meta property="og:title" content={TITLE} />
                <meta property="og:description" content={DESC} />
                <meta property="og:url" content={`${SITE}/solutions`} />
                <meta property="og:image" content={`${SITE}/images/og/og-image.webp`} />
                <meta name="twitter:card" content="summary_large_image" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            name: "Fajraan Tech business software platforms",
                            itemListElement: allSolutions.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${SITE}${s.href}` })),
                        }),
                    }}
                />
            </Head>
            <Header />
            <main id="main">
                <HeroSec
                    crumbs={[{ label: "Solutions" }]}
                    title="Business software, set up in days and made yours."
                    intro="Start from a proven platform instead of a blank page. We customise it to how you work, migrate your data and launch it under your brand."
                >
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button link href="/contact?interest=Platform%20demo">Book a demo</Button>
                    </div>
                </HeroSec>

                <section className="pb-20 md:pb-28">
                    <div className="wrap">
                        <SolutionGrid />
                    </div>
                </section>

                <section className="section bg-paper">
                    <div className="wrap">
                        <SectionHead
                            index="01"
                            eyebrow="How setup works"
                            title="From demo to go-live in about 10 days."
                            aside={<p className="max-w-sm text-muted">Standard setups with branding and configuration. Bigger customisations follow after launch, so you're never waiting months.</p>}
                        />
                        <ol className="mt-14 grid gap-x-8 gap-y-10 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
                            {steps.map((step, i) => (
                                <Reveal as="li" key={step.title} delay={i * 60} className="border-t border-primary/15 pt-6">
                                    <span className="t-num text-[14px] font-semibold text-secondary">Step {String(i + 1).padStart(2, "0")}</span>
                                    <h3 className="t-h4 mt-3 text-primary">{step.title}</h3>
                                    <p className="mt-2 text-[15px] text-muted">{step.points[0]}</p>
                                </Reveal>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="section">
                    <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-8">
                            <p className="t-eyebrow">Not on the list?</p>
                            <h2 className="t-h2 mt-5 text-primary">Need something no off-the-shelf platform does?</h2>
                        </div>
                        <div className="lg:col-span-4">
                            <p className="text-muted">We build custom products from scratch too, with a first live version in as little as 10 days.</p>
                            <div className="mt-6"><Button link href="/services/mvp-product-development" variant="white">10-day MVP sprint</Button></div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
