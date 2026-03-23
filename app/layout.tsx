import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "不動産オークション | 税理士の顧問先の資産価値を最大化",
	description:
		"税理士の顧問先の不動産を、もっと高く・安心して売却。不動産オークション方式で顧問先の資産価値を最大化します。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
