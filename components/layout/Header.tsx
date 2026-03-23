"use client";

import Link from "next/link";
import { useState } from "react";
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

	return (
		<header className="shadow-md">
			<div className="mx-auto max-w-7xl px-6 py-4">
				<div className="flex items-center justify-between">
					<Link href="/" className="text-xl font-bold tracking-tight">
						不動産オークション
					</Link>
					<nav className="hidden items-center gap-8 md:flex">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm text-[var(--navy)] transition hover:text-[var(--navy-dark)]"
							>
								{item.label}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-3">
						<Link
							href="/form"
							className="rounded-md bg-[var(--gold)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--gold-light)]"
						>
							無料で資料請求
						</Link>
						<button
							type="button"
							onClick={() => setMobileOpen(!mobileOpen)}
							className="rounded p-2 text-white/90 hover:bg-white/10 md:hidden"
							aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
						>
							{mobileOpen ? (
								<HiOutlineXMark className="size-6" />
							) : (
								<HiOutlineBars3 className="size-6" />
							)}
						</button>
					</div>
				</div>
				{mobileOpen && (
					<nav className="mt-4 flex flex-col gap-2 border-t border-white/20 pt-4 md:hidden">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setMobileOpen(false)}
								className="rounded py-2 px-3 text-sm text-white/90 hover:bg-white/10 hover:text-white"
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
