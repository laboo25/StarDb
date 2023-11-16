import React, { useEffect, useState } from 'react';
// import '../Navbar/StarStyle.css';
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Navbar/SideBar'
import { Link } from 'react-router-dom';
// import LenaIsReadyToGo from './LenaAnderson/LenaIsReadyToGo';



const LenaAnderson = () => {

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
            <div className="banner">
              <div className="image">
                {/* <Link to='/App' className="homeBtn">Home</Link> */}
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/lenaAnderson.jpg" alt="" />
              </div>
              <div class="textBox">
                <h3>lena anderson</h3>
                <p>
                  aliases: <span>blaire ivory, jordan west, sloan kendricks</span>
                </p>
                <p>
                  birth place: <span>texas, us</span>
                </p>
                <p>
                  birth date: <span>28-january-1998</span>
                </p>
                <p>
                  age: <span id="age" data-year="1998-01-28"></span><span className="lowercase">y</span>
                </p>
                <p>
                  Profession: <span>Centerfold, Porn Star</span>
                </p>
                <p>
                  career: <span>2016—<span class="common active">active</span></span>
                </p>
                <p>
                  race: <span>white</span>
                </p>
                <p>
                  boobs: <span>natural</span>
                </p>
                <p>
                  measurements: <span>32B-25-36</span>
                </p>
                <p>
                  hair color: <span>brown</span>
                </p>
                <p>
                  eye color: <span>hazel</span>
                </p>
                <p>
                  shoe size: <span>40 eu</span>
                </p>
                <p>
                  height: <span>182 Cm</span>
                </p>
                <p>
                  piercings: <span>no</span>
                </p>
                <p>
                  tattoos: <span>no</span>
                </p>
                <p>
                  pubic hair: <span>no</span>
                </p>
                <p>
                  abaility: <span>anal</span>
                </p>
                <p>
                  sexpression: <span>🌕🌕🌕🌕🌖</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='imgs-section'>
          <div className='folders bg-[#ff2424] w-full h-full'>
            <div className='folder w-full h-full '>
                <Link to='/LenaIsReadyToGo'>
                <div className='imgs w-[150px] h-[100px] bg-pink-400'>

                </div></Link>
                <h3>lena in ready to go</h3>
            </div>
          </div>
          <div className='row'>
          
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

export default LenaAnderson