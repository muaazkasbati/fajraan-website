import React, { useRef } from "react";
import Image from "next/image";
import SectionHead from "../SectionHead";
import Reveal from "../Reveal";

export const testimonials = [
  {
    text: "Fajraan Tech transformed the way we manage our chauffeur business. They delivered a complete booking and fleet management platform with real-time dispatching, driver management, Stripe payments, reporting, and countless custom features tailored to our operations. The attention to detail, technical expertise, and ongoing support have been exceptional.",
    author: "Hass Gill",
    role: "Co-Founder, Empire Chauffeurs Australia",
    image: "/images/testimonial/Testimonial-img-4.webp",
  },
  {
    text: "This was a complex project involving booking management, payment integration, and multiple advanced features, and Fajraan Tech nailed it. They built a powerful, user-friendly platform that streamlined our operations and impressed our clients. Truly reliable and skilled.",
    author: "James Anderson",
    role: "Founder, AB Limousine",
    image: "/images/testimonial/Testimonial-img-2.webp",
  },
  {
    text: "Working with Fajraan Tech was a game-changer. They delivered a sleek, animated website that not only elevated our brand presence but also made our online experience more engaging for customers. The team was professional, fast, and exceeded our expectations.",
    author: "Maaz Khawaja",
    role: "Founder, Meem Products",
    image: "/images/testimonial/Testimonial-img-1.webp",
  },
  {
    text: "Fajraan Tech developed a stunning animated website for us that perfectly captured our brand's personality. The creativity, smooth functionality, and attention to detail were outstanding. We couldn't be happier with the results.",
    author: "Sophia Bennett",
    role: "Founder, TheForCollective",
    image: "/images/testimonial/Testimonial-img-3.webp",
  },
];

const ArrowBtn = ({ dir, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={dir < 0 ? "Previous testimonial" : "Next testimonial"}
    className="grid h-12 w-12 place-items-center rounded-full border border-primary/20 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white cursor-pointer"
  >
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className={dir < 0 ? "rotate-180" : ""}>
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  </button>
);

export default function TestimonialSection({ index = "06", aboutPage = false }) {
  const rowRef = useRef(null);

  const scrollBy = (dir) => {
    const row = rowRef.current;
    if (!row) return;
    const card = row.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 24 : row.clientWidth;
    row.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className={`section overflow-hidden ${aboutPage ? "bg-paper" : ""}`} aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="wrap">
        <SectionHead
          index={index}
          eyebrow="Client words"
          title="What clients say about working with us."
          aside={
            <div className="flex gap-2">
              <ArrowBtn dir={-1} onClick={() => scrollBy(-1)} />
              <ArrowBtn dir={1} onClick={() => scrollBy(1)} />
            </div>
          }
        />

        <Reveal>
          <div
            ref={rowRef}
            tabIndex={0}
            className="snap-row mt-14 auto-cols-[88%] gap-6 sm:auto-cols-[70%] md:mt-20 lg:auto-cols-[calc((100%-48px)/2.4)]"
          >
            {testimonials.map((t) => (
              <figure key={t.author} className={`flex flex-col justify-between p-8 md:p-10 ${aboutPage ? "bg-white" : "bg-paper"}`}>
                <blockquote className="text-[18px] leading-[1.55] text-ink md:text-[20px]">
                  <span aria-hidden="true" className="mb-6 block text-[56px] font-semibold leading-[0.6] text-secondary">&ldquo;</span>
                  {t.text}
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4 border-t border-primary/10 pt-6">
                  <Image src={t.image} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                  <span>
                    <span className="block font-semibold text-primary">{t.author}</span>
                    <span className="block text-[14px] text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
