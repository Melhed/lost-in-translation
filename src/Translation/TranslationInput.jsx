import {
	faArrowCircleRight,
	faSignLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { UserContext } from "../common/UserContext";
import { translationHandler } from "./translationHandler";

const TranslationInput = ({ setSigns }) => {
	const [input, setInput] = useState("");
	const { user } = useContext(UserContext);

	// Checks input for errors and posts translations to API on form submit.
	const handleSubmit = (e) => {
		e.preventDefault();

		if (input === "" || /[^a-zA-Z\s]/.test(input))
			throw new Error("Numbers and special characters aren't allowed.");
		if (input.length > 40)
			throw new Error("Cannot translate more than 40 characters at once.");
		if (Array.from(input).indexOf(" ") !== -1) setSigns(input.split(" "));
		if (Array.from(input).indexOf(" ") === -1) setSigns([input]);

		user.translations.push(input);
		translationHandler.postTranslation(user.translations, user.id);
	};

	return (
		<form onSubmit={handleSubmit} className="w-44 flex m-auto justify-center">
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Translation"
				className="block pl-12 pr-20 py-2 h-16 font-sanchez bg-gray-100
				rounded-full border-2 border-solid text-xl border-amber-500 transition ease-in-out
				focus:outline-none focus:border-white"
			/>
			<FontAwesomeIcon
				icon={faSignLanguage}
				className="absolute text-violet-500 text-3xl mr-[332px] mt-[16px]"
			/>
			<button type="submit" className="absolute ml-80 mt-2">
				<FontAwesomeIcon
					icon={faArrowCircleRight}
					className="text-violet-500 text-5xl"
				/>
			</button>
		</form>
	);
};

export default TranslationInput;
