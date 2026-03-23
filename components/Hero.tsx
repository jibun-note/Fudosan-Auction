import Image from "next/image";
import Link from "next/link";

const ADVISOR_MATERIAL_FILE = "materials.pdf";
const ADVISOR_MATERIAL_HREF = `/images/materials/${encodeURIComponent(ADVISOR_MATERIAL_FILE)}`;

export default function Hero() {
	return (
		<section className="relative flex min-h-[calc(100dvh-5rem)] flex-col justify-center overflow-hidden bg-[var(--navy)] text-white md:block md:min-h-[560px]">
			<Image
				src="/images/AdobeStock_1624862304_Preview.jpeg"
				alt="モダンで洗練された一軒家"
				fill
				className="object-cover object-center"
				priority
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/85 via-[var(--navy)]/70 to-[var(--navy-dark)]/90" />
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
							className="rounded-md bg-[var(--gold)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--gold-light)] md:px-6 md:py-3 md:text-base"
						>
							無料で資料請求する
						</Link>
						<a
							href={ADVISOR_MATERIAL_HREF}
							download={ADVISOR_MATERIAL_FILE}
							className="inline-flex rounded-md border border-white bg-white px-4 py-2.5 text-sm font-semibold text-[var(--navy)] transition hover:bg-white/10 hover:text-white/80 md:px-6 md:py-3 md:text-base"
						>
							顧問先向け説明資料DL
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
