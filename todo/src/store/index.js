import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import todo from './modules/todo';

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        todo:todo
    },
    state:{  //data
        // todos : [
        //         {id:1, text:'buy a car', checked:false},
        //         {id:2, text:'play game', checked:false},
        //         {id:3, text:'play a car', checked:false}
        //     ],
        users:[]
    },
    mutations: {  //여기서 state를 바꾼다
        SET_USERS(state, users){
            state.users = users
        },
        // ADD_TODO(state, value){
        //     state.todos.push({
        //           id:Math.random(),
        //           text:value,
        //           checked:false
        //         });
        // },
        // TOGGLE_TODO(state,{id,checked}){
        //     const index = state.todos.findIndex(todo =>{
        //         return todo.id === id;
        //       });
        
        //       state.todos[index].checked = checked;
        // },
        // DELETE_TODO(state, todoId){
        //     const index = state.todos.findIndex(todo =>{
        //         return todo.id === todoId;
        //       });
        
        //       state.todos.splice(index,1);
        // }

    },
    actions: {  //methods
        getUsers({commit}){
            axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
                // console.log(res);
                commit('SET_USERS',res.data);
            });
        },
        // addTodo({commit}, value){
        //     //비동기 작업화
        //     //axios.post();

        //     commit('ADD_TODO',value);
        // },
        // toggleTodo({commit}, value){
        //     //비동기 작업화
        //     //axios.post();

        //     commit('TOGGLE_TODO',value);
        // },
        // deleteTodo({ }, value){
        //     //비동기 작업화
        //     //axios.post();

        //     commit('DELETE_TODO',value);
        // }
    },
    // getters: {  //computed
    //     numberOfCompletedTodo: state => {
    //         return state.todos.filter(todo => todo.checked).length;
    //     }
    // }
})