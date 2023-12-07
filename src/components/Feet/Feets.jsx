import React, { useState } from 'react';
import '../Feet/feets.css'
import { feetsdata } from "../../data/feetsData.jsx";

const Feets = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

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
      <div className='w-full h-auto flex justify-center flex-cols'>
        <div className="w-[300px] flex justify-center">
          <label className=" text-sm font-bold text-gray-700 mb-2" htmlFor="nameFilter">Filter by Name:</label>
          <select
            id="nameFilter"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">All Names</option>
            {Array.from(new Set(feetsdata.flatMap(item => item.name.concat(item.aliases || [])))).map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div className="w-[300px] flex justify-center">
          <label className=" text-sm font-bold text-gray-700 mb-2" htmlFor="searchFilter">Search by Name or Alias:</label>
          <input
            type="text"
            id="searchFilter"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className='row'>
        {currentItems.map((item) => (
          <div className='column bg-gray-800' key={item.id}>
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

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Feets;
