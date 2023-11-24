import React, { useEffect, useState } from 'react';
import '../../Navbar/StarStyle.css';
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Navbar/SideBar'


const JiaLissa = () => {

  const [difference, setDifference] = useState();
  useEffect(() => {
    // Access the data attribute inside the useEffect hook
    const currentDate = new Date();
    const ageElement = document.getElementById("age");
    const startYear = ageElement.dataset.year;
    const startDate = new Date(startYear);
    console.log("Start Date", startDate.getFullYear()); // Outputs: 1999-01-01
    console.log("Current Date", currentDate.getFullYear()); // Outputs: 1999-01-01
    const yearDiffernce = currentDate.getFullYear() - startDate.getFullYear();
    console.log(yearDiffernce);
    setDifference(yearDiffernce);

  }, []);

  

 

  return (
    <>
      <div>
        <Navbar />
        <div className='flex'>
        {/* <div className="w-[180px] h-screen"></div> */}
          <SideBar />
          <div>
            <div class="banner">
              <div class="image">
                {/* <Link to='/App' className="homeBtn">Home</Link> */}
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/jiaLissa.webp" alt="" />
              </div>
              <div class="textBox">
                <h3>jia Lissa</h3>
                <p>
                    aliases: <span>Julia Chirkova</span>
                </p>
                <p>
                    birth place: <span>Moscow, Russia</span>
                </p>
                <p>
                    birth date: <span>01―september―1996</span>
                </p>
                <p>
                    age: <span id="age" data-year="1996-9-1"></span><span className="lowercase">y</span>
                </p>
                <p>
                    Profession: <span>Adult Model, Porn Star</span>
                </p>
                <p>
                    career: <span>2017―<span class="common active">active</span></span>
                </p>
                <p>
                    race: <span>caucasian</span>
                </p>
                <p>
                    boobs: <span>natural</span>
                </p>
                <p>
                    measurements: <span>32A―24―35</span>
                </p>
                <p>
                    hair color: <span>red</span>
                </p>
                <p>
                    eye color: <span>green</span>
                </p>
                <p>
                    shoe size: <span>36 eu</span>
                </p>
                <p>
                    height: <span>5'5" [165 Cm]</span>
                </p>
                <p>
                    piercings: <span>no</span>
                </p>
                <p>
                    tattoos: <span>Crescent Moon tattoo on left ankle.</span>
                </p>
                <p>
                    pubic hair: <span>yes/no</span>
                </p>
                <p>
                  Special Performance: <span>Anal</span>
              </p>
            </div>
            </div>
          </div>
        </div>
        <div>
        {/* <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={()=> setData(Alexa)}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item)=> <div  key={item.id} className="galleryItem"><img src={item.image  } /></div> )
          }
        </div>
      </div>
    </div> */}
        </div>
      </div>
    </>
  )
}

export default JiaLissa