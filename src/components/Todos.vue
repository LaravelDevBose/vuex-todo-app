<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <form class="px-3 my-5 py-3">
                <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        :counter="10"
                        label="Name"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                ></v-text-field>
                <v-textarea
                        v-model="details"
                        :error-messages="emailErrors"
                        label="Todo details"
                        required
                        :counter="70"
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                ></v-textarea>

                <v-checkbox
                        v-model="checkbox"
                        :error-messages="checkboxErrors"
                        label="Is Complete?"
                        required
                        @change="$v.checkbox.$touch()"
                        @blur="$v.checkbox.$touch()"
                ></v-checkbox>

                <v-btn @click="submit">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
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

    import {mapGetters} from 'vuex';

    export default {
        name: "Todos",
        computed:{
            ...mapGetters([
                'allTodos',
            ])
        }
    }
</script>

<style scoped>

</style>