import React from "react";

const LoginHero = () => {
	return (
		<div className="h-80 bg-amber-400 flex w-full">
			<div className="my-auto mx-auto flex w-full justify-center">
				<img
					src="assets/LoginLogo.png"
					alt="Robot Saying Hello"
					className="h-48 my-auto"
				/>

				<div className="my-auto text-white">
					<h1 className="text-6xl font-lylas">Lost in translation</h1>
					<h2 className="text-4xl font-sanchez">Get started</h2>
				</div>
			</div>
		</div>
	);
};

export default LoginHero;
