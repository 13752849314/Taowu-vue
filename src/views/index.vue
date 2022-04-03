<template>
  <el-button @click="test">test</el-button>
</template>


<script>
export default {
  name: 'index',
  methods: {
    test() {
      alert('test')
      this.$axios.get('/test').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>