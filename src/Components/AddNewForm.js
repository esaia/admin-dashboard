import React, { useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
const AddNewForm = () => {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className='bg-white drop-shadow-md flex justify-center items-start '>
      {/* left */}
      <div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          }
          alt=''
          className='w-[100px] h-[100px] rounded-full object-cover m-5'
        />
      </div>
      {/* Right */}
      <div className='pl-10'>
        <div>
          <label
            htmlFor='file-input'
            className='inputdiv flex gap-2 cursor-pointer  '
          >
            <p>Image</p>
            <DriveFolderUploadIcon />
          </label>
          <input
            type='file'
            id='file-input'
            className='w-[250px] hidden'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className='inputdiv'>
          <p>Name & Surname</p>
          <input type='text' className='addnewinput' placeholder='John Doe' />
        </div>
        <div className='inputdiv'>
          <p>Phone</p>
          <input
            type='text'
            className='addnewinput'
            placeholder='+1 234 567 89'
          />
        </div>
        <div className='inputdiv'>
          <p>Address</p>
          <input
            type='text'
            className='addnewinput'
            placeholder='Elton St. 216 New York'
          />
        </div>
        <button className='bg-green-800 text-white px-8 py-1 m-5'>send</button>
      </div>

      {/* ... */}
      <div>
        <div className='inputdiv'>
          <p>Username</p>
          <input type='text' className='addnewinput' placeholder='John_doe' />
        </div>
        <div className='inputdiv'>
          <p>Email</p>
          <input
            type='text'
            className='addnewinput'
            placeholder='John_doe@gmail.com'
          />
        </div>
        <div className='inputdiv'>
          <p>Password</p>
          <input type='password' className='addnewinput' />
        </div>
        <div className='inputdiv'>
          <p>Country</p>
          <input type='text' className='addnewinput' placeholder='USA' />
        </div>
      </div>
    </div>
  );
};

export default AddNewForm;
