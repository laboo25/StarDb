import React, { useEffect, useState } from 'react';
import '../Navbar/Home.css';
import {  Link, } from 'react-router-dom';
import Navbar from './Navbar';
// import HomeData from './HomeData'
import {HomeData} from "/src/components/Navbar/HomeData.jsx";

const Home = () => {

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  // useEffect to set initial data and collection
  
  useEffect(() => {
    // Set initial data and collection
    setData([...HomeData].sort((a, b) => a.title.localeCompare(b.title)));
    setCollection([...new Set(HomeData.map((item) => item.title))]);
  }, []);
  // Filter functions based on different criteria
  const gallery_filter = (itemData) => {
    const filterData = HomeData.filter((item) => item.title === itemData);
    setData(filterData);
  };
  const linkTo = (item) => {
    const filterData = HomeData.filter((item) => item.to === item);
    setData(filterData);
  };

  const colour = (item) => {
    const filterData = HomeData.filter((item) => item.color === item);
    setData(filterData);
  };

  const txtcolour = (item) => {
    const filterData = HomeData.filter((item) => item.txtcolor === item);
    setData(filterData);
  };

  const image = (item) => {
    const filterData = HomeData.filter((item) => item.image === item);
    setData(filterData);
  };
  
  return (
    <>
      <div className='w-full'>
        <Navbar />
        {/* <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => setData(HomeData)}>All</button>
            </li>
            {collection.map((item) => (
              <li key={item}>
                <button onClick={() => gallery_filter(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="containerwr">

          {data.map((item) => (
            <div className="cards" key={item.id} style={{ backgroundColor: item.color }}>
              <div className="bg">
                <Link to={item.to}>
                  <div className="imgs">
                    <img src={item.image} alt={item.title} />
                  </div>
                </Link>
              </div>
              <h6 style={{ color: item.txtcolor }}>{item.title}</h6>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Home;
