"use client";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import type { BusinessRebornGuarantee } from "@/lib/data/businessRebornSection";

export type BusinessRebornGuaranteeProps = {
	guarantee: BusinessRebornGuarantee[];
};

/** 保証システムを構築 */
export function BusinessRebornGuarantee({ guarantee }: BusinessRebornGuaranteeProps) {
	return (
		<section id="businessRebornGuarantee" className="bg-[#f8f9fa] ">
			<div className="mx-auto flex max-w-6xl flex-col">
				<SplitText
					tag="h3"
					text="業界初！まるごと保証システムを構築"
					className="text-center text-base font-bold text-navy md:text-4xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>
				<div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
					{guarantee.map(({ title, subtitle, description }) => {
						return (
							<div
								key={title}
								className="relative flex h-70 min-h-0 flex-col overflow-hidden rounded-xl border border-gold-light/90 bg-linear-to-b from-white to-gray-50/60 p-5 shadow-sm transition-shadow hover:shadow-md md:h-78 md:p-6"
							>
								<div className="flex flex-col justify-center shrink-0 items-center gap-3">
									<div className="min-w-0 flex-1">
										<h4 className="text-center text-lg font-bold text-navy md:text-xl">
											{title}
										</h4>
										<p className="mt-1.5 text-center text-base font-semibold text-gold md:text-xl">
											{subtitle}
										</p>
									</div>
								</div>
								<div className="mt-3 min-h-0 flex-1 overflow-y-auto overscroll-y-contain pr-1">
									<div className="rounded-xl border border-gray-200/90 bg-gray-50/80 p-3 md:p-4">
										<ul className="space-y-2.5 text-xs leading-snug text-gray-600 md:text-base md:leading-relaxed">
											{description.map((line, i) => (
												<li key={`${title}-d-${i}`} className="flex gap-3">
													<span
														className="mt-3 size-1.5 shrink-0 rounded-full bg-gold"
														aria-hidden
													/>
													<span>{line}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
