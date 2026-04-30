import Image from "next/image";

import { cn } from "@/lib/utils";

type SectionClosedAccentProps = {
	open: boolean;
	className?: string;
};

export function SectionClosedAccent({ open, className }: SectionClosedAccentProps) {
	return (
		<div
			aria-hidden={open}
			className={cn(
				"overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out motion-reduce:transition-none",
				open ? "max-h-0 translate-y-[-8px] opacity-0" : "max-h-40 translate-y-0 opacity-100",
				className,
			)}
		>
			<div className="flex flex-col items-center gap-3 pt-5 pb-0">
				<div className="flex w-full max-w-4xl items-center gap-4 px-2 sm:gap-6">
					<div className="h-px flex-1 bg-linear-to-r from-transparent via-[#c5a55a]/40 to-[#c5a55a]" />
					<div className="relative flex size-20 shrink-0 items-center justify-center rounded-full border border-[#c5a55a]/25 bg-white/80 shadow-[0_12px_30px_rgba(17,24,39,0.08)] backdrop-blur-sm sm:size-24">
						<div className="absolute inset-2 rounded-full border border-[#c5a55a]/15" />
						<Image
							src="/images/藤和ロゴ.svg"
							alt=""
							width={84}
							height={84}
							className="relative size-14 object-contain opacity-90 sm:size-16"
						/>
					</div>
					<div className="h-px flex-1 bg-linear-to-l from-transparent via-[#c5a55a]/40 to-[#c5a55a]" />
				</div>
				<p className="text-center font-serif text-[0.7rem] tracking-[0.32em] text-[#8f7741] uppercase sm:text-xs">
					Towa Corporation
				</p>
			</div>
		</div>
	);
}
