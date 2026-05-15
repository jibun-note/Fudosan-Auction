"use client";

import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState, useSyncExternalStore } from "react";

import { GoldButton } from "@/components/common/button/GoldButton";
import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import type { SchemeService } from "@/lib/data/schemeSection";
import { cn } from "@/lib/utils";

import { SCHEME_SERVICE_ICON_BY_KEY } from "./SchemeServiceBallButton";

export type SchemeSection2Props = {
	services: SchemeService[];
};

/** カードごとの背景写真（公開ディレクトリのストック） */
const SERVICE_CARD_IMAGE_BY_ID: Record<string, string> = {
	reborn: "/images/AdobeStock_1829773049_Preview.jpeg",
	businessReborn: "/images/AdobeStock_271171292_Preview.jpeg",
	auction: "/images/AdobeStock_1589598207_Preview.jpeg",
};

/** タッチ専用端末ではホバーで開かず、タップ（openId）のみ。SSR では false。 */
function useCardHoverOpen() {
	return useSyncExternalStore(
		(onChange) => {
			if (typeof window === "undefined") return () => {};
			const mq = window.matchMedia("(min-width: 768px) and (hover: hover)");
			mq.addEventListener("change", onChange);
			return () => mq.removeEventListener("change", onChange);
		},
		() =>
			typeof window !== "undefined" &&
			window.matchMedia("(min-width: 768px) and (hover: hover)").matches,
		() => false,
	);
}

export default function SchemeSection2({ services }: SchemeSection2Props) {
	const [openId, setOpenId] = useState<string | null>(null);
	const cardHoverOpen = useCardHoverOpen();
	/** ホバーで開ける環境ではタップ用の openId を表示に使わない（派生で無効化し、同期 setState は不要） */
	const activeTapId = cardHoverOpen ? null : openId;

	return (
		<section
			id="scheme-cards"
			className="relative overflow-hidden bg-[#f8f9fa] px-4 py-12 md:px-6 md:py-20"
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.06]"
				style={{
					backgroundImage:
						"linear-gradient(rgb(15 23 42 / 0.12) 1px, transparent 1px), linear-gradient(90deg, rgb(15 23 42 / 0.12) 1px, transparent 1px)",
					backgroundSize: "48px 48px",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-7xl">
				<div className="mx-auto max-w-6xl">
					<SplitText
						tag="h2"
						text={"貴社を支える新サービス"}
						className="text-lg font-bold text-navy md:text-4xl"
						textAlign="left"
						{...sectionHeadingSplitTextProps}
					/>
					<div className="mt-2 h-1 w-18 bg-gold" />
					<p className="mt-3 mb-10 text-sm text-gray-600 md:mt-4 md:mb-14 md:text-xl">
						顧問先への付加価値提案が、先生ご自身の信頼とビジネスを強化します。
					</p>
				</div>

				<div className="grid gap-5 pb-2 md:mx-auto md:max-w-[60rem] md:grid-cols-2 md:gap-20 md:pb-4">
					{services.map((service, activeIndex) => {
						const stepLabel = String(activeIndex + 1).padStart(2, "0");
						const ServiceIcon = SCHEME_SERVICE_ICON_BY_KEY[service.iconKey];
						const imageSrc = SERVICE_CARD_IMAGE_BY_ID[service.id];
						const isTapOpen = activeTapId === service.id;
						const isHashLink = service.href.startsWith("#");

						return (
							<motion.article
								key={service.id}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{
									duration: 0.45,
									delay: activeIndex * 0.08,
									ease: [0.22, 1, 0.36, 1],
								}}
								whileHover={cardHoverOpen ? { scale: 1.03, zIndex: 10 } : undefined}
								className={cn(
									"group/card relative isolate min-h-88 overflow-hidden rounded-2xl border border-gray-200/90 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.35)] will-change-transform md:min-h-104",
								)}
								data-expanded={isTapOpen ? "true" : undefined}
							>
								{/* ホバーで開けない環境: 折りたたみ時はタップで詳細表示 */}
								{!cardHoverOpen && !isTapOpen && (
									<button
										type="button"
										className="absolute inset-0 z-25 cursor-pointer touch-manipulation"
										aria-label={`${service.title.replace(/\n/g, " ")}の詳細を開く`}
										onClick={() => setOpenId(service.id)}
									/>
								)}
								{/* 背景画像 */}
								<div className="absolute inset-0">
									<Image
										src={imageSrc}
										alt="サービスイメージ"
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 33vw"
										priority={activeIndex === 0}
									/>
									<div className="absolute inset-0 bg-linear-to-t from-black/32 via-black/17 to-black/12" />
								</div>

								{/* 非ホバー: step / アイコン / タイトルのみ */}
								<div
									className={cn(
										"relative z-10 flex h-full min-h-88 flex-col p-5 transition-opacity duration-300 md:min-h-104 md:p-6",
										cardHoverOpen &&
											"md:group-hover/card:pointer-events-none md:group-hover/card:opacity-0 md:group-focus-within/card:pointer-events-none md:group-focus-within/card:opacity-0",
										isTapOpen && "pointer-events-none opacity-0",
									)}
								>
									<div className="relative flex min-h-0 flex-1 flex-col px-2 py-6">
										<div className="absolute left-2 top-2 flex flex-col items-start">
											<span className="text-[0.625rem] font-semibold tracking-[0.18em] text-white/50 md:text-[0.6875rem] md:tracking-[0.22em]">
												SERVICE
											</span>
											<p className="text-[2rem] font-bold leading-none tabular-nums text-white/60 drop-shadow-md md:text-[4.5rem]">
												{stepLabel}
											</p>
										</div>
										<div className="flex min-h-0 flex-1 flex-col items-center justify-center text-center">
											{service.label ? (
												<p className="whitespace-pre-line px-2 text-sm font-extrabold leading-snug tracking-[0.04em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.98)] md:text-3xl">
													{service.label}
												</p>
											) : null}
											<h3
												className={cn(
													"whitespace-pre-line text-xl font-bold leading-snug text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.82)] md:text-4xl",
													service.label ? "mt-1" : "",
												)}
											>
												{service.title}
											</h3>
										</div>
									</div>
								</div>

								{/* ホバー時: 既存のカード情報（詳細） */}
								<div
									className={cn(
										"absolute inset-0 z-20 flex flex-col p-5 opacity-0 transition-opacity duration-300 md:min-h-0 md:p-6",
										"bg-[rgba(28,46,73,0.72)] backdrop-blur-md",
										cardHoverOpen &&
											"md:pointer-events-none md:group-hover/card:pointer-events-auto md:group-hover/card:opacity-100 md:group-focus-within/card:pointer-events-auto md:group-focus-within/card:opacity-100",
										/* タップモードで閉じている間も z-20 で全面に乗るため、透明でもクリックを奪わない */
										!cardHoverOpen && !isTapOpen && "pointer-events-none",
										!cardHoverOpen && isTapOpen && "pointer-events-auto opacity-100",
									)}
								>
									{!cardHoverOpen && isTapOpen && (
										<button
											type="button"
											className="absolute top-3 right-3 z-30 flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white"
											aria-label="詳細を閉じる"
											onClick={() => setOpenId(null)}
										>
											<X className="size-4" strokeWidth={2} aria-hidden />
										</button>
									)}
									<div className="flex shrink-0 flex-col items-center gap-3 border-b border-white/10 pb-4 text-center">
										<div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
											<ServiceIcon
												className="size-6 text-gold"
												strokeWidth={1.5}
												aria-hidden
											/>
										</div>
										<h3 className="min-w-0 w-full whitespace-pre-line text-sm font-bold leading-snug text-white md:text-2xl">
											{service.title}
										</h3>
									</div>

									<div className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1">
										<div className="rounded-xl border border-white/15 bg-black/20 p-3 md:p-4">
											<ul className="space-y-2.5">
												{service.details.map((line, i) => (
													<li
														key={`${service.id}-d-${i}`}
														className="flex gap-3 text-sm leading-snug text-white/95 md:text-xl"
													>
														<span
															className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold"
															aria-hidden
														/>
														<span>{line}</span>
													</li>
												))}
											</ul>
										</div>
										<p className="mt-3 text-xs text-center font-semibold leading-snug text-gold md:text-xl">
											{service.subtitle}
										</p>
									</div>

									<GoldButton
										href={service.href}
										{...(isHashLink
											? {}
											: { target: "_blank" as const, rel: "noopener noreferrer" })}
										onClick={(e) => e.stopPropagation()}
										className="mt-8 w-full py-1 text-sm md:py-1.5 md:text-base"
									>
										サービスを見る
										<ChevronRight className="size-4" aria-hidden />
									</GoldButton>
								</div>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
