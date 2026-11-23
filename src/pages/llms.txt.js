// src/pages/llms.txt.js
import services from "@/utils/servicesNew.json";
import solutions from "@/utils/solutions.json";

export const getServerSideProps = async ({ res }) => {
  const content = `# Fajraan Tech

> Fajraan Tech is a global software company that builds products from scratch fast — a live MVP in as little as 10 days — and develops AI agents, LLM applications and business automation systems. We also set up ready-to-launch business platforms (ERP, school management, courier management, CRM, HR & payroll, inventory & POS, clinic, property management and LMS) under our clients' brands. Headquartered in Kalispell, Montana, USA, we work with clients worldwide.

Underneath these offerings sit our engineering services: web development and mobile & desktop applications. We also have production experience building chauffeur and fleet management software, documented in a case study.

## Company
- [About Us](https://www.fajraan.tech/about): Company background, team, and approach.
- [Contact](https://www.fajraan.tech/contact): Get in touch — HQ at 1001 S Main St Ste 5965, Kalispell, Montana 59901-1498, United States. Email: info@fajraan.com.
- [Pricing](https://www.fajraan.tech/pricing): Transparent USD pricing tiers (Launch, Scale, Transform), with AI Automation & Chatbot work quoted as a custom add-on.
- [FAQs](https://www.fajraan.tech/faqs): Answers about our process, timelines, technology stack, and specialties.

## Services
${services.map((x) => `- [${x.title}](https://www.fajraan.tech/services/${x.slug}): ${x.description}`).join("\n")}

## Ready-to-launch platforms
- [All platforms](https://www.fajraan.tech/solutions): Business software customised, branded and launched in about 10 days for a standard setup.
${solutions.map((x) => `- [${x.name}](https://www.fajraan.tech/solutions/${x.slug}): ${x.short}`).join("\n")}

## Industry Specialty
- [Chauffeur & Fleet Software](https://www.fajraan.tech/chauffeur-software): Dedicated landing page for our chauffeur and fleet management software work, including a case study of completed client projects.

## Portfolio & Blog
- [Portfolio](https://www.fajraan.tech/portfolio): Case studies and completed projects across web, mobile, and AI.
- [Blog](https://www.fajraan.tech/blog): Articles on web development, mobile apps, AI automation, and digital innovation.

## Legal
- [Privacy Policy](https://www.fajraan.tech/privacy-policy): How we collect, use, and protect personal information.
- [Terms & Conditions](https://www.fajraan.tech/terms-and-conditions): Terms of service, governed by the laws of Wyoming, United States.

## Optional
- [Testimonials](https://www.fajraan.tech/#testimonials): Client feedback and reviews.
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(content.trim());
  res.end();

  return { props: {} };
};

export default function LlmsTxt() {
  return null;
}