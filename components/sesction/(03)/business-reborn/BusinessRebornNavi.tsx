"use client";

import Image from "next/image";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";

const heroImg = "/images/AdobeStock_271171292_Preview.jpeg";

export function BusinessRebornNavi() {
	return (
		<section
			id="businessReborn"
			aria-label="b'CASA business re-born"
			className="scroll-mt-10 relative w-full overflow-hidden bg-white"
		>
			<div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
				{/* Content：デスクトップは左（7列）。モバイルは RebornNavi に合わせ画像の下に来るよう order */}
				<div className="relative order-2 col-span-1 flex min-w-0 items-center bg-white lg:order-1 lg:col-span-7">
					<div className="w-full min-w-0 px-6 py-14 sm:px-10 lg:px-12 lg:py-14 xl:px-14">
						<div className="relative">
							<div
								className="pointer-events-none flex w-fit flex-col items-start gap-px md:gap-0.5"
								aria-hidden
							>
								<span className="text-[0.625rem] font-semibold tracking-[0.18em] text-muted-foreground md:text-[0.6875rem] md:tracking-[0.22em]">
									SERVICE
								</span>
								<p className="m-0 text-[2rem] font-bold leading-none tabular-nums text-gold/35 md:text-[4.5rem] md:text-gold/25">
									01
								</p>
							</div>
							<hgroup className="relative z-10 mt-8 md:mt-10">
								{/* <p className="m-0 font-serif text-sm tracking-[0.2em] text-muted-foreground">
									b&apos;CASA
								</p> */}
								<h2 className="flex flex-wrap items-baseline gap-x-2 font-serif font-light tracking-tight text-navy">
									<SplitText
										tag="span"
										text="business re-born"
										className="font-serif text-3xl font-light tracking-tight text-navy md:text-5xl"
										textAlign="left"
										{...sectionHeadingSplitTextProps}
									/>
									{/* <span className="text-xs text-muted-foreground md:text-sm">
										（法人のオーナー様）
									</span> */}
								</h2>
							</hgroup>
						</div>

						<div className="mt-2 h-1 w-16 bg-gold" aria-hidden />

						<p className="mt-4 text-base font-semibold text-navy md:text-2xl lg:whitespace-nowrap">
							中古アパートを活用した法人向け節税商品
						</p>

						<p className="mt-2 text-base font-bold text-gold md:text-xl">企業オーナー様必見</p>

						<p className="mt-3 w-full text-sm leading-relaxed text-muted-foreground md:text-xl">
							法人保険やオペレーティングリースに代わる、
							<br className="hidden sm:block" />
							大幅な税繰延べ効果でキャッシュフローの改善を実現します。
						</p>
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
					<div
						className="absolute inset-0 bg-linear-to-t from-black/20 via-black/10 to-black/5"
						aria-hidden
					/>
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
