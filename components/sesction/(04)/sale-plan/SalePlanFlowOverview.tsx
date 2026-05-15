import { flowStepsData } from "@/lib/data/flowSection";

function ArrowDown({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
		>
			<path
				d="M12 5v12m0 0-4.5-4.5M12 17l4.5-4.5"
				stroke="currentColor"
				strokeWidth="1.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ConnectorDown() {
	return (
		<span className="flex size-9 items-center justify-center rounded-full border border-gold/30 bg-white text-gold shadow-[0_8px_22px_rgba(30,58,95,0.08)]">
			<ArrowDown className="size-5" />
		</span>
	);
}

function FlowCard({ stepIndex }: { stepIndex: number }) {
	const step = flowStepsData[stepIndex];
	if (!step) return null;

	const stepNo = stepIndex + 1;

	return (
		<article className="group relative w-full overflow-hidden rounded-md border border-navy/10 bg-white text-left shadow-[0_18px_45px_rgba(30,58,95,0.09)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:shadow-[0_24px_55px_rgba(30,58,95,0.13)]">
			<div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#e8d8b8] via-gold to-[#e8d8b8]" />
			<div className="pointer-events-none absolute -right-16 -top-16 size-36 rounded-full bg-gold/[0.07]" />
			<div className="pointer-events-none absolute -bottom-20 right-10 size-44 rounded-full bg-navy/[0.04]" />

			<div className="relative flex items-stretch gap-4 p-3 sm:gap-5 sm:p-4 md:p-5">
				<div className="flex w-17 shrink-0 flex-col items-center justify-center rounded-md border border-gold/25 bg-[#fbf7ec] px-2 py-3 shadow-inner sm:w-19 md:w-22">
					<span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7a33]">
						step
					</span>
					<span className="mt-1 text-4xl font-bold leading-none text-navy/35 sm:text-5xl md:text-6xl">
						{String(stepNo).padStart(2, "0")}
					</span>
				</div>

				<div className="relative min-w-0 flex-1 py-2 pl-1 sm:py-3">
					<div className="absolute bottom-1 left-0 top-1 w-px bg-gradient-to-b from-transparent via-navy/15 to-transparent" />
					<h3 className="relative pl-4 text-base font-bold leading-snug text-navy md:text-2xl">
						{step.title}
					</h3>
					<p className="relative mt-2 pl-4 text-sm font-light leading-relaxed text-[#4f5b66] md:text-lg">
						{step.description}
					</p>
				</div>
			</div>
		</article>
	);
}

function FlowStack({ length }: { length: number }) {
	return (
		<div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 p-1 md:gap-4 md:p-2">
			{Array.from({ length }, (_, i) => (
				<div key={i} className="flex w-full flex-col items-center gap-3 md:gap-4">
					<FlowCard stepIndex={i} />
					{i < length - 1 && <ConnectorDown />}
				</div>
			))}
		</div>
	);
}

export default function SalePlanFlowOverview() {
	const n = flowStepsData.length;

	return <FlowStack length={n} />;
}
