<template>
  <div>
    <input type="text" class="w-100 p-2" placeholder="Type todo"
      @keyup.enter="addTodo"
      v-model="todoText"
    
    >
  </div>
</template>

<script>
export default {
    data(){
        return {
            todoText : '',
        }
    },
    methods: {
        addTodo(e){
            // this.$emit('add-todo',e.target.value);  //vuex를 사용하지 않고 부모펑션을 이용하여 호출할때
            // this.$store.commit('ADD_TODO',e.target.value);  //vuex를 사용하여 단순 데이터 변경은 store, commit(mutations)를 사용
            // this.$store.dispatch('addTodo',e.target.value);  //vuex를 사용하여 ajax 비동기화 처리시 store, dispatch(action)를 사용
            this.$store.dispatch('todo/addTodo',e.target.value);  //vuex를 사용하여 ajax 비동기화 처리시 store, dispatch(action)를 사용 (modules사용)
            this.todoText = '';
        },
    }
}
</script>

<style>

</style>