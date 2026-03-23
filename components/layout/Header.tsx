"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const navItems = [
	{ label: "メリット", href: "#merit" },
	{ label: "他方式との比較", href: "#comparison" },
	{ label: "成功事例", href: "#case-study" },
	{ label: "利用の流れ", href: "#flow" },
	{ label: "FAQ", href: "#faq" },
	{ label: "会社情報", href: "#company" },
];

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		if (!mobileOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setMobileOpen(false);
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [mobileOpen]);

	return (
		<header className="relative z-50 bg-white shadow-md">
			{mobileOpen && (
				<button
					type="button"
					className="fixed inset-0 z-40 bg-black/40 md:hidden"
					aria-hidden
					tabIndex={-1}
					onClick={() => setMobileOpen(false)}
				/>
			)}
			<div className="relative z-50 mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-4">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="text-base font-bold tracking-tight text-navy md:text-xl"
					>
						不動産オークション
					</Link>
					<nav className="hidden items-center gap-8 md:flex" aria-label="メイン">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm text-navy transition hover:text-navy-dark"
							>
								{item.label}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-2 md:gap-3">
						<Link
							href="/home/form"
							className="rounded-md bg-gold px-3 py-2 text-xs font-semibold text-white transition hover:bg-gold-light md:px-4 md:text-sm"
						>
							無料で資料請求
						</Link>
						<button
							type="button"
							onClick={() => setMobileOpen((o) => !o)}
							className="rounded p-2 text-navy hover:bg-black/5 md:hidden"
							aria-expanded={mobileOpen}
							aria-controls="mobile-nav"
							aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
						>
							{mobileOpen ? (
								<HiOutlineXMark className="size-6" aria-hidden />
							) : (
								<HiOutlineBars3 className="size-6" aria-hidden />
							)}
						</button>
					</div>
				</div>
				{mobileOpen && (
					<nav
						id="mobile-nav"
						className="absolute inset-x-0 top-full z-50 flex max-h-[min(70vh,calc(100dvh-5rem))] flex-col gap-1 overflow-y-auto border-t border-black/10 bg-white py-3 shadow-lg md:hidden"
						aria-label="モバイルメニュー"
					>
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setMobileOpen(false)}
								className="mx-2 rounded-md px-3 py-3 text-sm text-navy transition hover:bg-accent-blue hover:text-navy-dark"
							>
								{item.label}
							</Link>
						))}
					</nav>
				)}
			</div>
		</header>
	);
}
