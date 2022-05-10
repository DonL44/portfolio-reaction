import React from 'react';
import { Link } from "react-router-dom";
import Portrait from "../../assets/images/profile_pic.jpg";

function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <br></br><br></br><br></br><h2>Hi, I'm DonL</h2>
        <p>Enter into my Student Portfolio!</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link><br></br><br></br><br></br><br></br>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default Home;
