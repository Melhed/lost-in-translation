import React from "react";

// Loops through every word and character and fetches the corresponding signs.
const TranslationList = ({ signs }) => {
	const getSignPath = (char) => `assets/signs/${char}.png`;
	let count = 0;

	// Inserts spacing between words.
	return (
		<div className="flex flex-wrap">
			{signs.map((word) => {
				return Array.from(word).map((char) => (
					<img
						src={getSignPath(char)}
						alt={`${char}`}
						className="h-24"
						key={count++}
					/>
				));
			})}
		</div>
	);
};

export default TranslationList;
