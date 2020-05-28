<template>
    <div class="mb-2 d-flex">
        <div>
        <input type="checkbox" :checked="todo.checked"
        @change="toggleCheckbox"
        >
        </div>

        <span class="ml-3 flex-grow-1"
            :class="todo.checked ? 'text-muted' : ''"
            :style="todo.checked ? 'text-decoration:line-through' : ''"
        >
        {{todo.text}}</span>
        <button 
            class="btn btn-danger btn-sm "
            @click="clickDelete"
            >
            Delete</button>
        {{ numberOfCompletedTodo }}
    </div>
</template>

<script>
export default {
    props:{
        todo: {
            type : Object,
            required : true
        }
    },
     computed:{
        numberOfCompletedTodo(){
            // return this.todos.filter(todo => todo.checked).length;  //vuex를 사용하지 않는 방법(공통 불가능)
            // return this.$store.getters.numberOfCompletedTodo;  //vuex의 getters를 사용하는 방법(공통사용가능)
            return this.$store.getters['todo/numberOfCompletedTodo'];  //vuex의 modules를 통해 getters를 사용하는 방법(공통사용가능)
        }
    },
    methods : {
        toggleCheckbox(e){
            // this.$emit('togle-checkbox',{  //부모 함수 사용
            //     id : this.todo.id,
            //     checked : e.target.checked
            // })
            // this.$store.commit('TOGGLE_TODO',{  //vuex mutatios를 이용해 값 변경
            //      id : this.todo.id,
            //     checked : e.target.checked
            // });

            // this.$store.dispatch('toggleTodo',{ // vuex action를 이용해 값 변경
            this.$store.dispatch('todo/toggleTodo',{  //vuex의 mudules사용
                 id : this.todo.id,
                checked : e.target.checked
            });
        },
        clickDelete(){
            // this.$emit('click-delete',this.todo.id)  //부모 함수 사용
            // this.$store.commit('DELETE_TODO',this.todo.id)  //vuex mutatios를 이용해 값 변경
            // this.$store.dispatch('deleteTodo',this.todo.id) // vuex action를 이용해 값 변경
            this.$store.dispatch('todo/deleteTodo',this.todo.id) //vuex의 mudules사용
        // }
        }
    }
}
</script>

<style>

</style>