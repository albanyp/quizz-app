import { useDispatch, useSelector } from "react-redux";
import { QuestionTypes } from "../../types/questionTypes";
import { AnswerOption } from "../AnswerOption/AnswerOption";
import { AppDispatch, RootState } from "../../store";
import { setSelectedAnswer } from "../../store/answersSlice";

export const Question = ({
	questionId,
	questionText,
	options,
	answers,
	handleAnswerSelection,
	isMultiple,
}: QuestionTypes) => {
	const { selectedAnswer } = useSelector((state: RootState) => state.answer);
	const dispatch = useDispatch<AppDispatch>();

	const handleSelection = (optionKey: string, optionValue: string | null) => {
		if (optionValue) {
			handleAnswerSelection(questionId);
			dispatch(
				setSelectedAnswer({
					questionId,
					answerKey: optionKey,
					isCorrect: isCorrect(optionKey),
					isMultiple: `${isMultiple}`,
				})
			);
		}
	};

	const isCorrect = (optionKey: string) => {
		const selectedKey = `${optionKey}_correct`;
		return answers[selectedKey] !== null ? answers[selectedKey] : "";
	};

	return (
		<>
			<div className="text-xl font-semibold lg:text-3xl my-10">
				{questionText}
			</div>
			<div className="flex flex-col justify-center">
				{Object.entries(options)
					.filter(([, value]) => value)
					.map(([answerKey, answerValue]) => {
						return (
							<AnswerOption
								key={answerKey}
								onOptionClick={() => handleSelection(answerKey, answerValue)}
								answerKey={answerKey}
								optionText={answerValue}
                selected={selectedAnswer[options.answerKey] || false}
							/>
						);
					})}
			</div>
		</>
	);
};
