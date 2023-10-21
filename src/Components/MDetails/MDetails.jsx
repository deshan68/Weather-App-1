import React from 'react'
import './MDetails.css';


export const MDetails = () => {
    return ( 
    <div className='head' >
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
                <div></div>
    </div>
    
);
   
};
  