import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { fetchQuestions, nextQuestion } from "../../store/quizSlice";
import { Question } from "../../components/Question/Question";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

export const Quiz = () => {
	const { questions, status, currentQuestion } = useSelector(
		(state: RootState) => state.quiz
	);
	const [isSelected, setIsSelected] = useState<boolean>(false);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const location = useLocation();
	const { limit, category } = location.state || {};

	useEffect(() => {
		(async () => {
			dispatch(fetchQuestions({ limit, category }));
		})();
	}, [dispatch]);

	if (!questions[currentQuestion] || status === "loading")
		return <Loader text="Loading..." />;
	if (status === "failed")
		return <Loader text="There was a problem with your question" />;

	const handleNext = () => {
		dispatch(nextQuestion());
		setIsSelected(false);

		if (currentQuestion + 1 === questions.length) {
			navigate("/results");
		}
	};

	const handleAnswerSelection = (id: number) => {
		if (id) setIsSelected(true);
	};

	return (
		<main>
			<div className="flex flex-col items-center justify-center bg-slate-300 text-indigo-600 mb-6">
				<div className="max-w-xs md:max-w-2xl">
					<div className="text-3xl font-extrabold lg:text-6xl capitalize my-6">
						Question {currentQuestion}/{questions.length}
					</div>
					<Question
						questionId={questions[currentQuestion].id}
						index={currentQuestion}
						answers={questions[currentQuestion].correct_answers}
						questionText={questions[currentQuestion].question}
						options={questions[currentQuestion].answers}
						handleAnswerSelection={handleAnswerSelection}
						isMultiple={questions[currentQuestion].multiple_correct_answers}
					/>
				</div>
			</div>
			<button
				className="cursor-pointer font-medium text-white text-lg lg:text-3xl px-6 py-3 bg-indigo-600 disabled:bg-slate-200 disabled:text-gray-300"
				onClick={handleNext}
				disabled={!isSelected}
			>
				Next
			</button>
		</main>
	);
};
