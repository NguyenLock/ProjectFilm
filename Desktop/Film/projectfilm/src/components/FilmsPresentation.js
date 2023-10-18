import React from 'react';
import { Link } from 'react-router-dom';

import { Films } from '../shared/ListOfFilms';
import { useState } from 'react';
import { Carousel } from 'react-materialize';

export default function FilmsPresentation({ films }) {
  const [film, setFilm] = useState([]);

  return (
    <div className='home'>


      <div className="container">
        <h1>Next Movies Will Update</h1>
        <Carousel
          carouselId="Carousel"
          images={[
            'assest/img/Billancuc.jpg',
            'assest/img/Spider-Man-Acrossr.jpg',
            'assest/img/Spinninggold.png',

          ]}
          options={{
            dist: -100,
            duration: 200,
            fullWidth: false,
            indicators: false,
            noWrap: false,
            numVisible: 5,
            onCycleTo: null,
            padding: 2,
            shift: 0
          }}
        />
        {films.map((film) => (
          <>
          <div className="column" key={film.id}>
            <div className="card">
              <img src={film.img} alt="" />
              <h3>{film.title}</h3>
              <p className="title"></p>
              <p>
                <Link to={`detail/${film.id}`}>
                  <button>Detail</button>
                </Link>
              </p>
            </div>
          </div>
          </>
        ))}

        <div id="popup1" className="overlay">
          <div className="popup">
            <img src={film.img} alt="" />
            <h2>{film.title}</h2>
            <a className="close" href="#">
              &times;
            </a>
            <div className="content">{film.info}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
