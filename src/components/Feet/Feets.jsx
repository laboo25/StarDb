import React, { useState } from 'react';
import '../Feet/feets.css';
import { feetsdata } from "../../data/feetsData.jsx";
import { piedi } from "../../data/piedi.jsx";
import { Link } from 'react-router-dom';

const Feets = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  // const uniqueNamesWithLength = Array.from(new Set(feetsdata.flatMap(item => item.name)))
  //   .map(name => ({ name, length: name.length }))
  //   .sort((a, b) => a.name.localeCompare(b.name));
  const uniqueNamesWithLength = Array.from(new Set([...feetsdata, ...piedi].flatMap(item => item.name)))
  .map(name => ({ name, length: name.length }))
  .sort((a, b) => a.name.localeCompare(b.name));

  const filteredData = feetsdata.filter(item => {
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className='main w-full h-full'>
        <div className='w-full h-auto head flex justify-between items-center flex-wrap flex-col py-3'>
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

        <div className='row'>
          {currentItems.map((item) => (
            <div className='column' key={item.id}>
              <a
                href={item.imgUrl}
                data-caption={item.name.join(', ')}
                data-fancybox="gallery"
                data-download-src={item.imgUrl}
                style={{
                  width: "auto",
                  height: "auto",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.name.join(', ')}
                  onLoad={(e) => {
                    const img = e.target;
                    if (img.naturalWidth > img.naturalHeight) {
                      img.style.width = '100%';
                      img.style.height = 'auto';
                      img.style.objectFit = 'contain';
                      img.style.justifyContent = 'center';
                    } else if (img.naturalWidth < img.naturalHeight) {
                      img.style.height = '100%';
                      img.style.width = 'auto';
                      img.style.objectFit = 'contain';
                      img.style.alignItems = 'center';
                    } else {
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

        <div className="flex justify-center mt-4 py-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`px-4 py-2 mx-2 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feets;
