<template>
  <div>
      Completed Todo : {{ numberOfCompletedTodo }}
      <hr>
        <!-- {{ todos }} -->
  </div>
</template>

<script>
export default {
    // props: {
    //     todos : {
    //         type : Array,
    //         required : true
    //     }
    // },

    computed:{
        // todos(){
        //     return this.$store.state.todos;
        // },
        numberOfCompletedTodo(){
            // return this.todos.filter(todo => todo.checked).length;  //vuex를 사용하지 않는 방법(공통 불가능)
            // return this.$store.getters.numberOfCompletedTodo;  //vuex의 getters를 사용하는 방법(공통사용가능)
            return this.$store.getters['todo/numberOfCompletedTodo'];  //vuex의 modules의 getters를 사용하는 방법(공통사용가능)
        }
    }
}
</script>

<style>

</style>