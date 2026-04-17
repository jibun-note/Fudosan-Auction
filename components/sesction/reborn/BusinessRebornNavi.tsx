import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { GoldButton } from "@/components/common/button/GoldButton";

const heroImg = "/images/AdobeStock_271171292_Preview.jpeg";

/** RebornNavi と同じ斜め白フェザー（画像上で左右反転） */
const FEATHER_GRAD =
	"linear-gradient(109deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 36%, rgba(255,255,255,0.55) 43%, rgba(255,255,255,0.92) 47.5%, rgba(255,255,255,0.35) 49%, rgba(255,255,255,0) 50%)";

export function BusinessRebornNavi() {
	return (
		<section id="businessReborn" className="relative w-full overflow-hidden bg-white">
			<div className="relative h-[460px] w-full md:h-[520px]">
				{/* 右半分：画像コンテナ（RebornNavi の左と対称・object-cover で埋める） */}
				<div className="absolute inset-y-0 right-0 z-0 w-full md:w-[58%]">
					<Image
						src={heroImg}
						alt="法人向け節税・不動産投資のイメージ"
						fill
						className="object-cover object-center"
						sizes="(max-width: 768px) 100vw, 58vw"
						priority
					/>
				</div>
				<div
					className="pointer-events-none absolute inset-0 z-[1] scale-x-[-1]"
					style={{ background: FEATHER_GRAD }}
					aria-hidden
				/>
				{/* 左半分：白＋斜めクリップ（RebornNavi と左右対称・ヘアライン対策） */}
				<div
					className="absolute -top-px bottom-0 left-0 z-[2] w-full bg-white md:w-[58%]"
					style={{
						clipPath: "polygon(0 -1px, 92% -1px, 100% 100%, 0 100%)",
					}}
				>
					{/* 文量・見出し一行のため md〜は pl/pr を抑えて可読幅を確保（斜め寄りは xl〜で再拡大） */}
					<div className="flex h-full min-h-0 flex-col justify-center px-8 pr-12 sm:pr-14 md:pl-12 md:pr-12 lg:pl-14 lg:pr-20 xl:pl-20 xl:pr-36 2xl:pl-24 2xl:pr-48">
						<div className="mb-1 flex flex-wrap items-baseline gap-2">
							<span className="font-serif text-sm tracking-[0.2em] text-muted-foreground">
								b&apos;CASA
							</span>
						</div>
						<h2 className="font-serif text-3xl font-light tracking-tight text-navy md:text-4xl lg:text-5xl">
							business re-born
							<span className="ml-2 text-xs text-muted-foreground md:text-sm">
								（法人のオーナー様）
							</span>
						</h2>
						<div className="mt-2 h-1 w-16 bg-gold" />
						<p className="mt-4 text-base font-semibold text-navy md:text-lg lg:text-xl">
							築古アパートを活用した法人向け節税商品
						</p>
						<p className="mt-2 text-base font-bold text-gold md:text-lg">企業オーナー様必見</p>
						<p className="mt-3 w-full text-xs leading-relaxed text-muted-foreground md:text-sm lg:text-base">
							法人保険やオペレーティングリースに代わる、
							<br className="hidden sm:block" />
							大幅な税繰延べ効果でキャッシュフローの改善を実現します。
						</p>
						<GoldButton
							href="https://towa-corporation.jp/re-born_hojin/"
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
