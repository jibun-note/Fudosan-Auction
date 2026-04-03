import { BackButton } from "@/components/common/button/BackButton";
import SeminarRequestForm from "@/components/seminar-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "セミナーお申し込み | 不動産オークション",
	description:
		"不動産オークションに関するセミナーへのお申し込みフォームです。開催日時・お名前・ご連絡先をご入力ください。",
};

export default function SeminarPage() {
	return (
		<div className="min-h-screen bg-white font-sans text-gray-900">
			<SeminarRequestForm />
			<div className="px-4 pb-10 pt-6 md:px-8 md:pb-14 md:pt-8">
				<div className="flex justify-center mx-auto max-w-250">
					<BackButton>{"HOME"}</BackButton>
				</div>
			</div>
		</div>
	);
}
