"use client";

import Link from "next/link";
import { DM_Sans, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import { useCallback, useState } from "react";

const notoSansJP = Noto_Sans_JP({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

const shipporiMincho = Shippori_Mincho({
	weight: ["400", "600"],
	subsets: ["latin"],
});

const shipporiMinchoRegular = Shippori_Mincho({
	weight: ["400"],
	subsets: ["latin"],
});

const dmSans = DM_Sans({
	weight: ["500"],
	subsets: ["latin"],
});

const inputBaseCls =
	"w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-[0_1px_2px_rgba(0,0,0,.04)] outline-none transition-[border-color,box-shadow] placeholder:text-gray-400 focus:border-gold focus:ring-2 focus:ring-gold/20";

type FormState = {
	lastName: string;
	firstName: string;
	lastNameKana: string;
	firstNameKana: string;
	emailLocal: string;
	emailDomain: string;
	phone1: string;
	phone2: string;
	phone3: string;
	inquiryTypes: string[];
	inquiryBody: string;
	privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
	lastName: "",
	firstName: "",
	lastNameKana: "",
	firstNameKana: "",
	emailLocal: "",
	emailDomain: "",
	phone1: "",
	phone2: "",
	phone3: "",
	inquiryTypes: [],
	inquiryBody: "",
	privacy: false,
};

export default function MaterialRequestForm() {
	const [form, setForm] = useState<FormState>(initialForm);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const validate = useCallback((): boolean => {
		const next: FormErrors = {};

		if (!form.lastName.trim()) next.lastName = "姓を入力してください";
		if (!form.firstName.trim()) next.firstName = "名を入力してください";
		if (!form.lastNameKana.trim()) next.lastNameKana = "セイを入力してください";
		if (!form.firstNameKana.trim()) next.firstNameKana = "メイを入力してください";

		if (!form.emailLocal.trim() || !form.emailDomain.trim()) {
			next.emailLocal = "メールアドレスを入力してください";
		}

		if (!form.phone1.trim() || !form.phone2.trim() || !form.phone3.trim()) {
			next.phone1 = "電話番号を入力してください";
		} else if (![form.phone1, form.phone2, form.phone3].every((p) => /^\d+$/.test(p))) {
			next.phone1 = "電話番号は半角数字で入力してください";
		}

		if (!form.inquiryTypes.length) {
			next.inquiryTypes = "お問い合わせの種類を1つ以上選択してください";
		}

		if (!form.inquiryBody.trim()) {
			next.inquiryBody = "お問い合わせ内容を入力してください";
		}

		if (!form.privacy) next.privacy = "個人情報保護方針に同意してください";

		setErrors(next);
		return Object.keys(next).length === 0;
	}, [form]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type } = e.target;
		const checked = (e.target as HTMLInputElement).checked;
		setForm((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;
		// ダミー送信（実際の API 連携は未実装）
		setIsSubmitted(true);
	};

	const handleBackToForm = () => {
		setIsSubmitted(false);
		setForm(initialForm);
		setErrors({});
	};

	return (
		<section
			className={`relative z-3 bg-white py-20 md:py-32 px-4 md:px-8 ${notoSansJP.className}`}
			aria-labelledby="material-form-heading"
		>
			<div className="relative z-10 mx-auto max-w-250 pt-0 -mt-4 md:-mt-8">
				<div className="bg-white rounded-[20px] shadow-[0_2px_4px_rgba(0,0,0,.04),0_16px_56px_rgba(0,0,0,.09)] p-2.5 flex flex-col md:flex-row gap-2.5">
					<div
						className="relative flex flex-none flex-col rounded-[14px] overflow-hidden bg-linear-to-br from-navy to-navy-dark p-[48px_40px] md:min-h-0 md:flex-[0_0_300px] min-h-70"
						aria-hidden="true"
					>
						<div
							className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full"
							style={{
								background:
									"radial-gradient(circle, rgba(212,168,75,.18) 0%, transparent 70%)",
							}}
							aria-hidden
						/>
						<div className="relative z-0 flex flex-col flex-1 min-h-0">
							<p
								className={`flex-1 text-white/90 ${shipporiMinchoRegular.className} leading-[1.55] mb-0`}
								style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
							>
								<span
									className="bg-clip-text text-transparent"
									style={{
										backgroundImage:
											"linear-gradient(120deg, var(--gold-light), var(--gold))",
									}}
								>
									資料請求、無料面談へのご案内が可能です。
								</span>
							</p>
							<p
								className={`text-[12.5px] text-white/45 leading-[1.85] mb-0 font-light ${notoSansJP.className} text-pretty`}
							>
								当社サービスにご興味をお持ちいただき、誠にありがとうございます。
								専門家による個別のご説明やご相談をご希望の方は、以下のフォームより「資料請求」または「無料面談」をお申し込みください。内容を確認のうえ、担当コンサルタントより折り返しご連絡いたします。
							</p>
						</div>
					</div>

					<div className="flex-1 overflow-hidden min-h-120 md:min-h-130">
						<div
							className="flex w-[200%] transition-[transform_0.5s_cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
							style={{
								transform: isSubmitted ? "translateX(-50%)" : "translateX(0)",
							}}
						>
							<div className="w-1/2 shrink-0 py-6 px-4 md:py-6 md:px-8 md:pl-5 flex flex-col justify-center">
								<h2
									id="material-form-heading"
									className={`text-sm tracking-[0.14em] text-gray-700 mb-6 flex items-center gap-3 ${shipporiMincho.className} text-balance`}
								>
									請求先情報をご入力ください
									<span className="flex-1 h-px bg-gray-200" aria-hidden />
								</h2>

								<form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
									<div>
										<label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
											お名前
											<span className="inline-flex items-center gap-0.5 text-[8.5px] text-gold-light">
												<span className="w-1 h-1 rounded-full bg-gold" aria-hidden />
												必須
											</span>
										</label>
										<div className="grid grid-cols-[auto,1fr] items-center gap-x-2 gap-y-1">
											<span className="text-[11px] text-gray-600">姓：</span>
											<div>
												<input
													type="text"
													name="lastName"
													value={form.lastName}
													onChange={handleChange}
													className={inputBaseCls}
													placeholder="山田"
													autoComplete="family-name"
													aria-invalid={!!errors.lastName}
													aria-describedby={
														errors.lastName ? "error-lastName" : undefined
													}
												/>
												{errors.lastName && (
													<p
														id="error-lastName"
														className="mt-1 text-sm text-red-600"
													>
														{errors.lastName}
													</p>
												)}
											</div>
											<span className="text-[11px] text-gray-600">名：</span>
											<div>
												<input
													type="text"
													name="firstName"
													value={form.firstName}
													onChange={handleChange}
													className={inputBaseCls}
													placeholder="太郎"
													autoComplete="given-name"
													aria-invalid={!!errors.firstName}
													aria-describedby={
														errors.firstName ? "error-firstName" : undefined
													}
												/>
												{errors.firstName && (
													<p
														id="error-firstName"
														className="mt-1 text-sm text-red-600"
													>
														{errors.firstName}
													</p>
												)}
											</div>
										</div>
									</div>

									<div>
										<label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
											フリガナ
											<span className="inline-flex items-center gap-0.5 text-[8.5px] text-gold-light">
												<span className="w-1 h-1 rounded-full bg-gold" aria-hidden />
												必須
											</span>
										</label>
										<div className="grid grid-cols-[auto,1fr] items-center gap-x-2 gap-y-1">
											<span className="text-[11px] text-gray-600">セイ：</span>
											<div>
												<input
													type="text"
													name="lastNameKana"
													value={form.lastNameKana}
													onChange={handleChange}
													className={inputBaseCls}
													placeholder="ヤマダ"
													aria-invalid={!!errors.lastNameKana}
													aria-describedby={
														errors.lastNameKana ? "error-lastNameKana" : undefined
													}
												/>
												{errors.lastNameKana && (
													<p
														id="error-lastNameKana"
														className="mt-1 text-sm text-red-600"
													>
														{errors.lastNameKana}
													</p>
												)}
											</div>
											<span className="text-[11px] text-gray-600">メイ：</span>
											<div>
												<input
													type="text"
													name="firstNameKana"
													value={form.firstNameKana}
													onChange={handleChange}
													className={inputBaseCls}
													placeholder="タロウ"
													aria-invalid={!!errors.firstNameKana}
													aria-describedby={
														errors.firstNameKana
															? "error-firstNameKana"
															: undefined
													}
												/>
												{errors.firstNameKana && (
													<p
														id="error-firstNameKana"
														className="mt-1 text-sm text-red-600"
													>
														{errors.firstNameKana}
													</p>
												)}
											</div>
										</div>
									</div>

									<div>
										<label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
											メールアドレス
											<span className="inline-flex items-center gap-0.5 text-[8.5px] text-gold-light">
												<span className="w-1 h-1 rounded-full bg-gold" aria-hidden />
												必須
											</span>
										</label>
										<div className="flex items-center gap-2">
											<input
												type="text"
												name="emailLocal"
												value={form.emailLocal}
												onChange={handleChange}
												className={inputBaseCls}
												placeholder="example"
												autoComplete="email"
												aria-invalid={!!errors.emailLocal}
												aria-describedby={
													errors.emailLocal ? "error-emailLocal" : undefined
												}
											/>
											<span className="text-xs text-gray-600">@</span>
											<input
												type="text"
												name="emailDomain"
												value={form.emailDomain}
												onChange={handleChange}
												className={inputBaseCls}
												placeholder="domain.jp"
												autoComplete="email"
											/>
										</div>
										{errors.emailLocal && (
											<p id="error-emailLocal" className="mt-0.5 text-sm text-red-600">
												{errors.emailLocal}
											</p>
										)}
									</div>

									<div>
										<label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
											電話番号
											<span className="inline-flex items-center gap-0.5 text-[8.5px] text-gold-light">
												<span className="w-1 h-1 rounded-full bg-gold" aria-hidden />
												必須
											</span>
										</label>
										<div className="flex items-center gap-2">
											<input
												type="tel"
												name="phone1"
												value={form.phone1}
												onChange={handleChange}
												className={`${inputBaseCls} max-w-24`}
												placeholder="03"
												autoComplete="tel"
												aria-invalid={!!errors.phone1}
												aria-describedby={errors.phone1 ? "error-phone1" : undefined}
											/>
											<span className="text-xs text-gray-600">-</span>
											<input
												type="tel"
												name="phone2"
												value={form.phone2}
												onChange={handleChange}
												className={`${inputBaseCls} max-w-28`}
												placeholder="1234"
												autoComplete="tel"
											/>
											<span className="text-xs text-gray-600">-</span>
											<input
												type="tel"
												name="phone3"
												value={form.phone3}
												onChange={handleChange}
												className={`${inputBaseCls} max-w-28`}
												placeholder="5678"
												autoComplete="tel"
											/>
										</div>
										{errors.phone1 && (
											<p id="error-phone1" className="mt-1 text-sm text-red-600">
												{errors.phone1}
											</p>
										)}
									</div>

									<div>
										<label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
											お問い合わせの種類を選択してください
											<span className="inline-flex items-center gap-0.5 text-[8.5px] text-gold-light">
												<span className="w-1 h-1 rounded-full bg-gold" aria-hidden />
												必須
											</span>
										</label>
										<div className="space-y-1.5">
											{[
												"築古アパートを活用した短期減価償却事業（個人版）",
												"忙しいお医者様のためのおすすめ資産防衛術",
												"築古アパートを活用した短期減価償却事業（経営者・法人版）",
												"１口1,000万円からの短期減価償却事業（小口化不動産版）",
												"次世代の家族のための相続対策事業",
												"旧耐震マンション再生コンサルティング事業",
												"投資用マンション・アパート建設事業",
												"自社管理システムによる賃貸管理事業",
												"企画・用地取得・売却　ロジスティック事業",
												"不動産のジャパンオークション",
												"不動産売却計画書",
												"リゾートホテル・海外レジデンシャル投資不動産用地取得～企画開発事業",
											].map((label) => (
												<label
													key={label}
													className="flex items-center gap-2 text-[12px] text-gray-700 cursor-pointer"
												>
													<input
														type="checkbox"
														className="size-3.5 accent-gold"
														checked={
															Array.isArray(form.inquiryTypes) &&
															form.inquiryTypes.includes(label)
														}
														onChange={(e) => {
															const checked = e.target.checked;
															setForm((prev) => ({
																...prev,
																inquiryTypes: checked
																	? [
																			...(Array.isArray(
																				prev.inquiryTypes,
																			)
																				? prev.inquiryTypes
																				: []),
																			label,
																		]
																	: (Array.isArray(prev.inquiryTypes)
																			? prev.inquiryTypes
																			: []
																		).filter((v) => v !== label),
															}));
														}}
													/>
													<span>{label}</span>
												</label>
											))}
										</div>
										{errors.inquiryTypes && (
											<p id="error-inquiryTypes" className="mt-1 text-sm text-red-600">
												{errors.inquiryTypes}
											</p>
										)}
									</div>

									<div>
										<label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
											お問い合わせ内容
											<span className="inline-flex items-center gap-0.5 text-[8.5px] text-gold-light">
												<span className="w-1 h-1 rounded-full bg-gold" aria-hidden />
												必須
											</span>
										</label>
										<textarea
											name="inquiryBody"
											value={form.inquiryBody}
											onChange={handleChange}
											className={`${inputBaseCls} min-h-28 resize-y`}
											placeholder="お問い合わせ内容をご記入ください"
											rows={4}
											aria-invalid={!!errors.inquiryBody}
											aria-describedby={
												errors.inquiryBody ? "error-inquiryBody" : undefined
											}
										/>
										{errors.inquiryBody && (
											<p id="error-inquiryBody" className="mt-1 text-sm text-red-600">
												{errors.inquiryBody}
											</p>
										)}
									</div>

									<div className="space-y-2">
										<div className="text-[11.5px] text-gray-600 leading-relaxed">
											<p className="mb-1">個人情報保護方針</p>
											<p className="mb-1">
												ご記入いただいたお客様の個人情報に関しましては、以下のプライバシーポリシーに示すとおり、管理いたします。
											</p>
											<p>
												<Link
													href="/privacy"
													className="text-gray-800 font-medium border-b border-gray-800 hover:no-underline"
												>
													「藤和コーポレーション株式会社」（プライバシーポリシー）
												</Link>
											</p>
										</div>

										<div className="flex items-start gap-2 py-2.5 px-3.5 rounded-lg bg-gray-50 border border-gray-200">
											<input
												type="checkbox"
												name="privacy"
												id="material-privacy"
												checked={form.privacy}
												onChange={handleChange}
												className="mt-0.5 size-3.75 shrink-0 accent-gold cursor-pointer"
												aria-invalid={!!errors.privacy}
												aria-describedby={
													errors.privacy ? "error-privacy" : undefined
												}
											/>
											<label
												htmlFor="material-privacy"
												className="text-sm text-gray-700 leading-[1.7] cursor-pointer text-pretty"
											>
												同意する
											</label>
										</div>
										{errors.privacy && (
											<p id="error-privacy" className="text-sm text-red-600 -mt-1">
												{errors.privacy}
											</p>
										)}
									</div>

									<div className="mt-1 w-full">
										<button
											type="submit"
											className="flex w-full items-center justify-center gap-2 rounded-md bg-gold py-3.5 text-[13.5px] font-semibold text-white shadow-[0_4px_14px_rgba(184,134,11,.28)] transition-[background-color,opacity,transform,box-shadow] duration-200 hover:bg-gold-light hover:opacity-95 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(184,134,11,.35)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
										>
											送信する
										</button>
									</div>
								</form>
							</div>

							<div className="w-1/2 shrink-0 flex flex-col justify-center py-9 px-6 md:pt-12 md:pr-12 md:pb-10 md:pl-9">
								<div
									className="text-[10px] tracking-[0.14em] text-gold mb-3.5 flex items-center gap-2.5 after:content-[''] after:w-8 after:h-px after:bg-gold-light/40"
									aria-hidden
								>
									送信完了
								</div>
								<h2
									id="form-success-heading"
									className={`${shipporiMinchoRegular.className} font-normal text-[#1A0F04] mb-4 leading-[1.35] text-balance`}
									style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
								>
									お問い合わせを受け付けました
								</h2>
								<p className="text-[#7A5A3A] font-light leading-[1.9] text-pretty max-w-85 mb-10 text-sm md:text-base">
									ご入力いただいた内容を確認のうえ、担当者よりご連絡いたします（ダミー画面のため実際の送信は行われません）。
								</p>
								<div
									className="w-full max-w-85 border-t border-gold-light/35 mb-8"
									aria-hidden
								/>
								<button
									type="button"
									onClick={handleBackToForm}
									className={`inline-flex items-center gap-2 py-2.5 px-7 rounded-full border-[1.5px] border-gold-light/50 bg-transparent text-navy text-[13px] font-medium cursor-pointer hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 motion-reduce:transition-none transition-[border-color,color] duration-200 ${dmSans.className}`}
								>
									フォームに戻る
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
