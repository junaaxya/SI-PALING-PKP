# SI PALING PKP (Sistem Informasi Pendataan Lingkup Perumahan dan Kawasan Permukiman)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**SI PALING PKP** adalah platform digital terintegrasi yang dikembangkan untuk **Pemerintah Provinsi Kepulauan Bangka Belitung**. Sistem ini dirancang untuk memodernisasi pengelolaan data perumahan dan kawasan permukiman melalui pendekatan Sistem Informasi Geografis (SIG) dan dashboard pemantauan real-time.

Proyek ini bertujuan untuk mendukung kebijakan *evidence-based policy* dalam pemenuhan standar Rumah Layak Huni (RLH).

## 📄 Informasi Proyek

Berdasarkan data kontrak pengembangan:
* **Nama Pekerjaan:** Pembuatan Aplikasi Berbasis Web (Sistem Informasi dan Komunikasi Bidang Perumahan dan Kawasan Permukiman)
* **Pemilik Pekerjaan:** Dinas PUPRPKP Provinsi Kepulauan Bangka Belitung
* **Konsultan Pelaksana:** CV. Panda Karya
* **Nomor Kontrak:** 600/776/SPK-PABW/CKPP/2025
* **Tanggal:** 28 Agustus 2025
* **Lokasi:** Pangkalpinang, Bangka Belitung

## 🌟 Fitur Unggulan

Aplikasi ini memiliki berbagai fitur yang disesuaikan dengan kebutuhan pendataan provinsi:

### 1. Sistem Informasi Geografis (SIG)
Visualisasi sebaran perumahan dan kawasan kumuh menggunakan peta digital interaktif untuk memudahkan analisis spasial.

### 2. Monitoring Kriteria Rumah Layak Huni
Memantau 4 indikator utama standar PUPR:
* 🛡️ **Keselamatan Bangunan:** Struktur, dinding, atap, dan lantai.
* 🏠 **Kecukupan Luas:** Standar 7,2 - 12 m² per orang.
* 💡 **Kesehatan Penghuni:** Pencahayaan, sanitasi, dan air bersih.
* 🛣️ **Infrastruktur:** Akses jalan, listrik, dan fasilitas umum.

### 3. Dashboard Terintegrasi
Menampilkan statistik makro seperti total penduduk terlayani, persentase integrasi data, dan cakupan wilayah (7 Kabupaten/Kota).

### 4. Validasi & Keamanan Data
* Sistem validasi otomatis untuk akurasi input.
* Multi-level access control (Provinsi hingga Desa).

## 🛠️ Teknologi (Tech Stack)

Aplikasi ini dibangun menggunakan teknologi web modern untuk menjamin kecepatan dan kemudahan pengembangan:

* **Core:** [React.js](https://react.dev/) (Vite Ecosystem)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Responsive & Modern UI)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Routing:** Custom Hash-based Routing (SPA ringan)

## 📂 Struktur Folder

```bash
src/
├── assets/              # Aset statis (Logo Pemprov, Logo Project)
├── components/
│   ├── common/          # Komponen atom (Button, Card, SectionTitle)
│   ├── layout/          # Navbar dan Footer
│   └── sections/        # Bagian landing page (Hero, Features, Criteria, dll)
├── pages/
│   ├── HomePage.jsx     # Halaman Utama
│   └── AboutUsPage.jsx  # Halaman Detail Proyek & Tim
├── App.jsx              # Manajemen Routing Utama
└── index.css            # Konfigurasi Global & Tailwind


🚀 Cara Menjalankan (Installation)
Ikuti langkah ini untuk menjalankan proyek di komputer lokal (Localhost):

Clone atau Download repository ini.

Buka terminal di dalam folder proyek.

Install Dependencies:

Bash

npm install
Jalankan Mode Development:

Bash

npm run dev
Buka browser dan akses URL yang muncul (biasanya http://localhost:5173).

📦 Build untuk Production
Untuk men-deploy aplikasi ke server (Hosting/Vercel/Netlify):

Bash

npm run build
Folder dist akan terbentuk dan siap untuk diunggah.

👥 Tim Pengembang
CV. Panda Karya

Role: Research and Engineering Consultant

Tanggung Jawab: Perancangan sistem, pengembangan aplikasi, dan alih pengetahuan.

Hak Cipta © 2025 SI PALING PKP - Provinsi Kepulauan Bangka Belitung. All rights reserved.
