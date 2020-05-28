<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
      <!-- <CompletedTodo :todos="todos"/> -->
      <CompletedTodo/>
      <!-- <AddTodo  @add-todo = "addTodo"  /> -->
      <AddTodo />
      
    <hr>
    
     <!-- <TodoList :todos="todos"
      @togle-checkbox = "togleCheckbox"
      @click-delete = "clickDelete"
     /> -->
<!-- 
     <TodoList
      @togle-checkbox = "togleCheckbox"
      @click-delete = "clickDelete"
     /> -->
     <TodoList />
     <UserList />

     {{ todos }}
  </div>
</template>

<script>

import AddTodo from '@/components/AddTodo.vue';
import TodoList from '@/components/TodoList.vue';
import UserList from '@/components/UserList.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';

export default {
  components: {
        AddTodo,
        TodoList,
        UserList,
        CompletedTodo
    },
  data(){
    return {
      // todos : [
      //   {id:1, text:'buy a car', checked:false},
      //   {id:2, text:'play game', checked:false},
      //   {id:3, text:'play a car', checked:false}
      // ]
    }
  },
  methods : {
    // addTodo(value){
    //   this.todos.push({
    //     id:Math.random(),
    //     text:value,
    //     checked:false
    //   });
    //   this.todoText = '';

    // },
    // togleCheckbox({id, checked}){
    //   const index = this.todos.findIndex(todo =>{
    //     return todo.id === id;
    //   });

    //   this.todos[index].checked = checked;
    // },
    // clickDelete(id){
    //   const index = this.todos.findIndex(todo =>{
    //     return todo.id === id;
    //   });

    //   this.todos.splice(index,1);

    // }
  }
}
</script>
