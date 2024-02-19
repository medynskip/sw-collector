import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.scss";

import Header from "./components/Header";
import ReactQueryProvider from './providers/QueryProvider';
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Star Wars Card Collector",
    description: "Collect unique Star Wars Heroes cards",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            
            <Head>
                <link
                    rel="preload"
                    href="/card-bkg.webp"
                    as="image"
                />
                <link
                    rel="preload"
                    href="/card-bkg.jpg"
                    as="image"
                />
            </Head>
            <body className={inter.className}>
                <ReactQueryProvider>
                    <Header />
                    {children}
                    <Footer />
                </ReactQueryProvider>
            </body>
        </html>
    );
}
