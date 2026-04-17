import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { GoldButton } from "@/components/common/button/GoldButton";

const heroImg = "/images/AdobeStock_1829773049_Preview.jpeg";

/** 右パネルと同じ斜め（左境界の角度に合わせた白フェザー） */
const FEATHER_GRAD =
	"linear-gradient(109deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 36%, rgba(255,255,255,0.55) 43%, rgba(255,255,255,0.92) 47.5%, rgba(255,255,255,0.35) 49%, rgba(255,255,255,0) 50%)";

export function RebornNavi() {
	return (
		<section id="reborn" className="relative w-full overflow-hidden bg-white">
			<div className="relative h-[460px] w-full md:h-[520px]">
				{/* 左半分：画像コンテナ（幅を制限して object-cover で埋める） */}
				<div className="absolute inset-y-0 left-0 z-0 w-full md:w-[58%]">
					<Image
						src={heroImg}
						alt="法人向け節税・不動産投資のイメージ"
						fill
						className="object-cover object-center"
						sizes="(max-width: 768px) 100vw, 58vw"
						priority
					/>
				</div>
				{/* 斜め境界付近の白フェザー（画像側） */}
				<div
					className="pointer-events-none absolute inset-0 z-[1]"
					style={{ background: FEATHER_GRAD }}
					aria-hidden
				/>
				{/* 右半分：白＋斜めクリップ（上辺を -1px ＆ -top-px でヘアライン対策） */}
				<div
					className="absolute -top-px right-0 bottom-0 z-[2] w-full bg-white md:w-[58%]"
					style={{
						clipPath: "polygon(8% -1px, 100% -1px, 100% 100%, 0 100%)",
					}}
				>
					<div className="flex h-full flex-col justify-center px-8 pl-14 md:pl-28 lg:pl-40 xl:pl-52 2xl:pl-64">
						<div className="mb-1 flex flex-wrap items-baseline gap-2">
							<span className="font-serif text-sm tracking-[0.2em] text-muted-foreground">
								b&apos;CASA
							</span>
						</div>
						<h2 className="font-serif text-3xl font-light tracking-tight text-navy md:text-4xl lg:text-5xl">
							re-born
							<span className="ml-2 text-xs text-muted-foreground md:text-sm">（個人版）</span>
						</h2>
						<div className="mt-2 h-1 w-16 bg-gold" />
						<p className="mt-4 text-base font-semibold text-navy md:text-lg lg:text-xl">
							築古アパートを活用した短期減価償却事業
						</p>
						{/* <p className="mt-2 text-base font-bold text-gold md:text-lg">企業オーナー様必見！</p> */}
						<p className="mt-3 w-full text-xs leading-relaxed text-muted-foreground md:text-sm lg:text-base">
							築古アパートの短期減価償却を活用した、[節税+家賃収入]投資商品
							<br className="hidden sm:block" />
							業界初の売却時差額保証により売却時には購入価格の100%を保証。
							<br className="hidden sm:block" />
							リスクを限りなく抑えた投資商品をご提案します。
						</p>
						<GoldButton
							href="https://towa-corporation.jp/re-born_fudousan/"
							target="_blank"
							className="group mt-6 w-fit justify-start"
						>
							詳細を見る
							<ChevronRight
								className="h-4 w-4 transition-transform group-hover:translate-x-1"
								aria-hidden
							/>
						</GoldButton>
					</div>
				</div>
			</div>
		</section>
	);
}
