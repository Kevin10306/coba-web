# PT Indo Kreasi — Company Profile

Website company profile statis berbahasa Indonesia dan Inggris untuk PT Indo Kreasi, dengan fokus bidang game development.

## Isi folder
- `index.html` — struktur halaman
- `styles.css` — desain responsif
- `script.js` — pergantian bahasa dan menu mobile

## Sebelum dipublikasikan
1. Buka `index.html` dan cari `hello@example.com`.
2. Ganti alamat contoh tersebut dengan email resmi perusahaan. Perbarui juga tautan `mailto:` pada tombol kontak.
3. Pastikan nama perusahaan, deskripsi layanan, dan semua informasi sesuai fakta resmi.
4. Buka `index.html` di browser untuk pratinjau. Google Fonts memerlukan koneksi internet; jika font gagal dimuat, situs memakai font cadangan.

## Deploy gratis ke Vercel lewat GitHub
1. Ekstrak ZIP ini.
2. Buat repository baru di https://github.com/new, misalnya `indo-kreasi-company-profile`.
3. Unggah `index.html`, `styles.css`, `script.js`, dan `README.md` ke repository. Pastikan `index.html` berada di root repository, bukan di dalam folder tambahan.
4. Masuk ke https://vercel.com/ lalu daftar/masuk menggunakan GitHub.
5. Dari dashboard Vercel pilih **Add New → Project**, lalu **Import** repository yang baru dibuat.
6. Karena ini website HTML/CSS/JS statis, gunakan pengaturan sederhana:
   - Framework Preset: **Other**
   - Build Command: kosongkan
   - Output Directory: kosongkan atau gunakan default untuk static files
   - Root Directory: `./`
7. Klik **Deploy**. Tunggu sampai deployment berhasil. Vercel akan memberikan URL publik dengan akhiran `.vercel.app`; nama persisnya bergantung pada ketersediaan nama proyek.
8. Buka URL hasil deployment dan uji tampilan desktop, ponsel, serta tombol bahasa.

Vercel mendukung deployment dari repository Git dan deployment baru dapat terpicu otomatis saat perubahan di-push ke branch produksi. Panduan resmi: https://vercel.com/docs/deployments/overview dan https://vercel.com/docs/git

## Catatan
- Paket ini adalah website statis dan tidak memerlukan Node.js atau database.
- Email kontak saat ini adalah placeholder dan perlu diganti sebelum website dipakai secara resmi.
- Isi halaman sengaja tidak menyertakan alamat, daftar klien, game yang telah dirilis, angka kinerja, atau sejarah perusahaan karena data resmi tersebut belum diberikan.
- Contoh subdomain yang diinginkan dapat berupa `indo-kreasi.vercel.app`, tetapi nama tersebut belum dipastikan tersedia. Vercel menetapkan URL berdasarkan nama proyek dan ketersediaan.
