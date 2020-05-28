<template>
    <div>
        <label for="">name</label>
        <input type="text" :value="name" @input="updateName">
    </div>
</template>

<script>
export default {
    props: {
        name : {
            type : String,
            required : true
        }
    },
    methods : {
        updateName(e){
            console.log(e.target.value);
            this.$emit('update-name',e.target.value)
        }
    }
}
</script>