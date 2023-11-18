import React, { useEffect, useState } from 'react';
// import '../Navbar/StarStyle.css';
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Navbar/SideBar'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const LiyaSilver = () => {

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
          <div>
            <div className="banner">
              <div className="image">
                {/* <Link to='/App' className="homeBtn">Home</Link> */}
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/liyaSilver.jpg" alt="" />
              </div>
              <div class="textBox">
                <h3>liya silver</h3>
                <p>
                    aliases: <span>Kristina Shcherbinina, MedinaQ</span>
                </p>

                <p>
                    birth place: <span>Saint Petersburg, russia</span>
                </p>
                <p>
                    birth date: <span>25-February-1999</span>
                </p>
                <p>
                    age: <span id="age" data-year="1999-2-25">{difference}</span><span className="lowercase">y</span>
                </p>
                <p>
                    Profession: <span>Porn Star, Adult Model</span>
                </p>
                <p>
                    career: <span>2018—<span class="common active">active</span></span>
                </p>
                <p>
                    race: <span>caucasian</span>
                </p>
                <p>
                    boobs: <span>natural</span>
                </p>
                <p>
                    measurements: <span>34D―22―32</span>
                </p>
                <p>
                    hair color: <span>brown</span>
                </p>
                <p>
                    eye color: <span>brown</span>
                </p>
                <p>
                    shoe size: <span>36 eu</span>
                </p>
                <p>
                    height: <span>5'4" [163 Cm]</span>
                </p>
                <p>
                    piercings: <span>right nostril</span>
                </p>
                <p>
                    tattoos: <span>centre of upper abdomen; around left thigh; right lower leg</span>
                </p>
                <p>
                    pubic hair: <span>no</span>
                </p>
                <p>
                    special Performance: <span>DP</span>
                </p>
            </div>
            </div>
          </div>
        </div>

        {/* <div className={ `imgs-section relative z-0 ${show == true ? 'h-full overflow-auto' : 'h-[182px] overflow-hidden after:absolute after:left-0 after:bottom-[-10px] after:content-[""] after:w-full after:h-[35px] after:bg-white after:z-[10]'}`}>
        <button className=' w-10 h-10 text-black absolute right-[50%] bottom-[-5px] z-[122] ' onMouseUp={handleClick}>
          {
            show == true ? <IoIosArrowDown className='text-black text-[30px]' /> : <IoIosArrowUp className={` text-[30px]`} onMouseUp={handleChange} />

          }
        </button>
          <div className='folders'>
            <div className='folder'>
              <Link to='/LenaIsReadyToGo'>
                <div className='imgs' style={{ backgroundImage: 'url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LiyaSilver/hwxxx_lena_is_ready_to_let_go/lena_is_ready_to_let_go—01.jpg)',  backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                </div></Link>
              <h3>lena in ready to go <span className='x'>x81</span></h3>
            </div>
            <div className='folder'>
              <Link to='/lenaEnjoysWineAndGoodTimes'>
                <div className='imgs' style={{ backgroundImage: 'url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LiyaSilver/hwxxx_lena_enjoys_wine_and_good_time/lena_enjoys_wine_and_good_time—01.jpg)',  backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                </div></Link>
              <h3>lena enjoys wine and good times <span className='x'>x59</span></h3>
            </div>

          </div>

          
        </div> */}


        <div className="row">
        {/* <!-- =================================face start======================== --> */}
        {/* <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―01.jpg" data-fancybox="gallery" data-caption="face #1">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―01 mini.webp" />
          </a>
        </div>
  
        <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―02.jpg" data-fancybox="gallery" data-caption="face #2">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―02 mini.webp" />
          </a>
        </div>
        
        <div class="column">
          <a class="hor" href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―03.jpg" data-fancybox="gallery" data-caption="face #3">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―03 mini.webp" class="var"/>
          </a>
        </div>
  
        <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―04.jpg" data-fancybox="gallery" data-caption="face #4">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―04 mini.webp" />
          </a>
        </div>
        
        <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―05.jpg" data-fancybox="gallery" data-caption="face #5">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―05 mini.webp" />
          </a>
        </div>

        <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―06.jpg" data-fancybox="gallery" data-caption="face #6">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―06 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―07.jpg" data-fancybox="gallery" data-caption="face #7">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―07 mini.webp" class="var"/>
            </a>
          </div> */}
    
          {/* <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―08.jpg" data-fancybox="gallery" data-caption="face #8">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―08 mini.webp" />
            </a>
          </div> -->
          
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―09.jpg" data-fancybox="gallery" data-caption="face #9">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―09 mini.webp" />
            </a>
          </div> -->
  
          <!-- <div class="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―10.jpg" data-fancybox="gallery" data-caption="face #10">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/face―10 mini.webp" />
              </a>
            </div> --> */}
        {/* <!-- =================================face end======================== --> */}
  
        {/* <!-- =================================feet start======================== --> */}
        {/* <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―01.jpg" data-fancybox="gallery" data-caption="feet #1">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―01%20mini.webp" />
          </a>
        </div>
  
        <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―02.jpg" data-fancybox="gallery" data-caption="feet #2">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―02 mini.webp" />
          </a>
        </div>
        
        <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―03.jpg" data-fancybox="gallery" data-caption="feet #3">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―03 mini.webp" />
          </a>
        </div>
  
        <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―04.jpg" data-fancybox="gallery" data-caption="feet #4">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―04 mini.webp" />
          </a>
        </div>
  
        <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―05.jpg" data-fancybox="gallery" data-caption="feet #5">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―05 mini.webp" />
          </a>
        </div>
        
        <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―06.jpg" data-fancybox="gallery" data-caption="feet #6">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―06 mini.webp" />
          </a>
        </div>
  
        <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―07.jpg" data-fancybox="gallery" data-caption="feet #7">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―07 mini.webp" />
          </a>
        </div>

        <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―08.jpg" data-fancybox="gallery" data-caption="feet #8">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―08 mini.webp" />
            </a>
          </div>
          
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―09.jpg" data-fancybox="gallery" data-caption="feet #9">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―09 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―10.jpg" data-fancybox="gallery" data-caption="feet #10">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―10 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―11.jpg" data-fancybox="gallery" data-caption="feet #11">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―11 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―12.jpg" data-fancybox="gallery" data-caption="feet #12">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―12 mini.webp" />
            </a>
          </div>
          
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―13.jpg" data-fancybox="gallery" data-caption="feet #13">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/feet―13 mini.webp" />
            </a>
          </div> */}
        {/* <!-- =================================feet end======================== --> */}

        {/* <!-- =================================mio start======================== --> */}
        <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―01.jpg" data-fancybox="gallery" data-caption="mio #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―01 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―02.jpg" data-fancybox="gallery" data-caption="mio #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―02 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―03.jpg" data-fancybox="gallery" data-caption="mio #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―03 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―04.jpg" data-fancybox="gallery" data-caption="mio #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―04 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―05.jpg" data-fancybox="gallery" data-caption="mio #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―05 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―06.jpg" data-fancybox="gallery" data-caption="mio #6">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―06 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―07.jpg" data-fancybox="gallery" data-caption="mio #7">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―07 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―08.jpg" data-fancybox="gallery" data-caption="mio #8">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―08 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―09.jpg" data-fancybox="gallery" data-caption="mio #9">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―09 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―10.jpg" data-fancybox="gallery" data-caption="mio #10">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―10 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―11.jpg" data-fancybox="gallery" data-caption="mio #11">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―11 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―12.jpg" data-fancybox="gallery" data-caption="mio #12">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―12 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―13.jpg" data-fancybox="gallery" data-caption="mio #13">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―13 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―14.jpg" data-fancybox="gallery" data-caption="mio #14">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―14 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―15.jpg" data-fancybox="gallery" data-caption="mio #15">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―15 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―16.jpg" data-fancybox="gallery" data-caption="mio #16">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―16 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―17.jpg" data-fancybox="gallery" data-caption="mio #17">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―17 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―18.jpg" data-fancybox="gallery" data-caption="mio #18">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―18 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―19.jpg" data-fancybox="gallery" data-caption="mio #19">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―19 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―20.jpg" data-fancybox="gallery" data-caption="mio #20">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―20 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―21.jpg" data-fancybox="gallery" data-caption="mio #21">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―21 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―22.jpg" data-fancybox="gallery" data-caption="mio #22">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―22 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―23.jpg" data-fancybox="gallery" data-caption="mio #23">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―23 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―24.jpg" data-fancybox="gallery" data-caption="mio #24">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―24 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―25.jpg" data-fancybox="gallery" data-caption="mio #25">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―25 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―26.jpg" data-fancybox="gallery" data-caption="mio #26">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―26 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―27.jpg" data-fancybox="gallery" data-caption="mio #27">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―27 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―28.jpg" data-fancybox="gallery" data-caption="mio #28">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―28 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―29.jpg" data-fancybox="gallery" data-caption="mio #29">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―29 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―30.jpg" data-fancybox="gallery" data-caption="mio #30">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―30 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―31.jpg" data-fancybox="gallery" data-caption="mio #31">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―31 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―32.jpg" data-fancybox="gallery" data-caption="mio #32">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―32 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―33.jpg" data-fancybox="gallery" data-caption="mio #33">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―33 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―34.jpg" data-fancybox="gallery" data-caption="mio #34">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―34 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―35.jpg" data-fancybox="gallery" data-caption="mio #35">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―35 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―36.jpg" data-fancybox="gallery" data-caption="mio #36">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―36 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―37.jpg" data-fancybox="gallery" data-caption="mio #37">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―37 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―38.jpg" data-fancybox="gallery" data-caption="mio #38">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―38 mini.webp" />
            </a>
          </div>
    
          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―39.jpg" data-fancybox="gallery" data-caption="mio #39">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―39 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―40.jpg" data-fancybox="gallery" data-caption="mio #40">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―40 mini.webp" />
            </a>
          </div>

          <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―41.jpg" data-fancybox="gallery" data-caption="mio #41">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/mio―41 mini.webp" />
            </a>
          </div>
          {/* <!-- =================================mio end======================== --> */}
  
        {/* <!-- =================================front start======================== --> */}
        {/* <!-- <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/front―01.jpg" data-fancybox="gallery" data-caption="front #1">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/front―01 mini.webp" />
          </a>
        </div> -->
        <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/front―02.jpg" data-fancybox="gallery" data-caption="front #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/front―02 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/front―03.jpg" data-fancybox="gallery" data-caption="front #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/front―03 mini.webp" />
            </a>
          </div> --> */}
        {/* <!-- =================================front end======================== --> */}
  
        {/* <!-- =================================back start======================== --> */}
        {/* <!-- <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/back―01.jpg" data-fancybox="gallery" data-caption="back #1">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/back―01 mini.webp" />
          </a>
        </div> -->
        <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/back―02.jpg" data-fancybox="gallery" data-caption="back #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/back―02 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/back―03.jpg" data-fancybox="gallery" data-caption="back #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/back―03 mini.webp" />
            </a>
          </div> --> */}
        {/* <!-- =================================back end======================== --> */}

        {/* <!-- =================================side start======================== --> */}
        {/* <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/side―01.jpg" data-fancybox="gallery" data-caption="side #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/side―01 mini.webp" />
            </a>
        </div> -->
        <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/side―02.jpg" data-fancybox="gallery" data-caption="side #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/side―02 mini.webp" />
            </a>
        </div> -->
        <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/side―03.jpg" data-fancybox="gallery" data-caption="side #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/side―03 mini.webp" />
            </a>
        </div> --> */}
          {/* <!-- =================================side end======================== --> */}

          {/* <!-- =================================boobs start======================== --> */}
        {/* <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/boobs―01.jpg" data-fancybox="gallery" data-caption="boobs #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/boobs―01 mini.webp" />
            </a>
        </div>
        <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/boobs―02.jpg" data-fancybox="gallery" data-caption="boobs #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/boobs―02 mini.webp" />
            </a>
        </div>
        <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/boobs―03.jpg" data-fancybox="gallery" data-caption="boobs #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/boobs―03 mini.webp" />
            </a>
        </div> */}
          {/* <!-- =================================boobs end======================== --> */}

          {/* <!-- =================================butt start======================== --> */}
        {/* <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/butt―01.jpg" data-fancybox="gallery" data-caption="butt #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/butt―01 mini.webp" />
            </a>
        </div> -->
        <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/butt―02.jpg" data-fancybox="gallery" data-caption="butt #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/butt―02 mini.webp" />
            </a>
        </div> -->
        <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/butt―03.jpg" data-fancybox="gallery" data-caption="butt #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/butt―03 mini.webp" />
            </a>
        </div> --> */}
          {/* <!-- =================================butt end======================== --> */}

          {/* <!-- =================================pussy start======================== --> */}
        {/* <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/pussy―01.jpg" data-fancybox="gallery" data-caption="pussy #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/pussy―01 mini.webp" />
            </a>
        </div> -->
        <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/pussy―02.jpg" data-fancybox="gallery" data-caption="pussy #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/pussy―02 mini.webp" />
            </a>
        </div> -->
        <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/pussy―03.jpg" data-fancybox="gallery" data-caption="pussy #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/pussy―03 mini.webp" />
            </a>
        </div> --> */}
          {/* <!-- =================================pussy end======================== --> */}
  
        {/* <!-- =================================assPussy start======================== --> */}
        {/* <!-- <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―01.jpg" data-fancybox="gallery" data-caption="assPussy #1">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―01 mini.webp" />
          </a>
        </div> -->
        <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―02.jpg" data-fancybox="gallery" data-caption="assPussy #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―02 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―03.jpg" data-fancybox="gallery" data-caption="assPussy #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―03 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―04.jpg" data-fancybox="gallery" data-caption="assPussy #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―04 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―05.jpg" data-fancybox="gallery" data-caption="assPussy #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―05 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―06.jpg" data-fancybox="gallery" data-caption="assPussy #6">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―06 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―07.jpg" data-fancybox="gallery" data-caption="assPussy #7">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―07 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―08.jpg" data-fancybox="gallery" data-caption="assPussy #8">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―08 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―09.jpg" data-fancybox="gallery" data-caption="assPussy #9">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―09 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―10.jpg" data-fancybox="gallery" data-caption="assPussy #10">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/assPussy―10 mini.webp" />
            </a>
          </div> --> */}
        {/* <!-- =================================assPussy end======================== --> */}

        {/* <!-- =================================nude start======================== --> */}
        {/* <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/nude―01.jpg" data-fancybox="gallery" data-caption="nude #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/nude―01 mini.webp" />
            </a>
          </div>
    
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/nude―02.jpg" data-fancybox="gallery" data-caption="nude #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/nude―02 mini.webp" />
            </a>
          </div> -->
    
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/nude―03.jpg" data-fancybox="gallery" data-caption="nude #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/nude―03 mini.webp" />
            </a>
          </div> --> */}
          {/* <!-- =================================nude end======================== --> */}

          {/* <!-- =================================sesso start======================== --> */}
        {/* <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/sesso―01.jpg" data-fancybox="gallery" data-caption="sesso #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/sesso―01 mini.webp" />
            </a>
          </div> -->
    
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/sesso―02.jpg" data-fancybox="gallery" data-caption="sesso #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/sesso―02 mini.webp" />
            </a>
          </div> -->
    
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/sesso―03.jpg" data-fancybox="gallery" data-caption="sesso #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/sesso―03 mini.webp" />
            </a>
          </div> --> */}
          {/* <!-- =================================sesso end======================== --> */}
  
        {/* <!-- =================================others start======================== --> */}
        <div class="column">
          <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/toy―01.jpg" data-fancybox="gallery" data-caption="toy #1">
            <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/toy―01 mini.webp" />
          </a>
        </div>
        <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/toy―02.jpg" data-fancybox="gallery" data-caption="toy #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/toy―02 mini.webp" />
            </a>
          </div>
          {/* <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/toy―03.jpg" data-fancybox="gallery" data-caption="toy #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/toy―03 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/toy―04.jpg" data-fancybox="gallery" data-caption="toy #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/toy―04 mini.webp" />
            </a>
          </div> -->
          <!-- <div class="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/toy―05.jpg" data-fancybox="gallery" data-caption="toy #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/liyaSilver/toy―05 mini.webp" />
            </a>
          </div> --> */}
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default LiyaSilver