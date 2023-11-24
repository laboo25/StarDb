import React, { useEffect, useState } from 'react';
// import '../Navbar/StarStyle.css';
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Navbar/SideBar'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const SophiaLeone = () => {

  const [difference, setDifference] = useState();
  const [show, setShow] = useState(false);
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
          <div> {/* wrapper */}
          <div className="banner">
              <div className="image">
                
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/sophiaLeone.jpg" alt="sophiaLeone" />
              </div>
              <div className="textBox">
                <h3>sophia leone</h3>
                <p>
                  aliases: <span>Sophie Leone</span>
                </p>
                <p>
                  birth place: <span>new mexico, US</span>
                </p>
                <p>
                  birth date: <span>10-june-1997</span>
                </p>
                <p>
                  age: <span id="age" data-year="1997-6-10">{difference}</span><span className='lowercase'>y</span>
                </p>
                <p>
                  Profession: <span>adult model, porn star</span>
                </p>
                <p>
                  career: <span>2015—<span className="common active">active</span></span>
                </p>
                <p>
                  race: <span>caucasian</span>
                </p>
                <p>
                  boobs: <span>natural</span>
                </p>
                <p>
                  measurements: <span>32C―24―34</span>
                </p>
                <p>
                  hair color: <span>blonde</span>
                </p>
                <p>
                  eye color: <span>brown</span>
                </p>
                <p>
                  shoe size: <span>36 eu</span>
                </p>
                <p>
                  height: <span>5'4" [163 Cm]</span> <span className="mark">babepedia</span>
                </p>
                <p>
                  piercings: <span>no</span>
                </p>
                <p>
                  tattoos: <span>no</span>
                </p>
                <p>
                  pubic hair: <span>Bush</span>
                </p>
                <p>
                  abaility: <span>Vaginal</span>
                </p>
              </div>
            </div>
   {/* BANNER end */}
          </div>   {/* wrapper */}
        </div>  
        {/* FLEX END */}

        {/* ===========FOLDER SCETION===== */}
        <div className={`imgs-section bg-orange-500 relative z-0 ${show == true ? 'h-full overflow-auto' : 'h-[182px] overflow-hidden after:absolute after:left-0 after:bottom-[-10px] after:content-[""] after:w-full after:h-[35px] after:bg-white after:opacity-0 after:z-[10]'}`}>
          <button className=' w-10 h-10 text-black absolute right-[50%] bottom-[-5px] z-[122] ' onMouseUp={handleClick}>
            {
              show == true ? <IoIosArrowDown className='text-black text-[30px]' /> : <IoIosArrowUp className={` text-[30px]`} onMouseUp={handleChange} />

            }
          </button>
          <div className='folders'>



                  <div className='folder'>
                        <Link to='/spray'>
                              <div className='imgs' style={{ backgroundImage: 'url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/btv/slayed/spray/spray—01.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                              </div>
                        </Link>
                        <h3> <span>x82</span></h3>
                  </div>

                  

          </div>
        </div>  {/* ===========FOLDER SCETION END===== */}

        {/* RAW START */}
         {/* ===========ROW END===== */}
        <div>

        </div>
      </div>
    </>
  )
}

export default SophiaLeone