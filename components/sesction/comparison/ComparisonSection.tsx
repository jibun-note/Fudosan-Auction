import type { ComparisonRow } from "@/lib/data/comparison-rows";

import ComparisonTable from "./ComparisonTable";

export type ComparisonSectionProps = {
	rows: ComparisonRow[];
};

export default function ComparisonSection({ rows }: ComparisonSectionProps) {
	return (
		<section id="comparison" className="bg-white px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-lg font-bold text-navy md:text-3xl">
					仲介/買取/オークションの違いが一目で
				</h2>
				<div className="mt-2 h-1 w-16 bg-gold" />

				<ComparisonTable rows={rows} />

				<p className="mt-4 text-right text-[0.65rem] leading-relaxed text-gray-400 md:text-sm">
					※価格保証/最低落札価格の設計も可能です。工期・条件により変動します。
				</p>
			</div>
		</section>
	);
}
