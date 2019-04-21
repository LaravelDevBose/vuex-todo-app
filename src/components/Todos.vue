<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <form class="px-3 my-5 py-3">
                <v-text-field
                        v-model="title"
                        :counter="10"
                        label="Name"
                        required
                        @input="$v.title.$touch()"
                        @blur="$v.title.$touch()"
                ></v-text-field>
                <v-textarea
                        v-model="details"
                        label="Todo details"
                        required
                        :counter="70"
                        @input="$v.details.$touch()"
                        @blur="$v.details.$touch()"
                ></v-textarea>

                <v-checkbox
                        v-model="completed"
                        label="Is Complete?"
                        @change="$v.completed.$touch()"
                        @blur="$v.completed.$touch()"
                ></v-checkbox>

                <v-btn >submit</v-btn>
                <v-btn >clear</v-btn>
            </form>
        </v-card>
        <v-card>
            <v-container mt-5>
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
    </v-flex>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Todos",
        data(){
            return{
                title:null,
                details:null,
                completed:false,

            }
        },
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