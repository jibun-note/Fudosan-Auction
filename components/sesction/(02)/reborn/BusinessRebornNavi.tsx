"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { GoldButton } from "@/components/common/button/GoldButton";
import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";

const heroImg = "/images/AdobeStock_271171292_Preview.jpeg";

export function BusinessRebornNavi() {
	return (
		<section
			id="businessReborn"
			aria-label="b'CASA business re-born"
			className="relative w-full overflow-hidden bg-white"
		>
			<div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
				{/* Content：デスクトップは左（7列）。モバイルは RebornNavi に合わせ画像の下に来るよう order */}
				<div className="relative order-2 col-span-1 flex min-w-0 items-center bg-white lg:order-1 lg:col-span-7">
					<div className="w-full min-w-0 px-6 py-14 sm:px-10 lg:px-12 lg:py-20 xl:px-14">
						<div className="mb-1 flex flex-wrap items-baseline gap-2">
							<span className="font-serif text-sm tracking-[0.2em] text-muted-foreground">
								b&apos;CASA
							</span>
						</div>

						<h2 className="flex flex-wrap items-baseline gap-x-2 font-serif text-3xl font-light tracking-tight text-navy md:text-4xl lg:text-5xl">
							<SplitText
								tag="span"
								text="business re-born"
								className="font-serif text-3xl font-light tracking-tight text-navy md:text-4xl lg:text-5xl"
								textAlign="left"
								{...sectionHeadingSplitTextProps}
							/>
							<span className="text-xs text-muted-foreground md:text-sm">（法人のオーナー様）</span>
						</h2>

						<div className="mt-2 h-1 w-16 bg-gold" aria-hidden />

						<p className="mt-4 text-base font-semibold text-navy md:text-lg lg:text-xl lg:whitespace-nowrap">
							築古アパートを活用した法人向け節税商品
						</p>

						<p className="mt-2 text-base font-bold text-gold md:text-lg">企業オーナー様必見</p>

						<p className="mt-3 w-full text-xs leading-relaxed text-muted-foreground md:text-sm lg:text-base">
							法人保険やオペレーティングリースに代わる、
							<br className="hidden sm:block" />
							大幅な税繰延べ効果でキャッシュフローの改善を実現します。
						</p>

						<div className="mt-6">
							<GoldButton
								href="https://towa-corporation.jp/re-born_hojin/"
								target="_blank"
								className="group w-fit justify-start"
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

				{/* Image：デスクトップは右（5列）。モバイルは上に表示 */}
				<div className="relative order-1 col-span-1 h-[360px] min-h-0 lg:order-2 lg:col-span-5 lg:h-full">
					<div className="absolute inset-0">
						<Image
							src={heroImg}
							alt="法人向け節税・不動産投資のイメージ"
							fill
							className="object-cover object-center"
							sizes="(max-width: 1024px) 100vw, 42vw"
							priority
						/>
					</div>
					<div className="absolute inset-0 bg-navy/35" aria-hidden />
					{/* 左側をテキストエリアへフェード（画像が右列のため RebornNavi の右フェードと左右対称） */}
					<div
						className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-linear-to-r from-white to-transparent lg:block"
						aria-hidden
					/>
				</div>
			</div>
		</section>
	);
}
