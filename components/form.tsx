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
	name: string;
	address: string;
	phone: string;
	privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
	name: "",
	address: "",
	phone: "",
	privacy: false,
};

export default function MaterialRequestForm() {
	const [form, setForm] = useState<FormState>(initialForm);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const validate = useCallback((): boolean => {
		const next: FormErrors = {};
		if (!form.name.trim()) next.name = "お名前を入力してください";
		if (!form.address.trim()) next.address = "住所を入力してください";
		if (!form.phone.trim()) next.phone = "電話番号を入力してください";
		else if (!/^[\d\-+()\s]{10,}$/.test(form.phone.replace(/\s/g, ""))) {
			next.phone = "電話番号の形式をご確認ください";
		}
		if (!form.privacy) next.privacy = "個人情報の取り扱いに同意してください";
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
							<span className="text-[9.5px] tracking-[.18em] text-white/35 uppercase mb-8 block">
								Materials
							</span>
							<p
								className={`flex-1 text-white/90 ${shipporiMinchoRegular.className} leading-[1.55] mb-0`}
								style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
							>
								顧問先様へのご提案に、
								<br />
								<span
									className="bg-clip-text text-transparent"
									style={{
										backgroundImage:
											"linear-gradient(120deg, var(--gold-light), var(--gold))",
									}}
								>
									資料でお役立てください。
								</span>
							</p>
							<p
								className={`text-[12.5px] text-white/45 leading-[1.85] mb-0 font-light ${notoSansJP.className} text-pretty`}
							>
								不動産オークションの概要・手数料の考え方・事例をまとめた資料を、ご登録の宛先へお送りします。内容はダウンロード版のご案内も可能です。
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
											お名前（請求先氏名）
											<span className="inline-flex items-center gap-0.5 text-[8.5px] text-gold-light">
												<span className="w-1 h-1 rounded-full bg-gold" aria-hidden />
												必須
											</span>
										</label>
										<input
											type="text"
											name="name"
											value={form.name}
											onChange={handleChange}
											className={inputBaseCls}
											placeholder="山田 太郎"
											autoComplete="name"
											aria-invalid={!!errors.name}
											aria-describedby={errors.name ? "error-name" : undefined}
										/>
										{errors.name && (
											<p id="error-name" className="mt-1 text-sm text-red-600">
												{errors.name}
											</p>
										)}
									</div>

									<div>
										<label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
											住所（資料送付先）
											<span className="inline-flex items-center gap-0.5 text-[8.5px] text-gold-light">
												<span className="w-1 h-1 rounded-full bg-gold" aria-hidden />
												必須
											</span>
										</label>
										<textarea
											name="address"
											value={form.address}
											onChange={handleChange}
											className={`${inputBaseCls} min-h-25 resize-y`}
											placeholder="〒100-0001&#10;東京都千代田区千代田1-1-1 ○○ビル3F"
											rows={3}
											autoComplete="street-address"
											aria-invalid={!!errors.address}
											aria-describedby={errors.address ? "error-address" : undefined}
										/>
										{errors.address && (
											<p id="error-address" className="mt-1 text-sm text-red-600">
												{errors.address}
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
										<input
											type="tel"
											name="phone"
											value={form.phone}
											onChange={handleChange}
											className={inputBaseCls}
											placeholder="03-1234-5678"
											autoComplete="tel"
											aria-invalid={!!errors.phone}
											aria-describedby={errors.phone ? "error-phone" : undefined}
										/>
										{errors.phone && (
											<p id="error-phone" className="mt-1 text-sm text-red-600">
												{errors.phone}
											</p>
										)}
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
											aria-describedby={errors.privacy ? "error-privacy" : undefined}
										/>
										<label
											htmlFor="material-privacy"
											className="text-sm text-gray-600 leading-[1.7] cursor-pointer text-pretty"
										>
											<Link
												href="/privacy#handling"
												className="text-gray-800 font-medium border-b border-gray-800 hover:no-underline"
											>
												個人情報の取り扱い
											</Link>
											に同意の上、送信してください。
										</label>
									</div>
									{errors.privacy && (
										<p id="error-privacy" className="text-sm text-red-600 -mt-2">
											{errors.privacy}
										</p>
									)}

									<div className="mt-1 w-full">
										<button
											type="submit"
											className="flex w-full items-center justify-center gap-2 rounded-md bg-gold py-3.5 text-[13.5px] font-semibold text-white shadow-[0_4px_14px_rgba(184,134,11,.28)] transition-[background-color,opacity,transform,box-shadow] duration-200 hover:bg-gold-light hover:opacity-95 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(184,134,11,.35)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
										>
											資料を請求する
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
									資料請求を受け付けました
								</h2>
								<p className="text-[#7A5A3A] font-light leading-[1.9] text-pretty max-w-85 mb-10 text-sm md:text-base">
									ご登録いただいた宛名・住所に、サービス資料の発送手続きを進めます。担当より必要に応じてご連絡いたします（ダミー画面のため実際の送信は行われません）。
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
