import React, { useEffect, useState } from 'react';
import '../../Navbar/StarStyle.css'
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Navbar/SideBar'



const CaseyCalvert = () => {

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

    // You can perform other operations with the dataYear value here
  }, []);

  useEffect(() => {
    const processImages = () => {
      const images = document.querySelectorAll('.column img');
      const arr = Array.from(images);

      arr.forEach((item) => {
        if (item.naturalWidth > item.naturalHeight) {
          item.style.width = '100%';
          item.style.height = 'auto';
          item.style.objectFit = 'contain';
          
        } else if (item.naturalWidth < item.naturalHeight) {
          item.style.width = 'auto';
          item.style.height = '100%';
          item.style.objectFit = 'contain';
        } else {
          item.style.width = '100%';
          item.style.height = '100%';
          item.style.objectFit = 'contain';
        }
      });
    };

    processImages();
  }, []);

  

  // useEffect(()=>{
  //   setData(Alexa);
  //   setCollection([... new Set(Alexa.map((item)=> item.title))])
  // },[]) 

  // const gallery_filter = (itemData) =>{
  //   const filterData = Alexa.filter((item)=> item.title == itemData);
  //   setData(filterData);
  // }
 

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
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/caseyCalvert.jpg" alt="" />
              </div>
              <div className="textBox">
                <h3>casey Calvert</h3>
                <p>
                    aliases: <span>Sister Casey; Sarah Michelle Goldberg</span>
                </p>
                <p>
                    birth place: <span>Maryland, US</span>
                </p>
                <p>
                    birth date: <span>17—march—1990</span>
                </p>
                <p>
                    age: <span id="age" data-year="1990-3-17">{difference}</span><span className="lowercase">y</span>
                </p>
                <p>
                    Profession: <span>Porn Star</span>
                </p>
                <p>
                    career: <span>2012—<span className="common active">active</span></span>
                </p>
                <p>
                    race: <span>caucasian</span>
                </p>
                <p>
                    boobs: <span>natural</span>
                </p>
                <p>
                    measurements: <span>34B―25―34</span>
                </p>
                <p>
                    hair color: <span>Black</span>
                </p>
                <p>
                    eye color: <span>brown</span>
                </p>
                <p>
                    shoe size: <span>37 eu</span>
                </p>
                <p>
                    height: <span>5'4" [162 cm]</span>
                </p>
                <p>
                    piercings: <span>no</span>
                </p>
                <p>
                    tattoos: <span>Very small shamrock on her back</span>
                </p>
                <p>
                    pubic hair: <span>no</span>
                </p>
                <p>
                    abaility: <span>anal, bondage, DP, gangbang</span>
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

export default CaseyCalvert