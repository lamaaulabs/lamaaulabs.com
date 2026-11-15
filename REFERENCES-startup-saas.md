# REFERENCES — lamaaulabs.com (umbrella / product-studio site)

Riset: 15 Nov 2026. Semua URL diverifikasi `curl` hari ini (status + `<title>` asli),
palet & font diambil dari CSS/stylesheet yang beneran di-fetch, bukan dari ingatan.

## Artifact class yang dicari

Bukan personal portfolio, bukan landing page satu produk. Yang dicari:
**company/lab site yang jadi rumah buat beberapa produk, tiap produk punya
subdomain atau domain sendiri.** Itu kelas yang paling dekat sama lamaaulabs.com.

Struktur target:

```
lamaaulabs.com          -> siapa kami, produk apa aja, kenapa ada
  <produk>.lamaaulabs.com  -> tiap produk punya rumah sendiri
```

## Shortlist — same artifact class (6)

### 1. 37signals.com — arketipe paling murni
- Produk terverifikasi keluar sebagai domain terpisah: `basecamp.com`, `hey.com`,
  `once.com`, `fizzy.do`
- Subdomain pendukung: `supply.`, `dev.`, `updates.`, `1999.`
- **Ambil:** produk diperlakukan sebagai warga kelas satu — nama produk, satu
  kalimat, link keluar. Nggak ada hero SaaS, nggak ada pricing table di halaman
  induk. Nggak ada "trusted by".
- **Jangan ambil:** nada editorial mereka (essay panjang, anti-cloud). Terlalu
  berkarakter buat brand baru.
- Catatan: CSS mereka token-based, palette nggak ke-extract. Jangan mengarang hex.

### 2. mystenlabs.com — pola subdomain paling mirip target
- `sui.io`, `walrus.xyz`, `deepbook.tech` (domain sendiri) + `seal.mystenlabs.com`,
  `enoki.mystenlabs.com` (subdomain)
- Background: `rgb(0,0,0)` hitam pekat
- Accent: `#F50032` (merah), off-white `#F6F4F4`
- Font: Inter (via Framer)
- **Ambil:** pemisahan tegas "lab" vs "product". Produk yang masih kecil ditaruh
  di subdomain, yang sudah matang dipindah ke domain sendiri. Ini persis jalur
  yang lo butuh.
- **Jangan ambil:** grid produknya berat gambar/3D, cepat berat. Situs mereka
  render lewat Framer jadi banyak payload.

### 3. notboring.software — skala paling dekat (indie, beberapa app)
- `notboring.shop`, `notbor.ing`, `support.notbor.ing`
- Background: `#fff`, variable `--andyyellow`
- Accent: `#3898ec` (biru), netral `#fafafa`, `#e6e6e6`, `#ffdede`
- Font: Founders Grotesk + JetBrains Mono
- **Ambil:** satu orang/small team, produk ditampilin sebagai kartu app dengan
  ikon + satu baris deskripsi. Nggak ada copy "enterprise-grade".
- **Jangan ambil:** warnanya playful/kekanak-kanakan (`--andyyellow`). Kalau
  lamaaulabs mau keliatan teknikal, ini terlalu ceria.

### 4. thebrowser.company — identitas tipografis paling kuat
- `arc.net`, `diabrowser.com`
- Background: `#f8f8f8`, `#EEEEE7` (paper hangat)
- Accent: `#FFB005` (amber), `#340B05` (coklat gelap)
- Font: **EB Garamond** (serif) + Inter
- **Ambil:** cuma 2 produk tapi halaman induknya berani pakai serif besar dan
  layout yang nggak kayak SaaS. Ini bukti lo nggak perlu nuduh "startup" buat
  keliatan kredibel.
- **Jangan ambil:** animasi scroll panjang. Buat 5+ produk, itu jadi lambat.

### 5. mistral.ai — lab yang jual model + produk
- Subdomain produk: `chat.`, `console.`, `docs.`, `trust.`, `legal.`
- Accent ramp: `#FA500F` -> `#FF8204` -> `#E51300` -> `#C4001D`
- Netral: `#DCDCE8`
- Font: ALTMistral (custom) + KaTeX untuk math
- **Ambil:** satu warna brand kuat dipakai konsisten di semua turunan. Produk
  dibedakan lewat nama, bukan lewat palet berbeda-beda.
- **Jangan ambil:** custom typeface. Bikin loading berat & butuh lisensi.

### 6. kagi.com — suite tools di bawah satu brand
- `translate.kagi.com`, `news.kagi.com`, `help.`, `blog.`, `store.`, plus
  `orionbrowser.com` (produk yang dipisah total)
- Background: `#18181A` (dark) / `#fafafb` (light)
- Accent: `#ffb319` (amber), sekunder `#6c5edc` (ungu), `#6a9fa9`
- Font: system stack (`--font-family-system`) + `--font-family-brand`
- **Ambil:** pola "produk kecil = path/subdomain, produk besar = brand sendiri"
  (Orion). Dan mereka berani pakai system font — nol biaya, cepat.
- **Jangan ambil:** dashboard-nya padat info; halaman induk jangan ditiru
  kepadatannya.

## Craft references — bukan kelas yang sama, tapi eksekusinya bagus

### linear.app — kanon "SaaS dark" 2026
- `#E2E4E7` netral dominan, aksen `#F79CE0` (pink), `#55CDFF` (cyan)
- Font: monospace variable di UI

### resend.com — tipografi paling rapi di kategori developer tool
- Netral hangat: `#c7c2bc`, `#464A4D`, `#EBECED`
- Font: **Domaine** (serif display) + ABC Favorit

### vercel.com — grid produk + dokumentasi
- Netral: `#252525`, `#fafafa`, `#eaeaea`
- Font: Geist Sans / Geist Mono

## Pola yang gw rekomendasiin buat lamaaulabs.com

1. **Halaman induk = 1 layar + daftar produk.** Nggak ada pricing, nggak ada
   testimonial, nggak ada "trusted by".
2. **Tiap produk satu baris besar:** nama, satu kalimat apa fungsinya, link ke
   `xxx.lamaaulabs.com`. Hover = satu detail kecil (status, tahun, stack).
3. **Produk kecil di subdomain, produk yang sudah jalan sendiri dipindah ke
   domain sendiri** (pola Mysten/Kagi).
4. **Satu warna aksen brand**, dipakai di semua turunan. Produk dibedakan lewat
   nama, bukan palet.
5. **Font:** satu grotesk + satu mono. Mono buat label/metadata — itu yang bikin
   nuansa "lab" bukan "agency".

## Sumber data

Semua angka di atas dari `curl` + regex ke HTML/stylesheet hari ini:
- `bg` diambil dari selector `body|html|:root`
- `hex` = frekuensi tertinggi di CSS (framework default dibuang manual)
- `font-family` = deklarasi terbanyak
- Link produk = domain eksternal yang muncul di `href` halaman induk

Kalau CSS nggak ke-extract (37signals, mystenlabs sebagian), itu ditandai —
bukan diisi tebakan.
