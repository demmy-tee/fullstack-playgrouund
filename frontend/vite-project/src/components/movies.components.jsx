import React, { useState } from 'react';
import './movies.styles.css';
import MovieInputs from '../inputs';
import cinema from '../assets/img.jpg'
import DropdownInput from '../inputs/dropdown/Dropdown';
import Button from "../components/Button"

//import the image here

const MoviesPage = () => {
  const [title] = useState('Movies Page');
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cinema})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    padding: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <>
      <div style={styles}>
        <div className="parallelogram-container">
          <div className="form-container">
             <h1 className="heading-primary">  {title} </h1>
        <form action="">
              <MovieInputs
                label="Movie Name"
                inputprops={{
            type: 'text',
            placeholder: 'enter movie'
        }}/>
        
              <MovieInputs
                label="Customer Name" inputprops={{
            type: 'text',
            placeholder: 'Enter Name'
              }} />
                <DropdownInput
            label="Single or Double Seat"
            name="Seat type"
            options={["Single", "Double"]}
              />
          <DropdownInput
            label=" Gender"
            name="gender"
            options={["Male", "Female"]}
              />
              <MovieInputs
                label="Movie Price" inputprops={{
              type: 'text',
              placeholder: 'Enter Amount of movie'
        }}/>
               <Button/>    
        </form>
          </div>   
       </div>
      </div>
    </>
  );
}


export default MoviesPage