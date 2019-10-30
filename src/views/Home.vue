<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpeg">
    <farmacias/>
  </div>
</template>

<script>
// @ is an alias to /src
import Farmacias from '@/components/Farmacias.vue';

export default {
  name: 'home',
  components: {
    Farmacias,
  },
};
</script>
