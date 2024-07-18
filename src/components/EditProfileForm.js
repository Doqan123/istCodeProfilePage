import React, { useRef, useState } from 'react';
import { X, Save } from 'lucide-react';

const EditProfileForm = ({ userProfile, onSave, onClose}) => {
  const [updatedProfile, setUpdatedProfile] = useState(userProfile);
  const [selectedFile, setSelectedFile] = useState(null);
  const modalRef = useRef();

  const closeModal = (e) => {
    if(modalRef.current === e.target){
      onClose();
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file ? URL.createObjectURL(file) : null);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Profile data to be saved
    const profileData = { ...updatedProfile, photo: selectedFile };
    onSave(profileData);
  
  
  
  };

  return (
    <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className='bg-white w-full max-w-4xl p-5 rounded-lg'>
        <button onClick={onClose} className='self-end mb-4'><X size={30} /></button>
        <h4 className="flex justify-center p-3 text-[22px]">Edit Profile</h4>

        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Name input */}
          <div className="relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Name & Surname</span>
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              className='text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm'
              required
              onChange={handleChange}
            />
          </div>

          {/* Email input */}
          <div className="relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Email</span>
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              className='text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm'
              required
              onChange={handleChange}
            />
          </div>

          {/* Birth Date input */}
          <div className="relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Birth Date</span>
            <input
              type="date"
              name="birthDate"
              className='text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm'
              required
              onChange={handleChange}
            />
          </div>

          {/* Profession input */}
          <div className="relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Profession</span>
            <input
              type="text"
              name="profession"
              placeholder='Enter your profession'
              className='text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm'
              required
              onChange={handleChange}
            />
          </div>

          {/* University input */}
          <div className="relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">University</span>
            <input
              type="text"
              name="university"
              placeholder='Enter your university'
              className='text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm'
              require
              onChange={handleChange}
            />
          </div>

          {/* Phone Number input */}
          <div className="relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Phone Number</span>
            <input
              type="tel"
              name="phoneNumber"
              placeholder='Enter your phone number'
              className='text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm'
              required
              onChange={handleChange}
            />
          </div>

          {/* Country input */}
          <div className="relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Country</span>
            <select
              name="country"
              className='text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm required:'
              required
              onChange={handleChange}
            >
              <option value="" >Select your country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              {/* Add more country options as needed */}
            </select>
          </div>

          {/* City input */}
          <div className="relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">City</span>
            <select
              name="city"
              className='text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm required:'
              required
              value={updatedProfile.city}
              onChange={handleChange}
            >
              <option value="" >Select your city</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
              {/* Add more city options as needed */}
            </select>
          </div>

          {/* Bio input */}
          <div className="relative col-span-1 md:col-span-2">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Bio</span>
            <textarea
              name="bio"
              placeholder='Tell us about yourself'
              className='text-[13px] text-gray-700 w-full border-2 px-2 py-1 rounded-sm h-24'
              required
              onChange={handleChange}
            />
          </div>

          {/* Social Media Accounts */}
          <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 w-full col-span-1 md:col-span-2">
            {/* LinkedIn input */}
            <div className="col-span-6 relative">
              <span className="absolute bg-white left-3 -top-[12px] px-2">Linkedin</span>
              <input
                type="text"
                name="linkedin"
                placeholder='https://www.linkedin.com/company/username'
                className="text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm"
                onChange={handleChange}
              />
            </div>

            {/* Twitter input */}
            <div className="col-span-6 relative">
              <span className="absolute bg-white left-3 -top-[12px] px-2">Twitter</span>
              <input
                type="text"
                name="twitter"
                placeholder='https://twitter.com/username'
                className="text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm"
                onChange={handleChange}
              />
            </div>

            {/* GitHub input */}
            <div className="col-span-6 relative">
              <span className="absolute bg-white left-3 -top-[12px] px-2">GitHub</span>
              <input
                type="text"
                name="github"
                placeholder='https://github.com/username'
                className="text-[13px] h-10 text-gray-700 w-full border-2 px-2 rounded-sm"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Photo upload input */}
          <div className="relative col-span-1 md:col-span-2">
            <span className="absolute bg-white left-3 -top-[12px] px-2">Profile Photo</span>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className='text-[13px] text-gray-700 w-full border-2 px-2 rounded-sm py-1'
              onChange={handleFileChange}
            />
          </div>

          {/* Kaydetme Butonu */}
          <div className="w-full col-span-1 md:col-span-2 text-right py-2">
            <button className="rounded-lg h-10 w-32 -sm shadow-md text-white text-[13px] bg-gray-400 hover:bg-gate-color transition duration-500  flex items-center justify-center gap-2" type="submit">
              <Save /> Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
