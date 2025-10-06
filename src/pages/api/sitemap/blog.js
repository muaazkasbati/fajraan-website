// pages/api/sitemap/blog.js

export default async function handler(req, res) {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_APPFRONTURL || 'https://www.fajraan.com';
    const WP_API = 'https://blogs.cre8ivesparkx.com/wp-json/wp/v2/posts?per_page=100';

    // Fetch latest posts
    const response = await fetch(WP_API);
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts from WordPress');
    }

    const posts = await response.json();

    // Build XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    posts.forEach((post) => {
      const slug = post.slug;
      const lastmod = post.modified || new Date().toISOString();

      xml += `  <url>\n`;
      xml += `    <loc>${siteUrl}blog/${slug}</loc>\n`;
      xml += `    <lastmod>${new Date(lastmod).toISOString()}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    // Send XML response
    res.setHeader('Content-Type', 'application/xml');
    res.write(xml);
    res.end();
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    res.status(500).json({ error: 'Failed to generate blog sitemap' });
  }
}
