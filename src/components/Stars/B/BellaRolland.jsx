import React, { useEffect, useState } from 'react';
import '../../Navbar/StarStyle.css';
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Navbar/SideBar'



const BellaRolland = () => {

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
                      <div class="banner">
                          <div class="image">
                              {/* <Link to='/App' className="homeBtn">Home</Link> */}
                              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/bellaRolland.jpg" alt="" />
                          </div>
                          <div className="textBox">
                              <h3>bella rolland</h3>
                              {/* <p>
            aliases: <span>Maria Ryabushkina, Melena Suka, Sexy Suka, Marta Nubiles, Maria Rya, Melena Maria, Melena A, Melena Rya, Melena Tara</span>
          </p> */}
                              <p>
                                  birth place: <span>california, us</span>
                              </p>
                              <p>
                                  birth date: <span>11―july―1994</span>
                              </p>
                              
                              <p>
                                    age: <span id="age" data-year="1994-7-11">{difference}</span><span  className='lowercase'>y</span>
                                </p>
                              <p>
                                  Profession: <span>Porn Star</span>
                              </p>
                              <p>
                                  career: <span>2019―<span class="common active">active</span></span>
                              </p>
                              <p>
                                  race: <span>white</span>
                              </p>
                              <p>
                                  boobs: <span>natural</span>
                              </p>
                              <p>
                                  measurements: <span>36D―28―38</span>
                              </p>
                              <p>
                                  hair color: <span>brown</span>
                              </p>
                              <p>
                                  eye color: <span>hazel</span>
                              </p>
                              <p>
                                  shoe size: <span>10 us</span>
                              </p>
                              <p>
                                  height: <span>5'11"</span>
                              </p>
                              <p>
                                  piercings: <span>Navel, left nostril</span>
                              </p>
                              <p>
                                  tattoos: <span>no</span>
                              </p>
                              <p>
                                  pubic hair: <span>yes</span>
                              </p>
                              <p>
                                  abaility: <span>anal</span>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- row start --> */}
              <div className="row">
                  {/* <!-- =================================face start======================== --> */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―01.jpg" data-fancybox="gallery" data-caption="face #1">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―01 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―02.jpg" data-fancybox="gallery" data-caption="face #2">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―02 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―03.jpg" data-fancybox="gallery" data-caption="face #3">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―03 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―04.jpg" data-fancybox="gallery" data-caption="face #4">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―04 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―05.jpg" data-fancybox="gallery" data-caption="face #5">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―05 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―06.jpg" data-fancybox="gallery" data-caption="face #6">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―06 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―07.jpg" data-fancybox="gallery" data-caption="face #7">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/face―07 mini.jpg" />
                      </a>
                  </div>
                  {/* <!-- =================================face end======================== --> */}

                  {/* <!-- =================================feet start======================== --> */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―01.jpg" data-fancybox="gallery" data-caption="feet #1">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―01 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―02.jpg" data-fancybox="gallery" data-caption="feet #2">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―02 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―03.jpg" data-fancybox="gallery" data-caption="feet #3">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―03 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―04.jpg" data-fancybox="gallery" data-caption="feet #4">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―04 mini.jpg" />
                      </a>
                  </div>

                  {/* <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―05.jpg" data-fancybox="gallery" data-caption="feet #5">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―05 mini.jpg" />
                      </a>
                  </div> */}

                  {/* <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―06.jpg" data-fancybox="gallery" data-caption="feet #6">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―06 mini.jpg" />
                      </a>
                  </div> */}

                  {/* <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―07.jpg" data-fancybox="gallery" data-caption="feet #7">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/feet―07 mini.jpg" />
                      </a>
                  </div> */}

                  {/* <!-- =================================feet end======================== --> */}

                  {/* <!-- =================================mio start======================== --> */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/mio―01.jpg" data-fancybox="gallery" data-caption="mio #1">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/mio―01 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/mio―02.jpg" data-fancybox="gallery" data-caption="mio #2">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/mio―02 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/mio―03.jpg" data-fancybox="gallery" data-caption="mio #3">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/mio―03 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/mio―04.jpg" data-fancybox="gallery" data-caption="mio #4">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/mio―04 mini.jpg" />
                      </a>
                  </div>

                  {/* <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/mio―05.jpg" data-fancybox="gallery" data-caption="back #5">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/mio―05 mini.jpg" />
                      </a>
                  </div> */}

                  {/* <!-- =================================mio end======================== --> */}

                  {/* <!-- =================================front start======================== --> */}
                  {/* <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/front―01.jpg" data-fancybox="gallery" data-caption="front #1">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/front―01 mini.jpg" />
                      </a>
                  </div> */}

                  {/* <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/front―02.jpg" data-fancybox="gallery" data-caption="front #1">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/front―02 mini.jpg" />
                      </a>
                  </div> */}

                  {/* <!-- =================================front end======================== --> */}

                  {/* <!-- =================================back start======================== --> */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/back―01.jpg" data-fancybox="gallery" data-caption="back #1">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/back―01 mini.jpg" />
                      </a>
                  </div>

                  {/* <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/back―02.jpg" data-fancybox="gallery" data-caption="back #2">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/back―02 mini.jpg" />
                      </a>
                  </div> */}

                  {/* <!-- =================================back end======================== --> */}

                  {/* <!-- =================================boobs start======================== --> */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/boobs―01.jpg" data-fancybox="gallery" data-caption="boobs #1">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/boobs―01 mini.jpg" />
                      </a>
                  </div>
                  {/* <!-- =================================boobs end======================== --> */}

                  {/* <!-- =================================assPussy start======================== --> */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/assPussy―01.jpg" data-fancybox="gallery" data-caption="assPussy #1">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/assPussy―01 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/assPussy―02.jpg" data-fancybox="gallery" data-caption="assPussy #2">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/assPussy―02 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/assPussy―03.jpg" data-fancybox="gallery" data-caption="assPussy #3">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/assPussy―03 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/assPussy―04.jpg" data-fancybox="gallery" data-caption="assPussy #4">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/assPussy―04 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/assPussy―05.jpg" data-fancybox="gallery" data-caption="assPussy #5">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/assPussy―05 mini.jpg" />
                      </a>
                  </div>

                  {/* <!-- =================================assPussy end======================== --> */}

                  {/* <!-- =================================others start======================== --> */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/nude―01.jpg" data-fancybox="gallery" data-caption="nude #1">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/nude―01 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/nude―02 mini.jpg" data-fancybox="gallery" data-caption="nude #2">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/nude―02.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/nude―03.jpg" data-fancybox="gallery" data-caption="nude #3">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/nude―03 mini.jpg" />
                      </a>
                  </div>

                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/sesso―01.jpg" data-fancybox="gallery" data-caption="sesso #1">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/bellaRolland/sesso―01.jpg" />
                      </a>
                  </div>
                  {/* <!-- =================================others end======================== --> */}
              </div>
              {/* <!-- row end --> */}
          </div>
      </>
  )
}

export default BellaRolland