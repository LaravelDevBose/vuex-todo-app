<template>
    <v-card>
        <v-toolbar color="cyan" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Todo List</v-toolbar-title>
        </v-toolbar>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 lg12 mb-3>
                    <v-expansion-panel popout>
                        <v-expansion-panel-content v-for="(todo,index) in allTodos" :key="todo.id" >

                            <template v-slot:header >
                                <span class="title" >{{ todo.title}}</span>
                            </template>
                            <v-card>
                                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>


            </v-layout>
        </v-container>
    </v-card>

</template>

<script>

    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Todos",
        created(){
            this.fatchTodos();
        },
        methods:{
          ...mapActions([
              'fatchTodos',
          ]),
        },
        computed:{
            ...mapGetters([
                'allTodos',
            ])
        }
    }
</script>

<style scoped>

</style>