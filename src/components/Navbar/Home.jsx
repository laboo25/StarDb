import React, { useEffect, useState } from 'react';
import '../Navbar/Home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { HomeData } from "/src/components/Navbar/HomeData.jsx";

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ search: '' });
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortProperty, setSortProperty] = useState('title');

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleSortPropertyChange = (event) => {
    setSortProperty(event.target.value);
  };

  useEffect(() => {
    // Sort data based on the selected property and order
    const sortedData = [...HomeData].sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      return order * a[sortProperty].localeCompare(b[sortProperty]);
    });
    setFilteredData(sortedData);
  }, [sortProperty, sortOrder]);

  useEffect(() => {
    // Filter data based on search input
    const updatedFilteredData = HomeData.filter((item) =>
      item.title.toLowerCase().includes(filters.search.toLowerCase())
    );
    setFilteredData(updatedFilteredData);
  }, [filters.search]);

  const renderItems = (item) => (
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
  );

  return (
    <>
      <div className='w-full'>
        <Navbar />
        <div className="filters">
          <label>
            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              placeholder="Search by name"
              className="search bg-transparent placeholder:text-[#0000007e] border-b-2 border-black outline-none"
            />
          </label>

          <label>
            Sort by:
            <select value={sortProperty} onChange={handleSortPropertyChange} className="sort bg-transparent border-b-2 border-black">
              <option value="title" default >Title</option>
              <option value="color">Color</option>
              {/* Add more options based on your data properties */}
            </select>
          </label>

          <button className="sortbtn font-semibold text-[20px]" onClick={toggleSortOrder}>⇃↾</button>
        </div>
        <div className="containerwr">
          {filteredData.map(renderItems)}
        </div>
      </div>
    </>
  );
};

export default Home;
