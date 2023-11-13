import React from 'react'



const Error404 = () => {
    const goBack = () => {
        window.history.back();
      };
  return (
    <>
          <div className="error w-full h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―01.jpg)'}}>
              <div className='w-full h-full flex flex-col justify-center items-center'>
                  <h1 className='text-9xl font-bold text-white'>Error 404</h1>
                  <p className='text-3xl font-bold text-white py-5'>Page not found</p>
                  <button className=" hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  bg-blue-400 rounded shadow "  onClick={goBack}>Go Back</button>
              </div>
              
          </div>
    
    </>
  )
}

export default Error404