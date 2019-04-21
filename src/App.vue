<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue js</span>
        <span class="font-weight-light"> Todo App</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <Todos/>
    </v-content>
  </v-app>
</template>

<script>
import Todos from './components/Todos'

export default {
  name: 'App',
  components: {
    Todos
  },
  data () {
    return {
      //
    }
  }
}
</script>
