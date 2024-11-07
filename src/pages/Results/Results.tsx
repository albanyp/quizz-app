import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Results = () => {
	const { questions } = useSelector((state: RootState) => state.quiz);
	const { selectedAnswer } = useSelector((state: RootState) => state.answer);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		const trueAnswerCounts = Object.keys(selectedAnswer).reduce(
			(acc, questionId) => {
				const trueCount = selectedAnswer[questionId].filter(
					(answer) => answer.isCorrect === "true"
				).length;
				acc += trueCount;
				return acc;
			},
			0
		);

		setCorrectAnswers(trueAnswerCounts);
	}, []);

	const startNewGame = () => {
		navigate("/");
	};

	return (
		<main>
			<div className="flex flex-col lg:flex-row items-center justify-between lg:justify-center h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-900">
				<div className="flex flex-col items-center justify-center h-2/4 lg:h-full lg:w-3/4">
					<div className="text-8xl lg:text-9xl font-extrabold text-white">BRAVO🌟</div>
					<button
						onClick={startNewGame}
						className="text-2xl mt-4 mr-10 font-semibold"
					>
						Do you wanna play again? Click here!
					</button>
				</div>
				<div
					className="bg-white h-2/4 lg:h-full w-full lg:w-5/12 flex flex-col items-center justify-center text-9xl text-purple-600"
				>
					<div className="text-4xl lg:text-6xl font-extrabold mt-4">You have scored</div>
					{correctAnswers}/{questions.length}
				</div>
			</div>
		</main>
	);
};
