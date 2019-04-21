<template>
    <v-card>
        <v-toolbar color="indigo" dark>
            <v-btn icon>
                <v-icon>add</v-icon>
            </v-btn>
            <v-toolbar-title>Add New Todo</v-toolbar-title>
        </v-toolbar>
        <form class="px-3 my-5 py-3" @submit.prevent="todoSubmit">
            <v-text-field
                    v-model="title"
                    :counter="10"
                    label="Title"
                    required

            ></v-text-field>
            <v-btn type="submit">submit</v-btn>
            <v-btn >clear</v-btn>
        </form>
    </v-card>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "AddTodo",
        data(){
            return {
                title:'',
                // details:null,
                // completed:false,
            }
        },
        methods:{
            ...mapActions(['addTodo']),

            todoSubmit(){

                this.addTodo(this.title);


            }
        }
    }
</script>

<style scoped>

</style>