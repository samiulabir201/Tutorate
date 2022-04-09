import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      getResults(searchTerm);
    }
  }, [searchTerm, location.pathname]);

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
                      <p className="mb-3 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <p className="mb-2">{result.rating}</p>
                    <p className="mb-2">{result.location}</p>
                    <p className="mb-2">{result.subjects}</p>
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
                      <p className="mb-3 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <p className="mb-2">{result.rating}</p>
                    <p className="mb-2">{result.location}</p>
                    <p className="mb-2">{result.subjects}</p>
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
                      <p className="mb-3 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <p className="mb-2">{result.rating}</p>
                    <p className="mb-2">{result.location}</p>
                    <p className="mb-2">{result.subjects}</p>
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
                      <p className="mb-3 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <p className="mb-2">{result.rating}</p>
                    <p className="mb-2">{result.location}</p>
                    <p className="mb-2">{result.subjects}</p>
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
                      <p className="mb-3 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <p className="mb-2">{result.rating}</p>
                    <p className="mb-2">{result.location}</p>
                    <p className="mb-2">{result.subjects}</p>
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
                      <p className="mb-3 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <p className="mb-2">{result.rating}</p>
                    <p className="mb-2">{result.location}</p>
                    <p className="mb-2">{result.subjects}</p>
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
                      <p className="mb-3 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <p className="mb-2">{result.rating}</p>
                    <p className="mb-2">{result.location}</p>
                    <p className="mb-2">{result.subjects}</p>
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
                      <p className="mb-3 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <p className="mb-2">{result.rating}</p>
                    <p className="mb-2">{result.location}</p>
                    <p className="mb-2">{result.subjects}</p>
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
                      <p className="mb-3 fw-bold fs-4">{result.name}</p>
                    </Link>
                    <p className="mb-2">{result.rating}</p>
                    <p className="mb-2">{result.location}</p>
                    <p className="mb-2">{result.subjects}</p>
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
