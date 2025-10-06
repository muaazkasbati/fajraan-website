// src/pages/ai.txt.js

export async function getServerSideProps({ res }) {
  const hostname = process.env.NEXT_PUBLIC_APPFRONTURL || 'https://www.fajraan.com';

  const content = `
# AI Crawler Access Policy
# Learn more: https://ai.txt

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Gemini
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: *
Disallow: /admin
Disallow: /api
Disallow: /dashboard

Sitemap: ${hostname}sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(content.trim());
  res.end();

  return { props: {} };
}

export default function AiTxt() {
  return null;
}
