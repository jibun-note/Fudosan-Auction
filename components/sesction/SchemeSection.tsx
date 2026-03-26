"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Building2, FileText, Gavel } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/** リング周りのノード・下部カードに紐づく3サービスの文言・詳細 */
const services = [
	{
		id: "reborn",
		name: "b'CASA re-born\n不動産",
		label: "「法人税対策」が高いと言われた！",
		title: "b'CASA re-born不動産",
		subtitle: "b'CASA re-born不動産により節税と資産形成を実現！",
		description: "「法人税が高い！」と言われた企業オーナー様必見",
		details: [
			"ご相談から売却までワンストップ・サポート",
			"保険商品等に代わる優位性",
			"税金繰延べ効果",
			"減価償却アップ",
			"各種鑑定書、調査書などを発行",
			"修理・設備・買取「藤和安心保証システム」",
		],
		icon: Building2,
		href: "https://towa-corporation.jp/re-born_hojin/",
	},
	{
		id: "sales-plan",
		name: "不動産\n売却計画書",
		label: "安く売らないために！",
		title: "不動産売却計画書",
		subtitle: "あなたの不動産価値の最大化が目的です",
		description:
			"土地の価値（価格）はその利用方法で決まります。私たちは、分譲住宅、投資用アパートマンション、医療テナントなど様々な利用方法を専門スタッフが検証の上、ご提案。その土地の価値を引き出し、最大化いたします。",
		details: [
			"豊富な資料を元にあらゆる角度から徹底分析",
			"物件を多角的に検証し最大限の利益を試算",
			"迅速に結論を導きベストの選択をご提案",
		],
		icon: FileText,
		href: "https://hudousantakakuuritai.com/keikakusyo/",
	},
	{
		id: "auction",
		name: "不動産の\nジャパン\nオークション",
		label: "高く売るために！",
		title: "不動産のジャパンオークション",
		subtitle: "なぜ、不動産のジャパンオークションは高く売れるのか?",
		description:
			"その土地に何が建てられるか、どんな活用法があるのかあなたはご存知ですか？各専門分野のプロである私たちにお任せください。あなたの不動産の本当の価値を見極めます！",
		details: [
			"不動産の価値を最大化して売る",
			"土地の価値を知れば、書いては動く",
			"オークションでさらに高値売却",
		],
		icon: Gavel,
		href: "https://hudousantakakuuritai.com/jpnauction/",
	},
];

/** 正三角形配置：単位ベクトル（半径1）→ radius 掛け算でノード座標に変換 */
const circlePositions = [
	{ x: 0, y: -1 },
	{ x: 0.866, y: 0.5 },
	{ x: -0.866, y: 0.5 },
];

export default function SchemeSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	// リング幾何：中心からノードまでの距離 / 外周の余白 / SVG と絶対配置の共通サイズ
	const radius = 205;
	const ringPadding = 78;
	const boxSize = radius * 2 + ringPadding * 2;
	const cx = boxSize / 2;
	const cy = boxSize / 2;

	return (
		<section
			id="merit"
			className="relative overflow-hidden bg-lp-surface-elevated px-4 py-12 md:px-6 md:py-20"
		>
			{/* 背景：ゴールド系の放射グラデをゆっくりトゥイーン（LP差し色） */}
			<motion.div
				className="pointer-events-none absolute inset-0"
				animate={{
					background: [
						"radial-gradient(ellipse 60% 40% at 50% 40%, hsl(38 70% 55% / 0.05) 0%, transparent 70%)",
						"radial-gradient(ellipse 70% 50% at 45% 35%, hsl(38 70% 55% / 0.08) 0%, transparent 70%)",
						"radial-gradient(ellipse 60% 40% at 55% 45%, hsl(38 70% 55% / 0.05) 0%, transparent 70%)",
					],
				}}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
			/>
			{/* 薄いグリッド（質感用・操作不能） */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(rgb(184 134 11 / 0.3) 1px, transparent 1px), linear-gradient(90deg, rgb(184 134 11 / 0.3) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-6xl">
				{/* セクション見出し */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-40px" }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<h2 className="text-lg font-bold text-navy md:text-3xl">
						&quot;価値&quot;が返る3つのサービス
					</h2>
					<div className="mt-2 h-1 w-16 bg-gold" />
					<p className="mt-3 mb-16 text-sm text-gray-600 md:mt-4 md:text-base">
						顧問先への付加価値提案が、先生ご自身の信頼とビジネスを強化します。
					</p>
				</motion.div>

				{/* 三角リング UI：同心円デコ＋中央ラベル＋SVG 接続線＋周辺サービスボタン */}
				<div className="mb-12 flex w-full justify-center md:mb-16">
					<div className="relative mx-auto shrink-0" style={{ width: boxSize, height: boxSize }}>
						{/* 外枠リング（静的ボーダー） */}
						<div className="absolute inset-0 rounded-full border border-gold/10" />
						{/* 破線リングの代替：藤和ロゴ */}
						<div className="pointer-events-none absolute" style={{ inset: 18 }}>
							<Image
								src="/images/藤和ロゴ.svg"
								alt=""
								aria-hidden="true"
								fill
								sizes="(max-width: 768px) 80vw, 420px"
								className="object-contain opacity-25"
							/>
						</div>
						{/* ロゴの内側に収める円形ボーダー */}
						<div
							className="pointer-events-none absolute rounded-full border border-gold/10"
							style={{ inset: 62 }}
						/>

						{/* 選択中サービスに対応するキャッチコピー（label） */}
						<div className="absolute inset-0 flex items-center justify-center">
							<AnimatePresence mode="wait">
								<motion.div
									key={activeIndex}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.4 }}
									className="-translate-y-3 max-w-[min(100%,22rem)] px-3 text-center md:max-w-md md:px-4"
								>
									<p className="text-xl leading-snug font-semibold text-navy md:text-2xl lg:text-3xl">
										{services[activeIndex].label}
									</p>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* 中心 ↔ 各ノード：選択はゴールド実線、非選択はグレー破線（色・太さは意図的に控えめ） */}

						{/* 周辺のサービス名ボタン：activeIndex と同期し、詳細カードと連動 */}
						{services.map((service, index) => {
							const isActive = activeIndex === index;
							const ServiceIcon = service.icon;
							const pos = circlePositions[index];
							const nodeX = cx + pos.x * radius;
							const nodeY = cy + pos.y * radius;

							return (
								<div
									key={service.id}
									className="absolute"
									style={{
										left: nodeX,
										top: nodeY,
										transform: "translate(-50%, -50%)",
									}}
								>
									<button
										type="button"
										onClick={() => setActiveIndex(index)}
										className="relative cursor-pointer transition-transform duration-200 ease-out will-change-transform hover:scale-105"
									>
										{/* 選択中ノード：拡大せず、色だけで状態を示すリング */}
										{isActive && (
											<div className="absolute -inset-2 rounded-full border border-gold/30 opacity-80" />
										)}

										<div
											className={`relative isolate flex size-21 items-center justify-center overflow-hidden rounded-full backdrop-blur-sm transition-all duration-500 md:size-28 lg:size-31 ${
												isActive
													? "border-2 border-gold/85 bg-linear-to-br from-white/45 via-gold/25 to-navy/12 shadow-[0_16px_36px_-18px_rgba(12,22,40,0.75),0_0_36px_-8px_hsl(38_70%_48%/0.45)] ring-2 ring-gold/25"
													: "border-2 border-gray-300/70 bg-linear-to-br from-white/42 via-slate-200/45 to-slate-400/35 text-gray-600 shadow-[0_14px_28px_-20px_rgba(30,41,59,0.7)] hover:border-gray-200/90 hover:from-white/50 hover:via-slate-200/55 hover:to-slate-400/45"
											}`}
										>
											<ServiceIcon
												aria-hidden="true"
												className={`pointer-events-none absolute z-0 size-12 transition-colors duration-500 md:size-16 lg:size-18 ${
													isActive ? "text-gold/18" : "text-navy/12"
												}`}
												strokeWidth={1.5}
											/>
											{/* ガラス反射：上部ハイライト */}
											<span className="pointer-events-none absolute inset-x-2 top-1 z-0 h-1/3 rounded-full bg-linear-to-b from-white/55 to-transparent blur-[1px]" />
											{/* ガラス層の奥行き：斜めの薄い反射 */}
											<span className="pointer-events-none absolute -right-1 top-2 z-0 h-1/2 w-1/2 rotate-12 rounded-full bg-white/20 blur-sm" />
											<span
												className={`relative z-10 line-clamp-3 max-w-19 whitespace-pre-line text-center text-[11px] leading-snug font-semibold tracking-tight md:max-w-23 md:text-xs lg:max-w-27 lg:text-sm ${
													isActive ? "font-bold text-gold" : "text-gray-600"
												}`}
											>
												{service.name}
											</span>
										</div>
									</button>
								</div>
							);
						})}
					</div>
				</div>

				{/* 選択サービスの詳細（タイトル・説明・箇条書き）：activeIndex 変更で差し替え */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeIndex}
						initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						<Card className="overflow-hidden rounded-3xl border-white/15 bg-[#1c2e49] shadow-md shadow-navy/15 backdrop-blur-sm">
							<CardContent className="bg-white p-0">
								<div className="grid gap-0 lg:grid-cols-[1fr,1.2fr]">
									<CardHeader className="space-y-0 rounded-none border-0 bg-transparent p-0 shadow-none">
										<div className="px-8 pt-8 lg:px-12 lg:pt-12">
											<div className="border-b border-gray-200 pb-8">
												<motion.div
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ delay: 0.2, duration: 0.5 }}
													className="mb-6 flex items-center gap-3"
												>
													<div className="h-8 w-1 shrink-0 rounded-full bg-linear-to-b from-[#c5a55a] to-[rgba(197,165,90,0.16)]" />
													<CardTitle className="text-2xl font-semibold text-navy lg:text-3xl">
														{services[activeIndex].title}
													</CardTitle>
												</motion.div>
												<motion.div
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ delay: 0.3, duration: 0.5 }}
												>
													<CardDescription className="mb-6 text-lg font-semibold tracking-wide text-gold/80">
														{services[activeIndex].subtitle}
													</CardDescription>
												</motion.div>
												<motion.p
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ delay: 0.4, duration: 0.5 }}
													className="text-base leading-relaxed font-semibold text-gray-600"
												>
													{services[activeIndex].description}
												</motion.p>
											</div>
										</div>
									</CardHeader>

									<div className="flex flex-col justify-center p-8 lg:p-12">
										<p className="mb-8 text-base font-semibold tracking-[0.3em] text-gold/60 uppercase">
											Points
										</p>
										<div className="space-y-5">
											{services[activeIndex].details.map((detail, i) => (
												<motion.div
													key={detail}
													initial={{ opacity: 0, x: 30 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{
														delay: 0.2 + i * 0.12,
														duration: 0.5,
														ease: [0.22, 1, 0.36, 1],
													}}
													className="group flex items-start gap-4"
												>
													<span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-[rgba(197,165,90,0.16)] bg-[rgba(197,165,90,0.16)] text-[11px] font-bold text-[#c5a55a]">
														{i + 1}
													</span>
													<p className="pt-1 text-sm leading-relaxed font-semibold text-gray-800 transition-colors duration-300 group-hover:text-navy">
														{detail}
													</p>
												</motion.div>
											))}
										</div>

										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.6, duration: 0.5 }}
											className="mt-10 border-t border-gray-200 pt-8"
										>
											<Link
												href={services[activeIndex].href}
												className="group inline-flex cursor-pointer items-center gap-3 text-base tracking-[0.2em] text-[#c5a55a] uppercase transition-colors duration-300 hover:text-[#e0c27a]"
											>
												詳しく見る
												<motion.span
													className="inline-block h-px w-8 origin-left bg-[rgba(197,165,90,0.16)] transition-colors duration-300 group-hover:bg-[#c5a55a]"
													whileHover={{ scaleX: 1.5 }}
												/>
											</Link>
										</motion.div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
