interface AnswerOptionProps {
	answerKey: string;
	optionText: string | null;
	selected: boolean;
	onOptionClick: () => void;
}

export const AnswerOption = ({
	answerKey,
	optionText,
	selected,
	onOptionClick,
}: AnswerOptionProps) => {
	const optionLetter = answerKey.charAt(7);

	const selectOption = () => {
		onOptionClick();
	};

	return (
		<button
			onClick={selectOption}
			className={`flex items-center justify-start border-2 border-indigo-600 py-3 lg:py-7 px-5 lg:px-10 my-2 lg:my-4 min-h-24 cursor-pointer ${
				selected && "bg-indigo-600"
			} active:text-white active:bg-indigo-600 focus:text-white focus:bg-indigo-600 hover:text-white hover:bg-indigo-600`}
		>
			<div
				className={`border ${
					selected ? "border-white" : "border-transparent"
				} bg-indigo-600 rounded-full text-white text-lg lg:text-3xl font-bold py-1 lg:py-3 px-3 lg:px-5 capitalize`}
			>
				{" "}
				{optionLetter}
			</div>
			<div className="text-md md:text-lg lg:text-2xl ml-2 lg:ml-8">
				{optionText}
			</div>
		</button>
	);
};
