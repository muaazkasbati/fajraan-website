const staticRoutes = [
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}`, lastmod: new Date().toISOString(), changeFrequency: 'daily', priority: 1.0 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}about`, lastmod: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}contact`, lastmod: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}faqs`, lastmod: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}services`, lastmod: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}services/web-development`, lastmod: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}services/mobile-desktop-applications`, lastmod: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}services/design-services`, lastmod: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}services/media-animation`, lastmod: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}services/digital-marketing-content`, lastmod: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}services/data-admin-services`, lastmod: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}blog`, lastmod: new Date().toISOString(), changeFrequency: 'daily', priority: 0.8 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}blog/top-5-mistakes-businesses-make-when-going-digital-and-how-to-avoid-them`, lastmod: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}blog/web-vs-mobile-apps-which-one-does-your-business-really-need`, lastmod: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${process.env.NEXT_PUBLIC_APPFRONTURL}blog/why-every-business-needs-a-strong-online-presence-in-2025`, lastmod: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
];

const sitemapTypes = [
  'blogs',
  'blog-categories',
  'categories-blog',
  'stores',
  'subcategories',
  'cities',
  'countries',
  'areas',
  'categories',
  'categories-and-cities',
  'categories-and-countries',
  'categories-and-areas',
  'subcategories-and-cities',
  'subcategories-and-countries',
  'subcategories-and-areas',
  'blog-categories-and-categories',
];

const escapeXML = (str) => {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

// async function fetchUrls(type) {
//   try {
//     const apiUrl = process.env.NEXT_PUBLIC_APPAPIURL;
//     const baseUrl = process.env.NEXT_PUBLIC_APPFRONTURL || 'https://www.weddified.com';
//     // if (!apiUrl) {
//     //   throw new Error('NEXT_PUBLIC_APPAPIURL is not defined');
//     // }
//     const response = await fetch(`${apiUrl}/sitemap/${type}`);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch ${type} URLs: ${response.statusText}`);
//     }
//     const data = await response.json();
//     if (!data.success || !Array.isArray(data.data)) {
//       throw new Error(`Invalid response format for ${type}`);
//     }
//     return data.data
//       .filter(item => item.url && item.lastmod) // Ensure valid URL and lastmod
//       .map(({ url, lastmod }) => {
//         // Clean and normalize URL
//         let cleanedUrl = url.replace(/\/$/, '').replace(/-$/, ''); // Remove trailing slashes and dashes
//         cleanedUrl = cleanedUrl.replace(/enagement/, 'engagement').replace(/counciling/, 'counseling'); // Fix typos
//         return {
//           url: `${baseUrl}${encodeURI(cleanedUrl)}`,
//           lastmod: new Date(lastmod).toISOString(),
//           changeFrequency: 'monthly',
//           priority: 0.8,
//         };
//       });
//   } catch (error) {
//     console.error(`Error fetching ${type} URLs:`, error);
//     return [];
//   }
// }

export default async function handler(req, res) {
  const { type } = req.query;

  if (!sitemapTypes.includes(type) && type !== 'static') {
    return res.status(404).json({ error: 'Invalid sitemap type' });
  }

  // let dynamicUrls = [];
  // if (type !== 'static') {
  //   dynamicUrls = await fetchUrls(type);
  // }

  const urls = [...staticRoutes];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach(({ url, lastmod, changeFrequency, priority }) => {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXML(url)}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${changeFrequency}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
}