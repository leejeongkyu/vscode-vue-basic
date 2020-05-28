<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld2 title="about title">
        <template v-slot:header="props" >
          
            <h1>hellot {{props.pkossie}}</h1>
          
        </template>
        <template #body>
          
            <h1>body</h1>
          
        </template>
    </HelloWorld2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld2 from '@/components/HelloWorld2.vue'

export default {
  components: {
    HelloWorld2
  }
}
</script>