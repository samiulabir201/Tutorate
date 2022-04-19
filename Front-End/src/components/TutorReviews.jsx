import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Chip, Rating} from "@mui/material";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    return (
        <div className="ml-5 p-0 col-xl-8 flex flex-wrap"
             style={{maxHeight: window.innerHeight * 0.75, overflowY: "scroll", overflowX: "hidden"}}>
            <React.Fragment>
                <div className="container w-100">
                    <div className="card mt-3 bg-transparent border-0">
                        <div className="card-body bg-white">
                            <p className="mb-2 fw-bold fs-4">Review ID: 0000</p>
                            <Rating value={3} readOnly/>
                            <br/>
                            <p className="mb-2">Amazing teacher.</p>
                        </div>
                    </div>
                </div>
                <div className="container w-100">
                    <div className="card mt-3 bg-transparent border-0">
                        <div className="card-body bg-white">
                            <p className="mb-2 fw-bold fs-4">Review ID: 0000</p>
                            <Rating value={3} readOnly/>
                            <br/>
                            <p className="mb-2">Amazing teacher.</p>
                        </div>
                    </div>
                </div>
                <div className="container w-100">
                    <div className="card mt-3 bg-transparent border-0">
                        <div className="card-body bg-white">
                            <p className="mb-2 fw-bold fs-4">Review ID: 0000</p>
                            <Rating value={3} readOnly/>
                            <br/>
                            <p className="mb-2">Amazing teacher.</p>
                        </div>
                    </div>
                </div>
                <div className="container w-100">
                    <div className="card mt-3 bg-transparent border-0">
                        <div className="card-body bg-white">
                            <p className="mb-2 fw-bold fs-4">Review ID: 0000</p>
                            <Rating value={3} readOnly/>
                            <br/>
                            <p className="mb-2">Amazing teacher.</p>
                        </div>
                    </div>
                </div>
                <div className="container w-100">
                    <div className="card mt-3 bg-transparent border-0">
                        <div className="card-body bg-white">
                            <p className="mb-2 fw-bold fs-4">Review ID: 0000</p>
                            <Rating value={3} readOnly/>
                            <br/>
                            <p className="mb-2">Amazing teacher.</p>
                        </div>
                    </div>
                </div>
                <div className="container w-100">
                    <div className="card mt-3 bg-transparent border-0">
                        <div className="card-body bg-white">
                            <p className="mb-2 fw-bold fs-4">Review ID: 0000</p>
                            <Rating value={3} readOnly/>
                            <br/>
                            <p className="mb-2">Amazing teacher.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}