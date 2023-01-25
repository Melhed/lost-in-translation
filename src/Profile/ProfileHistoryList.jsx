import React from "react";

// Displays the user's translation history.
const ProfileHistoryList = ({ translations }) => {
	let count = 0;
	let reversedTranslations = translations.slice(0).reverse();
	return (
		<div className="w-full relative">
			{reversedTranslations.map((translation) =>
				count < 10 ? (
					<div
						className="py-2 px-4 border-b-2 border-gray-600 font-sanchez font-semibold text-center text-gray-600"
						key={count++}
					>
						<p className="mx-auto">{translation}</p>
					</div>
				) : (
					""
				)
			)}
		</div>
	);
};

export default ProfileHistoryList;
