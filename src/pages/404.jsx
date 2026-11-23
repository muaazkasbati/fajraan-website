import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Page not found | Fajraan Tech</title>
                <meta name="robots" content="noindex, follow" />
            </Head>
            <Header />
            <main id="main" className="pt-36 pb-24 md:pt-48 md:pb-32">
                <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <p className="t-eyebrow">Error 404</p>
                        <h1 className="t-h1 mt-6 text-primary">This page doesn&apos;t exist, or it moved.</h1>
                    </div>
                    <div className="lg:col-span-4 lg:pb-2">
                        <p className="text-muted">The link may be old, or the page was renamed. These are good places to pick things up:</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button link href="/">Go home</Button>
                            <Button link href="/contact" variant="white">Contact us</Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer cta={false} />
        </>
    );
}
