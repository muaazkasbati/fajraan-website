import Image from "next/image";
import Reveal from "../Reveal";
import Button from "../Button";
import HeroVideoSection from "./HeroVideoSection";

const HeroSection = () => {
  return (
    <section className="pt-32 md:pt-40 lg:pt-44">
      <div className="wrap">
        <Reveal>
          <p className="t-eyebrow">Products · AI agents · Business platforms</p>
        </Reveal>

        <div className="mt-7 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal delay={60} className="lg:col-span-9">
            <h1 className="t-display text-primary">
              Building smart ideas with a spark of <span className="text-secondary">creativity.</span>
            </h1>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-3 lg:pb-3">
            <p className="text-muted">
              We build products from scratch with a first live version in as little as 10 days, plus AI agents, automated systems and ready-to-launch business software.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220} className="mt-10 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <Button link href="/contact?interest=10-day%20MVP%20sprint">Start a 10-day sprint</Button>
            <Button link href="/solutions" variant="white">Explore platforms</Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex">
              {["avatar-1", "avatar-2", "avatar-add"].map((a, i) => (
                <Image
                  key={a}
                  src={`/images/hero/${a}.webp`}
                  alt=""
                  width={44}
                  height={44}
                  className={`h-11 w-11 rounded-full border-2 border-white ${i ? "-ml-3" : ""}`}
                />
              ))}
            </div>
            <p className="text-[15px] leading-snug text-muted">
              <strong className="block text-[17px] font-semibold text-ink">11+ clients served</strong>
              Web, app and AI projects worldwide
            </p>
          </div>
        </Reveal>
      </div>

      <HeroVideoSection />
    </section>
  );
};

export default HeroSection;
