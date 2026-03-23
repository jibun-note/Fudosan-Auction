import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="border-b border-white/10 bg-[var(--navy-dark)] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold">
          顧問先の資産価値を最大化する新しい一手を、今すぐご提案ください。
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/80 md:text-base">
          オンラインでのご説明も随時対応しております。最短で即日のお打ち合わせも可能です。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/form"
            className="rounded-md bg-[var(--gold)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--gold-light)]"
          >
            無料で資料請求する
          </Link>
          <Link
            href="/seminar"
            className="rounded-md border border-white bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            オンライン説明会に申込む
          </Link>
        </div>
      </div>
    </section>
  );
}
