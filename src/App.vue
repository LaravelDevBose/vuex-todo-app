<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue js</span>
        <span class="font-weight-light"> Todo App</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <AddTodo/>
        <Todos/>
      </v-flex>
    </v-content>
  </v-app>
</template>

<script>
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
  },
  data () {
    return {
      //
    }
  }
}
</script>
