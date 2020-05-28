<template>
    <div>
        User List
        <div v-for="user in users" :key="user.id">
            {{user.name}}
        </div>
    </div>
</template>

<script>
    // import axios from 'axios';
    import { mapState } from 'vuex';  // vuex의 mapHalper를 사용하는방법
    export default {
        // data(){
        //     return{
        //         users:[]
        //     }
        // },
        created(){
            this.getUsers();
        },
        computed:{
            ...mapState([ // vuex의 mapHalper를 사용하는방법
                'users'
            ])
            // users(){
            //     return this.$store.state.users;
            // },
            // todos(){
            //     return this.$store.state.todos;
            // }
        },
        methods:{
            // ...mapActions(['getUsers'])  // vuex의 mapHalper를 사용하는방법
            getUsers(){
                // axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
                //     console.log(res);
                //     this.users = res.data;
                // });
                 this.$store.dispatch('getUsers');
            }
        }
    }
</script>

<style>

</style>