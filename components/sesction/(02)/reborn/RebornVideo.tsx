/** 埋め込み動画（YouTube nocookie）— タイトルは iframe の title / キャプション両方に使う */

export type RebornVideoProps = {
	embedUrl: string;
	title: string;
};

export function RebornVideo({ embedUrl, title }: RebornVideoProps) {
	return (
		<div className="mt-8 md:mt-10">
			<div className="relative mx-auto aspect-video max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-black/90 shadow-[0_16px_45px_rgba(15,23,42,0.18)]">
				<iframe
					className="absolute inset-0 h-full w-full"
					src={embedUrl}
					title={title}
					loading="lazy"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
			<p className="mt-3 text-center text-xs text-gray-500 md:text-base">{title}</p>
		</div>
	);
}
