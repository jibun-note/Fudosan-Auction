"use client";

import { useEffect, useRef, useState } from "react";
import { FaHandshake } from "react-icons/fa6";
import {
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineCurrencyYen,
	HiOutlineDocumentText,
	HiOutlineScale,
} from "react-icons/hi2";

/** 参考: GOLD / GOLD_LIGHT */
const FLOW_GOLD = "#c5a55a";
const FLOW_GOLD_LIGHT = "#e8d5a0";
/** アクティブ円グラデの左上（メインよりやや濃い程度／#92753c は濃すぎるため中間トーン） */
const FLOW_GOLD_DEEP = "#ab8d4b";
/** メインカード背景（参考デザイン寄せのディープネイビー） */
const CARD_BG = "#1c2e49";
const FLOW_CREAM = "#f9f8f6";
/** カード内の大きなステップ数字（背景よりわずかに明るいトーン） */
const CARD_STEP_DIGIT = "#314b6b";
/** タイムライン番号円: アクティブ（左上＝濃い → 右下＝薄い） */
const GRADIENT_STEP_ACTIVE = `linear-gradient(to bottom right, ${FLOW_GOLD_DEEP} 0%, ${FLOW_GOLD} 48%, ${FLOW_GOLD_LIGHT} 100%)`;
const CONNECTOR_TRACK = "#dcd5c8";
const STEP_LABEL_MUTED = "#a3a3a3";
const FOCUS_OUTLINE_GOLD =
	"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a55a]";
/** モバイル: この距離（px）以上の水平スワイプで前後ステップへ */
const SWIPE_THRESHOLD_PX = 56;
/** 自動で次のステップへ進むまでの時間（接続線アニメと同期） */
const AUTO_SLIDE_MS = 5500;

const steps = [
	{
		icon: HiOutlineDocumentText,
		title: "資料請求・査定",
		description: "フォーム入力・面談希望。市場データと現地/オンラインで査定します。",
	},
	{
		icon: HiOutlineCurrencyYen,
		title: "最低落札価格設定",
		description: "税務・収支と整合性をとり、売主様と合意の上で価格を設定します。",
	},
	{
		icon: HiOutlineScale,
		title: "オークション開催",
		description: "募集から入札、最終確認まで。平均リードタイムは2-6週間です。",
	},
	{
		icon: FaHandshake,
		title: "成約・決済",
		description: "スケジュールを確定し、顧問税理士様と連携して決済に進みます。",
	},
	{
		icon: HiOutlineChatBubbleBottomCenterText,
		title: "アフターフォロー",
		description: "売却後の税務申告まで、必要に応じてサポートいたします。",
	},
] as const;

/** 接続線の進捗は rAF で DOM を直接更新（大画面・一部環境で CSS キーフレーム / clip-path アニメが効かない事例への対策） */
function ConnectorProgressFill({
	durationMs,
	backgroundColor,
}: {
	durationMs: number;
	backgroundColor: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduceMotion) {
			el.style.clipPath = "inset(0 0 0 0)";
			return;
		}

		let cancelled = false;
		let rafId = 0;
		el.style.clipPath = "inset(0 100% 0 0)";
		const start = performance.now();
		const tick = (now: number) => {
			if (cancelled) return;
			const p = Math.min(1, (now - start) / durationMs);
			const rightInset = Math.max(0, (1 - p) * 100);
			el.style.clipPath = `inset(0 ${rightInset}% 0 0)`;
			if (p < 1) rafId = requestAnimationFrame(tick);
		};
		rafId = requestAnimationFrame(tick);
		return () => {
			cancelled = true;
			cancelAnimationFrame(rafId);
		};
	}, [durationMs]);

	return (
		<div
			ref={ref}
			className="pointer-events-none absolute inset-y-0 left-0 w-full rounded-full"
			style={{
				backgroundColor,
				clipPath: "inset(0 100% 0 0)",
			}}
			aria-hidden
		/>
	);
}

export default function FlowSection() {
	const [active, setActive] = useState(0);
	const touchStartRef = useRef<{ x: number; y: number } | null>(null);

	// ステップが変わるたびにタイマーを張り直し、一定間隔で自動遷移する
	useEffect(() => {
		const t = window.setTimeout(() => {
			setActive((i) => (i + 1) % steps.length);
		}, AUTO_SLIDE_MS);
		return () => window.clearTimeout(t);
	}, [active]);

	const { icon: Icon, title, description } = steps[active];

	return (
		<section id="flow" className="px-4 py-12 md:px-6 md:py-20" style={{ backgroundColor: FLOW_CREAM }}>
			<div className="mx-auto max-w-6xl">
				<div>
					<h2 className="text-lg font-bold text-navy md:text-3xl">ご利用の流れ</h2>
					<div className="mt-2 h-1 w-16 bg-gold" />
				</div>

				{/* 横タイムライン（進捗付き接続線）
				    overflow-x-auto は overflow-y を auto にしがちで、パルスの box-shadow が上下で切れる。
				    上に余白を足してリングが収まるようにする。 */}
				<div className="mx-auto mt-10 max-w-4xl overflow-x-auto px-1 pb-2 pt-5 md:mt-14 md:px-0 md:pt-6">
					<div className="mx-auto flex min-w-[min(100%,36rem)] max-w-4xl items-start justify-between gap-0 md:min-w-0">
						{steps.map((step, i) => {
							const isOn = i === active;
							const isPassed = i < active;
							return (
								<div
									key={step.title}
									className="flex min-w-0 flex-1 items-start last:flex-none"
								>
									<div className="flex min-w-[4.5rem] max-w-[6.5rem] shrink-0 flex-col items-center px-0.5 md:max-w-[7rem] md:px-1">
										<button
											type="button"
											onClick={() => setActive(i)}
											className={`flex flex-col items-center rounded-full ${FOCUS_OUTLINE_GOLD}`}
											aria-current={isOn ? "step" : undefined}
											aria-label={`ステップ${i + 1}: ${step.title}`}
										>
											<span
												className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-[background-image,background-color,box-shadow,color,border-color] md:h-10 md:w-10 md:text-base ${isOn ? "flow-step-pulse border-0" : "border"}`}
												style={{
													// 3状態: アクティブ(グラデ) / 通過済み(薄ゴールド) / 未通過(透明)
													backgroundImage: isOn ? GRADIENT_STEP_ACTIVE : "none",
													backgroundColor: isOn
														? "transparent"
														: isPassed
															? "rgba(197, 165, 90, 0.2)"
															: "transparent",
													borderColor: isOn
														? "transparent"
														: isPassed
															? FLOW_GOLD
															: "#d6cfbf",
													color: isOn ? "#fff" : isPassed ? FLOW_GOLD : "#7c7c7c",
												}}
											>
												{i + 1}
											</span>
											<span
												className="mt-2 line-clamp-2 max-w-[5.75rem] text-[10px] leading-tight md:max-w-none md:text-xs"
												style={{ color: STEP_LABEL_MUTED }}
											>
												{step.title}
											</span>
										</button>
									</div>
									{i < steps.length - 1 && (
										<div
											className="mx-1 mt-[18px] hidden min-h-px min-w-[1.75rem] flex-1 items-center md:mx-2 md:flex md:min-w-[3.5rem] lg:min-w-[5rem]"
											aria-hidden
										>
											<div
												className="relative h-px w-full overflow-hidden rounded-full"
												style={{ backgroundColor: CONNECTOR_TRACK }}
											>
												{/* 通過済み区間は即時塗り、現在区間は進捗アニメで塗る */}
												{i < active && (
													<div
														className="absolute inset-0 rounded-full"
														style={{ backgroundColor: FLOW_GOLD }}
													/>
												)}
												{i === active && (
													<ConnectorProgressFill
														key={`flow-connector-${active}`}
														durationMs={AUTO_SLIDE_MS}
														backgroundColor={FLOW_GOLD}
													/>
												)}
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>

				{/* メインカード（モバイル: 水平スワイプで前後ステップ） */}
				<div
					className="mx-auto mt-8 flex max-w-4xl items-stretch overflow-hidden rounded-xl text-left shadow-[0_12px_40px_rgba(7,11,18,0.35)] md:mt-12 md:rounded-2xl"
					style={{ backgroundColor: CARD_BG }}
					onTouchStart={(e) => {
						if (e.touches.length !== 1) return;
						const t = e.touches[0];
						touchStartRef.current = { x: t.clientX, y: t.clientY };
					}}
					onTouchEnd={(e) => {
						const start = touchStartRef.current;
						touchStartRef.current = null;
						if (!start || e.changedTouches.length !== 1) return;
						if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
							return;
						}
						const t = e.changedTouches[0];
						const dx = t.clientX - start.x;
						const dy = t.clientY - start.y;
						if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) <= Math.abs(dy)) return;
						if (dx > 0) {
							setActive((i) => (i - 1 + steps.length) % steps.length);
						} else {
							setActive((i) => (i + 1) % steps.length);
						}
					}}
				>
					<div className="flex min-w-0 flex-1 flex-col gap-8 px-5 py-8 md:flex-row md:items-center md:gap-10 md:px-10 md:py-10 lg:gap-14 lg:px-12">
						<div className="flex shrink-0 flex-col items-center md:items-start">
							<div
								key={active}
								className="flow-card-text-enter flex w-full flex-col items-center"
							>
								<div className="relative">
									<span
										className="block text-center text-[4.5rem] leading-none font-extralight md:text-[7rem]"
										style={{
											color: CARD_STEP_DIGIT,
											textShadow: "0 0 16px rgba(9, 15, 26, 0.18)",
										}}
									>
										{String(active + 1).padStart(2, "0")}
									</span>
									<span
										className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold uppercase md:text-[11px]"
										style={{ color: FLOW_GOLD, letterSpacing: "0.35em" }}
									>
										STEP
									</span>
								</div>
								<div
									className="mt-3 flex size-16 items-center justify-center rounded-full border md:mt-5 md:size-24"
									style={{
										color: FLOW_GOLD,
										backgroundImage: "url('/images/藤和ロゴ.svg')",
										backgroundSize: "contain",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
										borderColor: "transparent",
									}}
									aria-hidden
								>
									<Icon className="size-7 md:size-9" strokeWidth={0.9} />
								</div>
							</div>
						</div>
						<div className="min-w-0 flex-1 md:border-l-[0.5px] md:border-white/[0.04] md:pl-8 lg:pl-10">
							<div key={active} className="flow-card-text-enter">
								<h3 className="text-lg font-normal tracking-[0.08em] text-white md:text-2xl">
									{title}
								</h3>
								<div
									className="mt-3 h-[0.5px] w-10 md:mt-4 md:w-12"
									style={{ backgroundColor: "rgba(197, 165, 90, 0.72)" }}
								/>
								<p className="mt-4 text-sm font-light leading-[1.95] tracking-[0.04em] text-neutral-400 md:mt-5 md:text-base">
									{description}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* 下部インジケーター */}
				<div className="mt-8 flex justify-center md:mt-10">
					<div className="flex items-center gap-2.5" aria-label="ステップの位置">
						{steps.map((_, i) => (
							<button
								key={i}
								type="button"
								onClick={() => setActive(i)}
								className={`rounded-full p-1 ${FOCUS_OUTLINE_GOLD}`}
								aria-label={`ステップ${i + 1}へ`}
								aria-current={i === active ? "step" : undefined}
							>
								{i === active ? (
									<span
										className="block h-1.5 w-7 rounded-full"
										style={{ backgroundColor: FLOW_GOLD }}
									/>
								) : (
									<span className="block size-1.5 rounded-full bg-gray-400/80" />
								)}
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
