<!--
 * @Date: 2020-09-08 21:08:57
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-09 10:25:20
 * @FilePath: \vue_ghost\src\public\index\asideitem.vue
-->
<template>
  <div class="aside-item">
    <h3 class="title">{{title}}</h3>
    <slot class="content" name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "asideItem",
  props: {
    title: {
      type: String,
      request: true,
      default: "Ghost",
    },
  },
  content: {
    type: String,
    require: true,
    default: "",
  },
};
</script>

<style lang="less" scoped>
@import url("~@/assets/style/demo.less");
.aside-item {
  padding: 21px 30px;
  margin-bottom: 35px;
  text-align: left;
  #item(128px);
  .title {
    position: relative;
    font-size: 23px;
    margin-top: 10px;
    margin-bottom: 20px;
    &:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 1.3em;
      #aline(8ch);
    }
  }
}
</style>