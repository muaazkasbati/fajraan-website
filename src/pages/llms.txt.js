// src/pages/llms.txt.js

export const getServerSideProps = async ({ res }) => {
  const content = `# Fajraan Tech

> Fajraan Tech is a global software development company. We focus deeply on three services — Web Development, Mobile & Desktop Applications, and AI Automation & AI Chatbot solutions — rather than spreading across many. We also specialize in chauffeur & fleet management software. Headquartered in Kalispell, Montana, USA, we work with clients worldwide.

Fajraan Tech builds custom, production-ready digital products for startups, growing businesses, and enterprises. Our core services are Web Development (custom web apps, WordPress, e-commerce, landing pages, API/backend work), Mobile & Desktop Applications (iOS, Android, Flutter, React Native, and desktop apps for Windows/macOS/Linux), and AI Automation & AI Chatbot (custom chatbots, business process automation, AI customer support, and LLM integrations). We also have hands-on, project-backed experience building chauffeur and fleet management software, documented in a dedicated case study.

## Company
- [About Us](https://www.fajraan.tech/about): Company background, team, and approach.
- [Contact](https://www.fajraan.tech/contact): Get in touch — HQ at 1001 S Main St Ste 5965, Kalispell, Montana 59901-1498, United States. Email: info@fajraan.com.
- [Pricing](https://www.fajraan.tech/pricing): Transparent USD pricing tiers (Launch, Scale, Transform), with AI Automation & Chatbot work quoted as a custom add-on.
- [FAQs](https://www.fajraan.tech/faqs): Answers about our process, timelines, technology stack, and specialties.

## Services
- [Web Development](https://www.fajraan.tech/services/web-development): Custom web applications, WordPress sites, e-commerce stores, landing pages, API integration, and performance optimization.
- [Mobile & Desktop Applications](https://www.fajraan.tech/services/mobile-desktop-applications): Native and cross-platform mobile apps (Flutter, React Native) and desktop applications for Windows, macOS, and Linux.
- [AI Automation & AI Chatbot](https://www.fajraan.tech/services/ai-automation-ai-chatbot): Custom AI chatbots, business process automation, AI-powered customer support systems, and LLM integrations.

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