import React, { useEffect, useState } from 'react';
import '../Navbar/StarStyle.css';
import SideBar from '../Navbar/SideBar'

const ChristyWhite = () => {

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

  return (
    <>
          <div>
              <div className='flex'>
                  <SideBar />
                  <div>
                      <div class="banner">
                          <div class="image">
                              {/* <Link to='/App' className="homeBtn">Home</Link> */}
                              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/christyWhite.jpg" alt="img" />
                          </div>
                          <div className="textBox">
                              <h3>christy white</h3>
                              <p>
                                  aliases: <span>christine chite, xristina andreadou, christina andreadou</span>
                              </p>
                              <p>
                                  birth place: <span>athens, GREECE</span>
                              </p>
                              <p>
                                  birth date: <span>17―September―2001</span>
                              </p>
                              <p>
                                  age: <span id="age" data-year="2001-9-17">{difference}</span><span className='lowercase'>y</span>
                              </p>
                              <p>
                                  Profession: <span>adult model, pornstar</span>
                              </p>
                              <p>
                                  career: <span>2021―<span class="common active">Active</span></span>
                              </p>
                              <p>
                                  race: <span>caucasian</span>
                              </p>
                              <p>
                                  boobs: <span>natural</span>
                              </p>
                              <p>
                                  measurements: <span>32B―26―34</span>
                              </p>
                              <p>
                                  hair color: <span>blonde</span>
                              </p>
                              <p>
                                  eye color: <span>brown</span>
                              </p>
                              <p>
                                  shoe size: <span>7 us</span>
                              </p>
                              <p>
                                  height: <span>5'6" [167 Cm]</span>
                              </p>
                              <p>
                                  piercings: <span>left nostril</span>
                              </p>
                              <p>
                                  tattoos: <span>"Sinner" on right buttock; "Self Made" with dancing female figure on right pelvis; Script with flying bird on right wrist; "Love me for who I am" between right breast and collarbone; Butterfly on front of right shoulder;</span>
                              </p>
                              <p>
                                  pubic hair: <span>shaved</span>
                              </p>
                              <p>
                                    Special Performance: <span>anal</span>
                                </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  row
              </div>
          </div>
    </>
  )
}

export default ChristyWhite