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
    const { uid, type, name } = useParams();

    let element;
    if (type === "film") {
        element = store.filmsDetail.find((item) => item.uid === uid.toString());
        return <>
            <section className="detailedView-title">
                <h1 className="text-center">All you need to know about </h1>
                <p className="detailedView-title-name text-center">{params.name}</p>
                <img src={`${filmsURL}${element.uid}.jpg`} className="card-img-top card-img" alt="..." />
                {element && <pre>{JSON.stringify(element, null, 2)}</pre>}
            </section>
        </>

    } else if (type === "planet") {
        element = store.planetsDetail.find((item) => item.uid === uid.toString());
    } else if (type === "character") {
        element = store.charactersDetail.find((item) => item.uid === uid.toString());
    };
    return <>

        <section className="detailedView-title">
            <h1 className="text-center">All you need to know about </h1>
            <p className="detailedView-title-name text-center">{params.name}</p>
        </section>

        <section className="info-section">
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
             
               
            </section>
    </>
};

export { DetailedView };