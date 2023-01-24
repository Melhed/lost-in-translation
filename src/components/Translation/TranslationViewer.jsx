import React from "react";
const uuid = require("uuid");

// Loops through every word and character and fetches the corresponding signs.
const TranslationViewer = ({ signs }) => {
	const getSignPath = (char) => `assets/signs/${char}.png`;

	// Inserts spacing between words.
	return (
		<div className="flex flex-wrap">
			{signs.map((word) => {
				if (signs.indexOf(word) === 0) {
					return (
						<div className="flex" key={uuid.v4()}>
							{Array.from(word).map((char) => (
								<img
									src={getSignPath(char)}
									alt={`${char}`}
									className="h-24"
									key={uuid.v4()}
								/>
							))}
						</div>
					);
				}

				return (
					<div className="flex ml-20" key={uuid.v4()}>
						{Array.from(word).map((char) => (
							<img
								src={getSignPath(char)}
								alt={`${char}`}
								className="h-24"
								key={uuid.v4()}
							/>
						))}
					</div>
				);
			})}
		</div>
	);
};

export default TranslationViewer;
