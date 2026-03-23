import SeminarRequestForm from "@/components/seminar-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "オンライン説明会のお申し込み | 不動産オークション",
	description:
		"カレンダーからご希望日時をお選びいただき、オンライン説明会にお申し込みください。税理士の顧問先向け不動産オークションのご案内です。",
};

export default function SeminarSignupPage() {
	return (
		<div className="min-h-screen bg-white font-sans text-gray-900">
			<SeminarRequestForm />
		</div>
	);
}
