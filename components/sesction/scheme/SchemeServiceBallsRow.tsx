"use client";

import type { SchemeService } from "@/lib/data/schemeSection";
import { cn } from "@/lib/utils";

import SchemeServiceBallButton from "./SchemeServiceBallButton";

export type SchemeServiceBallsRowProps = {
	services: SchemeService[];
	activeIndex: number;
	onSelectIndex: (index: number) => void;
	className?: string;
};

/**
 * リングの玉UIのみを横並びで表示（servicering.svg・中央ラベルは含まない）
 */
export default function SchemeServiceBallsRow({
	services,
	activeIndex,
	onSelectIndex,
	className,
}: SchemeServiceBallsRowProps) {
	return (
		<div
			role="tablist"
			aria-label="サービスカテゴリー"
			className={cn("flex flex-wrap items-center justify-center gap-4 md:gap-7 lg:gap-9", className)}
		>
			{services.map((service, index) => (
				<div key={service.id} className="shrink-0">
					<SchemeServiceBallButton
						variant="tab"
						service={service}
						isActive={activeIndex === index}
						onSelect={() => onSelectIndex(index)}
						ariaLabel={`${service.name.replace(/\n/g, " ")} を表示`}
					/>
				</div>
			))}
		</div>
	);
}
