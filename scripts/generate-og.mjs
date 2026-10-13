import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateOgImages() {
  const width = 1200;
  const height = 630;

  const logoPath = path.join(__dirname, '..', 'public', 'Women in WACREN logo.png');
  const logoBuffer = fs.readFileSync(logoPath);

  // Resize logo for card
  const logoResized = await sharp(logoBuffer)
    .resize({ width: 340, height: 180, fit: 'inside' })
    .toBuffer();

  const logoMeta = await sharp(logoResized).metadata();

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#081226" />
        <stop offset="50%" stop-color="#0f224a" />
        <stop offset="100%" stop-color="#081830" />
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#38bdf8" />
        <stop offset="50%" stop-color="#818cf8" />
        <stop offset="100%" stop-color="#c084fc" />
      </linearGradient>
      <linearGradient id="badge" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0284c7" />
        <stop offset="100%" stop-color="#2563eb" />
      </linearGradient>
      <radialGradient id="glow1" cx="15%" cy="20%" r="45%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="glow2" cx="85%" cy="80%" r="50%">
        <stop offset="0%" stop-color="#6366f1" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
      </radialGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" stroke-width="1" stroke-opacity="0.07" />
      </pattern>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <rect width="${width}" height="${height}" fill="url(#glow1)" />
    <rect width="${width}" height="${height}" fill="url(#glow2)" />
    <rect width="${width}" height="${height}" fill="url(#grid)" />

    <!-- Top decorative border strip -->
    <rect x="0" y="0" width="${width}" height="6" fill="url(#accent)" />

    <!-- Card for Logo -->
    <rect x="80" y="75" width="380" height="200" rx="20" fill="#ffffff" fill-opacity="0.98" stroke="#ffffff" stroke-opacity="0.3" stroke-width="2" />

    <!-- Badge -->
    <rect x="490" y="90" width="220" height="36" rx="18" fill="url(#badge)" />
    <text x="600" y="113" font-family="'Segoe UI', -apple-system, Roboto, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">WACREN INITIATIVE</text>

    <!-- Main Headings -->
    <text x="490" y="175" font-family="'Segoe UI', -apple-system, Roboto, sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-0.5">
      Women-In-WACREN
    </text>

    <text x="490" y="222" font-family="'Segoe UI', -apple-system, Roboto, sans-serif" font-size="23" font-weight="600" fill="url(#accent)">
      Empowering Women in STEM Across Africa
    </text>

    <!-- Subtitle / Mission -->
    <text x="80" y="335" font-family="'Segoe UI', -apple-system, Roboto, sans-serif" font-size="21" font-weight="400" fill="#cbd5e1">
      Connecting, training, and funding women in Science, Technology, Engineering,
    </text>
    <text x="80" y="368" font-family="'Segoe UI', -apple-system, Roboto, sans-serif" font-size="21" font-weight="400" fill="#cbd5e1">
      and Mathematics across West and Central Africa to build tomorrow's digital leaders.
    </text>

    <!-- 3 Pillars Cards -->
    <g transform="translate(80, 420)">
      <!-- Pillar 1 -->
      <rect x="0" y="0" width="325" height="90" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#38bdf8" stroke-opacity="0.25" stroke-width="1" />
      <text x="35" y="42" font-family="'Segoe UI', sans-serif" font-size="18" font-weight="700" fill="#ffffff">2,000+ Trained</text>
      <text x="35" y="66" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="400" fill="#94a3b8">Workshops, Labs &amp; Courses</text>

      <!-- Pillar 2 -->
      <rect x="355" y="0" width="325" height="90" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#818cf8" stroke-opacity="0.25" stroke-width="1" />
      <text x="390" y="42" font-family="'Segoe UI', sans-serif" font-size="18" font-weight="700" fill="#ffffff">Regional Mentorship</text>
      <text x="390" y="66" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="400" fill="#94a3b8">NRENs &amp; Global Leaders</text>

      <!-- Pillar 3 -->
      <rect x="710" y="0" width="330" height="90" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#c084fc" stroke-opacity="0.25" stroke-width="1" />
      <text x="745" y="42" font-family="'Segoe UI', sans-serif" font-size="18" font-weight="700" fill="#ffffff">STEM Innovation</text>
      <text x="745" y="66" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="400" fill="#94a3b8">Hackerspaces &amp; Projects</text>
    </g>

    <!-- Bottom Footer Bar -->
    <line x1="80" y1="550" x2="1120" y2="550" stroke="#334155" stroke-width="1" stroke-opacity="0.5" />
    <text x="80" y="585" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="500" fill="#64748b">
      Supported by AfricaConnect &amp; European Union · West and Central African Research and Education Network
    </text>
    <text x="1120" y="585" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="700" fill="#38bdf8" text-anchor="end">
      womeninwacren.wacren.net
    </text>
  </svg>
  `;

  const logoLeft = Math.round(80 + (380 - (logoMeta.width || 340)) / 2);
  const logoTop = Math.round(75 + (200 - (logoMeta.height || 180)) / 2);

  const outPngPath = path.join(__dirname, '..', 'public', 'og-image.png');
  const outJpgPath = path.join(__dirname, '..', 'public', 'og-image.jpg');

  await sharp(Buffer.from(svg))
    .composite([
      {
        input: logoResized,
        top: logoTop,
        left: logoLeft,
      }
    ])
    .png()
    .toFile(outPngPath);

  await sharp(outPngPath)
    .jpeg({ quality: 92 })
    .toFile(outJpgPath);

  console.log('Successfully created:', outPngPath, outJpgPath);
}

generateOgImages().catch(err => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
