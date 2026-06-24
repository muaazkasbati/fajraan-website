export const slides = [
  {
    img: "assets/img/new/image-Full-Stack-Web-Development.webp",
    title: "Full-Stack Web Development",
    description:
      "Building scalable web applications using the MERN stack with clean code architecture and dynamic functionality.",
  },
  {
    img: "assets/img/new/image-UI-UX-Design.webp",
    title: "UI/UX Design to Code",
    description:
      "Converting Figma designs into pixel-perfect, responsive React interfaces with modern UI/UX practices.",
  },
  {
    img: "assets/img/new/image-Multilingual-Platforms.webp",
    title: "Multilingual Platforms",
    description:
      "Developing systems with dynamic content translation and localization for global reach and user accessibility.",
  },
  {
    img: "assets/img/new/image-custom-dashboard.webp",
    title: "Custom Dashboards & Admin Panels",
    description:
      "Creating robust admin panels, user dashboards, and CMS tools tailored for startups, vendors, and content creators.",
  },
  {
    img: "assets/img/new/image-cloud-integration.webp",
    title: "Cloud Integration & APIs",
    description:
      "Integrating with Cloudinary, Firebase, Stripe, and third-party APIs to supercharge your apps and workflows.",
  },
  {
    img: "assets/img/new/image-ecommerce.webp",
    title: "E-commerce & Booking Systems",
    description:
      "Building custom multi-vendor shops, booking systems, and payment-enabled platforms optimized for conversions.",
  },
];


export const accordionData = [
  {
    title: "01/ Discovery & Strategy",
    content:
      "Every project begins with understanding your vision. We analyze your business goals, target audience, and industry landscape to define a clear digital strategy tailored to your needs.",
  },
  {
    title: "02/ Design & Architecture",
    content:
      "Our team crafts wireframes, prototypes, or adapts your Figma designs into intuitive, responsive interfaces. At the same time, we architect a scalable and secure backend foundation.",
  },
  {
    title: "03/ Development & Integration",
    content:
      "Leveraging the MERN stack and modern cloud technologies, we build robust, modular applications. From APIs to dashboards and third-party integrations — everything works seamlessly together.",
  },
  {
    title: "04/ Quality Assurance & Feedback",
    content:
      "We perform thorough testing across devices, browsers, and use cases. Security, performance, and design consistency are refined based on iterative feedback to ensure excellence.",
  },
  {
    title: "05/ Launch & Growth Support",
    content:
      "Once approved, we launch with optimized CI/CD workflows for smooth deployment. You receive full access, onboarding support, and scalable growth options to keep your business moving forward.",
  },
];

export const toWebP = (url = "") => {
  if (!url || typeof url !== "string") return url;

  return url.replace(/\.(jpg|jpeg|png)$/i, ".webp");
};
