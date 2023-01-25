import React from "react";
import { useNavigate } from "react-router-dom";
import TranslationList from "./TranslationList";
const TranslationListDisplay = ({ signs }) => {
	const navigate = useNavigate();

	return (
		<div className="w-1/2 relative mx-auto mt-10 bg-gray-100 rounded-xl font-sanchez shadow-lg">
			{signs[0] && (
				<div className="absolute flex h-10 w-full top-0 bg-amber-400 rounded-t-xl">
					<span className="my-auto ml-3 text-white text-xl">
						{`"${signs.toString().replaceAll(",", " ")}"`}
					</span>
				</div>
			)}

			<div className="flex flex-wrap min-h-[300px] mx-4 py-10">
				{signs[0] && <TranslationList signs={signs} />}
			</div>

			<div className="absolute flex h-10 w-full bottom-0 bg-violet-500 rounded-b-xl drop-shadow-lg">
				<button
					onClick={() => navigate("/profile")}
					className="my-auto ml-3 py-0.5 px-2 bg-gray-100 rounded-full hover:bg-white"
				>
					Translations
				</button>
			</div>
		</div>
	);
};

export default TranslationListDisplay;
