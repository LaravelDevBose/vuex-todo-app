<template>
    <v-layout wrap align-center>
        <v-flex xs6 sm3 d-flex>
            <v-select
                    @change="filterTodos($event)"
                    :items="items"
                    item-text="text"
                    item-value="value"
                    label="Select Filter"
                    solo
            ></v-select>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "FilterTodos",
        data(){
            return {
                items: [
                    { text: '200', value: 200 },
                    { text: '100', value: 100 },
                    { text: '50', value: 50 },
                    { text: '20', value: 20 },
                    { text: '10', value: 10 },
                ]
            }
        },
        methods:{
            ...mapActions([
                'filterTodos'
            ])
        }
    }
</script>

<style scoped>

</style>