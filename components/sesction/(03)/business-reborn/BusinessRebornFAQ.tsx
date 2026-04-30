"use client";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { businessRebornFaqItems } from "@/lib/data/businessRebornSection";

/** アンカー `#faq` — よくある質問のアコーディオン一覧 */
export default function BusinessRebornFAQ() {
	return (
		<section id="businessRebornFAQ" className="bg-[#f8f9fa] ">
			<div className="mx-auto max-w-6xl">
				<div>
					<SplitText
						tag="h3"
						text="よくあるご質問"
						className="text-lg font-bold text-navy md:text-3xl"
						textAlign="center"
						{...sectionHeadingSplitTextProps}
					/>
				</div>
				<Accordion
					type="single"
					collapsible
					defaultValue="item-0"
					className="mx-auto mt-12 max-w-3xl space-y-3"
				>
					{businessRebornFaqItems.map((item, i) => (
						<AccordionItem
							key={item.question}
							value={`item-${i}`}
							className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm not-last:border-b-0"
						>
							<AccordionTrigger className="items-center gap-3 px-4 py-3 text-base font-semibold text-navy hover:no-underline md:gap-4 md:px-5 md:py-4 md:text-xl [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-gold md:[&_[data-slot=accordion-trigger-icon]]:size-6">
								{item.question}
							</AccordionTrigger>
							<AccordionContent className="overflow-y-auto border-t whitespace-pre-wrap border-gray-100 px-4 pb-3 pt-0 text-sm leading-relaxed text-gray-600 md:px-5 md:pb-4 md:text-base">
								{item.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
