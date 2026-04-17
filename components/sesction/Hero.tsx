import Image from "next/image";

import { GoldButton } from "@/components/common/button/GoldButton";

export default function Hero() {
	return (
		<section className="relative flex w-full min-h-[calc(85dvh-5rem)] flex-col items-stretch justify-center overflow-hidden bg-navy text-white ">
			<Image
				src="/images/AdobeStock_285833204_Preview.jpeg"
				alt="モダンで洗練された一軒家"
				fill
				className="object-cover object-center"
				priority
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-linear-to-b from-navy/35 via-navy/20 to-navy-dark/40" />
			<div className="relative w-full max-w-7xl px-4 py-6 text-left md:px-24 md:py-16">
				<div className="max-w-3xl text-left">
					<h1 className="text-left text-2xl font-bold leading-snug tracking-tight md:text-4xl md:leading-tight">
						顧客の不動産売却・節税・資産形成を
					</h1>
					<p className="mt-3 text-left text-lg font-bold text-white/90 md:mt-4 md:text-xl">
						“透明性と専門性”で支える、信頼できるパートナーへ。
					</p>
					<div className="mt-6 flex w-full flex-wrap justify-start gap-2 text-left text-base md:mt-8 md:gap-4 md:whitespace-nowrap">
						<p className="text-left">不動産売却も節税も、任せられる先がない。</p>
						<p className="text-left">
							貴社の提案力を“資産・不動産・節税”まで拡張し顧客に安心して紹介できる、唯一の透明な仕組みと商品。
						</p>
						<p className="text-left">
							顧客の資産課題に、専門家が自信を持って応えられる。
							不動産・節税・資産形成を支える信頼のパートナーサービス。
						</p>
					</div>
					<div className="mt-6 flex flex-wrap justify-start gap-2 md:mt-10 md:gap-4">
						<GoldButton className="justify-start" href="/home/form">
							無料で資料請求する
						</GoldButton>
					</div>
				</div>
			</div>
		</section>
	);
}
