import React, { useEffect, useState } from 'react';
import '../Navbar/StarStyle.css';
// import Navbar from '../Navbar/Navbar'
import SideBar from '../Navbar/SideBar'




const ToriBlack = () => {

  const [difference, setDifference] = useState();
  // Get the element by its ID

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

  return (
    <>
          <div>
              <Navbar />
              <div className='flex'>
                  <SideBar />
                  <div>
                      <div className="banner">
                          <div className="image">
                              {/* <Link to='/App' className="homeBtn">Home</Link> */}
                              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/toriBlack.jpg" alt="" />
                          </div>
                          <div className="textBox">
                          <h3>tori Black</h3>
                <p>
                    aliases: <span>Tory Black, Shellie Chapman, Michelle Chapman</span>
                </p>
                <p>
                    birth place: <span>Washington, us</span>
                </p>
                <p>
                    birth date: <span>26―august―1988</span>
                </p>
                <p>
                    age: <span id="age" data-year="1988-8-26">{difference}</span><span className='lowercase'>y</span>
                </p>
                <p>
                    Profession: <span>Porn Star, Cam Girl</span>
                </p>
                <p>
                    career: <span>2017―<span className="common active">active</span></span>
                </p>
                <p>
                    race: <span>white</span>
                </p>
                <p>
                    boobs: <span>natural</span>
                </p>
                <p>
                    measurements: <span>34B―27―39</span>
                </p>
                <p>
                    hair color: <span>Brown</span>
                </p>
                <p>
                    eye color: <span>Brown</span>
                </p>
                <p>
                    shoe size: <span>39 eu</span>
                </p>
                <p>
                    height: <span>175 Cm</span>
                </p>
                <p>
                    piercings: <span>Tongue; navel</span>
                </p>
                <p>
                    tattoos: <span>Five-pointed star with interlocking rings on lower right abdomen; star of david on neck</span>
                </p>
                <p>
                    pubic hair: <span>yes</span>
                </p>
                <p>
                    Special Performance: <span>BDSM, DP, FF, GangBang</span>
                </p>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- row start --> */}
    <div className="row">
        {/* <!-- =================================face start======================== --> */}
        <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―01.jpg" data-fancybox="gallery" data-caption="face #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―01 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―02.jpg" data-fancybox="gallery" data-caption="face #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―02 mini.jpg" />
            </a>
          </div>
          
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―03.jpg" data-fancybox="gallery" data-caption="face #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―03 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―04.jpg" data-fancybox="gallery" data-caption="face #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―04 mini.jpg" />
            </a>
          </div>
          
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―05.jpg" data-fancybox="gallery" data-caption="face #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―05 mini.jpg" />
            </a>
          </div>
  
          <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―06.jpg" data-fancybox="gallery" data-caption="face #6">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―06 mini.jpg" />
              </a>
            </div>
            
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―07.jpg" data-fancybox="gallery" data-caption="face #7">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/face―07 mini.jpg" />
              </a>
            </div>
          {/* <!-- =================================face end======================== --> */}
    
          {/* <!-- =================================feet start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―01.jpg" data-fancybox="gallery" data-caption="feet #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―01 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―02.jpg" data-fancybox="gallery" data-caption="feet #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―02 mini.jpg" />
            </a>
          </div>
          
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―03.jpg" data-fancybox="gallery" data-caption="feet #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―03 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―04.jpg" data-fancybox="gallery" data-caption="feet #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―04 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―05.jpg" data-fancybox="gallery" data-caption="feet #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―05 mini.jpg" />
            </a>
          </div>
          
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―06.jpg" data-fancybox="gallery" data-caption="feet #6">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―06 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―07.jpg" data-fancybox="gallery" data-caption="feet #7">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―07 mini.jpg" />
            </a>
          </div>
  
          <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―08.jpg" data-fancybox="gallery" data-caption="feet #8">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―08 mini.jpg" />
              </a>
            </div>
            
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―09.jpg" data-fancybox="gallery" data-caption="feet #9">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―09 mini.jpg" />
              </a>
            </div>
      
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―10.jpg" data-fancybox="gallery" data-caption="feet #10">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/feet―10 mini.jpg" />
              </a>
            </div>
    
          {/* <!-- =================================feet end======================== --> */}

          {/* <!-- =================================mio start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/mio―01.jpg" data-fancybox="gallery" data-caption="mio #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/mio―01 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/mio―02.jpg" data-fancybox="gallery" data-caption="mio #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/mio―02 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/mio―03.jpg" data-fancybox="gallery" data-caption="mio #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/mio―03 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/mio―04.jpg" data-fancybox="gallery" data-caption="mio #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/mio―04 mini.jpg" />
            </a>
          </div>
    
          {/* <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/mio―05.jpg" data-fancybox="gallery" data-caption="back #5">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/mio―05 mini.jpg" />
            </a>
          </div> */}
    
          {/* <!-- =================================mio end======================== --> */}
    
          {/* <!-- =================================front start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/front―01.jpg" data-fancybox="gallery" data-caption="front #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/front―01 mini.jpg" />
            </a>
          </div>
    
          {/* <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/front―02.jpg" data-fancybox="gallery" data-caption="front #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/front―02 mini.jpg" />
            </a>
          </div> */}
    
          {/* <!-- =================================front end======================== --> */}
    
          {/* <!-- =================================back start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/back―01.jpg" data-fancybox="gallery" data-caption="back #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/back―01 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/back―02.jpg" data-fancybox="gallery" data-caption="back #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/back―02 mini.jpg" />
            </a>
          </div>
    
          {/* <!-- =================================back end======================== --> */}
    
          
  
          {/* <!-- ================================ bondage start ============================= --> */}
          <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/bdsm―01.jpg" data-fancybox="gallery" data-caption="bdsm #1">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/bdsm―01 mini.jpg" />
              </a>
            </div>
      
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/bdsm―02.jpg" data-fancybox="gallery" data-caption="bdsm #2">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/bdsm―02 mini.jpg" />
              </a>
            </div>
          {/* <!-- ================================ bondage end ============================= --> */}
  
          {/* <!-- ================================ nude start ============================= --> */}
          <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/nude―01.jpg" data-fancybox="gallery" data-caption="nude #1">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/nude―01 mini.jpg" />
              </a>
            </div>
      
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/nude―02.jpg" data-fancybox="gallery" data-caption="nude #2">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/nude―02 mini.jpg" />
              </a>
            </div>
      
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/nude―03.jpg" data-fancybox="gallery" data-caption="nude #3">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/nude―03 mini.jpg" />
              </a>
            </div>
          {/* <!-- ================================ nude end ============================= --> */}
    
          {/* <!-- =================================assPussy start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―06.jpg" data-fancybox="gallery" data-caption="pussy #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―06 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―07.jpg" data-fancybox="gallery" data-caption="pussy #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―07 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―04.jpg" data-fancybox="gallery" data-caption="pussyAss #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―04 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―01.jpg" data-fancybox="gallery" data-caption="assHole #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―01 mini.jpg" />
            </a>
          </div>
  
          <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―02.jpg" data-fancybox="gallery" data-caption="pussy #5">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―02 mini.jpg" />
              </a>
            </div>
      
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―03.jpg" data-fancybox="gallery" data-caption="pussyAss #6">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―03 mini.jpg" />
              </a>
            </div>
      
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―05.jpg" data-fancybox="gallery" data-caption="assPussy #7">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/assPussy―05 mini.jpg" />
              </a>
            </div>
    
          {/* <!-- =================================assPussy end======================== --> */}
  
          {/* <!-- ================================ sesso start ============================= --> */}
          <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/sesso―01.jpg" data-fancybox="gallery" data-caption="sesso #1">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/sesso―01 mini.jpg" />
              </a>
            </div>
          {/* <!-- ================================ sesso end ============================= --> */}
    
          {/* <!-- =================================others start======================== --> */}
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/toy―01.jpg" data-fancybox="gallery" data-caption="toy #1">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/toy―01 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/toy―02.jpg" data-fancybox="gallery" data-caption="toy #2">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/toy―02 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/toy―03.jpg" data-fancybox="gallery" data-caption="toy #3">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/toy―03 mini.jpg" />
            </a>
          </div>
    
          <div className="column">
            <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/toy―04.jpg" data-fancybox="gallery" data-caption="toy #4">
              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/toy―04 mini.jpg" />
            </a>
          </div>
  
          <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/machine―01.jpg" data-fancybox="gallery" data-caption="toy #5">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/machine―01 mini.jpg" />
              </a>
            </div>
      
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/machine―02.jpg" data-fancybox="gallery" data-caption="toy #6">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/machine―02 mini.jpg" />
              </a>
            </div>
      
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/machine―03.jpg" data-fancybox="gallery" data-caption="toy #7">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/machine―03 mini.jpg" />
              </a>
            </div>
      
            <div className="column">
              <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/machine―04.jpg" data-fancybox="gallery" data-caption="toy #8">
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/toriBlack/machine―04 mini.jpg" />
              </a>
            </div>
  
  
    </div>
    {/* <!-- row end --> */}
          </div>
    </>
  )
}

export default ToriBlack