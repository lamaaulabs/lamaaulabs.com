export const site = {
  name: 'lamaaulabs',
  description:
    'Lab produk independen di Indonesia. Kami merilis software sendiri dan menerima proyek engineering: web, API, database, deploy.',
  about:
    'Lamaau Labs adalah lab produk independen. Kita merilis software sendiri, dan menerima proyek engineering tiap tahun. Berbasis di Indonesia, kerja dari mana saja.',
  email: 'lamaaulabs@gmail.com',
  location: 'Indonesia',
  year: new Date().getFullYear(),
};

export type Product = {
  name: string;
  url: string;
  line: string;
  status: 'shipped' | 'beta' | 'wip';
};

export const products: Product[] = [
  {
    name: 'Pedoman',
    url: 'https://pedoman.online',
    line: 'Riset regulasi Indonesia: cek aturan masih berlaku atau sudah dicabut, lengkap dengan kutipan ke PDF aslinya.',
    status: 'shipped',
  },
  {
    name: 'Arsipin',
    url: 'https://arsipin.lamaaulabs.com',
    line: 'Arsip pribadi yang nyambung ke Google Drive. Semua file, satu indeks.',
    status: 'shipped',
  },
  {
    name: 'Picly',
    url: 'https://picly.lamaaulabs.com',
    line: 'Cari wajah di library foto, 100% offline. Nggak ada yang di-upload.',
    status: 'shipped',
  },
  {
    name: 'Laporan',
    url: 'https://github.com/rizkhal/laporan',
    line: 'Laporan engineering bulanan dari riwayat Git, dianalisis LLM. Self-hosted, open source.',
    status: 'shipped',
  },
];

export type Work = {
  title: string;
  client: string;
  kind: string;
  year: string;
  why: string;
};

export const work: Work[] = [
  {
    title: 'Data platform & GIS',
    client: 'Instansi pemerintah',
    kind: 'Platform · GIS · Infrastruktur',
    year: '2026',
    why: 'Datanya sudah ada, cuma tersebar di banyak instansi dan nggak bisa dipakai bareng. Kami satukan data tabular dan spasial ke satu platform, dengan akses per peran dan peta yang bisa dipakai lintas dinas.',
  },
  {
    title: 'Smartschool',
    client: 'Sekolah dan dinas',
    kind: 'Web · Manajemen sekolah',
    year: '2025',
    why: 'Operasional sekolah jalan di banyak spreadsheet dan grup WhatsApp, jadi satu data lahir ulang di lima tempat. Kami bangun satu sistem untuk data akademik dan administrasi, supaya dinas dan sekolah melihat angka yang sama.',
  },
  {
    title: 'E-Accounting',
    client: 'Perusahaan swasta',
    kind: 'Web · Akuntansi',
    year: '2025',
    why: 'Pembukuan masih di Excel: rawan salah, dan susah ditelusuri waktu audit. Kami bangun pembukuan dengan jurnal yang bisa dilacak balik ke transaksi asalnya, plus laporan yang siap dipakai akuntan.',
  },
  {
    title: 'Smart Attendance',
    client: 'Sekolah dan dinas',
    kind: 'Mobile · Absensi sekolah',
    year: '2025',
    why: 'Absensi manual bikin rekap telat masuk dan gampang dipersoalkan. Kami buat absensi mobile yang langsung nyambung ke Smartschool, jadi data kehadiran masuk di hari yang sama.',
  },
];

export const services = [
  { k: '01', t: 'Product engineering', d: 'Dari spec kosong sampai production. Web, API, database, deploy.' },
  { k: '02', t: 'Design systems', d: 'Token, komponen, dokumentasi. Biar tim lo nggak bikin ulang tombol.' },
  { k: '03', t: 'AI integration', d: 'Retrieval, eval, dan guardrail. Bukan demo, tapi yang kepakai tiap hari.' },
  { k: '04', t: 'Infrastructure', d: 'Self-hosted, container, observability. Biaya bulanan yang masuk akal.' },
];
