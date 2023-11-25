import React, { useEffect, useState } from 'react';
import '../../Navbar/StarStyle.css'
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Navbar/SideBar'
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';


const LeahGotti = () => {
  const [show, setShow] = useState(false);
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
  const handleChange = (e) => {

  }
  const handleClick = () => {
    setShow(!show);
  };

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
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/leahGotti.jpg" alt="" />
              </div>
              <div class="textBox">
                <h3>leah gotti</h3>
                <p>
                    Birth name: <span>fiona</span>
                </p>
                <p>
                    real name: <span>Raegan Leah Brogdon</span>
                </p>
                <p>
                    birth place: <span>texas, us</span>
                </p>
                <p>
                    birth date: <span>04―October―1997</span>
                </p>
                <p>
                    age: <span id="age" data-year="1997-10-4">{difference}</span><span className="lowercase">y</span>
                </p>
                <p>
                    Profession: <span>Adult Model, Porn Star</span>
                </p>
                <p>
                    career: <span>2015―<span class="common active">active</span></span>
                </p>
                <p>
                    race: <span>white</span>
                </p>
                <p>
                    boobs: <span>natural</span>
                </p>
                <p>
                    measurements: <span>34C―22―32</span>
                </p>
                <p>
                    hair color: <span>Brown</span>
                </p>
                <p>
                    eye color: <span>Green</span>
                </p>
                <p>
                    shoe size: <span>36 eu</span>
                </p>
                <p>
                    height: <span>5'2" [157 Cm]</span>
                </p>
                <p>
                    piercings: <span>navel</span>
                </p>
                <p>
                    tattoos: <span>Has a tattoo with a ribbon on her left torso from the Bible of Proverbs "31:25"</span>
                </p>
                <p>
                    pubic hair: <span>no</span>
                </p>

                <p>
                    Special Performance: <span>anal</span>
                </p>
            </div>
            </div>
          </div>
        </div>
        {/* ===========FOLDER SCETION===== */}
        <div className={`imgs-section bg-orange-500 relative z-0 ${show == true ? 'h-full overflow-auto' : 'h-[182px] overflow-hidden after:absolute after:left-0 after:bottom-[-10px] after:content-[""] after:w-full after:h-[35px] after:bg-white after:opacity-0 after:z-[10]'}`}>
          <button className=' w-10 h-10 text-black absolute right-[50%] bottom-[-5px] z-[122] ' onMouseUp={handleClick}>
            {
              show == true ? <IoIosArrowDown className='text-black text-[30px]' /> : <IoIosArrowUp className={` text-[30px]`} onMouseUp={handleChange} />

            }
          </button>
          <div className='folders'>



                  <div className='folder'>
                        <Link to='/score'>
                              <div className='imgs' style={{ backgroundImage: 'url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/btv/slayed/score/score—01.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                              </div>
                        </Link>
                        <h3> <span>x82</span></h3>
                  </div>

                  

          </div>
        </div>  {/* ===========FOLDER SCETION END===== */}
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

export default LeahGotti