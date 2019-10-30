<template>
  <div class="container is-fluid">
    <div class="columns is-multiline is-centered">
      <div class="column is-full">
        <h4>{{msg}}</h4>
      </div>
      <div class="column is-10">
        <section>
          <b-field grouped>
            <b-field expanded label="Ingresa Comuna:">
              <b-autocomplete
                v-model="name"
                placeholder="Cerrillos, Macul..."
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="comunas"
                @select="option => comuna_seleccionada = option"
              >
              <template slot="empty">La comuna {{name}} no se ecuntra en el listado.</template>
              </b-autocomplete>
            </b-field>
            <b-field expanded label="Ingresa Farmacia:">
              <b-autocomplete
                v-model="farmacia"
                placeholder="Ahumada, Cruz Verde..."
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filtrarFarmacias"
                field="comunas"
                @select="option => farmacia_seleccionada = option"
              >
              <template slot="empty">No se ecuentra  {{farmacia}} en el listado.</template>
              </b-autocomplete>
            </b-field>
            <b-field label="."
            class="has-text-white">
              <p class="control">
                <button class="button is-primary"
                @click="onClickClean"
                >Limpiar</button>
            </p>
            </b-field>
          </b-field>
        </section>
        <nav class="level has-background-light m-4" >
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Farmacias totales</p>
              <p class="title">{{farmacias.length}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Comunas 7 región</p>
              <p class="title">{{lista_comunas.length}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Comuna seleccionada</p>
              <p class="title">
                <template v-if="comuna_seleccionada">
                  {{ comuna_seleccionada }}
                </template>
                <template v-else>
                  -
                </template>
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Farmacia seleccionada</p>
              <p class="title">
                <template v-if="farmacia_seleccionada">
                  {{ farmacia_seleccionada }}
                </template>
                <template v-else>
                  -
                </template>
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Farmacia encontradas</p>
              <p class="title">{{ data.length }}</p>
            </div>
          </div>
        </nav>
        <template v-if="data.length">
          <div class="columns is-multiline is-vcentered is-centered ">
            <div class="column is-one-third" v-for="local in data" :key="local.local_id">
              <div class="card">
                <div class="card-content is-clearfix">
                  <p class="title is-4">{{local.local_nombre}}</p>
                  <p class="subtitle is-5">{{local.comuna_nombre}}</p>
                </div>
                <div class="content">
                  <p class="card-footer-item">
                    <span>
                      Dirección:
                      <a class="is-block is-7">{{local.local_direccion}}</a>
                    </span>
                  </p>
                  <p class="card-footer-item">
                    <span>
                      Teléfono,
                      <a class="is-block is-7">{{local.local_telefono}}</a>
                    </span>
                  </p>
                </div>
                <footer class="card-footer is-clearfix">
                  <p class="card-footer-item">
                    <span>
                      Latitud:
                      <a class="is-block is-7">{{local.local_lat}}</a>
                    </span>
                  </p>
                  <p class="card-footer-item">
                    <span>
                      Longitud:
                      <a class="is-block is-7">{{local.local_lng}}</a>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <p class="is-size-5 has-text-primary m-4">
            Lo sentimos no se econtraron
            farmacias {{farmacia_seleccionada}} en la comuna de {{comuna_seleccionada}}.</p>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Farmacias',
  data: () => ({
    keepFirst: false,
    openOnFocus: false,
    name: '',
    farmacia: '',
    lista_comunas: [],
    lista_farmacias: [],
    comuna_seleccionada: null,
    farmacia_seleccionada: null,
    msg: 'Encuentra farmacias de la región metropolitana.',
  }),
  computed: {
    ...mapState([
      'comunas',
      'farmacias',
    ]),
    filteredDataObj() {
      return this.lista_comunas.filter(option => option
        .toString()
        .toLowerCase()
        .indexOf(this.name.toLowerCase()) >= 0);
    },
    filtrarFarmacias() {
      return this.lista_farmacias.filter(option => option
        .toString()
        .toLowerCase()
        .indexOf(this.farmacia.toLowerCase()) >= 0);
    },
    data() {
      return this.farmacias.filter(item => item.comuna_nombre.toString()
        .toLowerCase()
        .indexOf(this.name.toLowerCase()) >= 0 && item.local_nombre.toLowerCase()
        .indexOf(this.farmacia.toLowerCase()) >= 0);
    },
  },
  mounted() {
    this.GET_COMUNAS();
    this.GET_FARMACIAS();
    this.set_lista_farmacias();
    this.set_lista_comunas();
  },
  methods: {
    ...mapActions([
      'GET_COMUNAS',
      'GET_FARMACIAS',
    ]),
    set_lista_comunas() {
      this.lista_comunas = [...new Set(this.farmacias.map(option => option.comuna_nombre))];
    },
    set_lista_farmacias() {
      this.lista_farmacias = [...new Set(this.farmacias.map(option => option.local_nombre))];
    },
    onClickClean() {
      this.name = '';
      this.farmacia = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.m-4{
  margin: 2rem 0px;
  padding:  1rem;
}
</style>
