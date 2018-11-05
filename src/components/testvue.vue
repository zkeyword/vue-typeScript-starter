<template>
  <div class="hello">
      test vue component
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'testVue',
  props: {
    msg: Number,
  },
})
</script>

<style scoped>

</style>
