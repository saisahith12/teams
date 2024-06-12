import React, { useState } from 'react';
import { FaEye, FaCloudDownloadAlt, FaPlus } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import Pagination from './Pagination';

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = [
    { id: 1, TeamName: 'jntuk', Status: 'Active', ProjectNames: 'Examination', TeamLeads: 'anil kumar', ProjectManager: 'Jayanth chillapalli' },

    // Add more data as needed
  ];

  const filteredData = data.filter(item =>
    item.TeamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.Status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ProjectNames.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.TeamLeads.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ProjectManager.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          className="border p-2"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex bg-green-700 w-44 ml-5 rounded-full">
          <FaCloudDownloadAlt className='h-8 w-5 ml-3 m-2 text-white'/>
          <button className=' font-bold text-white'>Export to Excel</button>
        </div>
        <div className='flex bg-blue-400 w-44 ml-5 rounded-full '>
          <FaPlus className='h-8 w-3 ml-3 m-2 text-white'/>
          <button className='font-bold text-white' onClick={() => navigate('/employee-create')}>Create Employee</button>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white">Team Name</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white">Status</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white">Project Names</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white">Team Leads</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white">Project Manager</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b border-gray-200 text-center">{item.TeamName}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-center">{item.Status}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-center">{item.ProjectNames}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-center">{item.TeamLeads}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-center">{item.ProjectManager}</td>
              <td className="py-2 px-4 border- border-gray-200 flex justify-evenly text-center">
                <FaEye className='text-blue-500 cursor-pointer' />
                <MdEdit className='text-pink-500 cursor-pointer' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Table;
