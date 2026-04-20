"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { SchemeService } from "@/lib/data/schemeSection";

export type SchemeServiceDetailCardProps = {
	service: SchemeService;
};

export default function SchemeServiceDetailCard({ service }: SchemeServiceDetailCardProps) {
	return (
		<Card className="overflow-hidden rounded-2xl border-white/15 bg-[#1c2e49] shadow-md shadow-navy/15 backdrop-blur-sm md:flex md:h-full md:min-h-0 md:flex-col">
			<CardContent className="bg-white p-0 md:flex md:h-full md:min-h-0 md:flex-1 md:flex-col md:overflow-hidden">
				<div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.42fr)] md:grid-rows-1 md:h-full md:min-h-0 md:flex-1 md:overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
					<CardHeader className="relative space-y-0 rounded-none border-b border-gray-200 bg-transparent p-0 shadow-none md:h-full md:min-h-0 md:overflow-y-auto md:border-b-0">
						<span
							aria-hidden
							className="pointer-events-none absolute top-6 right-0 bottom-6 hidden w-px bg-gray-200 md:block"
						/>
						<div className="px-6 py-6 md:px-8 md:py-7 lg:px-10 lg:py-8 lg:pr-8">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2, duration: 0.5 }}
								className="mb-4 flex items-center gap-2.5"
							>
								<div className="h-6 w-1 shrink-0 rounded-full bg-linear-to-b from-[#c5a55a] to-[rgba(197,165,90,0.16)]" />
								<CardTitle className="whitespace-pre-line text-lg font-semibold text-navy lg:text-xl">
									{service.title}
								</CardTitle>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3, duration: 0.5 }}
							>
								<CardDescription className="mb-4 text-base font-semibold tracking-wide text-gold/80">
									{service.subtitle}
								</CardDescription>
							</motion.div>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4, duration: 0.5 }}
								className="text-sm leading-snug font-semibold text-gray-600"
							>
								{service.description}
							</motion.p>
						</div>
					</CardHeader>

					<div className="flex flex-col justify-start p-6 md:h-full md:min-h-0 md:overflow-y-auto md:p-8 lg:p-9">
						<p className="mb-5 text-sm font-semibold tracking-[0.28em] text-gold/60 uppercase">
							Points
						</p>
						<div className="space-y-3">
							{service.details.map((detail, i) => (
								<motion.div
									key={detail}
									initial={{ opacity: 0, x: 30 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										delay: 0.2 + i * 0.12,
										duration: 0.5,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="group flex items-start gap-3"
								>
									<span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[rgba(197,165,90,0.16)] bg-[rgba(197,165,90,0.16)] text-[10px] font-bold text-[#c5a55a]">
										{i + 1}
									</span>
									<p className="pt-0.5 text-sm leading-snug font-semibold text-gray-800 transition-colors duration-300 group-hover:text-navy">
										{detail}
									</p>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							className="mt-6 border-t border-gray-200 pt-5"
						>
							<Link
								href={service.href}
								className="group inline-flex cursor-pointer items-center gap-2.5 text-sm tracking-[0.18em] text-[#c5a55a] uppercase transition-colors duration-300 hover:text-[#e0c27a]"
							>
								詳しく見る
								<motion.span
									className="inline-block h-px w-7 origin-left bg-[rgba(197,165,90,0.16)] transition-colors duration-300 group-hover:bg-[#c5a55a]"
									whileHover={{ scaleX: 1.5 }}
								/>
							</Link>
						</motion.div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
