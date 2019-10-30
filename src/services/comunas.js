import service from './comunaService';

const comunaService = {};
const query = { reg_id: 7 };

comunaService.getData = () => (
  service.post('maps_obtener_comunas_por_regiones', query)
    .then(res => res)
    .catch(err => err.response.data)
);

export default comunaService;
