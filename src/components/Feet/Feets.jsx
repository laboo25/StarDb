import React, { useState, useEffect } from 'react';
import '../Feet/feets.css';
import { feetsdata } from "../../data/feetsData.jsx";
import { piedi } from "../../data/piedi.jsx";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Feets = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const allData = [...feetsdata, ...piedi];

  
  const uniqueNamesWithLength = Array.from(new Set(allData.flatMap(item => item.name)))
    .map(name => ({ name, length: name.length }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const filteredData = allData.filter(item => {
    const matchesName = item.name.some(name => name.toLowerCase().includes(nameFilter.toLowerCase()));
    const matchesAliases = item.aliases && item.aliases.some(alias => alias.toLowerCase().includes(nameFilter.toLowerCase()));
    const matchesSearch = (
      item.name.join(', ').toLowerCase().includes(searchFilter.toLowerCase()) ||
      (item.aliases && item.aliases.join(', ').toLowerCase().includes(searchFilter.toLowerCase()))
    );
    return (nameFilter === '' || matchesName || matchesAliases) && (searchFilter === '' || matchesSearch);
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);
  const pagesToShow = 5;

  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const isPageNumberButton = page >= startPage && page <= endPage;

    if (isPageNumberButton) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <>
      <div className='main w-full h-full'>
        <div className='head w-full h-auto flex justify-between items-center py-3'>
          <div className='logo w-[20%] mx-[50px]'>
            <Link to='/' className='font-bold text-[25px]'>Home</Link>
          </div>
          <div className="flex justify-center mt-2 text-gray-500">
            <p>Total items: {filteredData.length}</p>
          </div>
          <div className='flex justify-between'>
            <div className="options flex justify-center items-center mx-4">
              <label className="text-sm font-bold text-gray-700 mb-2" htmlFor="nameFilter">Names:</label>
              <select
                id="nameFilter"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                className="w-full p-2 border rounded mx-4"
              >
                <option value="">All Names</option>
                {uniqueNamesWithLength.map((item, index) => (
                  <option className='capitalize' key={index} value={item.name}>
                    {`${item.name} (${item.length})`}
                  </option>
                ))}
              </select>
            </div>

            <div className="search flex justify-center items-center">
              <label className="text-sm font-bold text-gray-700 mb-2" htmlFor="searchFilter">Search:</label>
              <input
                type="text"
                id="searchFilter"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full p-2 mx-5 border rounded"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        <div className='feetrow'>
          {currentItems.map((item) => (
            <div>
              <div className='column' key={item.id}>
                <a
                  href={item.imgUrl}
                  data-caption={item.name.join(', ')}
                  data-fancybox="gallery"
                  data-download-src={item.imgUrl}
                  loading="lazy"
                >
                  <LazyLoadImage
                    src={item.thumbnailUrl}
                    alt={item.name.join(', ')}
                    className='w-full h-full object-contain'
                    loading="lazy" // Add this line for lazy loading
                  />
                </a>

              </div>

              <div>
                <p className='text-center'>{item.name.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 py-4">
          {/* "Page Top to Bottom" button */}
          {startPage > 1 && (
              <button
                  type="button"
                  className="pagination-btn"
                  onClick={() => handlePageChange(startPage - pagesToShow)}
              >
                  &lt;&lt;
              </button>
          )}

          {/* "First" button */}
          {startPage > 1 && (
              <button
                  type="button"
                  className="pagination-btn"
                  onClick={() => handlePageChange(1)}
              >
                  First
              </button>
          )}

          {/* Previous button */}
          {startPage > 1 && (
              <button
                  type="button"
                  className="pagination-btn"
                  onClick={() => handlePageChange(startPage - 1)}
              >
                  &lt;
              </button>
          )}

          {/* Page buttons */}
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
              <button
                  key={startPage + index}
                  type="button"
                  className={`px-4 py-2 mx-2 border rounded ${currentPage === startPage + index ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                  onClick={() => handlePageChange(startPage + index)}
              >
                  {startPage + index}
              </button>
          ))}

          {/* Next button */}
          {endPage < totalPages && (
              <button
                  type="button"
                  className="pagination-btn"
                  onClick={() => handlePageChange(endPage + 1)}
              >
                  &gt;
              </button>
          )}

          {/* "Last" button */}
          {endPage < totalPages && (
              <button
                  type="button"
                  className="pagination-btn"
                  onClick={() => handlePageChange(totalPages)}
              >
                  Last
              </button>
          )}

          {/* "Page Bottom to Top" button */}
          {endPage < totalPages && (
              <button
                  type="button"
                  className="pagination-btn"
                  onClick={() => handlePageChange(endPage + pagesToShow)}
              >
                  &gt;&gt;
              </button>
          )}

          {/* Input for manual page navigation */}
          <div className="pagination-input">
              <label className="text-sm font-bold text-gray-700 mb-2" htmlFor="manualPage">
                  Go to Page:
              </label>
              <input
                  type="number"
                  id="manualPage"
                  value={currentPage}
                  onChange={(e) => setCurrentPage(e.target.value)}
                  className="pagination-input-field"
              />
              <button
                  type="button"
                  className="pagination-btn pagination-go"
                  onClick={() => handlePageChange(Number(currentPage))}
              >
                  Go
              </button>
          </div>
      </div>

      </div>
    </>
  );
};

export default Feets;
