import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCurrencyYen,
  HiOutlineDocumentText,
  HiOutlineHandRaised,
  HiOutlineScale,
} from "react-icons/hi2";

const steps = [
  {
    icon: HiOutlineDocumentText,
    title: "資料請求・査定",
    description:
      "フォーム入力・面談希望。市場データと現地/オンラインで査定します。",
  },
  {
    icon: HiOutlineCurrencyYen,
    title: "最低落札価格設定",
    description:
      "税務・収支と整合性をとり、売主様と合意の上で価格を設定します。",
  },
  {
    icon: HiOutlineScale,
    title: "オークション開催",
    description:
      "募集から入札、最終確認まで。平均リードタイムは2-6週間です。",
  },
  {
    icon: HiOutlineHandRaised,
    title: "成約・決済",
    description:
      "スケジュールを確定し、顧問税理士様と連携して決済に進みます。",
  },
  {
    icon: HiOutlineChatBubbleBottomCenterText,
    title: "アフターフォロー",
    description:
      "売却後の税務申告まで、必要に応じてサポートいたします。",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-[var(--navy)] md:text-3xl">
          ご利用の流れ
        </h2>
        <div className="mt-2 h-1 w-16 bg-[var(--gold)]" />
        <div className="mt-12">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-0">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="flex flex-1 flex-col items-center md:flex-row md:min-w-0">
                <div className="flex flex-col items-center text-center md:flex-1">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[var(--gold)]">
                    <Icon className="size-10" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--navy)] md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600 md:text-base">
                    {description}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden h-0.5 w-8 shrink-0 self-center bg-amber-200 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
