import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeData } from '/src/components/Navbar/HomeData.jsx';
import '../Navbar/Home.css';

const Home = () => {
  const itemsPerPage = 25;
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ search: '' });
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortProperty, setSortProperty] = useState('title');
  const [isSticky, setIsSticky] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1); // Reset to the first page when a new search is performed
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleSortPropertyChange = (event) => {
    setSortProperty(event.target.value);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Sort and filter data based on the selected property and order
    const sortedData = [...HomeData].sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      return order * a[sortProperty].localeCompare(b[sortProperty]);
    });

    const updatedFilteredData = sortedData.filter((item) =>
      item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      (item.aliases && item.aliases.some(alias => alias.toLowerCase().includes(filters.search.toLowerCase())))
    );

    setFilteredData(updatedFilteredData);
  }, [sortProperty, sortOrder, filters.search]);

  // Calculate the pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <ul className="pagination w-full p-[10px] flex justify-center">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''} m-2 px-2 py-1 bg-sky-400 rounded`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="w-full">
        <nav className={`filters ${isSticky ? 'sticky' : ''}`}>
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
            <select
              value={sortProperty}
              onChange={handleSortPropertyChange}
              className="sort bg-transparent border-b-2 border-black"
            >
              <option value="title" default>
                Title
              </option>
              <option value="color">Color</option>
              {/* Add more options based on your data properties */}
            </select>
          </label>

          <button className="sortbtn font-semibold text-[20px]" onClick={toggleSortOrder}>
            ⇃↾
          </button>
        </nav>
        <div className="containerwr">{currentItems.map(renderItems)}</div>
        {renderPagination()}
      </div>
    </>
  );
};

export default Home;
