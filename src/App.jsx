import month from './month.svg';
import lupa from './lupa.svg';
import german from './german.jpg';
import brazil from './brazil.jpg';
import usa from './usa.jpg';
import island from './island.jpg';
import afgan from './afgan.png';
import aland from './aland.png';
import alban from './alban.png';
import algeriya from './algeriya.png';
import './App.css';

function App() {
  const name = "xayr"
  return (

    <div>
      <header className="site-header">
        <div className="container site-header__container">

            <div className="site-header__box">
                <a className="site-header__logo-link" href="#">
                    <h2 className="site-header__title">
                        Davlatlar 
                    </h2>
                </a>
                <div className="site-header__block">
                   <img src={month} alt="" className='site-header__img' />
                    <button className="site-header__button">
                        Dark Mode
                    </button>
                </div>
            </div>

        </div>
    </header>
    
    
    <main className="site-main">

        <section className="hero">
            <div className="container hero__container">
                <div className="hero__box-left">
                   <img src={lupa} alt="" className='hero__img' />
                    <input className='hero__input' type="text" placeholder='Search for a country…' aria-label="search"/>
                   
                </div>

                <select className="hero__select" name="region" id="region">
                    <option className="hero__option" value="filterbyregion">Filter by Region</option>
                    <option className="hero__option" value="africa">Africa</option>
                    <option className="hero__option" value="america">America</option>
                    <option className="hero__option" value="asia">Asia</option>
                    <option className="hero__option" value="europe">Europe</option>
                    <option className="hero__option" value="Oceania">Oceania</option>
                    
                </select>

            </div>
        </section>


        <section className="flag">
          <div className="container flag__container">
             <ul className="flag__list">
                <li className="flag__item">
                  <img src={german}  alt="" className='flag__img' /> 
                  <div className="flag__block">
                    <h3 className="flag__title">
                        Germany
                      </h3>
                      <p className="flag__text">
                       <span className="flag__span">
                        Population:
                       </span> 
                       81,770,900
                      </p>
                      <p className="flag__text">
                        <span className="flag__span">
                            Region:
                        </span>
                        Europe 
                       </p>
                       <p className="flag__text">
                        <span className="flag__span">
                            Capital:
                        </span>
                        Berlin 
                       </p>
                  </div>
                </li>

                <li className="flag__item">
                   <img src={usa} alt="" className='flag__img' />
                    <div className="flag__block">
                      <h3 className="flag__title">
                        United States of America
                        </h3>
                        <p className="flag__text">
                         <span className="flag__span">
                          Population:
                         </span> 323,947,000
                        </p>
                        <p className="flag__text">
                          <span className="flag__span">
                              Region:
                          </span>
                          Americas
                         </p>
                         <p className="flag__text">
                          <span className="flag__span">
                              Capital:
                          </span>
                          Washington, D.C. 
                         </p>
                    </div>
                  </li>

                  <li className="flag__item">
                  <img src={brazil} alt="" className='flag__img' />
                    <div className="flag__block">
                      <h3 className="flag__title">
                        Brazil
                        </h3>
                        <p className="flag__text">
                         <span className="flag__span">
                          Population:
                         </span> 
                         206,135,893
                        </p>
                        <p className="flag__text">
                          <span className="flag__span">
                              Region:
                          </span>
                          Americas 
                         </p>
                         <p className="flag__text">
                          <span className="flag__span">
                              Capital:
                          </span>
                          Brasília
                         </p>
                    </div>
                  </li>

                  <li className="flag__item">
                    <img src={island} alt="" className='flag__img' />
                    <div className="flag__block">
                      <h3 className="flag__title">
                        Iceland
                        </h3>
                        <p className="flag__text">
                         <span className="flag__span">
                          Population:
                         </span> 
                          334,300
                        </p>
                        <p className="flag__text">
                          <span className="flag__span">
                              Region:
                          </span>
                          Europe 
                         </p>
                         <p className="flag__text">
                          <span className="flag__span">
                              Capital:
                          </span>
                          Reykjavík 
                         </p>
                    </div>
                  </li>

                  <li className="flag__item">
                   <img src={afgan} alt="" className='flag__img' />
                    <div className="flag__block">
                      <h3 className="flag__title">
                        Afghanistan
                        </h3>
                        <p className="flag__text">
                         <span className="flag__span">
                          Population:
                         </span> 27,657,145
                         
                        </p>
                        <p className="flag__text">
                          <span className="flag__span">
                              Region:
                          </span>
                          Asia
                         </p>
                         <p className="flag__text">
                          <span className="flag__span">
                              Capital:
                          </span>
                          Kabul
                         </p>
                    </div>
                  </li>

                  <li className="flag__item">
                  <img src={aland} alt="" className='flag__img' />
                    <div className="flag__block">
                      <h3 className="flag__title">
                        Åland Islands
                        </h3>
                        <p className="flag__text">
                         <span className="flag__span">
                          Population:
                         </span> 
                         28,875
                        </p>
                        <p className="flag__text">
                          <span className="flag__span">
                              Region:
                          </span>
                          Europe 
                         </p>
                         <p className="flag__text">
                          <span className="flag__span">
                              Capital:
                          </span>
                          Mariehamn
                         </p>
                    </div>
                  </li>

                  <li className="flag__item">
                  <img src={alban} alt="" className='flag__img' />
                    <div className="flag__block">
                      <h3 className="flag__title">
                        Albania
                        </h3>
                        <p className="flag__text">
                         <span className="flag__span">
                          Population:
                         </span> 
                         2,886,026
                        </p>
                        <p className="flag__text">
                          <span className="flag__span">
                              Region:
                          </span>
                          Europe 
                         </p>
                         <p className="flag__text">
                          <span className="flag__span">
                              Capital:
                          </span>
                          Tirana
                          </p>
                    </div>
                  </li>

                  <li className="flag__item">
                 <img src={algeriya} alt="" className='flag__img' />
                    <div className="flag__block">
                      <h3 className="flag__title">
                        Algeria
                        </h3>
                        <p className="flag__text">
                         <span className="flag__span">
                          Population:
                         </span> 
                         40,400,000
                        </p>
                        <p className="flag__text">
                          <span className="flag__span">
                              Region:
                          </span>
                          Africa
                         </p>
                         <p className="flag__text">
                          <span className="flag__span">
                              Capital:
                          </span>
                          Algiers
                         </p>
                    </div>
                  </li>
  

             </ul>
          </div>
        </section>

    </main>
    </div>
    
  );
}

export default App;
