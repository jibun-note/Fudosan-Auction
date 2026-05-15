import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ITEMS: string[] = [
	"中小企業倒産防止掛金(経営セーフティ共済)",
	"オペレーティングリース※1(現在実質商品無し)",
	"逓増定期保険※2",
	"貸倒引当金※3の利用",
	"短期前払費用の特例利用",
	"旅費規程作成による日当支払い",
	"少額減価償却資産や不良資産の処分",
	"各種税額控除制度の利用",
	"中古資産の購入による短期償却の利用",
];

const CHART_IMAGE = "/images/BusinessReborn_Item2.png";

export type BusinessRebornItemProps = {
	className?: string;
};

export default function BusinessRebornItem({ className }: BusinessRebornItemProps) {
	return (
		<Card
			className={cn(
				"mt-8 overflow-hidden rounded-2xl border-gold/30 bg-linear-to-br from-[#fdfaf3] to-white font-serif text-navy shadow-[0_10px_40px_rgba(30,58,95,0.08)] md:mt-10",
				className,
			)}
		>
			<div className="h-1 bg-gold" aria-hidden />
			<CardContent className="p-0">
				<div className="border-b border-gold/15 px-5 pb-5 pt-6 text-center md:px-10 md:pb-6 md:pt-8">
					<p className="inline-block  pb-1 text-base font-medium tracking-wide text-slate-600 md:text-xl">
						一般的な税繰延べ方法 VS 収益不動産（中古アパート）
					</p>
				</div>

				<div className="grid gap-6 p-5 md:p-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.32fr)] lg:gap-8 lg:p-8 lg:pt-6">
					<div>
						<p className="text-sm font-bold text-navy md:text-lg">一般的な税繰延べ方法</p>
						<ul className="mt-3 space-y-1.5">
							{ITEMS.map((line, i) => (
								<li
									key={i}
									className="flex items-center gap-2 text-left text-sm leading-relaxed text-slate-700 md:gap-2 md:text-[17px]"
								>
									<span
										className="size-1.5 shrink-0 self-center rounded-full bg-gold"
										aria-hidden
									/>
									<span className="min-w-0 flex-1">{line}</span>
								</li>
							))}
						</ul>
						<p className="mt-2.5 pl-3.5 text-left text-sm leading-relaxed text-slate-700 md:pl-4 md:text-lg">
							etc
						</p>
						<div className="mt-5 border-t border-slate-200/80 pt-3.5 text-[11px] leading-relaxed text-slate-600 md:text-[13px]">
							<p>
								<span className="font-semibold text-navy">※1</span>
								：航空機や船舶等のリース取引を利用
							</p>
							<p className="mt-1.5">
								<span className="font-semibold text-navy">※2</span>
								：解約返戻金を活用
							</p>
							<p className="mt-1.5">
								<span className="font-semibold text-navy">※3</span>
								：税務上認められる法定繰入率を使用した貸倒引当金計上
							</p>
						</div>
					</div>

					<figure className="m-0 min-w-0">
						<div className="relative aspect-[5/4] w-full min-h-72 md:min-h-88 lg:aspect-[7/6] lg:min-h-[26rem]">
							<Image
								src={CHART_IMAGE}
								alt="収益不動産（築古アパート）当社スキームと他手法の比較表"
								fill
								sizes="(min-width: 1024px) 60vw, 100vw"
								className="object-contain object-top"
								priority
							/>
						</div>
						<figcaption className="sr-only">
							期間・借入・中途解約、満期時保証、損金算入率などの比較表
						</figcaption>
					</figure>
				</div>
			</CardContent>
		</Card>
	);
}
