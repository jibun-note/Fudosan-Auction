import { BackButton } from "@/components/common/button/BackButton";
import MaterialRequestForm from "@/components/form";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "資料請求 | 不動産オークション",
	description:
		"サービス資料の送付先として、請求先の氏名・住所・電話番号をご入力ください。税理士の顧問先向け不動産オークションのご案内です。",
};

export default function MaterialRequestPage() {
	return (
		<div className="min-h-screen bg-white font-sans text-gray-900">
			<MaterialRequestForm />
			<div className="px-4 pb-10 pt-6 md:px-8 md:pb-14 md:pt-8">
				<div className="flex justify-center mx-auto max-w-250">
					<BackButton>{"HOME"}</BackButton>
				</div>
			</div>
		</div>
	);
}
