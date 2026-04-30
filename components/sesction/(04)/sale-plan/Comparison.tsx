"use client";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import type { ComparisonRow } from "@/lib/data/comparisonSection";

import ComparisonTable from "./ComparisonTable";

export type ComparisonProps = {
	rows: ComparisonRow[];
};

export default function Comparison({ rows }: ComparisonProps) {
	return (
		<section id="comparison" className="bg-[#f8f9fa]">
			<div className="mx-auto max-w-6xl">
				<SplitText
					tag="h2"
					text="仲介/買取/オークションの違いが一目で"
					className="text-lg font-bold text-navy md:text-3xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>

				<ComparisonTable rows={rows} />

				<p className="mt-4 text-right text-[0.65rem] leading-relaxed text-gray-400 md:text-sm">
					※価格保証/最低落札価格の設計も可能です。工期・条件により変動します。
				</p>
			</div>
		</section>
	);
}
