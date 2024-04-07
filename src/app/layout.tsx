import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NetSysSoft. No 1. eTraining Institute',
  description: `About NSS
  NSS (www.nssnetsyssoft.com) is DevOps and AWS and Machine Learning eTraining organization in Thailand specializing in DevOps Training. NSS runs from Hatyai, Songkhla, Thailand and has been number 1 DevOps eTraining institute in Thailand providing remote DevOps Training globally for Nepalese IT professionals at individual as well as corporate levels. NSS goal is to provide DevOps training to Nepalese IT enthusiasts globally by providing real-life project work and internships as available. After learning DevOps with NSS, all students will be able to demonstrate their skills as DevOps Engineer and be able to perform better in DevOps interviews.`,
  openGraph:{
    images:['https://raw.githubusercontent.com/vivekneupane11/netsyssoft-main/main/src/assets/nss-logo01.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
