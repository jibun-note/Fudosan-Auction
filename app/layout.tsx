import type { Metadata } from "next";
import { Geist, Geist_Mono, Pinyon_Script, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const shipporiMincho = Shippori_Mincho({
	variable: "--font-sans",
	weight: ["400", "500", "600"],
	subsets: ["latin", "latin-ext"],
});

const pinyonScript = Pinyon_Script({
	variable: "--font-pinyon-script",
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "顧問先のための不動産売却戦略",
	description: "顧客の不動産売却・節税・資産形成を“透明性と専門性”で支える、信頼できるパートナーへ。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className={cn("font-sans", shipporiMincho.variable)}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${pinyonScript.variable} antialiased`}
			>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
