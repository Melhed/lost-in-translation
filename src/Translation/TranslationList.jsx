import React from "react";
const uuid = require("uuid");

// Loops through every word and character and fetches the corresponding signs.
const TranslationList = ({ signs }) => {
	const getSignPath = (char) => `assets/signs/${char}.png`;

	// Inserts spacing between words.
	return (
		<div className="flex flex-wrap">
			{signs.map((word) => {
				return Array.from(word).map((char) => (
					<img
						src={getSignPath(char)}
						alt={`${char}`}
						className="h-24"
						key={uuid.v4()}
					/>
				));
			})}
		</div>
	);
};

export default TranslationList;
