import { motion, useReducedMotion } from "framer-motion";
import dynamic from 'next/dynamic';
import Image from "next/image";
const HeroVideoSection = dynamic(() => import('./HeroVideoSection'), { ssr: false }); // Video can be client-only

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="lg:pt-50 md:pt-37.5 pt-32.5 overflow-hidden">
      <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
        <div className="w-full relative">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1 className="text-[65px] md:text-[75px] lg:text-[95px] xl:text-[140px] leading-[107.143%] tracking-[-4.2px] font-semibold text-primary">
              Building smart ideas with a spark of{" "}
              <span className="inline-flex items-center gap-6 sm:ml-68.75">
                <svg xmlns="http://www.w3.org/2000/svg" width={110} height={110} viewBox="0 0 110 110" fill="none" className="text-secondary animate-[spin_9s_linear_infinite] sm:block hidden">
                  <path d="M60.5 0H49.5L53.0145 50.2065L19.9982 12.22L12.22 19.9982L50.2065 53.0145L1.44248e-06 49.5L0 60.5L50.2065 56.9856L12.22 90.0018L19.9982 97.78L53.0145 59.7935L49.5 110H60.5L56.9855 59.7935L90.0018 97.78L97.78 90.0018L59.7935 56.9855L110 60.5V49.5L59.7936 53.0145L97.78 19.9982L90.0018 12.22L56.9855 50.2065L60.5 0Z" fill="currentColor" />
                </svg>
                creativity
              </span>
            </h1>
          </motion.div>

          <div className="lg:max-w-95 lg:absolute -right-4 bottom-0 sm:mt-0 mt-4">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}>
              <p className="text-[20px]">
                Fajraan Tech is your digital partner for web development, mobile & desktop apps, and AI automation solutions — built for businesses worldwide.
              </p>
            </motion.div>

            <motion.div
              className="border-t border-1 flex sm:flex-row flex-col items-center gap-5 mt-7 pt-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            >
              <div className="flex items-center relative">
                <Image className="w-13 h-13 rounded-full shrink-0 z-2" alt="avatar-add" loading="lazy" width={52} height={52} src="/images/hero/avatar-add.webp" />
                <Image className="w-13 h-13 rounded-full shrink-0 z-1 -ml-2" alt="avatar-1" loading="lazy" width={52} height={52} src="/images/hero/avatar-1.webp" />
                <Image className="w-13 h-13 rounded-full shrink-0 z-0 -ml-2" alt="avatar-2" loading="lazy" width={52} height={52} src="/images/hero/avatar-2.webp" />
              </div>

              <div className="sm:text-left text-center">
                <p className="text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold">
                  <span>9</span>+ Satisfied Clients
                </p>
                <p className="text-[18px] leading-relaxed">Trusted Web, App & AI Development Agency — Serving Clients Worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
        <HeroVideoSection />
      </div>
    </section>
  );
};

export default HeroSection;
