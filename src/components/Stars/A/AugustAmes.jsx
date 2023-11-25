import React, { useEffect, useState } from 'react';
import '../../Navbar/StarStyle.css'
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Navbar/SideBar'



const AugustAmes = () => {

  // const [difference, setDifference] = useState();
  // useEffect(() => {
  //   // Access the data attribute inside the useEffect hook
  //   const currentDate = new Date();
  //   const ageElement = document.getElementById("age");
  //   const startYear = ageElement.dataset.year;
  //   const startDate = new Date(startYear);
  //   console.log("Start Date", startDate.getFullYear()); // Outputs: 1999-01-01
  //   console.log("Current Date", currentDate.getFullYear()); // Outputs: 1999-01-01
  //   const yearDiffernce = currentDate.getFullYear() - startDate.getFullYear();
  //   console.log(yearDiffernce);
  //   setDifference(yearDiffernce);

  //   // You can perform other operations with the dataYear value here
  // }, []);

  // useEffect(() => {
  //   const processImages = () => {
  //     const images = document.querySelectorAll('.column img');
  //     const arr = Array.from(images);

  //     arr.forEach((item) => {
  //       if (item.naturalWidth > item.naturalHeight) {
  //         item.style.width = '100%';
  //         item.style.height = 'auto';
  //         item.style.objectFit = 'contain';
          
  //       } else if (item.naturalWidth < item.naturalHeight) {
  //         item.style.width = 'auto';
  //         item.style.height = '100%';
  //         item.style.objectFit = 'contain';
  //       } else {
  //         item.style.width = '100%';
  //         item.style.height = '100%';
  //         item.style.objectFit = 'contain';
  //       }
  //     });
  //   };

  //   processImages();
  // }, []);

  

  
 

  return (
    <>
      <div>
        <Navbar />
        <div className='flex'>
        {/* <div className="w-[180px] h-screen"></div> */}
          <SideBar />
          <div>
            <div class="banner">
              <div className="image">
                {/* <Link to='/App' className="homeBtn">Home</Link> */}
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/augustAmes.jpg" alt="" />
              </div>
              <div className="textBox">
                <h3>August Ames</h3>
                <p>
                    aliases: <span>Mercedes Grabowski</span>
                </p>
                <p>
                    birth place: <span>Nova Scotia, CANADA</span>
                </p>
                <p>
                    birth date: <span>23—August—1994</span>
                </p>
                <p style={{color:'red !important'}}>death date: <span>05—December—2017</span></p>
                <p>
                    age: <span className='text-red'>23y</span>
                </p>
                <p>
                    Profession: <span>Porn Star</span>
                </p>
                <p>
                    career: <span>2013—<span classNamen="common died">2017</span></span>
                </p>
                <p>
                    race: <span>Mixed-race</span>
                </p>
                <p>
                    boobs: <span>fake</span>
                </p>
                <p>
                    measurements: <span>32D―23―36</span>
                </p>
                <p>
                    hair color: <span>Brown</span>
                </p>
                <p>
                    eye color: <span>brown</span>
                </p>
                <p>
                    shoe size: <span>8 us</span>
                </p>
                <p>
                    height: <span>5'7" [170 cm]</span>
                </p>
                <p>
                    piercings: <span>Tongue; navel; lower back (dermals)</span>
                </p>
                <p>
                    tattoos: <span>"Born Wild" written on Stomach; butterflies on right foot; mermaid on left foot</span>
                </p>
                <p>
                    pubic hair: <span>no</span>
                </p>
                <p>
                    abaility: <span>anal</span>
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

export default AugustAmes