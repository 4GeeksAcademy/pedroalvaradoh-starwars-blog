import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";



const Reel = () => {
    const { store, actions } = useContext(Context);
    const imageURL = "https://starwars-visualguide.com/assets/img/characters/";
    const planetURL = "https://starwars-visualguide.com/assets/img/planets/";
    const filmsURL = "https://starwars-visualguide.com/assets/img/films/";
    const tatooineURL = "https://swtorstrategies.com/wp-content/uploads/2010/01/tatooine.jpg.webp";
    const navigate = useNavigate();
    const isLiked = window.localStorage.getItem("favorites");

    const handleDetailed = (selected) => {
        navigate(`/details/${selected.uid}/${selected.type}/${selected.properties.name}`)
    }

    const handleDetailedFilm = (selected) => {
        navigate(`/details/${selected.uid}/${selected.type}/${selected.properties.title}#top-of-page`)
    }

    const handleLike = (name) => {
        const isAlreadyLiked = store.favorites.includes(name);

        if (isAlreadyLiked) {
            const newFavorites = store.favorites.filter((favorite) => favorite !== name);
            actions.updateFavorites(newFavorites);
        } else {
            const newFavorites = [...store.favorites, name];
            actions.updateFavorites(newFavorites);
        }
    };



    return <>

        <section className="wrapper">
            <h1 className="text-start">Characters</h1>
            <div className="card-container container">

                <div className="card-wrapper">
                    {store.charactersDetail.map((person, index) => (
                        <div className="card card-body-custom" key={index}>
                            <img src={`${imageURL}${person.uid}.jpg`} className="card-img-top card-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title card-name-text mb-4">{person.properties.name}</h5>
                                <p className="card-text ">Year of Birth: <span className="description-title">{person.properties.birth_year}</span></p>
                                <p className="card-text ">Eye Color: <span className="description-title">{person.properties.eye_color}</span></p>
                                <p className="card-text ">{person.description}</p>
                                <div className="card-buttons d-flex justify-content-between align-items-baseline">
                                    <button className="info-button align-self-center" type="button" onClick={() => handleDetailed(person)}>Learn more</button>
                                    {isLiked.includes(person.properties.name) ? <button className="btn btn-liked" onClick={() => handleLike(person.properties.name)}>♥</button>
                                        :
                                        <button className="btn btn-like" onClick={() => handleLike(person.properties.name)}>♡</button>}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

        {/* OTHER SECTION */}
        <section className="wrapper mt-5">
            <h1 className="text-start">Films</h1>
            <div className="card-container container">

                <div className="card-wrapper">
                    {store.filmsDetail.map((film, index) => (
                        <div className="card card-body-custom" key={index}>
                            <img src={`${filmsURL}${film.uid}.jpg`} className="card-img-top card-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title card-name-text mb-4">{film.properties.title}</h5>
                                <p className="card-text ">Release Date: <span className="description-title">{film.properties.release_date}</span></p>
                                <p className="card-text ">Directed by: <span className="description-title">{film.properties.director}</span></p>
                                <p className="card-text ">{film.description}</p>
                                <div className="card-buttons d-flex justify-content-between align-items-baseline">
                                    <button className="info-button align-self-center" type="button" onClick={() => handleDetailedFilm(film)}>Learn more</button>
                                    {isLiked.includes(film.properties.title) ? <button className="btn btn-liked" onClick={() => handleLike(film.properties.title)}>♥</button>
                                        :
                                        <button className="btn btn-like" onClick={() => handleLike(film.properties.title)}>♡</button>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
        {/* Planets SECTION */}
        <section className="wrapper mt-5">
            <h1 className="text-start">Planets</h1>
            <div className="card-container container">

                <div className="card-wrapper">
                    {store.planetsDetail.map((planet, index) => (
                        <div className="card card-body-custom" key={index}>
                            <img src={planet.uid > 1 ? `${planetURL}${planet.uid}.jpg` : `${tatooineURL}`} className="card-img-top card-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title card-name-text mb-4">{planet.properties.name}</h5>
                                <p className="card-text ">Climate: <span className="description-title">{planet.properties.climate}</span></p>
                                <p className="card-text ">Gravity: <span className="description-title">{planet.properties.gravity}</span></p>
                                <p className="card-text ">Population: <span className="description-title">{planet.properties.population}</span></p>
                                <div className="card-buttons d-flex justify-content-between align-items-baseline">
                                    <button className="info-button align-self-center" type="button" onClick={() => handleDetailed(planet)}>Learn more</button>
                                    {isLiked.includes(planet.properties.name) ? <button className="btn btn-liked" onClick={() => handleLike(planet.properties.name)}>♥</button>
                                        :
                                        <button className="btn btn-like" onClick={() => handleLike(planet.properties.name)}>♡</button>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

        

    </>
};

export { Reel };