import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { VehicleByModel } from '../redux/creator';
import './styles/manufacture.css';

function Model({ getVehiclesData }) {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
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

  const dropvalue = (e) => {
    setSearch(e.target.value);
  };

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

const mapDispatchToProps = (dipatch) => ({ getVehiclesData: () => dipatch(VehicleByModel()) });

export default connect(null, mapDispatchToProps)(Model);
