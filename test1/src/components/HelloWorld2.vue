<template>
    <div>
        <p>{{ title }}</p>
        <slot name="header" :pkossie="kossie" ></slot>
        <p>{{ name }}</p>
        <slot name="body"></slot>
        <button @click="updateName">change Name </button>
    </div>
</template>

<script>
export default {
    props:{
        title : {
            type : String,
            required : false,
            default : 'default title'
        },
        title2 : {
            type : String,
            required : false,
            default : 'default name'
        }
    },
    data(){
        return {
            name : 'hello',
            kossie : 'coder'
        }
    },
    methods:{
        updateName() {
            this.name = 'hello2';
        }
    }
    
}
</script>

<style scoped>

</style>