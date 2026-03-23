"use client";

import Link from "next/link";
import { DM_Sans, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
	useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { FiCalendar } from "react-icons/fi";

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

const WEEKDAY_LABELS = ["日", "月", "火", "水", "木", "金", "土"] as const;

const TIME_SLOTS = ["10:00〜11:00", "14:00〜15:00", "16:00〜17:00"] as const;

function startOfDay(d: Date): Date {
	const x = new Date(d);
	x.setHours(0, 0, 0, 0);
	return x;
}

function isPastDate(year: number, month: number, day: number): boolean {
	const candidate = startOfDay(new Date(year, month, day));
	const today = startOfDay(new Date());
	return candidate < today;
}

function isWeekend(year: number, month: number, day: number): boolean {
	const wd = new Date(year, month, day).getDay();
	return wd === 0 || wd === 6;
}

function getCalendarCells(year: number, month: number): (number | null)[] {
	const first = new Date(year, month, 1);
	const last = new Date(year, month + 1, 0);
	const pad = first.getDay();
	const n = last.getDate();
	const cells: (number | null)[] = [];
	for (let i = 0; i < pad; i++) cells.push(null);
	for (let d = 1; d <= n; d++) cells.push(d);
	return cells;
}

type FormState = {
	name: string;
	address: string;
	phone: string;
	privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormState | "date" | "slot", string>>;

const initialForm: FormState = {
	name: "",
	address: "",
	phone: "",
	privacy: false,
};

const POPOVER_W = 280;

export default function SeminarRequestForm() {
	const [form, setForm] = useState<FormState>(initialForm);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const [viewYear, setViewYear] = useState(() => new Date().getFullYear());
	const [viewMonth, setViewMonth] = useState(() => new Date().getMonth());
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

	const [isPickerOpen, setIsPickerOpen] = useState(false);
	const [popoverPos, setPopoverPos] = useState({ top: 0, left: 0 });
	const triggerRef = useRef<HTMLButtonElement>(null);
	const popoverRef = useRef<HTMLDivElement>(null);
	const mounted = useSyncExternalStore(
		() => () => {},
		() => true,
		() => false,
	);

	const updatePopoverPosition = useCallback(() => {
		const el = triggerRef.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		let left = r.left;
		if (left + POPOVER_W > window.innerWidth - 8) {
			left = window.innerWidth - POPOVER_W - 8;
		}
		if (left < 8) left = 8;
		const top = r.bottom + 8;
		setPopoverPos({ top, left });
	}, []);

	useLayoutEffect(() => {
		if (!isPickerOpen || !mounted) return;
		updatePopoverPosition();
		const onScroll = () => updatePopoverPosition();
		window.addEventListener("scroll", onScroll, true);
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll, true);
			window.removeEventListener("resize", onScroll);
		};
	}, [isPickerOpen, mounted, updatePopoverPosition]);

	useEffect(() => {
		if (!isPickerOpen) return;
		const onPointerDown = (e: PointerEvent) => {
			const t = e.target as Node;
			if (triggerRef.current?.contains(t) || popoverRef.current?.contains(t)) return;
			setIsPickerOpen(false);
		};
		document.addEventListener("pointerdown", onPointerDown);
		return () => document.removeEventListener("pointerdown", onPointerDown);
	}, [isPickerOpen]);

	useEffect(() => {
		if (!isPickerOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsPickerOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [isPickerOpen]);

	const openPicker = () => {
		if (selectedDate) {
			setViewYear(selectedDate.getFullYear());
			setViewMonth(selectedDate.getMonth());
		} else {
			const n = new Date();
			setViewYear(n.getFullYear());
			setViewMonth(n.getMonth());
		}
		setIsPickerOpen(true);
	};

	const togglePicker = () => {
		if (isPickerOpen) {
			setIsPickerOpen(false);
			return;
		}
		openPicker();
	};

	const calendarCells = useMemo(() => getCalendarCells(viewYear, viewMonth), [viewYear, viewMonth]);

	const monthLabel = useMemo(() => `${viewYear}年${viewMonth + 1}月`, [viewYear, viewMonth]);

	const goPrevMonth = () => {
		if (viewMonth === 0) {
			setViewYear((y) => y - 1);
			setViewMonth(11);
		} else {
			setViewMonth((m) => m - 1);
		}
	};

	const goNextMonth = () => {
		if (viewMonth === 11) {
			setViewYear((y) => y + 1);
			setViewMonth(0);
		} else {
			setViewMonth((m) => m + 1);
		}
	};

	const selectDay = (day: number) => {
		if (isPastDate(viewYear, viewMonth, day) || isWeekend(viewYear, viewMonth, day)) {
			return;
		}
		setSelectedDate(new Date(viewYear, viewMonth, day));
		setSelectedSlot(null);
		setErrors((prev) => ({ ...prev, date: undefined }));
	};

	const isSelectedDay = (day: number) => {
		if (!selectedDate) return false;
		return (
			selectedDate.getFullYear() === viewYear &&
			selectedDate.getMonth() === viewMonth &&
			selectedDate.getDate() === day
		);
	};

	const validate = useCallback((): boolean => {
		const next: FormErrors = {};
		if (!selectedDate) next.date = "ご希望日を選択してください";
		if (!selectedSlot) next.slot = "時間帯を選択してください";
		if (!form.name.trim()) next.name = "お名前を入力してください";
		if (!form.address.trim()) next.address = "住所を入力してください";
		if (!form.phone.trim()) next.phone = "電話番号を入力してください";
		else if (!/^[\d\-+()\s]{10,}$/.test(form.phone.replace(/\s/g, ""))) {
			next.phone = "電話番号の形式をご確認ください";
		}
		if (!form.privacy) next.privacy = "個人情報の取り扱いに同意してください";
		setErrors(next);
		return Object.keys(next).length === 0;
	}, [form, selectedDate, selectedSlot]);

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
		setIsSubmitted(true);
	};

	const handleBackToForm = () => {
		setIsSubmitted(false);
		setForm(initialForm);
		setErrors({});
		setSelectedDate(null);
		setSelectedSlot(null);
		setIsPickerOpen(false);
	};

	const formattedReservation = useMemo(() => {
		if (!selectedDate || !selectedSlot) return "";
		const y = selectedDate.getFullYear();
		const m = selectedDate.getMonth() + 1;
		const d = selectedDate.getDate();
		return `${y}年${m}月${d}日 ${selectedSlot}`;
	}, [selectedDate, selectedSlot]);

	const triggerLabel = useMemo(() => {
		if (!selectedDate) return "日付を選択してください";
		const y = selectedDate.getFullYear();
		const m = selectedDate.getMonth() + 1;
		const d = selectedDate.getDate();
		return `${y}年${m}月${d}日`;
	}, [selectedDate]);

	const canConfirmDate = Boolean(selectedDate);

	const pickerPopover =
		mounted &&
		isPickerOpen &&
		createPortal(
			<div
				ref={popoverRef}
				id="seminar-datetime-popover"
				role="dialog"
				aria-label="ご希望日の選択"
				className="fixed z-100 w-70 max-w-[calc(100vw-16px)] rounded-xl border border-gray-200 bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,.12),0_2px_8px_rgba(0,0,0,.06)]"
				style={{ top: popoverPos.top, left: popoverPos.left }}
			>
				<div className="flex items-center justify-between gap-1.5 mb-2">
					<button
						type="button"
						onClick={goPrevMonth}
						className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white text-sm text-gray-700 hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
						aria-label="前の月へ"
					>
						‹
					</button>
					<span className="text-xs font-semibold text-gray-800 tabular-nums">{monthLabel}</span>
					<button
						type="button"
						onClick={goNextMonth}
						className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white text-sm text-gray-700 hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
						aria-label="次の月へ"
					>
						›
					</button>
				</div>
				<div className="grid grid-cols-7 gap-px text-center text-[9px] font-medium text-gray-400 mb-0.5">
					{WEEKDAY_LABELS.map((w) => (
						<span key={w} className="py-0.5">
							{w}
						</span>
					))}
				</div>
				<div className="grid grid-cols-7 gap-px">
					{calendarCells.map((cell, idx) => {
						if (cell === null) {
							return <span key={`empty-${idx}`} className="h-7 w-7" aria-hidden />;
						}
						const disabled =
							isPastDate(viewYear, viewMonth, cell) || isWeekend(viewYear, viewMonth, cell);
						const selected = isSelectedDay(cell);
						return (
							<button
								key={cell}
								type="button"
								disabled={disabled}
								onClick={() => selectDay(cell)}
								className={[
									"flex h-7 w-7 items-center justify-center rounded text-[11px] tabular-nums transition-colors",
									disabled
										? "cursor-not-allowed text-gray-300"
										: "text-gray-800 hover:bg-gold/15",
									selected && !disabled ? "bg-gold font-semibold text-white shadow-sm" : "",
								].join(" ")}
								aria-pressed={selected}
								aria-label={`${viewMonth + 1}月${cell}日`}
							>
								{cell}
							</button>
						);
					})}
				</div>
				<p className="mt-2 text-[9px] leading-snug text-gray-400">土日・過去日は選択できません。</p>
				<div className="mt-3 flex gap-2">
					<button
						type="button"
						onClick={() => setIsPickerOpen(false)}
						className="flex-1 rounded-md border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
					>
						キャンセル
					</button>
					<button
						type="button"
						disabled={!canConfirmDate}
						onClick={() => setIsPickerOpen(false)}
						className="flex-1 rounded-md bg-gold py-2 text-xs font-semibold text-white shadow-sm hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1"
					>
						確定
					</button>
				</div>
			</div>,
			document.body,
		);

	return (
		<section
			className={`relative z-3 bg-white py-20 md:py-32 px-4 md:px-8 ${notoSansJP.className}`}
			aria-labelledby="seminar-form-heading"
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
								Online briefing
							</span>
							<p
								className={`flex-1 text-white/90 ${shipporiMinchoRegular.className} leading-[1.55] mb-0`}
								style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
							>
								サービス内容を
								<br />
								<span
									className="bg-clip-text text-transparent"
									style={{
										backgroundImage:
											"linear-gradient(120deg, var(--gold-light), var(--gold))",
									}}
								>
									オンラインでご案内します。
								</span>
							</p>
							<p
								className={`text-[12.5px] text-white/45 leading-[1.85] mb-0 font-light ${notoSansJP.className} text-pretty`}
							>
								カレンダーでご希望日を、フォームで時間帯をお選びください。開催は平日・枠限定です。担当より日程確定のご連絡をいたします。
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
									id="seminar-form-heading"
									className={`text-sm tracking-[0.14em] text-gray-700 mb-6 flex items-center gap-3 ${shipporiMincho.className} text-balance`}
								>
									ご希望日時とお申し込み内容
									<span className="flex-1 h-px bg-gray-200" aria-hidden />
								</h2>

								<form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
									{pickerPopover}
									<div className="relative">
										<p className="text-xs font-medium tracking-[0.05em] text-gray-700 mb-2">
											ご希望日
											<span className="inline-flex items-center gap-0.5 text-[8.5px] text-gold-light ml-2">
												<span className="w-1 h-1 rounded-full bg-gold" aria-hidden />
												必須
											</span>
										</p>
										<button
											ref={triggerRef}
											type="button"
											id="seminar-datetime-trigger"
											aria-haspopup="dialog"
											aria-expanded={isPickerOpen}
											aria-controls={
												isPickerOpen ? "seminar-datetime-popover" : undefined
											}
											onClick={togglePicker}
											className={[
												inputBaseCls,
												"flex w-full items-center justify-between gap-2 text-left",
												errors.date ? "border-red-300 ring-1 ring-red-200" : "",
											].join(" ")}
										>
											<span
												className={selectedDate ? "text-gray-900" : "text-gray-400"}
											>
												{triggerLabel}
											</span>
											<FiCalendar className="h-4 w-4 shrink-0 text-gold" aria-hidden />
										</button>
										<p className="mt-1.5 text-[10px] text-gray-400">
											クリックするとカレンダーが開き、日付のみお選びください。
										</p>
										{errors.date && (
											<p className="mt-1 text-sm text-red-600">{errors.date}</p>
										)}
									</div>

									<fieldset
										className="min-w-0 border-0 p-0 m-0"
										aria-invalid={!!errors.slot}
										aria-describedby={errors.slot ? "error-seminar-slot" : undefined}
									>
										<legend className="text-xs font-medium tracking-[0.05em] text-gray-700 mb-2 flex w-full flex-wrap items-center gap-2">
											時間帯（平日）
											<span className="inline-flex items-center gap-0.5 text-[8.5px] text-gold-light">
												<span className="w-1 h-1 rounded-full bg-gold" aria-hidden />
												必須
											</span>
										</legend>
										<div
											className={`rounded-lg border bg-gray-50/80 px-3.5 py-3 ${
												errors.slot
													? "border-red-300 ring-1 ring-red-200"
													: "border-gray-200"
											}`}
										>
											<div className="flex flex-col gap-2.5">
												{TIME_SLOTS.map((slot) => (
													<label
														key={slot}
														className={`flex cursor-pointer items-center gap-2.5 text-sm ${
															!selectedDate
																? "cursor-not-allowed opacity-50"
																: ""
														}`}
													>
														<input
															type="radio"
															name="seminar-time-slot"
															value={slot}
															checked={selectedSlot === slot}
															disabled={!selectedDate}
															onChange={() => {
																setSelectedSlot(slot);
																setErrors((prev) => ({
																	...prev,
																	slot: undefined,
																}));
															}}
															className="h-4 w-4 shrink-0 accent-gold"
														/>
														<span className="text-gray-800">{slot}</span>
													</label>
												))}
											</div>
										</div>
										{!selectedDate && (
											<p className="mt-1.5 text-[10px] text-gray-400">
												先に「ご希望日」を選択すると、時間帯を選べます。
											</p>
										)}
										{errors.slot && (
											<p id="error-seminar-slot" className="mt-1 text-sm text-red-600">
												{errors.slot}
											</p>
										)}
									</fieldset>

									<div>
										<label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
											お名前（申込者氏名）
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
											aria-describedby={errors.name ? "error-seminar-name" : undefined}
										/>
										{errors.name && (
											<p id="error-seminar-name" className="mt-1 text-sm text-red-600">
												{errors.name}
											</p>
										)}
									</div>

									<div>
										<label className="flex justify-between items-center text-xs font-medium tracking-[0.05em] text-gray-700 mb-1">
											住所
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
											aria-describedby={
												errors.address ? "error-seminar-address" : undefined
											}
										/>
										{errors.address && (
											<p
												id="error-seminar-address"
												className="mt-1 text-sm text-red-600"
											>
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
											aria-describedby={
												errors.phone ? "error-seminar-phone" : undefined
											}
										/>
										{errors.phone && (
											<p id="error-seminar-phone" className="mt-1 text-sm text-red-600">
												{errors.phone}
											</p>
										)}
									</div>

									<div className="flex items-start gap-2 py-2.5 px-3.5 rounded-lg bg-gray-50 border border-gray-200">
										<input
											type="checkbox"
											name="privacy"
											id="seminar-privacy"
											checked={form.privacy}
											onChange={handleChange}
											className="mt-0.5 size-3.75 shrink-0 accent-gold cursor-pointer"
											aria-invalid={!!errors.privacy}
											aria-describedby={
												errors.privacy ? "error-seminar-privacy" : undefined
											}
										/>
										<label
											htmlFor="seminar-privacy"
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
										<p id="error-seminar-privacy" className="text-sm text-red-600 -mt-2">
											{errors.privacy}
										</p>
									)}

									<div className="mt-1 w-full">
										<button
											type="submit"
											className="flex w-full items-center justify-center gap-2 rounded-md bg-gold py-3.5 text-[13.5px] font-semibold text-white shadow-[0_4px_14px_rgba(184,134,11,.28)] transition-[background-color,opacity,transform,box-shadow] duration-200 hover:bg-gold-light hover:opacity-95 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(184,134,11,.35)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
										>
											説明会に申し込む
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
									id="seminar-success-heading"
									className={`${shipporiMinchoRegular.className} font-normal text-[#1A0F04] mb-4 leading-[1.35] text-balance`}
									style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
								>
									お申し込みを受け付けました
								</h2>
								<p className="text-[#7A5A3A] font-light leading-[1.9] text-pretty max-w-85 mb-4 text-sm md:text-base">
									ご希望の日時：
									<span className="font-medium text-[#5c4428]">{formattedReservation}</span>
								</p>
								<p className="text-[#7A5A3A] font-light leading-[1.9] text-pretty max-w-85 mb-10 text-sm md:text-base">
									担当より日程の確定・オンライン接続のご案内をご連絡いたします（ダミー画面のため実際の送信は行われません）。
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
