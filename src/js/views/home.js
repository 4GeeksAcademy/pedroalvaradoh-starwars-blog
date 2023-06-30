import React from "react";

import "../../styles/home.css";
import { Reel } from "../component/Reel.js";

export const Home = () => (
	<div className="text-center scrollbar">
		<div><img className="img-responsive logo" src="http://imageshack.com/a/img922/3783/oyvsRd.png"/>
		</div>
		<Reel />
	</div>
);
