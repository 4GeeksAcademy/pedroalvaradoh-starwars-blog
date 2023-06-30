import React, { useState, useEffect, useContext } from "react";

const FavoritesButton = () => {
    return <>
    <div className="ml-auto">
				
                <div className="dropdown dropstart">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item">Favorite 1</button></li>
                        <li><button className="dropdown-item">Favorite 2</button></li>
                        <li><button className="dropdown-item">Favorite 3</button></li>
                    </ul>
                </div>
            
        </div>
    </>
};

export {FavoritesButton};