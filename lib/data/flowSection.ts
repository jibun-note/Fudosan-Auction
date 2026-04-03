/** `@/components/sesction/flow` 用 */

export type FlowStepIconKey =
	| "document"
	| "currencyYen"
	| "scale"
	| "handshake"
	| "chatBubble";

export type FlowStepData = {
	title: string;
	description: string;
	iconKey: FlowStepIconKey;
};

export const flowStepsData: FlowStepData[] = [
	{
		iconKey: "document",
		title: "資料請求・査定",
		description: "フォーム入力・面談希望。市場データと現地/オンラインで査定します。",
	},
	{
		iconKey: "currencyYen",
		title: "最低落札価格設定",
		description: "税務・収支と整合性をとり、売主様と合意の上で価格を設定します。",
	},
	{
		iconKey: "scale",
		title: "オークション開催",
		description: "募集から入札、最終確認まで。平均リードタイムは2-6週間です。",
	},
	{
		iconKey: "handshake",
		title: "成約・決済",
		description: "スケジュールを確定し、顧問税理士様と連携して決済に進みます。",
	},
	{
		iconKey: "chatBubble",
		title: "アフターフォロー",
		description: "売却後の税務申告まで、必要に応じてサポートいたします。",
	},
];
