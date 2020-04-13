import React from "react";
import './Cases.css';
const Cases = (props) => {
  return (
    <div>
      <div className="container background">
        <div className='row mx-auto'>
            <div className="col-12 col-sm-6 mx-auto">
                <h4 className="body-text-style">New Cases Confirmed:{props.newConfirmed}</h4>
            </div>
            <div className="col-12 col-sm-6 mx-auto">
                <h4 className="body-text-style">New Deaths:{props.newDeaths}</h4>
            </div>
            <div className="col-12 col-sm-6 mx-auto">
                <h4 className="body-text-style">New Recovered:{props.newRecovered}</h4>
            </div>
            <div className="col-12 col-sm-6 mx-auto">
                <h4 className="body-text-style">Total Confirmed: {props.totalConfirmed}</h4>
            </div>
            <div className="col-12 col-sm-6 mx-auto">
                <h4 className="body-text-style">Total Deaths: {props.totalDeaths}</h4>
            </div>
            <div className="col-12 col-sm-6 mx-auto">
                <h4 className="body-text-style">Total Recovered: {props.totalRecovered}</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
