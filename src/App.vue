<template>
  <div id="app">
    <MHeader></MHeader>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/MHeader/MHeader'
import tab from 'components/tab/tab'
export default {
  name: 'app',
  components: {
    MHeader,
    tab
  }
}
</script>

<style >

</style>
