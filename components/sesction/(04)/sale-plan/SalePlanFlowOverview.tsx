import { CircleDollarSign, FileText, Handshake, MessageCircle, Scale, type LucideIcon } from "lucide-react";

import { flowStepsData, type FlowStepIconKey } from "@/lib/data/flowSection";

const FLOW_ICON_BY_KEY: Record<FlowStepIconKey, LucideIcon> = {
	document: FileText,
	currencyYen: CircleDollarSign,
	scale: Scale,
	handshake: Handshake,
	chatBubble: MessageCircle,
};

function ArrowRight({ className }: { className?: string }) {
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
				d="M5 12h12m0 0-4.5-4.5M17 12l-4.5 4.5"
				stroke="currentColor"
				strokeWidth="1.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

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

function ConnectorRight() {
	return (
		<div className="hidden w-10 shrink-0 items-center justify-center md:flex lg:w-12">
			<span className="flex size-9 items-center justify-center rounded-full border border-[#e7d6a7] bg-[#fbf7ec] text-[#ab8d4b] shadow-sm">
				<ArrowRight className="size-5" />
			</span>
		</div>
	);
}

function ConnectorDown() {
	return (
		<span className="flex size-8 items-center justify-center rounded-full border border-[#e7d6a7] bg-[#fbf7ec] text-[#ab8d4b] shadow-sm">
			<ArrowDown className="size-4" />
		</span>
	);
}

function FlowCard({ stepIndex }: { stepIndex: number }) {
	const step = flowStepsData[stepIndex];
	if (!step) return null;

	const stepNo = stepIndex + 1;
	const Icon = FLOW_ICON_BY_KEY[step.iconKey];

	return (
		<article className="group relative flex h-full min-h-35.5 flex-col rounded-2xl border border-[#eadfca] bg-white p-4 text-left shadow-[0_14px_35px_rgba(28,46,73,0.08)] transition-transform duration-300 hover:-translate-y-1 md:min-h-42 md:p-3 lg:p-4">
			<div className="mb-3 flex items-center gap-2">
				<span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy text-white ring-4 ring-[#f5efe0]">
					<Icon className="size-4.5" strokeWidth={1.8} aria-hidden />
				</span>
				<span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ab8d4b]">
					STEP {String(stepNo).padStart(2, "0")}
				</span>
			</div>

			<h3 className="text-base font-bold leading-snug text-navy md:text-sm lg:text-lg">{step.title}</h3>
			<p className="mt-2 text-sm font-light leading-relaxed md:text-base">{step.description}</p>
		</article>
	);
}

function VerticalStack({ length }: { length: number }) {
	return (
		<div className="mx-auto flex max-w-md flex-col items-center gap-3">
			{Array.from({ length }, (_, i) => (
				<div key={i} className="flex w-full flex-col items-center gap-3">
					<FlowCard stepIndex={i} />
					{i < length - 1 && <ConnectorDown />}
				</div>
			))}
		</div>
	);
}

function FlowTimeline({ length }: { length: number }) {
	return (
		<div className="mx-auto w-full max-w-6xl p-1 md:p-2">
			<div className="flex w-full min-w-0 items-stretch">
				{Array.from({ length }, (_, i) => (
					<div key={i} className="contents">
						<div className="min-w-0 flex-1">
							<FlowCard stepIndex={i} />
						</div>
						{i < length - 1 && <ConnectorRight />}
					</div>
				))}
			</div>
		</div>
	);
}

export default function SalePlanFlowOverview() {
	const n = flowStepsData.length;

	return (
		<>
			<div className="md:hidden">
				<VerticalStack length={n} />
			</div>
			<div className="hidden md:block">
				<FlowTimeline length={n} />
			</div>
		</>
	);
}
