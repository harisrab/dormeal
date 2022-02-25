import Link from "next/link";

function ContinueButton({ text, nextpage }) {
	return (
		<Link href={`/${nextpage}`}>
			<button className="btn btn-primary gap-5 rounded-full px-8 normal-case font-roboto font-normal text-[16px] bg-{#9F3E1F} text-lightBrown">
				<span className="text-lightBrown text-[15px]">{text}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</svg>
			</button>
		</Link>
	);
}

export default ContinueButton;
