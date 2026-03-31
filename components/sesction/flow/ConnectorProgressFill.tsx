/**
 * タイムライン接続線の「現在区間」を左から右へ塗る進捗レイヤー。
 * requestAnimationFrame で clip-path を更新（一部環境で CSS アニメが効かない場合のフォールバック）。
 * prefers-reduced-motion: reduce では即時フル塗り。
 */
"use client";

import { useEffect, useRef } from "react";

export default function ConnectorProgressFill({
	durationMs,
	backgroundColor,
}: {
	durationMs: number;
	backgroundColor: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduceMotion) {
			el.style.clipPath = "inset(0 0 0 0)";
			return;
		}

		let cancelled = false;
		let rafId = 0;
		el.style.clipPath = "inset(0 100% 0 0)";
		const start = performance.now();
		const tick = (now: number) => {
			if (cancelled) return;
			const p = Math.min(1, (now - start) / durationMs);
			const rightInset = Math.max(0, (1 - p) * 100);
			el.style.clipPath = `inset(0 ${rightInset}% 0 0)`;
			if (p < 1) rafId = requestAnimationFrame(tick);
		};
		rafId = requestAnimationFrame(tick);
		return () => {
			cancelled = true;
			cancelAnimationFrame(rafId);
		};
	}, [durationMs]);

	return (
		<div
			ref={ref}
			className="pointer-events-none absolute inset-y-0 left-0 w-full rounded-full"
			style={{
				backgroundColor,
				clipPath: "inset(0 100% 0 0)",
			}}
			aria-hidden
		/>
	);
}
