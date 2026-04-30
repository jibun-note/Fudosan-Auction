/** `@/components/sesction/sale-plan` 用（サーバー・クライアント双方からインポート可） */

import type { AchievementCardData } from "@/components/sesction/common/achievement-card/achievement-card-type";

export const salePlanIntroVideo = {
	embedUrl: "https://www.youtube.com/embed/MlIg1--4If8?si=4NhSq4wHz8F7TPa3",
	title: "3分で分かる！「不動産売却計画書」のヒミツ",
} as const;

/** `salePlanPillars` の iconKey と react-icons の対応用（データ側は文字列のみ） */
export type SalePlanThreeStepsIconKey = "chartBarSquare" | "calculator" | "lightBulb";

export type SalePlanThreeSteps = {
	iconKey: SalePlanThreeStepsIconKey;
	step: string;
	title: string;
	subtitle: string;
	description: string;
};

/** 不動産売却計画書の3ステップ（カード一覧） */
export const salePlanThreeSteps: SalePlanThreeSteps[] = [
	{
		iconKey: "chartBarSquare",
		step: "01",
		title: "物件分析",
		subtitle: "豊富な資料を元に\nあらゆる角度から徹底分析",
		description:
			"近隣地盤の調査結果から近隣の不動産価格、家賃、アクセスや生活施設、土地の利用履歴や浸水の可能性に至るまで、売却価格変動の大きな要因となるデータを元に多角的分析を行います。",
	},
	{
		iconKey: "calculator",
		step: "02",
		title: "検証・試算",
		subtitle: "物件を多角的に検証し最大限の利益を試算",
		description:
			"豊富な資料に基づく物件の分析と調査を経て、その土地を売却するにはいかなる方法が考えられ、コストを考慮に入れた最高売却可能額はいくらになるかの検証と試算を行います。",
	},
	{
		iconKey: "lightBulb",
		step: "03",
		title: "結論・提案",
		subtitle: "迅速に結論を導きベストの選択をご提案",
		description:
			"緻密な分析と検証・試算により導かれる「その土地を最も高く売る方法」をご提案。一般の不動産業者が出す査定額とは全く異なった観点から算出された売却価格をご提示します。",
	},
];

/** 売却価格アップ事例 — `AchievementCard` に渡すデータ */
export const salePlanAchievementCard: AchievementCardData = {
	oldRentLabel: "古家つきの土地",
	oldRentAmount: "3,000",
	oldCaption: "一般査定額",
	arrowLabel: "売却計画書",
	newRentLabel: "建売住戸3棟の価値",
	newRentAmount: "5,000",
	newCaption: "売却計画書の査定額",
	increasePercent: "2,000",
	increaseBadgeSuffix: "万円 UP!",
	footer: "",
	currencyUnit: "万円",
};

export type SalePlanFAQItem = {
	question: string;
	answer: string;
};

export const salePlanFAQItems: SalePlanFAQItem[] = [
	{
		question: "一般仲介との一番の違いは何ですか？",
		answer: "価格決定プロセス、透明性、買い手の競争性が一般仲介とは大きく異なります。一般仲介が1対1の交渉であるのに対し、オークションは多数の購入希望者が競争することで価格が吊り上がる効果を狙います。また、プロセスが可視化されるため、売主の納得感も高くなります。",
	},
	{
		question: "もし売れなかった場合はどうなりますか？",
		answer: "最低落札価格に達しない場合は不成立となり、再度オークションの設定を見直すか、他の売却方法を検討することが可能です。詳細はご相談ください。",
	},
	{
		question: "手数料・コストについて教えてください。",
		answer: "手数料体系は物件や条件により異なります。資料請求またはお問い合わせいただければ、個別にご説明いたします。",
	},
	{
		question: "顧問税理士として、どこまで関与できますか？",
		answer: "紹介スキームに基づき、顧問先様への説明同席や税務シミュレーションのご提案まで、役割に応じて関与いただけます。成果の共有方法・守秘義務・利益相反については個別資料でご説明します。",
	},
];
