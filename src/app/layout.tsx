import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// --- INI BAGIAN JUDUL & SEO YANG KITA UBAH ---
export const metadata: Metadata = {
  title: "FunPark BTR - Waterpark Keluarga & Paket Rombongan Sekolah",
  description: "Wisata air terbaik di Bekasi Timur Regensi. Kolam renang bersih, tiket murah, dan fasilitas lengkap. Booking tiket rombongan sekolah lebih mudah di sini.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}