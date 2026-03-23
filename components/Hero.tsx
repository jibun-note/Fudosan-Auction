import Image from "next/image";
import Link from "next/link";

const ADVISOR_MATERIAL_FILE = "materials.pdf";
const ADVISOR_MATERIAL_HREF = `/images/materials/${encodeURIComponent(ADVISOR_MATERIAL_FILE)}`;

export default function Hero() {
	return (
		<section className="relative flex min-h-[calc(100dvh-5rem)] flex-col justify-center overflow-hidden bg-navy text-white md:block md:min-h-140">
			<Image
				src="/images/AdobeStock_1624862304_Preview.jpeg"
				alt="モダンで洗練された一軒家"
				fill
				className="object-cover object-center"
				priority
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-linear-to-b from-navy/85 via-navy/70 to-navy-dark/90" />
			<div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-32">
				<div className="max-w-3xl">
					<h1 className="text-2xl font-bold leading-snug tracking-tight md:text-4xl md:leading-tight lg:text-5xl">
						税理士の顧問先の不動産、もっと高く・安心して売却
					</h1>
					<p className="mt-3 text-sm text-white/90 md:mt-6 md:text-lg">
						不動産オークション方式で、顧問先の資産価値を最大化。
					</p>
					<div className="mt-6 flex flex-wrap gap-2 md:mt-10 md:gap-4">
						<Link
							href="/home/form"
							className="rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-light md:px-6 md:py-3 md:text-base"
						>
							無料で資料請求する
						</Link>
						<a
							href={ADVISOR_MATERIAL_HREF}
							download={ADVISOR_MATERIAL_FILE}
							className="inline-flex rounded-md border border-white bg-white px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-white/10 hover:text-white/80 md:px-6 md:py-3 md:text-base"
						>
							顧問先向け説明資料DL
						</a>
					</div>
					<div className="text-xs mt-6 w-full flex flex-wrap gap-2 md:mt-10 md:gap-4 md:whitespace-nowrap">
						<p>
							宅地建物取引業者免許 東京都知事（2）第102684号 加盟団体
							公益社団法人東京都宅地建物取引業協会 加盟団体 横浜市不動産のれん会 加盟団体会
							一般社団法人法律・税金・経営を学ぶ会　会員
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
