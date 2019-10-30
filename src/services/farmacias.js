import service from './service';

const farmaciaService = {};

farmaciaService.getData = () => (
  service.get('getLocalesRegion/?id_region=7')
    .then(res => res)
    .catch(err => err.response.data)
);

export default farmaciaService;
