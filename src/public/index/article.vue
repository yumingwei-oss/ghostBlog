<!--
 * @Date: 2020-09-08 20:59:51
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-09 08:12:03
 * @FilePath: \vue_ghost\src\public\index\article.vue
-->
<template>
  <article class="article post">
    <div class="post-header">
      <h1 class="post-title">Ghost</h1>
      <div class="post-meta">
        <span class="author">
          作者：
          <a href="#">YMW</a>
        </span>
        ~~
        <time datetime="2020-8-30">2020-8-30</time>
      </div>
    </div>
    <div class="post-content">
      <p>上周我们 发布 了一个新版本，包含了大家期盼已久的功能：主题模板和网站对本地化的支持。 这个功能完全是由我们的一个贡献者（Juan）开发的，Ghost 基金提供了支持。 我们已经针对这个功能编写了完整的文档，下面就来介绍一下这个功能是如何工作的： 网站本地化 你可以在 Ghos</p>
    </div>
    <div class="post-premarlink clearfix">
      <a class="btn btn-primary pull-left">阅读全文</a>
    </div>
    <div class="post-footer">
      <span
        class="glyphicon glyphicon-folder-open pull-left"
        aria-hidden="true"
      ></span>
    </div>
  </article>
</template>

<script>
export default {
  name: "myArticle",
};
</script>

<style lang="less" scoped>
@import url("~@/assets/style/demo.less");
.article {
  padding: 35px;
  padding-top: 20px;
  margin-bottom: 35px;
  #item();
  .post-header .post-meta {
    color: #color[grepOrgrep];
  }
  .post-content {
    text-indent: 2em;
    text-align: left;
    margin: 30px 0;
    font-weight: 400;
    font-size: 18px;
  }
  .post-premarlink .btn {
    padding: 7px;
    transition: all 0.5s;
    background-color: #color[acolor];
    #noborder();
    &:hover {
      background-color: #color[btnhover];
    }
  }
  .post-footer {
    margin-top: 30px;
    padding-top: 20px;
    border-top: #border[border2];
    color: #color[grepOrgrep];
  }
}
</style>