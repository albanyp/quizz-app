import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();
	const [limit, setLimit] = useState(0);
	const [category, setCategory] = useState("");
	const limitOptions = [10, 20];
	const categoryOptions = ["Linux", "DevOps", "Networking", "Cloud", "Docker"];

	const startQuiz = () => {
		navigate("/quiz", { state: { limit, category } });
	};

	return (
		<main>
			<div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-900">
				<div className="flex flex-col items-center justify-between w-2/6">
					<div>
						<span
							className="text-4xl lg:text-9xl font-extrabold text-white"
						>
							QUIZZLER
						</span>
						<button
							onClick={startQuiz}
							className="text-3xl self-end text-white mt-12 cursor"
						>
							Let's start the quiz! ⏩
						</button>
					</div>
					<div className="flex flex-col my-8">
						<div className="text-xl text-white mt-12 mb-2 cursor">
							Answer if you'd like a deeper experience! If not, click above 👀
						</div>
						<div className="mb-2">How many questions would you like?</div>
						<div className="flex justify-center">
							{limitOptions.map((limitOption) => {
								return (
									<button
										key={limitOption}
										onClick={() => setLimit(limitOption)}
										className="border border-violet-600 bg-white text-violet-600 px-4 py-2"
									>
										{limitOption}
									</button>
								);
							})}
						</div>
					</div>

					<div>
						<div className="mb-2">What category suits you best?</div>
						<div className="flex justify-center flex-col lg:flex-row">
							{categoryOptions.map((categoryOption) => {
								return (
									<button
										key={categoryOption}
										onClick={() => setCategory(categoryOption)}
										className="border border-violet-600 bg-white text-violet-600 px-4 py-2"
									>
										{categoryOption}
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
