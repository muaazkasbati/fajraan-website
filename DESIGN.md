# Fajraan Tech — Design Guide

The visual and verbal rules behind fajraan.tech. Use this for social posts, decks, ads and anything else that should look like it came from the same team as the website.

The short version: **navy, white and one sharp accent of cyan. Big confident headlines. Thin lines, square bullets, numbered labels. Real facts, plain words.**

---

## 1. Colour

| Name | Hex | Use |
|---|---|---|
| Navy (primary) | `#092A54` | Headlines, dark backgrounds, primary buttons |
| Navy hover | `#0D3A72` | Hover/pressed states only |
| Cyan (accent) | `#19BEC9` | One highlight per design: a word, a number, a bullet, a button |
| Ink | `#0B1220` | Body text on light backgrounds |
| Muted | `#5B6474` | Secondary text, captions, labels |
| Line | `#E3E5E8` | Dividers and borders on light backgrounds |
| Paper | `#F5F5F2` | Alternate light background (warm off-white) |
| White | `#FFFFFF` | Main light background, text on navy |

**Proportions per post:** roughly 60% background (white, paper or navy), 30% navy/ink text, 10% cyan.

**Rules**
- Cyan is an accent, never a background for a whole post. Use it on **one** thing: the key word in a headline, the big number, the CTA.
- On navy, secondary text is white at 60–70% opacity, dividers are white at 10–15%.
- Never use gradients, glows, drop shadows, neon or glassmorphism.
- Cyan text on white is for **large** type only (headlines, big numbers). For small text on white, use navy.

## 2. Typography

**Typeface:** [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) (free on Google Fonts). One family for everything.

| Style | Weight | Size (1080px post) | Tracking | Line height |
|---|---|---|---|---|
| Display headline | SemiBold 600 | 96–120px | −3.5% | 0.98 |
| Headline | SemiBold 600 | 64–80px | −3% | 1.02 |
| Sub-headline | SemiBold 600 | 36–44px | −1.5% | 1.2 |
| Body | Regular 400 | 28–32px | −1% | 1.45 |
| Eyebrow label | SemiBold 600, UPPERCASE | 20–22px | +8% | 1 |
| Big number | SemiBold 600, tabular figures | 160–220px | −3% | 1 |

**Rules**
- Headlines are short (max ~8 words) and sentence case, with a full stop: *"From idea to a live product in 10 days."*
- Highlight **one** phrase in cyan inside the headline, usually the end: *"Building smart ideas with a spark of **creativity.**"*
- Left-align everything. No centred paragraphs.
- No italics, no all-caps headlines, no outlined or 3D text.

## 3. Graphic elements

These four details make a post look like Fajraan rather than a template:

1. **Eyebrow with cyan square.** A small 12×12px cyan square, then an uppercase label in muted grey:
   `■ THE 10-DAY SPRINT`
2. **Numbered labels.** Sections and carousel slides are numbered with a slash:
   `02 / WHAT WE DO` — use `01`, `02`, `03`, never `1`, `2`, `3`.
3. **Hairlines.** 1–2px lines in Line grey (or white at 15% on navy) to separate the headline from details, and between list items.
4. **Square bullets.** Lists use small cyan squares (8×8px), never round dots, checkmark emojis or icons.

**Corners:** images and cards have **square corners**. Only buttons and tags are pill-shaped (fully rounded).

**Arrow:** the north-east arrow `↗` follows calls to action: *Start a sprint ↗*.

**Avoid:** stock icons, emojis in the design itself, 3D illustrations, AI-generated "robot" or "brain" imagery, abstract blobs, circuit-board patterns.

## 4. Imagery

- Prefer **real screenshots** of products we've built (dashboards, apps, booking flows) over stock photos. Show them full-bleed or inside a plain frame, no device mock-up clutter.
- Photos of real people from the team or clients beat stock every time.
- If a photo is used, keep it natural and slightly desaturated so navy and cyan stay dominant.
- Never put text directly over a busy photo. Use a solid navy or white panel.

## 5. Logo

Files are in `public/images/`:

- `logo-web.svg` — full-colour logo, for white or paper backgrounds.
- `fajraan-logo-web.svg` — use in solid white on navy backgrounds.
- `logo.webp` — raster fallback.

**Placement:** bottom-left or top-left, with clear space at least the height of the logo mark around it. Width roughly 140–180px on a 1080px post. Don't recolour it cyan, stretch it, add effects or place it on photos.

## 6. Layout & formats

Use a margin of **80px** on every side for 1080px-wide formats (inner content area: 920px). Align everything to the left margin.

| Format | Size | Use |
|---|---|---|
| Square post | 1080 × 1080 | Instagram, LinkedIn, Facebook |
| Portrait post | 1080 × 1350 | Instagram feed (preferred, more space) |
| Story / Reel cover | 1080 × 1920 | Keep text within the middle 1080 × 1420 |
| LinkedIn / X landscape | 1200 × 627 | Link posts, announcements |
| Carousel slide | 1080 × 1350 | Number every slide `01 / 06` top-left |

**Standard structure (top to bottom):**
1. Eyebrow label (top-left)
2. Headline (largest element, upper half)
3. Hairline
4. One line of supporting text or 3 square-bullet points
5. CTA + logo (bottom)

Leave at least a third of the canvas empty. Whitespace is part of the look.

## 7. Voice

**Sound like:** a senior engineer explaining things to a business owner. Direct, specific, calm.

**Do**
- Lead with the outcome: *"A working product on your domain, with code you own."*
- Use real numbers and specifics: *10 days*, *11+ projects*, *Stripe payments*, *COD settlement*.
- Short sentences. One idea per post.
- Say what's included, and what isn't.

**Don't**
- Hype words: *revolutionary, cutting-edge, unleash, supercharge, game-changing, next-level, seamless synergy*.
- Vague claims: *"We build amazing digital experiences."*
- Emoji chains, hashtag walls (max 3–5 relevant hashtags, at the end of the caption only).
- Numbers we can't back up. Only use stats that appear on the website.

**Approved facts (from the site):**
- First live product in as little as 10 days (scoped MVP sprint)
- Standard platform setup in about 10 days
- 4+ years of experience · 11+ projects delivered · 4+ team members · 95% happy clients & repeat rate
- Platforms: ERP, School Management, Courier & Delivery, CRM, HR & Payroll, Inventory & POS, Clinic & Appointments, Property Management, LMS, Chauffeur & Fleet
- Chauffeur & fleet software running in production (Empire Chauffeurs Australia case study)

## 8. Post templates

### A. Offer — 10-day sprint (navy background)
- Eyebrow: `■ THE 10-DAY SPRINT` (white 60%)
- Headline: *From idea to a live product in* **10 days.** (white, "10 days." in cyan)
- Hairline, then 4 columns or rows: `DAYS 1–2 Scope & design` · `DAYS 3–7 Build` · `DAYS 8–9 Test & polish` · `DAY 10 Launch` (labels in cyan, text in white)
- CTA pill in cyan with navy text: *Start a sprint ↗*
- Caption: *Not a mock-up. A working product on your domain, with code you own. Scope is fixed on day one; everything else goes on the v2 list. Link in bio.*

### B. Platform spotlight (white or paper background)
- Eyebrow: `■ READY-TO-LAUNCH PLATFORMS`
- Headline: *School management, set up in* **about 10 days.**
- 3 square bullets from the platform page, e.g. *Online fee payments* · *Attendance alerts to parents* · *Parent mobile app*
- Bottom: product screenshot cropped square, logo, *fajraan.tech/solutions*

### C. Big number (paper background)
- Eyebrow: `■ FAJRAAN TECH IN NUMBERS`
- Number in navy, 200px: **11+**
- Label under a hairline: *Projects delivered for clients worldwide.*

### D. Client quote (white background)
- Large cyan opening quote mark `“`
- Quote in navy, 40–48px, max ~30 words (trim with "…" if needed, never reword)
- Hairline, then client photo (circle, 96px) + name (SemiBold) + role (muted)

### E. Carousel — "How we build X" (1080 × 1350)
- Slide 01: headline only
- Slides 02–05: one step each, big number `02` in cyan, title, 2 lines of text
- Last slide: CTA + logo on navy

## 9. Pre-publish checklist

- [ ] Only navy, white/paper and **one** cyan highlight
- [ ] Instrument Sans only, headline in sentence case with a full stop
- [ ] Eyebrow label with cyan square, numbers written as `01`, `02`
- [ ] Square corners on images, square bullets in lists
- [ ] 80px margins, left-aligned, at least a third empty space
- [ ] Every number appears on the website
- [ ] No hype words, no stock-AI imagery, no gradients
- [ ] Logo present, unaltered
