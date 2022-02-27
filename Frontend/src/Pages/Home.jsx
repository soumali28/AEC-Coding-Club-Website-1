import React, { useContext, useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import UserContext from "./Context/LoggedUserContext";
import "./styles/Home.css";
import CarouselPic1 from "../Assets/home/image.jpg";

import HomeCard from "./Components/HomeCard";
import Winners from "../data/homeCard";


const Home = () => {
  const [show,setShow]=useState(true);

  return (
    <>
      <div className='home-main'>
        <div className='home-pic'>
          <img src={CarouselPic1}></img>
        </div>

        <div className='content'>
        <button onClick={()=>setShow(!show)} id='btntogglediv'>Coding Club Objective</button>
        
        {
          show?<section>
        
          <div className='grid'>
            <div className='objective'>
              <h2>Coding Club </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* <div className='event-img'>
              <img src='https://res.cloudinary.com/sahebcloud/image/upload/v1645215868/AIML_zwljm7.png'></img>
            </div> */}
          </div>
         
          </section>
          :null
        }

          <div className='winners'>
            <h2>Last Event Winners</h2>
            <div className='winner-cards'>
              {Winners.map((props) => {
                return <HomeCard key={props.id} data={props} />;
              })}
            </div>
          </div>
        </div>

        <footer style={{ textAlign: "center" }}>
          <span>Copyright @AEC Coding Club</span>
        </footer>
      </div>
    </>
  );
};

export default Home;
