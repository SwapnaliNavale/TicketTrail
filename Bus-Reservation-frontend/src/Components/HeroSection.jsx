import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/HeroSection.css";
import { useBus } from "../Context/BusContext.jsx";
import axios from 'axios';

const HeroSection = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [isReversed, setIsReversed] = useState(false);
  const { setBuses } = useBus();
  const navigate = useNavigate(); 
  // Handle reverse button click
  const handleReverse = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setIsReversed(!isReversed);
  };

  // Handle search button click
  // const handleSearch = async() => {
  //   // console.log("Searching for buses...");
  //   // console.log("From:", from);
  //   // console.log("To:", to);
  //   // console.log("Date:", date);
  //   try {
  //     const response = await axios.get('http://localhost:8080/schedules',{
  //     headers: {
  //       Authorization: localStorage.getItem('token')
  //     }}
      
  //     // , 
  //     // { 
  //     //   params: { 
  //     //     from: from, 
  //     //     to: to, 
  //     //     date: date 
  //     //   } 
  //     // }
  //     ).then((data)=> {
  //       debugger
  //       console.log("debugger");
  //     })
     

    
  //     if (response.status === 200) {
  //       navigate('/bus-list', { state: { buses: response.data } }); 
  //     } else {
  //       console.error('Error fetching bus data:', response.status);
  //       // Handle error (e.g., display an error message to the user)
  //     }
  //   } catch (error) {
  //     console.error('Error fetching bus data:', error);
  //     // Handle error (e.g., display an error message to the user)
  //   }


  // };

  const handleSearch = async () => {
    const token = `Bearer ` + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FwbmFsaUAxMjMiLCJpYXQiOjE3MzkxOTEyMTAsImV4cCI6MTczOTI3NzYxMCwiYXV0aG9yaXRpZXMiOiJST0xFX0FETUlOIn0.WudrLznYoY7YP3r3Dh5F4mj4u-Tj-8dTdm66nfEYHmFtEHdI04-VNUthLv2ozjBFPf6mkNhZz7obs6cnvz_t4A'//localStorage.getItem('token')
    try {
      const response = await axios.get('http://localhost:8080/schedules', {
        headers: {
          Authorization: token
        }
      });
  
      debugger; // This will allow you to inspect the response before navigation
      console.log("Response:", response);
  
      if (response.status === 200) {
        navigate('/bus-list', { state: { buses: response.data } }); 
      } else {
        console.error('Error fetching bus data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching bus data:', error);
    }
  };
  

  return (
    <>
      <div className="hero-section">
        {/* Centered Container */}
        <div className="hero-container">
          {/* Left Side - Taglines */}
          <div className="taglines">
            <h1>Travel Smarter, Not Harder</h1>
            <p>Your journey starts here. Book buses with ease and comfort.</p>
          </div>

          {/* Right Side - Search Form */}
          <div className="search-form">
            <h2>Search Buses</h2>
            <div className="form-card">
              {/* From Input */}
              <div className="input-group">
                <label>From</label>
                <input
                  type="text"
                  placeholder="Enter departure location"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>

              {/* Reverse Button */}
              <button className="reverse-button" onClick={handleReverse}>
                ⇅
              </button>

              {/* To Input */}
              <div className="input-group">
                <label>To</label>
                <input
                  type="text"
                  placeholder="Enter destination location"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>

              {/* Date Input */}
              <div className="input-group">
                <label>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* Search Button */}
              <button className="search-button" onClick={handleSearch}>
                Search Buses
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
