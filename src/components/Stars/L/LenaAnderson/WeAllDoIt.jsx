import React, { useEffect } from 'react'
import '../../../Navbar/StarStyle.css';

const WeAllDoIt = () => {

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
                        <h3 className='text-[25px] text-[black] font-semibold font-sans capitalize'>we all do it <span className='text-[red]'>x67</span></h3>
                    </div>
              <div className="row " style={{paddingTop: '30px', backgroundColor: '#f0f2f5'}}>
              
              <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—01.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—01.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—02.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—02.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—03.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—03.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—04.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—04.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—05.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—05.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—06.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—06.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—07.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—07.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—08.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—08.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—09.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—09.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—10.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—10.webp" />
                      </a>
                  </div>
                  {/* 10 */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—11.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—11.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—12.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—12.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—13.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—13.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—14.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—14.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—15.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—15.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—16.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—16.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—17.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—17.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—18.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—18.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—19.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—19.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—20.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—20.webp" />
                      </a>
                  </div>
                  {/* 20 */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—21.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—21.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—22.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—22.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—23.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—23.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—24.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—24.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—25.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—25.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—26.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—26.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—27.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—27.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—28.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—28.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—29.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—29.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—30.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—30.webp" />
                      </a>
                  </div>
                  {/* 30 */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—31.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—31.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—32.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—32.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—33.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—33.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—34.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—34.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—35.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—35.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—36.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—36.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—37.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—37.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—38.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—38.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—39.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—39.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—40.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—40.webp" />
                      </a>
                  </div>

                  {/* 40 */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—41.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—41.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—42.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—42.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—43.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—43.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—44.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—44.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—45.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—45.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—46.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—46.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—47.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—47.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—48.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—48.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—49.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—49.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—50.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—50.webp" />
                      </a>
                  </div>
                  

                  {/* 50 */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—51.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—51.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—52.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—52.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—53.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—53.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—54.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—54.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—55.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—55.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—56.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—56.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—57.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—57.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—58.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—58.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—59.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—59.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—60.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—60.webp" />
                      </a>
                  </div>
                  {/* 60 */}
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—61.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—61.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—62.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—62.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—63.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—63.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—64.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—64.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—65.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—65.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—66.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—66.webp" />
                      </a>
                  </div>
                  <div className="column">
                      <a href="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—67.jpg" data-fancybox="gallery" data-caption="">
                          <img src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/blkd_we_all_do_it/we_all_do_it—67.webp" />
                      </a>
                  </div>
                  
                  

                
              </div>
          </div>
    </>
  )
}

export default WeAllDoIt