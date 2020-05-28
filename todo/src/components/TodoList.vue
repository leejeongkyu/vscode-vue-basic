<template>
    <div>
        <Todo v-for="todo in todos" :key="todo.id" :todo="todo"
            @togle-checkbox = "togleCheckbox"
            @click-delete = "clickDelete"
            />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
    components: {
        Todo
    },
    // props: {
    //     todos : {
    //         type : Array,
    //         required : true
    //     }
    // },
    methods : {
        togleCheckbox(value){
            this.$emit('togle-checkbox',value);
        },
        clickDelete(value){
            this.$emit('click-delete',value);
        }

    },
    computed : {
        todos(){
            // return this.$store.state.todos; 
            return this.$store.state.todo.todos;  //modules를 사용할경우
        }
    }
}
</script>

<style>

</style>