import React, { useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

// Variables de URL:
const imageURL = "https://starwars-visualguide.com/assets/img/characters/";
const planetURL = "https://starwars-visualguide.com/assets/img/planets/";
const filmsURL = "https://starwars-visualguide.com/assets/img/films/";
const tatooineURL = "https://swtorstrategies.com/wp-content/uploads/2010/01/tatooine.jpg.webp";

const DetailedView = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const { uid, type } = useParams();


    let element;
    if (type === "film") {
        element = store.filmsDetail.find((item) => item.uid === uid.toString());
        return (
            <>
                <section className="detailedView-title">
                    <h1 className="text-center" id="top-of-page">All you need to know about </h1>
                    <p className="detailedView-title-name text-center">{params.name}</p>

                </section>

                <section className="info-section container mt-5">
                    <div className="row">
                        <div className="detailed-image-container col-md-4">
                            <img src={`${filmsURL}${element.uid}.jpg`} className="detailed-image" alt="..." />
                        </div>
                        <div className="col-md-4 opening-crawl-container">
                            <div>
                                <p className="text-center description-title">Synopsis</p>
                                <p className="opening-crawl">{element.properties.opening_crawl}</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-right d-flex flex-column justify-content-around">
                            <p>
                                Director: <span className="description-title">{element.properties.director}</span>
                            </p>
                            <p>
                                Producer: <span className="description-title">{element.properties.producer}</span>
                            </p>
                            <p>
                                Title: <span className="description-title">{element.properties.title}</span>
                            </p>
                            <p>
                                Release Date: <span className="description-title">{element.properties.release_date}</span>
                            </p>
                        </div>

                    </div>
                </section>
            </>
        );


    } else if (type === "planet") {
        element = store.planetsDetail.find((item) => item.uid === uid.toString());
        return <>
            <h1 className="text-center">All you need to know about </h1>
            <p className="detailedView-title-name text-center">{params.name}</p>
            <section className="info-section container text-center mt-5">
                <div className="row">
                    <div className="detailed-image-container col-md-4">
                        <img src={element.uid > 1 ? `${planetURL}${element.uid}.jpg` : `${tatooineURL}`} className="detailed-image" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <p>
                            Diameter: <span className="description-title">{element.properties.diameter}</span>
                        </p>
                        <p>
                            Rotation Period: <span className="description-title">{element.properties.rotation_period}</span>
                        </p>
                        <p>
                            Orbital Period: <span className="description-title">{element.properties.orbital_period}</span>
                        </p>
                        <p>
                            Gravity: <span className="description-title">{element.properties.gravity}</span>
                        </p>
                        <p>
                            Population: <span className="description-title">{element.properties.population}</span>
                        </p>
                        <p>
                            Climate: <span className="description-title">{element.properties.climate}</span>
                        </p>
                        <p>
                            Terrain: <span className="description-title">{element.properties.terrain}</span>
                        </p>
                        <p>
                            Surface Water: <span className="description-title">{element.properties.surface_water}</span>
                        </p>
                        <p>
                            Name: <span className="description-title">{element.properties.name}</span>
                        </p>
                    </div>
                </div>
            </section>
        </>

    } else if (type === "character") {
        element = store.charactersDetail.find((item) => item.uid === uid.toString());

        return <>

            <section className="detailedView-title">
                <h1 className="text-center">All you need to know about </h1>
                <p className="detailedView-title-name text-center">{params.name}</p>
            </section>

            <section className="info-section container text-center">
                <div className="row">
                    <div className="detailed-image-container col-md-4">
                        <img src={`${imageURL}${element.uid}.jpg`} className="detailed-image" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <p>
                            Height: <span className="description-title">{element.properties.height}</span>
                        </p>
                        <p>
                            Mass: <span className="description-title">{element.properties.mass}</span>
                        </p>
                        <p>
                            Hair Color: <span className="description-title">{element.properties.hair_color}</span>
                        </p>
                        <p>
                            Skin Color: <span className="description-title">{element.properties.skin_color}</span>
                        </p>
                        <p>
                            Eye Color: <span className="description-title">{element.properties.eye_color}</span>
                        </p>
                        <p>
                            Birth Year: <span className="description-title">{element.properties.birth_year}</span>
                        </p>
                        <p>
                            Gender: <span className="description-title">{element.properties.gender}</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    };

};

export { DetailedView };