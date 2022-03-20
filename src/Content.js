import React from 'react';
import data from './Data';
import './style.css';

export default function Content() {
  return (
    <div>
      {data.map((ele) => {
        return (
          <div className="contentMain">
            <div className="cntid">{ele.id}.</div>
            <div className="cntDetails">
              <div>{ele.name}</div>
              <div>{ele.title}</div>
              <div>{ele.ram}</div>
            </div>
            <br />
            <br />
            <div className="cntPrice">Rs :{ele.price} </div>
            <button className="cntBtn">Buy </button>
          </div>
        );
      })}
    </div>
  );
}
