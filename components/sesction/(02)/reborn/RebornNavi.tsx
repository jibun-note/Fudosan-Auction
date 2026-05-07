"use client";

import Image from "next/image";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";

const heroImg = "/images/AdobeStock_1829773049_Preview.jpeg";

export function RebornNavi() {
	return (
		<section
			id="reborn"
			aria-label="b'CASA re-born"
			className="scroll-mt-10 relative w-full overflow-hidden bg-white"
		>
			<div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
				{/* Image side：デスクトップはテキスト列の行高に合わせて伸長（絶対配置のため lg:h-full が必要） */}
				<div className="relative col-span-1 h-[360px] min-h-0 lg:col-span-5 lg:h-full">
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
					<div
						className="pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-linear-to-l from-white to-transparent lg:block"
						aria-hidden
					/>
				</div>

				{/* Content side */}
				<div className="relative col-span-1 flex min-w-0 items-center bg-white lg:col-span-7">
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
								<p className="m-0 font-serif text-sm tracking-[0.2em] text-muted-foreground">
									b&apos;CASA
								</p>
								<h2 className=" flex flex-wrap items-baseline gap-x-1 font-serif text-3xl font-light tracking-tight text-navy md:text-4xl lg:text-5xl">
									<SplitText
										tag="span"
										text="re-born"
										className="font-serif text-3xl font-light tracking-tight text-navy md:text-4xl lg:text-5xl"
										textAlign="left"
										{...sectionHeadingSplitTextProps}
									/>
									<span className="text-xs text-muted-foreground md:text-sm">
										（個人版）
									</span>
								</h2>
							</hgroup>
						</div>

						<div className="mt-2 h-1 w-16 bg-gold" aria-hidden />

						<p className="mt-4 text-base font-semibold text-navy md:text-xl lg:whitespace-nowrap">
							築古アパートを活用した短期減価償却事業
						</p>

						<p className="mt-3 w-full text-sm leading-relaxed text-muted-foreground md:text-lg">
							築古アパートの短期減価償却を活用した、[節税+家賃収入]投資商品
							<br className="hidden sm:block" />
							業界初の売却時差額保証により売却時には購入価格の100%を保証。
							<br className="hidden sm:block" />
							リスクを限りなく抑えた投資商品をご提案します。
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
