import service from './farmaciaService';

const farmaciaServices = {};

farmaciaServices.getData = () => (
  service.get('getLocalesRegion/?id_region=7')
    .then(res => res)
    .catch(err => err.response.data)
);

export default farmaciaServices;
