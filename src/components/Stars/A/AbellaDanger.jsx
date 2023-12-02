import React, { useEffect, useState } from 'react';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import '../../Navbar/StarStyle.css'
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Navbar/SideBar'
import { AbellaDangerImgs } from '../../../data/AbellaDanger';


const AbellaDanger = () => {

  const [difference, setDifference] = useState();
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  
  // age calculate
  useEffect(() => {
    const currentDate = new Date();
    const ageElement = document.getElementById("age");
    const startYear = ageElement.dataset.year;
    const startDate = new Date(startYear);
    const yearDiffernce = currentDate.getFullYear() - startDate.getFullYear();
    setDifference(yearDiffernce);
  }, []);

  

  
  useEffect(() => {
    setData(AbellaDangerImgs);
    setCollection([...new Set(AbellaDangerImgs.map((item) => item.catagory))]);
  }, []);

  
  const gallery_filter = (itemData) => {
    const filterData = AbellaDangerImgs.filter((item) => item.catagory === itemData);
    setData(filterData);
  };
  
  const image = (item) => {
    const filterData = AbellaDangerImgs.filter((item) => item.imgUrl === item);
    setData(filterData);
  };
  const thumb = (item) => {
    const filterData = AbellaDangerImgs.filter((item) => item.thumbnailUrl === item);
    setData(filterData);
    
  };
  
const handleAll = () => {
  setData(AbellaDangerImgs);
};

  return (
    <>
      <div>
      <Navbar />
      <div>
        <div className='flex'>
          <SideBar />
          <div>
            <div className="banner">
              <div className="image">
                {/* <a class="homeBtn" href="../index.html">Home</a> */}
                <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/abellaDanger.jpg" alt="" />
              </div>
              <div className="textBox">
                <h3>abella danger</h3>
                <p>
                  aliases: <span>Bella Danger, Bella Manriquez, Bella Mevzinsky, Isabella Danger</span>
                </p>
                <p>
                  birth place: <span>Evansville, US</span>
                </p>
                <p>
                  birth date: <span>19-november-1995</span>
                </p>
                <p>
                  age: <span id="age" data-year="1995-11-19">{difference}</span><span className='lowercase'>y</span>
                </p>
                <p>
                  Profession: <span>Porn Star</span>
                </p>
                <p>
                  career: <span>2014—<span className="common active">active</span></span>
                </p>
                <p>
                  race: <span>caucasian</span>
                </p>
                <p>
                  boobs: <span>natural</span>
                </p>
                <p>
                  measurements: <span>32C―26―38</span>
                </p>
                <p>
                  hair color: <span>Brunette</span>
                </p>
                <p>
                  eye color: <span>brown</span>
                </p>
                <p>
                  shoe size: <span>39 eu</span>
                </p>
                <p>
                  height: <span>5'4" [170 Cm]</span> <span className="mark">babepedia</span>
                </p>
                <p>
                  piercings: <span>Various</span>
                </p>
                <p>
                  tattoos: <span>no</span>
                </p>
                <p>
                  pubic hair: <span>yes</span>
                </p>
                <p>
                  abaility: <span>double</span>
                </p>
              </div>
            </div>


          </div>
        </div>

        <div className="filterItem w-full flex flex-wrap">
          <ul>
            <li>
              <button onClick={handleAll}>All</button>
            </li>
            {collection.map((item) => (
              <li key={item}>
                <button onClick={() => gallery_filter(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
        

        <div className="row">
          {data.map((item) => (
            <div className="column" key={item.id}>
              <a href={item.imgUrl} data-fancybox="gallery"  data-caption={item.catagory} data-download-src={item.imgUrl}>
                
                <img
                      src={item.thumbnailUrl}
                      alt={item.category}
                      onLoad={(e) => {
                        const img = e.target;
                        if (img.naturalWidth > img.naturalHeight) {
                          img.style.width = '100%';
                          img.style.height = 'auto';
                          img.style.objectFit = 'contain';
                        }
                        else if (img.naturalWidth < img.naturalHeight) {
                          img.style.height = '100%';
                          img.style.width = 'auto';
                          img.style.objectFit = 'contain';
                        }
                        else {
                          img.style.width = '100%';
                          img.style.height = '100%';
                          img.style.objectFit = 'contain';
                        }
                      }}
                    /> 
              </a>
            </div>
          ))}
        </div>

      </div>

    </div>
    </>
  )
}

export default AbellaDanger
