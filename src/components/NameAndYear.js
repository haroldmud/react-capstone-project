import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleByNameAndYear } from '../redux/creator';

function NameAndYear({ getVehiclesData }) {
  const [page, setPage] = useState(0);
  let numPages = 0;
  useEffect(() => {
    getVehiclesData(2013);
  }, []);
  const vehicles = useSelector((state) => state.vehiclesReducer);
  const numOfpages = Math.floor(vehicles.length / 20);
  if (vehicles.length % 20 === 0) {
    numPages = numOfpages;
  } else {
    numPages = numOfpages + 1;
  }

  return (
    <div className="child-page">
      <Link className='home' to="../">&lt;</Link>
      <h2>Vehicles name and year</h2>
      <section className="cardCarrier">
        {vehicles.slice((page * 20), ((page + 1) * 20)).map((vehicle) => (
          <article key={vehicles.indexOf(vehicle)} className="card">
            <h3>{vehicle.MakeName}</h3>
            <p>{vehicle.MfrName}</p>
          </article>
        ))}
      </section>
      <div className="buttons">
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
            if (page <= 0) { setPage(numOfpages); } setPage(page - 1);
          }}
        >
          &lt;
        </button>
        <button
          className="next"
          type="button"
          onClick={() => {
            if (page >= numOfpages) { setPage(0); } setPage(page + 1);
          }}
        >
          &gt;
        </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: (year) => dipatch(VehicleByNameAndYear(year)) });

export default connect(null, mapDispatchToProps)(NameAndYear);
