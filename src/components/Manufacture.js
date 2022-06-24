import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleAllManufacturers } from '../redux/creator';
import './styles/manufacture.css';

function Manufactures({ getVehiclesData }) {
  const [page, setPage] = useState(0);
  let numPages = 0;
  useEffect(() => {
    getVehiclesData();
  }, []);
  const vehicles = useSelector((state) => state.vehiclesReducer);
  const numOfpages = Math.floor(vehicles.length / 20);
  if (vehicles.length % 20 === 0) {
    numPages = numOfpages;
  } else {
    numPages = numOfpages + 1;
  }

  return (
      <div className="mainPage">
        <Link className='home' to="../">Home</Link>
        <section className="cardCarrier">
          {vehicles.slice((page * 20), ((page + 1) * 20)).map((vehicle) => (
            <article key={vehicle.Mfr_ID} className="card">

              <h3>{vehicle.Mfr_CommonName}</h3>
              <p>{vehicle.Country}</p>
              <p>{vehicle.Mfr_Name}</p>
            </article>
          ))}
        </section>
        <div className="pageButtons">
          <h4>
            {page + 1}
            {' '}
            of
            {' '}
            {numPages}
          </h4>
          <div className='btn'>
          <button
            className="previous"
            type="button"
            onClick={() => {
              page <= 0 ? setPage(numOfpages) : setPage(page - 1);
            }}
          >
            &lt;
          </button>
          <button
            className="next"
            type="button"
            onClick={() => {
              page >= numOfpages ? setPage(0) : setPage(page + 1);
            }}
          >
            &gt;
          </button>
          </div>
        </div>
      </div>
  );
}

const mapDispatchToProps = (dipatch) => (
  { getVehiclesData: () => dipatch(VehicleAllManufacturers()) });

export default connect(null, mapDispatchToProps)(Manufactures);
