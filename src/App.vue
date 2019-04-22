<template>
  <v-app >
    <v-toolbar app>
      <div>

        <v-img src="https://hollowtree.gallerycdn.vsassets.io/extensions/hollowtree/vue-snippets/0.1.11/1548604806888/Microsoft.VisualStudio.Services.Icons.Default" style="height: 60px ; width: 100px!important;"></v-img>
      </div>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue js</span>
        <span class="font-weight-light"> Todo App</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content class="px-3">
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <AddTodo/>
        <FilterTodos/>
        <Todos/>
      </v-flex>
    </v-content>
  </v-app>
</template>

<script>
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import FilterTodos from './components/FilterTodos'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  },
  data () {
    return {
      //
    }
  }
}
</script>
