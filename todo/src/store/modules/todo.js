// import axios from 'axios';

export default{
    namespaced : true,
    state:{  //data
        todos : [
                {id:1, text:'buy a car', checked:false},
                {id:2, text:'play game', checked:false},
                {id:3, text:'play a car', checked:false}
            ]
    },
    mutations: {  //여기서 state를 바꾼다
        ADD_TODO(state, value){
            state.todos.push({
                  id:Math.random(),
                  text:value,
                  checked:false
                });
        },
        TOGGLE_TODO(state,{id,checked}){
            const index = state.todos.findIndex(todo =>{
                return todo.id === id;
              });
        
              state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId){
            const index = state.todos.findIndex(todo =>{
                return todo.id === todoId;
              });
        
              state.todos.splice(index,1);
        }

    },
    actions: {  //methods
        addTodo({commit}, value){
            //비동기 작업화
            //axios.post();

            commit('ADD_TODO',value);
        },
        toggleTodo({commit}, value){
            //비동기 작업화
            //axios.post();

            commit('TOGGLE_TODO',value);
        },
        deleteTodo({commit}, value){
            //비동기 작업화
            //axios.post();

            commit('DELETE_TODO',value);
        }
    },
    getters: {  //computed
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}