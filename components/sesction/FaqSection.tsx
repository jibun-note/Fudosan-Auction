"use client";

import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";

const items = [
  {
    question: "一般仲介との一番の違いは何ですか？",
    answer:
      "価格決定プロセス、透明性、買い手の競争性が一般仲介とは大きく異なります。一般仲介が1対1の交渉であるのに対し、オークションは多数の購入希望者が競争することで価格が吊り上がる効果を狙います。また、プロセスが可視化されるため、売主の納得感も高くなります。",
  },
  {
    question: "もし売れなかった場合はどうなりますか？",
    answer:
      "最低落札価格に達しない場合は不成立となり、再度オークションの設定を見直すか、他の売却方法を検討することが可能です。詳細はご相談ください。",
  },
  {
    question: "手数料・コストについて教えてください。",
    answer:
      "手数料体系は物件や条件により異なります。資料請求またはお問い合わせいただければ、個別にご説明いたします。",
  },
  {
    question: "顧問税理士として、どこまで関与できますか？",
    answer:
      "紹介スキームに基づき、顧問先様への説明同席や税務シミュレーションのご提案まで、役割に応じて関与いただけます。成果の共有方法・守秘義務・利益相反については個別資料でご説明します。",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-[var(--navy)] md:text-3xl">
          よくあるご質問
        </h2>
        <div className="mt-2 h-1 w-16 bg-[var(--gold)]" />
        <div className="mt-12 space-y-3">
          {items.map((item, i) => (
            <div
              key={item.question}
              className="rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold text-[var(--navy)] md:text-xl"
              >
                {item.question}
                <HiOutlineChevronDown
                  className={`size-6 shrink-0 text-[var(--gold)] transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="border-t border-gray-100 px-5 py-4 text-base leading-relaxed text-gray-600 md:text-base">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
