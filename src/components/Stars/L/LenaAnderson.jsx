import React, { useEffect, useState } from 'react';
// import '../Navbar/StarStyle.css';
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Navbar/SideBar'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const LenaAnderson = () => {

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
                {/* <Link to='/App' className="homeBtn">Home</Link> */}
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/lenaAnderson.jpg" alt="" />
              </div>
              
              <div className="textBox"> {/* textBox */}
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
                  age: <span id="age" data-year="1998-01-28">{difference}</span><span className="lowercase">y</span>
                </p>
                <p>
                  Profession: <span>Centerfold, Porn Star</span>
                </p>
                <p>
                  career: <span>2016—<span className="common active">active</span></span>
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
              </div> {/* textBox end */}
            </div>   {/* BANNER end */}
          </div>   {/* wrapper */}
        </div>  
        {/* FLEX END */}

        {/* ===========FOLDER SCETION===== */}
        <div className={`imgs-section relative z-0 ${show == true ? 'h-full overflow-auto' : 'h-[182px] overflow-hidden p-bottom-[35px] after:absolute after:left-0 after:bottom-[-10px] after:content-[""] after:w-full after:h-[35px] after:bg-white after:opacity-0 after:z-[10]'}`}>
          <button className=' w-10 h-10 text-black absolute right-[50%] bottom-[-5px] z-[122] ' onMouseUp={handleClick}>
            {
              show == true ? <IoIosArrowDown className='text-black text-[30px]' /> : <IoIosArrowUp className={` text-[30px]`} onMouseUp={handleChange} />

            }
          </button>
          <div className='folders'>



                  <div className='folder'>
                        <Link to='/we-all-do-it'>
                              <div className='imgs' style={{ backgroundImage: 'url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—16.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                              </div>
                        </Link>
                        <h3><strong>BLACKED ●</strong> we all do it<span className='x'> x67</span></h3>
                  </div>

                  <div className='folder'>
                        <Link to='/get-cozy'>
                              <div className='imgs' style={{ backgroundImage: 'url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—05.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                              </div>
                        </Link>
                        <h3><strong>BLACKEDRAW ●</strong> get cozy<span className='x'> x45</span></h3>
                  </div>

                  <div className='folder'>
                    <Link to='/lena-enjoys-wine-and-good-times'>
                          <div className='imgs' style={{ backgroundImage: 'url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/hwxxx_lena_enjoys_wine_and_good_time/lena_enjoys_wine_and_good_time—01.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                          </div>
                    </Link>
                    <h3><strong>HOTWIFEXXX ●</strong> lena enjoys wine and good times <span className='x'>x59</span></h3>
                  </div>

                  <div className='folder'>
                    <Link to='/lena-is-ready-to-let-go'>
                          <div className='imgs' style={{ backgroundImage: 'url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/hwxxx_lena_is_ready_to_let_go/lena_is_ready_to_let_go—02.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                          </div>
                    </Link>
                    <h3><strong>HOTWIFEXXX ●</strong> lena is ready to let go <span className='x'>x81</span></h3>
                  </div>

          </div>
        </div>  {/* ===========FOLDER SCETION END===== */}

        {/* RAW START */}
        <div className="row">
          {/* <!-- =================================face start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―01.jpg" data-fancybox="gallery" data-caption="face #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―01 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―02.jpg" data-fancybox="gallery" data-caption="face #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―02 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―03.jpg" data-fancybox="gallery" data-caption="face #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―03 mini.jpg" className="var" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―04.jpg" data-fancybox="gallery" data-caption="face #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―04 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―05.jpg" data-fancybox="gallery" data-caption="face #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―05 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―06.jpg" data-fancybox="gallery" data-caption="face #6">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―06 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―07.jpg" data-fancybox="gallery" data-caption="face #7">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―07 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―08.jpg" data-fancybox="gallery" data-caption="face #8">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―08 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―09.jpg" data-fancybox="gallery" data-caption="face #9">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/face―09 mini.jpg" />
            </a>
          </div>
          {/* <!-- =================================face end======================== --> */}

          {/* <!-- =================================feet start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―01.jpg" data-fancybox="gallery" data-caption="feet #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―01 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―02.jpg" data-fancybox="gallery" data-caption="feet #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―02 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―03.jpg" data-fancybox="gallery" data-caption="feet #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―03 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―04.jpg" data-fancybox="gallery" data-caption="feet #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―04 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―05.jpg" data-fancybox="gallery" data-caption="feet #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―05 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―06.jpg" data-fancybox="gallery" data-caption="feet #6">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―06 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―07.jpg" data-fancybox="gallery" data-caption="feet #7">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/feet―07 mini.jpg" />
            </a>
          </div>

          {/* <!-- =================================feet end======================== --> */}

          {/* <!-- =================================mio start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―01.jpg" data-fancybox="gallery" data-caption="mio #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―01 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―02.jpg" data-fancybox="gallery" data-caption="mio #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―02 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―03.jpg" data-fancybox="gallery" data-caption="mio #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―03 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―04.jpg" data-fancybox="gallery" data-caption="back #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―04 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―05.jpg" data-fancybox="gallery" data-caption="back #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―05 mini.jpg" />
            </a>
          </div>

          {/* <!-- =================================mio end======================== --> */}

          {/* <!-- =================================front start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/front―01.jpg" data-fancybox="gallery" data-caption="front #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/front―01 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/front―02.jpg" data-fancybox="gallery" data-caption="front #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/front―02 mini.jpg" />
            </a>
          </div>

          {/* <!-- =================================front end======================== --> */}

          {/* <!-- =================================back start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/back―01.jpg" data-fancybox="gallery" data-caption="back #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/back―01 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/back―02.jpg" data-fancybox="gallery" data-caption="back #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/back―02 mini.jpg" />
            </a>
          </div>

          {/* <!-- =================================back end======================== --> */}

          {/* <!-- =================================boobs start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/kennaJames/boobs―01.jpg" data-fancybox="gallery" data-caption="boobs #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/kennaJames/boobs―01 mini.jpg" />
            </a>
          </div>
          {/* <!-- <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/kennaJames/boobs―02.jpg" data-fancybox="gallery" data-caption="boobs #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/kennaJames/boobs―02 mini.jpg" />
            </a>
        </div> --> */}
          {/* <!-- <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/kennaJames/boobs―03.jpg" data-fancybox="gallery" data-caption="boobs #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/kennaJames/boobs―03 mini.jpg" />
            </a>
        </div> --> */}
          {/* <!-- =================================boobs end======================== --> */}



          {/* <!-- =================================assPussy start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussy―01.jpg" data-fancybox="gallery" data-caption="pussy #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussy―01 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussy―02.jpg" data-fancybox="gallery" data-caption="pussy #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussy―02 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussy―03.jpg" data-fancybox="gallery" data-caption="pussy #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussy―03 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussy―04.jpg" data-fancybox="gallery" data-caption="pussy #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussy―04 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussyAss―01.jpg" data-fancybox="gallery" data-caption="pussyAss #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussyAss―01 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussyAss―02.jpg" data-fancybox="gallery" data-caption="pussyAss #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussyAss―02 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussyAss―03.jpg" data-fancybox="gallery" data-caption="pussyAss #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussyAss―03 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussyAss―04.jpg" data-fancybox="gallery" data-caption="pussyAss #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussyAss―04 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussyAss―05.jpg" data-fancybox="gallery" data-caption="pussyAss #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/pussyAss―05 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/assHole―01.jpg" data-fancybox="gallery" data-caption="assHole #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/assHole―01 mini.jpg" />
            </a>
          </div>

          {/* <!-- =================================assPussy end======================== --> */}

          {/* <!-- =================================toy start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―01.jpg" data-fancybox="gallery" data-caption="toy #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―01 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―02.jpg" data-fancybox="gallery" data-caption="toy #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―02 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―03.jpg" data-fancybox="gallery" data-caption="toy #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―03 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―04.jpg" data-fancybox="gallery" data-caption="toy #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―04 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―05.jpg" data-fancybox="gallery" data-caption="toy #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―05 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―06.jpg" data-fancybox="gallery" data-caption="toy #6">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―06 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―07.jpg" data-fancybox="gallery" data-caption="toy #7">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―07 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―08.jpg" data-fancybox="gallery" data-caption="toy #8">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―08 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―09.jpg" data-fancybox="gallery" data-caption="toy #9">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―09 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―10.jpg" data-fancybox="gallery" data-caption="toy #10">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―10 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―11.jpg" data-fancybox="gallery" data-caption="toy #11">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―11 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―12.jpg" data-fancybox="gallery" data-caption="toy #12">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―12 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―13.jpg" data-fancybox="gallery" data-caption="toy #13">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―13 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―14.jpg" data-fancybox="gallery" data-caption="toy #14">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―14 mini.jpg" />
            </a>
          </div>

          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―15.jpg" data-fancybox="gallery" data-caption="toy #15">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/toy―15 mini.jpg" />
            </a>
          </div>

          {/* <!-- =================================toy end======================== --> */}







        </div> {/* ===========ROW END===== */}
        <div>

        </div>
      </div>
    </>
  )
}

export default LenaAnderson
