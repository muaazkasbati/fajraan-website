// src/pages/sitemap.xml.js

// const dynamicSitemaps = [
//   { name: 'Blogs Sitemap', url: '/api/sitemap/blogs' },
//   { name: 'Blog Categories Sitemap', url: '/api/sitemap/blog-categories' },
//   { name: 'Categories Blog Sitemap', url: '/api/sitemap/categories-blog' },
//   { name: 'Stores Sitemap', url: '/api/sitemap/stores' },
//   { name: 'Subcategories Sitemap', url: '/api/sitemap/subcategories' },
//   { name: 'Cities Sitemap', url: '/api/sitemap/cities' },
//   { name: 'Countries Sitemap', url: '/api/sitemap/countries' },
//   { name: 'Areas Sitemap', url: '/api/sitemap/areas' },
//   { name: 'Categories Sitemap', url: '/api/sitemap/categories' },
//   { name: 'Categories and Cities Sitemap', url: '/api/sitemap/categories-and-cities' },
//   { name: 'Categories and Countries Sitemap', url: '/api/sitemap/categories-and-countries' },
//   { name: 'Categories and Areas Sitemap', url: '/api/sitemap/categories-and-areas' },
//   { name: 'Subcategories and Cities Sitemap', url: '/api/sitemap/subcategories-and-cities' },
//   { name: 'Subcategories and Countries Sitemap', url: '/api/sitemap/subcategories-and-countries' },
//   { name: 'Subcategories and Areas Sitemap', url: '/api/sitemap/subcategories-and-areas' },
//   { name: 'Blog Categories and Categories Sitemap', url: '/api/sitemap/blog-categories-and-categories' },
// ];

export async function getServerSideProps({ res }) {
  const hostname = process.env.NEXT_PUBLIC_APPFRONTURL || 'https://www.weddified.com';
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Static sitemap
  xml += '  <sitemap>\n';
  xml += `    <loc>${hostname}api/sitemap/static</loc>\n`;
  xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
  xml += '  </sitemap>\n';

  // Dynamic sitemaps
  // dynamicSitemaps.forEach(({ url }) => {
  //   xml += '  <sitemap>\n';
  //   xml += `    <loc>${hostname}${url}</loc>\n`;
  //   xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
  //   xml += '  </sitemap>\n';
  // });

  xml += '</sitemapindex>';

  res.setHeader('Content-Type', 'application/xml');
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}

export default function SitemapIndex() {
  return null;
}
