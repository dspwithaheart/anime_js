<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Disco/>
  </div>
</template>

<script>
// @ is an alias to /src
import Disco from '@/components/Disco.vue'

export default {
  name: 'Home',
  components: {
    Disco
  }
}
</script>
