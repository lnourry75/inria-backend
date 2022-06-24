<template>
  <div class="home">
    <Formulaire />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Formulaire from '@/components/Formulaire.vue'

export default {
  name: 'HomeView',
  components: {
    Formulaire,
    HelloWorld
  }
}
</script>
