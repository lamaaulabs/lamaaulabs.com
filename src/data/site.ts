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
  why: string;
  status: 'shipped' | 'beta' | 'wip';
};

export const products: Product[] = [
  {
    name: 'Pedoman',
    url: 'https://pedoman.online',
    why: 'Aturan tersebar di ribuan PDF dan sering berubah tanpa kabar. Kami bangun satu indeks yang selalu bisa ditelusuri balik ke dokumen aslinya.',
    status: 'shipped',
  },
  {
    name: 'Arsipin',
    url: 'https://arsipin.lamaaulabs.com',
    why: 'File kami tersebar di laptop, Drive, dan hard disk lama. Arsipin jadi satu indeks di atas Drive yang sudah kami pakai sehari-hari.',
    status: 'shipped',
  },
  {
    name: 'Picly',
    url: 'https://picly.lamaaulabs.com',
    why: 'Nyari foto berdasarkan wajah biasanya berarti upload ke layanan orang lain. Picly jalan lokal, jadi nggak ada file yang keluar dari mesin.',
    status: 'shipped',
  },
  {
    name: 'Laporan',
    url: 'https://github.com/rizkhal/laporan',
    why: 'Laporan bulanan biasanya ditulis manual dari ingatan. Laporan membaca riwayat Git dan menyusunnya jadi ringkasan yang bisa dicek.',
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

export const process = [
  {
    k: '01',
    t: 'discovery',
    h: 'Seminggu buat ngerti masalahnya',
    d: 'Sebelum nulis kode, kami duduk bareng stakeholder dan user. Output-nya: dokumen scope, arsitektur awal, dan estimasi yang bisa kami pertanggungjawabkan.',
  },
  {
    k: '02',
    t: 'build',
    h: 'Demo tiap Jumat, tanpa drama',
    d: 'Lo bisa lihat progress di staging setiap minggu. Nggak ada "trust the process". Kalau ada yang melenceng, kita tahu di minggu pertama, bukan di minggu terakhir.',
  },
  {
    k: '03',
    t: 'handover',
    h: 'Kode dan dokumentasi, bukan sandera',
    d: 'Semua kode di repo lo. Dokumentasi arsitektur, runbook deploy, dan sesi handover ke tim internal lo. Kami nggak mau lo balik cuma karena nggak ada yang ngerti cara deploy.',
  },
];
