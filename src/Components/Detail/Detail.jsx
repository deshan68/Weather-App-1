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
                        placeholder="City, Latitude and Longitude"
                        value={searchQuery}
                        className='Sinput'
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch} className='search'>Search</button>
                </div>
                <div className="box-container">
                    <div className="box">
                        <h1>Today</h1>
                        <form className="form">
                            <div className="form-group">
                                <label>Temperature</label>
                                <input type="text" placeholder="Temperature" />
                            </div>
                            <div className="form-group">
                                <label>Humidity</label>
                                <input type="text" placeholder="Humidity" />
                            </div>
                            <div className="form-group">
                                <label>Wind</label>
                                <input type="text" placeholder="Wind" />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="text" placeholder="Status" />
                            </div>
                        </form>
                    </div>
                    <div className="box">
                        <h1>Tomorrow</h1>
                        <form className="form">
                            <div className="form-group">
                                <label>Temperature</label>
                                <input type="text" placeholder="Temperature" />
                            </div>
                            <div className="form-group">
                                <label>Humidity</label>
                                <input type="text" placeholder="Humidity" />
                            </div>
                            <div className="form-group">
                                <label>Wind</label>
                                <input type="text" placeholder="Wind" />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="text" placeholder="Status" />
                            </div>
                        </form>
                    </div>
                    <div className="box">
                        <h1>Day After Tomorrow</h1>
                        <form className="form">
                            <div className="form-group">
                                <label>Temperature</label>
                                <input type="text" placeholder="Temperature" />
                            </div>
                            <div className="form-group">
                                <label>Humidity</label>
                                <input type="text" placeholder="Humidity" />
                            </div>
                            <div className="form-group">
                                <label>Wind</label>
                                <input type="text" placeholder="Wind" />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="text" placeholder="Status" />
                            </div>
                        </form>
                    </div>
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
