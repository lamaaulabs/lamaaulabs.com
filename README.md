# lamaaulabs.com

Situs statis, Astro. Satu halaman: positioning, produk, work, layanan.

## Jalanin

```bash
cd /Volumes/XStorage/Projects/lamaaulabs.com
npm install          # sekali
npx astro dev        # http://localhost:4321
```

Build produksi:

```bash
npx astro build      # -> dist/
npx astro preview    # cek hasil build di :4322
```

## Route

| Route | Palet | Font |
|---|---|---|
| `/` | `#f4f1ea` / `#c4421a` | Instrument Serif + Inter + JetBrains Mono |

## Struktur

```
src/data/site.ts       <- SATU sumber isi: positioning, produk, work, services
src/pages/index.astro  satu-satunya halaman, CSS di <style is:global>
public/                favicon.svg, og.svg + og.png, robots.txt
```

`site` di `astro.config.mjs` dipakai buat canonical + `og:url`. Ganti kalau domain pindah.

`public/og.png` (1200×630) itu hasil render dari `public/og.svg` — platform OG nggak
baca SVG, jadi PNG-nya yang dipakai. Kalau og.svg diedit, render ulang:

```bash
python3 - <<'PY'
svg = open('public/og.svg', encoding='utf-8').read()
open('/tmp/og.html', 'w', encoding='utf-8').write(
  '<!doctype html><meta charset="utf-8">'
  '<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1'
  '&family=JetBrains+Mono:wght@400&display=block" rel="stylesheet">'
  '<style>html,body{margin:0;background:#f4f1ea}</style>' + svg)
PY
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars --window-size=1200,630 \
  --virtual-time-budget=4000 --screenshot=public/og.png file:///tmp/og.html
```

Semua copy, produk, dan daftar work diambil dari `src/data/site.ts`.

## Yang HARUS diganti sebelum dipakai

- **`work[]`** — klien masih generik ("Instansi pemerintah", "Sekolah dan dinas").
  Ganti dengan klien asli kalau sudah boleh dipublikasi.
- **`email`** — `lamaaulabs@gmail.com`; ganti ke mailbox domain kalau sudah ada.
- **`site.about`** — copy positioning, tulis ulang pakai bahasa lo.

## Catatan teknis

- Font dari Google Fonts (2 family). Kalau mau nol request eksternal,
  self-host di `public/fonts/` + `@font-face`.
- Nol JavaScript. Semua hover pakai CSS transition.
- Overflow horizontal: 0px di 1440, 1100, 900, 700, dan 500 — sudah diverifikasi.
- Screenshot di `shots/` masih dari varian lama (`/a`, `/b`, `/c`) — sudah basi.
