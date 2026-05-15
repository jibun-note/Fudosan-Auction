"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const navItems = [
	{ label: "新サービス", href: "/#scheme-cards" },
	{ label: "business re-born(法人版)", href: "/#businessReborn" },
	{ label: "不動産売却計画書＋オークション", href: "/#salePlan" },
	{ label: "re-born(個人版)", href: "/#reborn" },
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
		<header className="sticky top-0 z-50 w-full bg-white shadow-md">
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
				<div className="flex min-w-0 items-center justify-between gap-3">
					<Link href="/" className="min-w-0 shrink">
						<Image
							src="/images/towa_logo_black.png"
							alt="TOWA"
							width={180}
							height={44}
							className="h-9 w-auto md:h-11"
							priority
						/>
					</Link>
					<nav className="hidden items-center gap-8 md:flex" aria-label="メインメニュー">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="relative inline-block pb-1.5 text-base font-semibold text-navy transition-colors duration-200 hover:text-navy-dark after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-linear-to-r after:from-gold-light after:via-gold after:to-gold-light after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:after:scale-x-100 motion-reduce:after:transition-none motion-reduce:hover:after:scale-x-100"
							>
								{item.label}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-2 md:gap-3">
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
