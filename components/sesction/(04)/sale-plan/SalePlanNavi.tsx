"use client";

import Image from "next/image";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";

const heroImg = "/images/AdobeStock_1589598207_Preview.jpeg";

export function SalePlanNavi() {
	return (
		<section
			id="salePlan"
			aria-label="sale plan navi"
			className="scroll-mt-10 relative w-full overflow-hidden bg-white"
		>
			<div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
				{/* Image side：デスクトップはテキスト列の行高に合わせて伸長（絶対配置のため lg:h-full が必要） */}
				<div className="relative col-span-1 h-[360px] min-h-0 lg:col-span-5 lg:h-full">
					<div className="absolute inset-0">
						<Image
							src={heroImg}
							alt="クライアントの資産売却計画書＋オークション"
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
									02
								</p>
							</div>
							<h2 className="relative z-10 mt-8 flex flex-wrap items-baseline gap-x-2 font-serif text-3xl font-light tracking-tight text-navy md:mt-10 md:text-4xl lg:text-5xl">
								<SplitText
									tag="span"
									text="資産売却計画書＋オークション"
									className="font-serif text-2xl font-light tracking-tight text-navy md:text-3xl lg:text-3xl"
									textAlign="left"
									{...sectionHeadingSplitTextProps}
								/>
							</h2>
						</div>

						<div className="mt-2 h-1 w-16 bg-gold" aria-hidden />

						<p className="mt-4 text-base font-semibold text-navy md:text-xl lg:whitespace-nowrap">
							不動産の価値を最大化し、オークションでさらに高く
						</p>

						<p className="mt-3 w-full text-sm leading-relaxed text-muted-foreground md:text-lg">
							不動産の最大価値を様々な角度から分析し、近隣相場だけで算出する
							<br className="hidden sm:block" />
							単なる査定書とは異なる「売却計画書」を無料作成します。さらに、
							<br className="hidden sm:block" />
							不動産オークションで売却希望のお客様と購入希望の企業をマッチング。
							<br className="hidden sm:block" />
							今までにない専門的なアプローチで高値売却を実現させましょう。
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
