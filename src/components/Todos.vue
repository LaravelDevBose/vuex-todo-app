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
                                <div class="title" v-bind:class="{'is-complete': todo.completed}">
                                    <del v-if="todo.completed">{{ todo.title}}</del>
                                    <span v-else>{{ todo.title}}</span>
                                </div>
                            </template>
                            <v-card>
                                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                                <v-btn v-if="!todo.completed" @click="onCompleteTodo(todo)" icon color="success">
                                    <v-icon>done</v-icon>
                                </v-btn>
                                <v-btn v-else @click="onCompleteTodo(todo)" icon color="warning">
                                    <v-icon>cancel</v-icon>
                                </v-btn>
                                <v-btn @click="deleteTodo(todo.id)" icon color="error">
                                    <v-icon>delete</v-icon>
                                </v-btn>
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
                'deleteTodo',
                'completeTodo'
            ]),
            onCompleteTodo(todo){
                const compTodo = {
                    id:todo.id,
                    title:todo.title,
                    completed: !todo.completed,
                }

                this.completeTodo(compTodo);
            }
        },
        computed:{
            ...mapGetters([
                'allTodos',
            ])
        }
    }
</script>

<style scoped>
.is-complete{
    color: green;
}
</style>