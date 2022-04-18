import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';
import {Chip, Rating} from "@mui/material";

export const Results = () => {
  const { searchTerm, searchParams} = useStateContext();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const getResults = async () => {
    setLoading(true);

    const res = await fetch(`http://localhost:8080/tutor/getTutors?searchTerm=${searchTerm}`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(searchParams),
    });
    const data = await res.json();
    console.log(data);
    setResults(data);
    setLoading(false);
  };

  useEffect(() => {
    if (searchTerm !== '')  getResults();
  }, [searchTerm, searchParams, location.pathname]);

  if (loading) return <Loading />;

  return (
    <div className="sm:px-36 flex flex-wrap">
      {results?.map((result, index) => (
        <React.Fragment>
          <div key={index} className="container md:w-2/5 w-full">
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <img src={"./profile.png"} className="m-auto img-fluid rounded-circle" width="128" height="128" alt=""/>
                  </div>
                  <div className="col-md-8">
                    <Link to={"/" + result.id}>
                      <p className="mb-2 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <Rating value={result.averageRating} readOnly/>
                    <br/>
                    <p className="mb-2"><i className="bi bi-geo-alt"/>&nbsp;{result.location}</p>
                    {result.subjects?.map((subject) => {
                      return <Chip className="m-1" label={subject}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div key={index} className="container md:w-2/5 w-full">
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <img src={"./profile.png"} className="m-auto img-fluid rounded-circle" width="128" height="128" alt=""/>
                  </div>
                  <div className="col-md-8">
                    <Link to={"/" + result.id}>
                      <p className="mb-2 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <Rating value={result.averageRating} readOnly/>
                    <br/>
                    <p className="mb-2"><i className="bi bi-geo-alt"/>&nbsp;{result.location}</p>
                    {result.subjects?.map((subject) => {
                      return <Chip className="m-1" label={subject}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div key={index} className="container md:w-2/5 w-full">
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <img src={"./profile.png"} className="m-auto img-fluid rounded-circle" width="128" height="128" alt=""/>
                  </div>
                  <div className="col-md-8">
                    <Link to={"/" + result.id}>
                      <p className="mb-2 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <Rating value={result.averageRating} readOnly/>
                    <br/>
                    <p className="mb-2"><i className="bi bi-geo-alt"/>&nbsp;{result.location}</p>
                    {result.subjects?.map((subject) => {
                      return <Chip className="m-1" label={subject}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div key={index} className="container md:w-2/5 w-full">
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <img src={"./profile.png"} className="m-auto img-fluid rounded-circle" width="128" height="128" alt=""/>
                  </div>
                  <div className="col-md-8">
                    <Link to={"/" + result.id}>
                      <p className="mb-2 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <Rating value={result.averageRating} readOnly/>
                    <br/>
                    <p className="mb-2"><i className="bi bi-geo-alt"/>&nbsp;{result.location}</p>
                    {result.subjects?.map((subject) => {
                      return <Chip className="m-1" label={subject}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div key={index} className="container md:w-2/5 w-full">
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <img src={"./profile.png"} className="m-auto img-fluid rounded-circle" width="128" height="128" alt=""/>
                  </div>
                  <div className="col-md-8">
                    <Link to={"/" + result.id}>
                      <p className="mb-2 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <Rating value={result.averageRating} readOnly/>
                    <br/>
                    <p className="mb-2"><i className="bi bi-geo-alt"/>&nbsp;{result.location}</p>
                    {result.subjects?.map((subject) => {
                      return <Chip className="m-1" label={subject}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div key={index} className="container md:w-2/5 w-full">
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <img src={"./profile.png"} className="m-auto img-fluid rounded-circle" width="128" height="128" alt=""/>
                  </div>
                  <div className="col-md-8">
                    <Link to={"/" + result.id}>
                      <p className="mb-2 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <Rating value={result.averageRating} readOnly/>
                    <br/>
                    <p className="mb-2"><i className="bi bi-geo-alt"/>&nbsp;{result.location}</p>
                    {result.subjects?.map((subject) => {
                      return <Chip className="m-1" label={subject}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div key={index} className="container md:w-2/5 w-full">
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <img src={"./profile.png"} className="m-auto img-fluid rounded-circle" width="128" height="128" alt=""/>
                  </div>
                  <div className="col-md-8">
                    <Link to={"/" + result.id}>
                      <p className="mb-2 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <Rating value={result.averageRating} readOnly/>
                    <br/>
                    <p className="mb-2"><i className="bi bi-geo-alt"/>&nbsp;{result.location}</p>
                    {result.subjects?.map((subject) => {
                      return <Chip className="m-1" label={subject}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div key={index} className="container md:w-2/5 w-full">
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <img src={"./profile.png"} className="m-auto img-fluid rounded-circle" width="128" height="128" alt=""/>
                  </div>
                  <div className="col-md-8">
                    <Link to={"/" + result.id}>
                      <p className="mb-2 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <Rating value={result.averageRating} readOnly/>
                    <br/>
                    <p className="mb-2"><i className="bi bi-geo-alt"/>&nbsp;{result.location}</p>
                    {result.subjects?.map((subject) => {
                      return <Chip className="m-1" label={subject}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div key={index} className="container md:w-2/5 w-full">
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex">
                    <img src={"./profile.png"} className="m-auto img-fluid rounded-circle" width="128" height="128" alt=""/>
                  </div>
                  <div className="col-md-8">
                    <Link to={"/" + result.id}>
                      <p className="mb-2 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <Rating value={result.averageRating} readOnly/>
                    <br/>
                    <p className="mb-2"><i className="bi bi-geo-alt"/>&nbsp;{result.location}</p>
                    {result.subjects?.map((subject) => {
                      return <Chip className="m-1" label={subject}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}

    </div>
  );
};
