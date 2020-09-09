<!--
 * @Date: 2020-09-08 11:45:38
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-08 17:09:41
 * @FilePath: \vue_ghost\src\App.vue
-->
<template>
  <router-view id="app"></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang='less'>
@import url("~@/assets/style/thema.less");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  /* margin-top: 60px; */
}
</style>
