# REFERENCES — lamaaulabs.com (agency / studio + product lab)

Pass 2. Arah: **agency/studio site**, bukan umbrella SaaS. Tetap perlu slot buat
produk sendiri yang tinggal di subdomain.

Riset: 15 Nov 2026. Semua URL diverifikasi `curl` hari ini (status + `<title>`
asli). Palet & font diambil dari HTML/stylesheet yang beneran di-fetch. Kalau
CSS-nya token-based dan hex nggak ketemu, itu ditandai — bukan ditebak.

(Pass 1 yang arahnya "umbrella SaaS" ada di `REFERENCES-startup-saas.md`.)

## Artifact class

Bukan personal portfolio, bukan SaaS landing satu produk. Yang dicari:
**studio/agency yang jual jasa tapi juga punya produk sendiri** — halaman induk
berisi positioning + work index + produk.

Struktur target:

```
lamaaulabs.com            positioning, layanan, work, produk
  <produk>.lamaaulabs.com   produk sendiri, rumah sendiri
```

## Shortlist — same artifact class (6)

### 1. thebranx.com — niche paling persis
Title asli: *"The branding agency for startups, AI & SaaS - The Branx"*
- bg `#fff` / `#000`
- accent `#326cff` (biru elektrik)
- netral `#050608`, `#524738`, `#5a81b1`
- Font token: `--bx-display` / `--bx-sans`
- **Ambil:** positioning satu baris yang langsung nyebut audiens (startup/AI/SaaS).
  Halaman induk = positioning + proof, bukan daftar fitur.
- **Jangan:** palet biru korporat kalau lamaaulabs mau lebih "lab" dari "agency".

### 2. houseofgiants.com — positioning "product engineering partner"
Title: *"House of Giants | Product engineering partner"*
- bg: `var(--background)` + `var(--moss)` — token, hex nggak ke-extract
- Font: `--font-hog-mono` + `--font-hog-body` → **mono dipakai sebagai font brand**
- **Ambil:** istilah "product engineering partner" — posisi yang pas buat lab yang
  nerima client work. Mono buat label/eyebrow.
- **Jangan:** layout case study panjang mereka.

### 3. microdose.studio — "agency for startups", paling gampang dieksekusi
Title: *"Microdose Studio - Design & Development Agency for Startups"*
- bg `#fff`
- netral `#0d0d0d`, `#5c5c5c`, `#e9e9e9`
- aksen `#2d4869` (navy)
- Font: `--font-primary` (variable)
- **Ambil:** grid work + label kategori kecil. Netral gelap-terang, aksen cuma di link.
- **Jangan:** copywriting agency generik ("we craft digital experiences"). Mati.

### 4. studiofreight.com — craft tipografi terbaik di list
Title: *"Studio Freight"*
- bg `var(--white)` / `var(--black)`
- netral `#fefdfc`, `#dadada`, `#1a1a1a`, `#f9f9f9`
- Font: **publico-text-mono-roman** (mono) + **jjannon-regular** (serif)
- **Ambil:** pasangan serif + mono. Serif buat headline, mono buat metadata.
- **Jangan:** transisi halaman mereka, terlalu custom buat start.

### 5. lusion.co — aksen paling berani
Title: *"Lusion - Award Winning 3D and Interactive Web Studio"*
- bg `var(--color-white)`
- accent `#0016ec` (biru listrik), near-black hangat `#1a1411`, krem `#ffedd7`
- Font: **Aeonik** + **IBM Plex Mono**
- **Ambil:** satu aksen listrik dipakai super jarang — cuma CTA dan hover.
- **Jangan:** WebGL 3D. Berat, dan bukan itu yang dijual lamaaulabs.

### 6. basement.studio — aksen "signal" paling gampang diinget
Title: *"basement.studio | We make cool shit that performs."*
- bg hitam (`rgb(0 0 0 / …)`)
- accent `#ff4d00` (oranye sinyal)
- netral `#1a1a1a`, `#212121`, `#757575`, `#e6e6e6`
- Font: **Geist** + **Geist Mono**
- **Ambil:** satu warna sinyal + mono buat semua label teknis. Dark tapi nggak norak.
- **Jangan:** nada "we make cool shit" — terlalu bromocorah buat brand lab.

## Palette cadangan kalau mau arah lain

- **twohalves.co** — bg `--ink`, krem `#fff5ee`, **Cutive Mono**. Hangat, cetak.
- **preymaker.com** — `#253f42` slate + `#b0c3c5` + `#878679` + `#708096`,
  **NewGrotesk**. Paling "film studio", muted semua.
- **ouiwill.com** — `#060606`, `#6b6c68`, `#d9d9d9`, `#878787`. Monokrom total.
- **glinto.co.kr** — `#edf2f9`, `#fff3ee`, `#ffe4d9`, `#ffc7b0`,
  **Pretendard** + DM Sans. Pastel peach, paling lembut.
- **studioplato.co** — `#3898ec`, `#fafafa`, **Open Sauce Sans**. Minimal bersih.

## Formula yang gw rekomendasiin

1. **Hero = satu kalimat positioning**, bukan slogan.
2. **Dua kolom di bawah hero:** `WORK` (client) dan `PRODUCTS` (punya sendiri).
   Produk link ke `<nama>.lamaaulabs.com`. Ini yang bikin site lo beda dari agency lain.
3. **Font:** satu grotesk/serif buat headline + satu mono buat label.
   Mono wajib — penanda "engineering", bukan "design agency".
4. **Satu aksen**, dipakai maksimal 3 tempat di seluruh halaman.
5. **Nol** testimonial carousel, nol "trusted by", nol pricing.

## Sumber data

- `curl -sSL` + parse `<title>` dan `<link rel=stylesheet>`
- `bg` dari selector `body|html|:root`
- `hex` frekuensi tertinggi (putih/hitam dibuang)
- `font-family` deklarasi terbanyak
- Kandidat dari `awwwards.com/websites/design-agencies/` (31 slug → live URL → tags,
  diekstrak 15 Nov 2026), lalu difilter: buang personal portfolio
  (lucaslima.design, tomdekoning.work, romainavalle.dev, codeofsagar.in, dll).
