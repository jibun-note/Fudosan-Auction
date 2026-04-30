/** リード直下：対象ニーズの箇条書き（データは `salePlanUseCases`） */

export type SalePlanUseCasesProps = {
	items: readonly string[];
};

export function SalePlanUseCases({ items }: SalePlanUseCasesProps) {
	if (items.length === 0) return null;

	return (
		<ul className="mt-6 grid list-none gap-2 p-0 sm:grid-cols-2 md:mt-8 md:gap-2.5">
			{items.map((text) => (
				<li
					key={text}
					className="relative pl-5 text-sm leading-relaxed text-gray-700 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-gold/80 md:text-base"
				>
					{text}
				</li>
			))}
		</ul>
	);
}
