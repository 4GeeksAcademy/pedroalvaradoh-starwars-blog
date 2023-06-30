import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const FavoritesButton = () => {
    const { store, actions } = useContext(Context);

    return <>
        <div className="ml-auto">

            <div className="dropdown dropstart">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites {store.favorites.length}
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