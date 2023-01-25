import React from "react";
const uuid = require("uuid");

// Displays the user's translation history.
const ProfileHistoryList = ({ translations }) => {
	return (
		<div className="w-full relative">
			{translations.map((translation) => (
				<div
					className="py-2 px-4 border-b-2 border-gray-600 font-sanchez font-semibold text-center text-gray-600"
					key={uuid.v4()}
				>
					<p className="mx-auto">{translation}</p>
				</div>
			))}
		</div>
	);
};

export default ProfileHistoryList;
