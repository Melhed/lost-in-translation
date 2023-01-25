import React from "react";

const ProfileHero = () => {
	return (
		<div className="h-80 bg-amber-400 flex w-full relative">
			<img
				src="assets/LogoWaving.png"
				alt="Robot Saying Hello"
				className="h-48 my-auto absolute left-0 bottom-0"
			/>
			<img
				src="assets/LogoHappy.png"
				alt="Robot Saying Hello"
				className="h-48 my-auto absolute right-20 bottom-0"
			/>
			<div className="my-auto mx-auto flex w-full justify-center">
				<div className="my-auto text-white">
					<h1 className="text-6xl font-lylas">Translations</h1>
					<h2 className="text-4xl font-sanchez">Your translation history</h2>
				</div>
			</div>
		</div>
	);
};

export default ProfileHero;
