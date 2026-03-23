import Image from "next/image";
import Link from "next/link";

const ADVISOR_MATERIAL_FILE = "materials.pdf";
const ADVISOR_MATERIAL_HREF = `/images/materials/${encodeURIComponent(ADVISOR_MATERIAL_FILE)}`;

export default function Hero() {
	return (
		<section className="relative min-h-[480px] overflow-hidden bg-[var(--navy)] text-white md:min-h-[560px]">
			<Image
				src="/images/AdobeStock_1624862304_Preview.jpeg"
				alt="モダンで洗練された一軒家"
				fill
				className="object-cover object-center"
				priority
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/85 via-[var(--navy)]/70 to-[var(--navy-dark)]/90" />
			<div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
				<div className="max-w-3xl">
					<h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
						税理士の顧問先の不動産、もっと高く・安心して売却
					</h1>
					<p className="mt-6 text-lg text-white/90">
						不動産オークション方式で、顧問先の資産価値を最大化。
					</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<Link
							href="/form"
							className="rounded-md bg-[var(--gold)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--gold-light)]"
						>
							無料で資料請求する
						</Link>
						<a
							href={ADVISOR_MATERIAL_HREF}
							download={ADVISOR_MATERIAL_FILE}
							className="inline-flex rounded-md border border-white bg-white px-6 py-3 font-semibold text-[var(--navy)] transition hover:bg-white/10 hover:text-white/80"
						>
							顧問先向け説明資料DL
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
