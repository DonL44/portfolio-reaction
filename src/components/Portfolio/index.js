import React from 'react';

import PlaceHolderOne from "../../assets/images/placeholder_1_600.gif";
import PlaceHolderTwo from "../../assets/images/placeholder_2_600.gif";
import PlaceHolderThree from "../../assets/images/placeholder_3_600.gif";
import LookUp from "../../assets/images/LookUp-new.gif";
import MakeAppoint from "../../assets/images/make-a-point-app.gif";
import FinalProject from "../../assets/images/Final-Project.gif";

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={LookUp}
              alt="lookUp"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/DonL44/newage-datingblog/tree/dons" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://newage-datingblog.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={MakeAppoint}
              alt="Make A'Point"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/DonL44/super-song-search" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://jasonwesleysmith.github.io/super-song-search/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={FinalProject}
              alt="Final Project"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/DonL44/Portfolio" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://donl44.github.io/Portfolio/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderOne}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/DonL44" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/DonL44" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderTwo}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/DonL44" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/DonL44" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderThree}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/DonL44" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/DonL44" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;
