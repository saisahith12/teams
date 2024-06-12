import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OrganizationForm = () => {
  const [organization, setOrganization] = useState({
    FirstName: '',
    MiddleName: '',
    LastName: '',
    DateofBirth: '',
    DateofJoining: '',
    phoneNumber: '',   
    Email: '',
    Designation: '',
    Project: '',
    TeamSelection: '',
    Manager: '',
  
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrganization({ ...organization, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', organization);
    // Add your form submission logic here
  };

  return (
    <div className=' justify-center'>
    <div className="pb-10 justify-center ">
      <div className="flex justify-center ">
        {/* <div>
          <Sidebar />
        </div> */}
        <div className="mr-24 w-2/3 items-center">
          <div className=" bg-orange-500  to-neutral-400 p-4 rounded-lg mt-10 w-full">
            <p className="text-center text-white text-2xl font-bold">
              Team-Create
            </p>
          </div>
          <form className=" rounded-lg p-5 mt-4" onSubmit={handleSubmit}>
            <div className="flex justify-between pt-5 ">
              <div className='w-1/3 m-3'>
                
                <input
                  type="text"
                  name="name"
                  value={organization.name}
                  onChange={handleChange}
                  className="p-2 rounded border border-black ml-2 justify-center"
                  placeholder="Team Name "
                />
              </div>
              <div className='w-1/3 m-3 ml-11 md:ml-0'>
                
              <select
                  name="Status"
                  value={organization.Status}
                  onChange={handleChange}
                  className="p-2 px-11 rounded border border-black mr "
                >
                  <option value="Status">
                    Select Status
                  </option>
                  <option value="Active">Active</option>
                  <option value="NotActive">NotActive</option>
                </select>
              </div>
              <div className='w-1/3 m-3 ml-5 md:ml-0'>
                
                
              <select
                  name="project"
                  value={organization.project}
                  onChange={handleChange}
                  className="p-2 px-7 rounded border border-black mr"
                >
                  <option value="" >
                    Select Project
                  </option>
                  <option value="Nike">Nike</option>
                  <option value="Weatherforecast">Weatherforecast</option>
                  <option value="Movieland">Movieland</option>
                </select>

              </div>
            </div>

            <div className="flex justify-start mt-4">
              <div className='w-1/3 ml-3'>
                
                <input
                  type="text"
                  name="TeamLeads"
                  value={organization.TeamLeads}
                  onChange={handleChange}
                  className="p-2 rounded border border-black ml-2"
                  placeholder="Team Leads"
                />
              </div>
              <div className='w-1/3 m- -ml-1'>
                
              <input
                  type="text"
                  name="Project Managers"
                  value={organization.ProjectManager}
                  onChange={handleChange}
                  className="p-2 rounded border border-black mr"
                  placeholder="Project Managers"
                />
               
              </div>

            </div>

            <div className="flex justify-between pt-5">
              <div>
                
              
              </div>
              <div>
                
             
              </div>
              <div>
                
               
              </div>
            </div>

            <div >
              <div>
              
              </div>
              <div>
                
                
              </div>
              <div>
              
              </div>
             
            </div>

            <div className="flex justify-evenly mt-20">
              <button
                className="bg-blue-700 hover:bg-white hover:text-black text-white w-36 h-8 rounded-lg"
                type="submit"
              >
                Save
              </button>
              <button
                className="bg-red-700 hover:bg-white hover:text-black text-white w-36  h-9 rounded-lg"
                type="button"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrganizationForm;
(OrganizationForm.jsx)