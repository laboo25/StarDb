import React, { useEffect, useState } from 'react';
import '../Navbar/StarStyle.css';
import Navbar from '../Navbar/Navbar'
import SideBar from '../Navbar/SideBar'



const MilaAzul = () => {

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
                              <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/milaAzul.jpg" alt="" />
                          </div>
                          <div className="textBox">
                              <h3>mila azul</h3>
                              <p>
                                  aliases: <span>Ekaterina Volkova; Elena D; Jane Y.; Mia I; Mila A; Mila Azil; Mila S; Milla; Milla Azul; Milla D; Milla Y; Mylen Branna</span>
                              </p>
                              <p>
                                  birth place: <span>Lviv, UKRAINE</span>
                              </p>
                              <p>
                                  birth date: <span>12―January―1997</span>
                              </p>
                              <p>
                                  age: <span id="age" data-year="1997-1-12">{difference}</span><span className='lowercase'>y</span>
                              </p>
                              <p>
                                  Profession: <span>Adult Model</span>
                              </p>
                              <p>
                                  career: <span>2016―<span class="common active">Active</span></span>
                              </p>
                              <p>
                                  race: <span>caucasian</span>
                              </p>
                              <p>
                                  boobs: <span>natural</span>
                              </p>
                              <p>
                                  measurements: <span>34D―22―34</span>
                              </p>
                              <p>
                                  hair color: <span>brown</span>
                              </p>
                              <p>
                                  eye color: <span>green</span>
                              </p>
                              <p>
                                  shoe size: <span>40 eu</span>
                              </p>
                              <p>
                                  height: <span>5'7" [170 Cm]</span>
                              </p>
                              <p>
                                  piercings: <span>Navel</span>
                              </p>
                              <p>
                                  tattoos: <span>no</span>
                              </p>
                              <p>
                                  pubic hair: <span>no</span>
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

export default MilaAzul