import axios from 'axios';

const GET_ALL_MANUFACTURERS = 'vehicles-recipe/src/redux/GET_ALL_MANUFACTURERS';
const getAllManufacturersUrl = '/vehicles/GetAllManufacturers?format=json&page=2';
const GET_BY_MODEL = 'vehicles-recipe/src/redux/GET_BY_MODEL';
const getModelUrl = '/vehicles/GetModelsForMake/honda?format=json';
const GET_BY_NAME = 'vehicles-recipe/src/redux/GET_BY_NAME';
const getByNameUrl = '/vehicles/GetMakeForManufacturer/honda?format=json';
const GET_BY_NAME_AND_YEAR = 'vehicles-recipe/src/redux/GET_BY_NAME_AND_YEAR';
const getNameAndYearUrl = '/vehicles/GetMakesForManufacturerAndYear/mer?year=2013&format=json';
const GET_BY_TYPES_FOR_MAKE = 'vehicles-recipe/src/redux/GET_BY_TYPES_FOR_MAKE';
const getTypeForMakeUrl = '/vehicles/GetVehicleTypesForMake/mercedes?format=json';
const GET_BY_MODEL_FOR_MAKE = 'vehicles-recipe/src/redux/GET_BY_MODEL_FOR_MAKE';
const getModelsForMakeUrl = '/vehicles/GetModelsForMakeId/440?format=json';

export default function vehiclesReducer(state = [], action) {
  switch (action.type) {
    case GET_BY_MODEL:
      return action.data.Results;
    case GET_ALL_MANUFACTURERS:
      return action.data.Results;
    case GET_BY_NAME:
      return action.data.Results;
    case GET_BY_NAME_AND_YEAR:
      return action.data.Results;
    case GET_BY_TYPES_FOR_MAKE:
      return action.data.Results;
    case GET_BY_MODEL_FOR_MAKE:
      return action.data.Results;

    default:
      return state;
  }
}
export const VehicleByModel = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getModelUrl}`).then((response) => {
    const { data } = response;
    dispatch({ type: GET_BY_MODEL, data });
  });
};
export function VehicleAllManufacturers() {
  return (dispatch) => {
    axios
      .get(`https://vpic.nhtsa.dot.gov/api${getAllManufacturersUrl}`)
      .then((response) => {
        const { data } = response;
        dispatch({ type: GET_ALL_MANUFACTURERS, data });
      });
  };
}
export const VehicleByName = () => (dispatch) => {
  axios
    .get(`https://vpic.nhtsa.dot.gov/api${getByNameUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_NAME, data });
    });
};
export const VehicleByNameAndYear = () => (dispatch) => {
  axios
    .get(`https://vpic.nhtsa.dot.gov/api${getNameAndYearUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_NAME_AND_YEAR, data });
    });
};
export const VehicleByTypesForMake = () => (dispatch) => {
  axios
    .get(`https://vpic.nhtsa.dot.gov/api${getTypeForMakeUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_TYPES_FOR_MAKE, data });
    });
};
export const VehicleByModelForMake = () => (dispatch) => {
  axios
    .get(`https://vpic.nhtsa.dot.gov/api${getModelsForMakeUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_MODEL_FOR_MAKE, data });
    });
};
