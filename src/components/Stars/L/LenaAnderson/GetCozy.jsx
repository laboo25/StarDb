import React, { useEffect } from 'react'
import '../../../Navbar/StarStyle.css';

const GetCozy = () => {

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
                    <div className='p-5 pl-10'>
                        <h3 className='text-[25px] text-[black] font-semibold font-sans capitalize'>get cozy<span className='text-[red]'>x45</span></h3>
                    </div>
              <div className="row " style={{paddingTop: '30px', backgroundColor: '#f0f2f5'}}>
              
              <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—01.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—01.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—02.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—02.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—03.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—03.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—04.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—04.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—05.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—05.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—06.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—06.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—07.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—07.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—08.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—08.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—09.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—09.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—10.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—10.webp" />
                      </a>
                  </div>
                  {/* 10 */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—11.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—11.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—12.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—12.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—13.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—13.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—14.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—14.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—15.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—15.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—16.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—16.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—17.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—17.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—18.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—18.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—19.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—19.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—20.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—20.webp" />
                      </a>
                  </div>
                  {/* 20 */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—21.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—21.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—22.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—22.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—23.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—23.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—24.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—24.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—25.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—25.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—26.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—26.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—27.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—27.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—28.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—28.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—29.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—29.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—30.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—30.webp" />
                      </a>
                  </div>
                  {/* 30 */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—31.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—31.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—32.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—32.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—33.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—33.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—34.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—34.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—35.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—35.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—36.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—36.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—37.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—37.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—38.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—38.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—39.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—39.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—40.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—40.webp" />
                      </a>
                  </div>

                  {/* 40 */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—41.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—41.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—42.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—42.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—43.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—43.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—44.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—44.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—45.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkdR_get_cozy/get_cozy—45.webp" />
                      </a>
                  </div>
                  
                  
                  

                
              </div>
          </div>
    </>
  )
}
export default GetCozy