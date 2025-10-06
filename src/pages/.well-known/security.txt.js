export async function getServerSideProps({ res }) {
  const content = `
Contact: mailto:info@fajraan.com
Expires: 2026-12-31T23:59:00.000Z
Preferred-Languages: en
Policy: https://www.fajraan.com/privacy-policy
`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(content.trim());
  res.end();

  return { props: {} };
}

export default function SecurityTxt() {
  return null;
}
