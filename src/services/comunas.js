import service from './service';

const comunaService = {};
const params = { reg_id: 7 };

comunaService.getComunas = () => (
  service.post('maps_obtener_comunas_por_regiones', params)
    .then(res => res)
    .catch(err => err.response.data)
);

export default comunaService;
