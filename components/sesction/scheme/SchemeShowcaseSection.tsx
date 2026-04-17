"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

import type { SchemeService } from "@/lib/data/schemeSection";
import { cn } from "@/lib/utils";

import SchemeServiceBallsRow from "./SchemeServiceBallsRow";

export type SchemeShowcaseSectionProps = {
	services: SchemeService[];
};

export default function SchemeShowcaseSection({ services }: SchemeShowcaseSectionProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleCategorySelect = useCallback((index: number) => {
		setActiveIndex(index);
	}, []);

	const active = services[activeIndex];
	const stepLabel = String(activeIndex + 1).padStart(2, "0");

	return (
		<section id="scheme-showcase" className="bg-[#f8f9fa] px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-lg font-bold text-navy md:text-3xl">
						貴社を支える&quot;3つ&quot;のサービス
					</h2>
					<div className="mt-2 h-1 w-16 bg-gold" />
					<p className="mt-3 mb-16 text-sm text-gray-600 md:mt-4 md:text-base">
						顧問先への付加価値提案が、先生ご自身の信頼とビジネスを強化します。
					</p>
				</div>

				<div
					className={cn(
						"overflow-hidden rounded-2xl bg-white",
						"shadow-[0_24px_48px_-20px_rgba(15,23,42,0.18),0_8px_16px_-8px_rgba(15,23,42,0.1)]",
						"ring-1 ring-black/4",
					)}
				>
					<div className="border-b border-gray-100/90 bg-white px-4 py-8 md:px-8 md:py-10">
						<p className="mb-6 text-center text-xs font-semibold tracking-[0.2em] text-gold/90 uppercase md:text-sm">
							Service category
						</p>
						<SchemeServiceBallsRow
							services={services}
							activeIndex={activeIndex}
							onSelectIndex={handleCategorySelect}
						/>
					</div>

					<div className="grid gap-10 px-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-12 md:px-10 md:py-12 lg:px-14 lg:py-14">
						<div className="min-w-0">
							<AnimatePresence mode="wait">
								{active && (
									<motion.div
										key={active.id}
										initial={{ opacity: 0, y: 12 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -8 }}
										transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
									>
										<p className="mb-4 text-[4.5rem] leading-none font-extralight text-gold/85 md:text-[7rem]">
											{stepLabel}
										</p>
										<h2 className="whitespace-pre-line text-xl font-bold tracking-tight text-gray-900 md:text-2xl lg:text-[1.65rem]">
											{active.title}
										</h2>
										<p className="mt-3 text-sm font-semibold text-gold md:text-base">
											{active.subtitle}
										</p>
										<div className="mt-5 h-px w-14 bg-gold/85" />
										<p className="mt-6 text-sm leading-relaxed text-gray-600 md:text-[0.9375rem]">
											{active.description}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						<div className="flex min-w-0 flex-col border-t border-gray-100 pt-10 md:h-full md:border-t-0 md:border-l md:border-gray-100 md:pt-0 md:pl-10 lg:pl-12">
							<AnimatePresence mode="wait">
								{active && (
									<motion.div
										key={`detail-${active.id}`}
										initial={{ opacity: 0, y: 12 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -8 }}
										transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
										className="flex min-h-0 flex-1 flex-col"
									>
										<p className="text-xs font-semibold tracking-[0.32em] text-gold uppercase md:text-sm">
											Service points
										</p>
										<ul className="mt-6 space-y-4">
											{active.details.map((line, i) => (
												<li key={`${active.id}-d-${i}`} className="flex gap-3.5">
													<span
														className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/8 text-xs font-bold text-gold"
														aria-hidden
													>
														{i + 1}
													</span>
													<span className="pt-0.5 text-sm font-medium leading-snug text-gray-700 md:text-[0.9375rem]">
														{line}
													</span>
												</li>
											))}
										</ul>

										<div className="mt-8  pt-8 md:mt-auto md:pt-9">
											{/* <Link
												href={active.href}
												target="_blank"
												rel="noopener noreferrer"
												className={cn(
													"group inline-flex items-center gap-2 rounded-lg px-7 py-3.5",
													"bg-navy-dark text-sm font-semibold text-white shadow-sm transition-colors",
													"hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60",
												)}
											>
												詳しく見る
												<ChevronRight
													className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
													aria-hidden
												/>
											</Link> */}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
