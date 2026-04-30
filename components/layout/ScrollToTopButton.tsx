"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

/** この距離以上スクロールしたら表示（一般的なランディングページの目安） */
const SCROLL_THRESHOLD_PX = 320;

export function ScrollToTopButton() {
	const [mounted, setMounted] = useState(false);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const raf = requestAnimationFrame(() => setMounted(true));
		const onScroll = () => {
			setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	const scrollToHero = useCallback(() => {
		const reduced =
			typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const behavior = reduced ? ("auto" as const) : ("smooth" as const);
		const el = document.getElementById("hero");
		if (el) {
			el.scrollIntoView({ behavior, block: "start" });
		} else {
			window.scrollTo({ top: 0, behavior });
		}
	}, []);

	const button = (
		<button
			type="button"
			onClick={scrollToHero}
			aria-label="ページ先頭（ヒーロー）へ戻る"
			tabIndex={visible ? 0 : -1}
			aria-hidden={!visible}
			className={cn(
				"fixed left-auto top-auto z-60 flex flex-col items-center justify-center gap-0.5 rounded-full",
				"bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] right-[max(1.5rem,env(safe-area-inset-right,0px))]",
				"size-14 shadow-lg transition-[opacity,transform] duration-300 ease-out",
				"bg-linear-to-r from-[#a67c2e] to-[#c5a55a] text-white",
				"hover:brightness-110 active:scale-95",
				"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a67c2e]",
				visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
			)}
		>
			<ChevronUp className="size-5 shrink-0" strokeWidth={2.5} aria-hidden />
			<span className="text-[10px] font-bold leading-none tracking-tight">TOP</span>
		</button>
	);

	if (!mounted) {
		return null;
	}

	return createPortal(button, document.body);
}
