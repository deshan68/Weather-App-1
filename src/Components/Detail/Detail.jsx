import React, { useState } from 'react';
import './Detail.css';
import { Link } from 'react-router-dom';

export const Detail = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };

    return ( 
        <div className='head' >
            <div className="center-content">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="City,Latitude and longitude"
                        value={searchQuery}
                        className='Sinput'
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch} className='search'>Search</button>
                </div>
                <div className="box-container">
                    <div className="box"><p>Today</p></div>
                    <div className="box"><p>Tommarrow</p></div>
                    <div className="box"><p>Day After Tommarrow</p></div>
                </div>

                <div>
                <Link to="/moredetails">
                  <button className='seem'>See more</button>
                </Link>
                  
                </div>
            </div>
        </div>
    );
};

  