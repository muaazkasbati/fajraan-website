
export const toWebP = (url = "") => {
  if (!url || typeof url !== "string") return url;

  return url.replace(/\.(jpg|jpeg|png)$/i, ".webp");
};

export const faqData = [
  {
    question: "What happens after I approve the design or proposal?",
    answer: "Once you approve the design or proposal, our development team begins implementation, setting up the project structure, creating components, and integrating functionality. You’ll receive regular progress updates until launch.",
  },
  {
    question: "Can you work with my existing website, app, or design files?",
    answer: "Yes. Whether you already have wireframes, Figma designs, or a live website, we can improve, rebuild, or scale it. We often take over incomplete projects or outdated systems and modernize them using modern tech stacks.",
  },
  {
    question: "Do you charge for revisions or updates?",
    answer: "Minor revisions during the development phase are included. Major scope changes or additional features requested after approval may involve extra cost, but we always confirm before proceeding.",
  },
  {
    question: "Can agencies or startups outsource their work to Fajraan Tech?",
    answer: "Absolutely. We regularly partner with agencies, startups, and businesses needing a reliable tech team for white-label or outsourced projects. We maintain full confidentiality and deliver under your brand if required.",
  },
  {
    question: "What do I need to provide before the project starts?",
    answer: "We’ll need your brand assets (logo, colors, content), goals, and feature requirements. For larger projects, we conduct a short discovery call to clarify the scope, timeline, and deliverables before signing off.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary by scope. Basic websites take 3–4 weeks, custom apps or platforms may take 2–4 months, and AI automation or chatbot projects typically take 2–6 weeks depending on complexity. We provide a detailed timeline and milestones before starting development.",
  },
  {
    question: "Do you handle ongoing maintenance and updates?",
    answer: "Yes. We offer monthly maintenance and support retainers covering updates, security, performance, and AI/chatbot fine-tuning, ensuring your website, app, or automation stays optimized and up to date.",
  },
  {
    question: "What technologies does Fajraan Tech specialize in?",
    answer: "We utilize modern full-stack web and mobile frameworks, cloud infrastructure, and scalable databases tailored for high performance. For AI automation and chatbots, we work with advanced AI models and integration tools to build custom, production-ready solutions.",
  },
  {
    question: "Do you build AI chatbots or automation for existing businesses, or only new projects?",
    answer: "Both. We can build a chatbot or automation workflow from scratch, or integrate AI into your existing website, app, or internal tools, connecting it to the systems and data you already use.",
  },
  {
    question: "Do you have experience with chauffeur or fleet management software?",
    answer: "Yes, it's actually one of our specialties. We've built dedicated chauffeur and fleet management software for real clients, and we have a case study available covering that work. Reach out if you're building something in this space.",
  },
];