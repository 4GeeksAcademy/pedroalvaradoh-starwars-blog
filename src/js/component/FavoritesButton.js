import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const FavoritesButton = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return <>
        <div className="ml-auto">

            <div className="dropdown dropstart">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites {store.favorites.length - 1}
                </button>
                <ul className="dropdown-menu">
                    {store.favorites.map((element, index)=>(
                    <li key={index}><button className="dropdown-item">{element}</button></li>
                    ))}
                </ul>
            </div>

        </div>
    </>
};

export { FavoritesButton };