"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/data/faq-items";

/** アンカー `#faq` — よくある質問のアコーディオン一覧 */
export default function FaqSection() {
	return (
		<section id="faq" className="bg-white px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto max-w-6xl">
				<div>
					<h2 className="text-lg font-bold text-navy md:text-3xl">よくあるご質問</h2>
					<div className="mt-2 h-1 w-16 bg-gold" />
				</div>
				<Accordion
					type="single"
					collapsible
					defaultValue="item-0"
					className="mx-auto mt-12 max-w-3xl space-y-3"
				>
					{faqItems.map((item, i) => (
						<AccordionItem
							key={item.question}
							value={`item-${i}`}
							className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm not-last:border-b-0"
						>
							<AccordionTrigger className="items-center gap-3 px-4 py-3 text-base font-semibold text-navy hover:no-underline md:gap-4 md:px-5 md:py-4 md:text-xl [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-gold md:[&_[data-slot=accordion-trigger-icon]]:size-6">
								{item.question}
							</AccordionTrigger>
							<AccordionContent className="border-t border-gray-100 px-4 pb-3 pt-0 text-sm leading-relaxed text-gray-600 md:px-5 md:pb-4 md:text-base">
								{item.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
