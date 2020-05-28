<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld2 title="home title" title2="test title"></HelloWorld2>

    <form action="">
      <InputField :name="name" @update-name="updateName"/>
      <button>버튼</button>
    </form>
    {{name}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorld2 from '@/components/HelloWorld2.vue'
import InputField from '@/components/inputField.vue'

export default {
  data(){
    return{
      name: ''
    }
  },

  methods: {
    updateName(name){
      this.name = name;
    }
  },
  
  components: {
    HelloWorld,
    HelloWorld2,
    InputField
  }
}
</script>
