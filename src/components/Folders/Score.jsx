import React, { useEffect, useState } from 'react'
// import '../../../Navbar/StarStyle.css';
import { imageData } from '../../data/btv/slayed/score';

const Score = () => {

    const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  // const [selectedCategories, setSelectedCategories] = useState([]);
  

  



  
  useEffect(() => {
    setData(imageData);
    setCollection([...new Set(imageData.map((item) => item.catagory))]);
  }, []);

  
  const gallery_filter = (itemData) => {
    const filterData = imageData.filter((item) => item.catagory === itemData);
    setData(filterData);
  };

  
  
  const image = (item) => {
    const filterData = imageData.filter((item) => item.imgUrl === item);
    setData(filterData);
  };
  const thumb = (item) => {
    const filterData = imageData.filter((item) => item.thumbnailUrl === item);
    setData(filterData);
    
  };
  
const handleAll = () => {
  setData(imageData);
};


  return (
    <>
          <div>
                    <div className='p-5 pl-10'>
                        
                                <h3 className='text-[25px] text-[black] font-semibold font-sans capitalize'>score
                          <span className='text-[red]'>x85</span></h3>
                    
                        </div>
              <div>
          {/* <div className="filterItem">
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
          </div> */}
        

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
export default Score