import React from 'react';
import { Link } from 'react-router-dom';

import imagenUno from '../../utils/proyectouno.jpg';

import imagenDos from '../../utils/proyectodos.jpg';

import imagenTres from '../../utils/proyectotres.jpg';

import imagenUnoSegundaImg from '../../utils/proyectounoSegundaimg.jpg';

import imagenUnoTerceraImg from '../../utils/proyectounoTerceraimg.jpg';

import mejorconsalud from '../../utils/mejorconsalud.jpg'

import portada from '../../utils/portada.jpg'
import Nav from '../NavMenu/NavMenu';

import S from '../Works/Works.module.css';

export default function Works() {
  return (
    <div className={S.contenedor}>
      <div className={S.navBar}>
        <Nav />
      </div>
      <div className={S.works}>
        <div className={S.titulos}>

        </div>

        <div>


          <div className={S.contenedorSecciones}>

            <section id='#Henryclub' className={S.Henryclub}>
              <img src={portada} alt="" />
              <div>
                <h3>Henry Club</h3>
                <h4>About the proyect:</h4>
                <p>
                  Administrative system for sports club, it has an administrator user and the possibility of registering as a member with the corresponding form or login with google.
                  <br />
                  <p className={S.tech}>
                    <u>Technologies Used:</u> CSS3, REACTJS, JAVASCRIOT, REDUX, HTML5.
                  </p>
                </p>
              </div>

              <div className={S.botones}>
                <button>
                  <a href="https://club-henry.vercel.app/" target="_blank">
                    See this project
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/matias183/FrontHenryClub"
                    target="_blank"
                  >
                    Repository in GitHub
                  </a>
                </button>
              </div>
            </section>



            <section id='#Countriesapp' className={S.Countriesapp}>
              <img src={imagenDos} alt="" />
              <div>
                <h3>Countries-App</h3>
                <h4>About the proyect:</h4>
                <p>
                  Its a Single Page Application (SPA), which consist in
                  consume data from a external API and It allows to the user
                  search a country and see every detail, create a new turist
                  activity and you can filter by name in alfhabetical order,
                  by continent, population and turist activity created. Also,
                  you have a search bar too.
                  <br />
                  <p className={S.tech}>
                    <u>Technologies Used:</u> REACTJS, REDUX, CSS, NODEJS,
                    EXPRESS, POSTGRESQL, SEQUELIZE.
                  </p>
                </p>
              </div>

              <div className={S.botones}>
                <button>
                  <a href="https://wikicountriesapp.vercel.app/">
                    See this project
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/lucascencig/App-Countries"
                    target="_blank"
                  >
                    Repository in GitHub
                  </a>
                </button>
              </div>
            </section>

            <section id='#StandarAridos' className={S.StandarAridos}>
              <img src={mejorconsalud} alt="" />
              <div>
                <h3>Mejor Con Salud</h3>
                <h4>About the proyect:</h4>
                <p>
                  Web project based on an informative website for mothers or anyone who wants to be informed to be a father. Adapted to all devices (mobile and desktop). Tools: Created with REACTJS, JAVASCRIPT, HTML5 and CSS3. "mediaquery" was used for responsive design. Each part of the application is separated into individual components to better work on each other. Design created in Figma.
                  <br />
                  <p className={S.tech}>
                    <u>Technologies Used:</u>REACTJS, HTML, CSS, JAVASCRIPT, FIGMA.
                  </p>
                </p>
              </div>

              <button>
                <a href="https://frontend-dev-challenge-kappa.vercel.app/" target="_blank">
                  See this project
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/lucascencig/frontend-dev-challenge"
                  target="_blank"
                >
                  Repository in GitHub
                </a>
              </button>
            </section>




            <section id='#Weatherapp' className={S.Weatherapp}>
              <img src={mejorconsalud} alt="" />
              <div>
                <h3>Mejor Con Salud</h3>
                <h4>About the proyect:</h4>
                <p>
                  Web project based on an informative website for mothers or anyone who wants to be informed to be a father. Adapted to all devices (mobile and desktop). Tools: Created with REACTJS, JAVASCRIPT, HTML5 and CSS3. "mediaquery" was used for responsive design. Each part of the application is separated into individual components to better work on each other. Design created in Figma.
                  <br />
                  <p className={S.tech}>
                    <u>Technologies Used:</u>REACTJS, HTML, CSS, JAVASCRIPT, FIGMA.
                  </p>
                </p>
              </div>

              <div className={S.botones}>
                <button>
                  <a href="https://frontend-dev-challenge-kappa.vercel.app/" target="_blank">
                    See this project
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/lucascencig/frontend-dev-challenge"
                    target="_blank"
                  >
                    Repository in GitHub
                  </a>
                </button>
              </div>
            </section>



          </div>
        </div>
      </div>
    </div>
  );
}
