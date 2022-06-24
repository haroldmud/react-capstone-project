import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleByModelForMake } from '../redux/creator';

function ModelForMake({ getVehiclesData }) {
  useEffect(() => {
    getVehiclesData(440);
  }, []);
  const [page, setPage] = useState(0);
  let numPages = 0;
  const vehicles = useSelector((state) => state.vehiclesReducer);
  const numOfpages = Math.floor(vehicles.length / 20);
  if (vehicles.length % 20 === 0) {
    numPages = numOfpages;
  } else {
    numPages = numOfpages + 1;
  }

  return (
    <div className="child-page">
      <Link className='home' to="../">Home</Link>
      <section className="cardCarrier">
        {vehicles.slice((page * 20), ((page + 1) * 20)).map((vehicle) => (
          <article key={vehicles.indexOf(vehicle)} className="card">
            <h3>{vehicle.Make_Name}</h3>
            <p>{vehicle.Model_Name}</p>
            <p>{vehicle.Model_ID}</p>
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

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: (id) => dipatch(VehicleByModelForMake(id)) });

export default connect(null, mapDispatchToProps)(ModelForMake);
