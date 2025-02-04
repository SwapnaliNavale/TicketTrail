import React, { useState } from "react";
import "../css/HeroSection.css"; // Import CSS for styling

const HeroSection = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [isReversed, setIsReversed] = useState(false);

  // Handle reverse button click
  const handleReverse = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setIsReversed(!isReversed);
  };

  // Handle search button click
  const handleSearch = () => {
    console.log("Searching for buses...");
    console.log("From:", from);
    console.log("To:", to);
    console.log("Date:", date);
    // Add API call or logic here
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
    {/* <div className="crousel">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at vel expedita soluta nemo, itaque praesentium cupiditate sed natus laboriosam magni reiciendis mollitia. Velit vero, quos totam hic pariatur minima et facere blanditiis. Non suscipit sit consequuntur, et a quod asperiores sequi quos rerum voluptate, sunt consectetur dolores rem tempore reiciendis fuga voluptatibus recusandae odit assumenda, beatae molestiae? Qui molestias, perferendis magnam, laborum voluptas error est quaerat fugit odit consectetur eveniet ratione dolores modi nulla nesciunt harum. Labore aliquid enim cupiditate totam cum consectetur saepe nam itaque dignissimos odio minus ut quo similique, aliquam optio laborum et eum consequatur deleniti.
    </div> */}
    
    </>
  );
};

export default HeroSection;