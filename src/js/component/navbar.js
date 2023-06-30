import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesButton } from "./FavoritesButton.js";



export const Navbar = () => {
	
	return <>
		<nav className="navbar navbar-custom mb-3 px-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Starwars Essentials</span>
			</Link>
			<FavoritesButton/>
		</nav>
		</>;
};
