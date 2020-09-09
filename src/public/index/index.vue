<!--
 * @Date: 2020-09-08 11:52:51
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-09-09 12:25:06
 * @FilePath: \vue_ghost\src\public\index\index.vue
-->
<template>
  <div class="ghost">
    <nav class="navbar navbar-defalut navbar-fixed-top header">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-collapse"
          >
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">BLOG</a>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <a href="#">Quick</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container main">
      <div class="row content">
        <div class="col col-md-8 main-contain">
          <my-article></my-article>
          <my-article></my-article>
          <my-article></my-article>
          <my-article></my-article>
          <my-article></my-article>
        </div>
        <div class="col col-md-4 aside">
          <aside-item title="声明">
            <div class="community content" slot="content">
              <p>Ghost 中文版不再继续维护，请去官方下载。</p>
            </div>
          </aside-item>
          <aside-item title="Ghost下载">
            <div class="content download" slot="content">
              <a href="#" class="btn btn-primary btn-block">Download</a>
            </div>
          </aside-item>
          <aside-item title="标签云">
            <div class="content tag-cloud" slot="content">
              <a href="#">客户端</a>
              <a href="#">Android</a>
              <a href="#">jQuery</a>
              <a href="#">开源</a>
              <a href="#">助手函数</a>
              <a href="#">上传</a>
            </div>
          </aside-item>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="row">
          <aside-item class="col-md-4 aside-item" title="友链">
            <div class="content" slot="content">
              <a href="#">Bootstrap中文网</a>
              <a href="#">React</a>
              <a href="#">Vue.js</a>
              <a href="#">Next.js</a>
              <a href="#">Node.js</a>
              <a href="#">Lodash</a>
              <a href="#">jQuery</a>
              <a href="#">NPM</a>
            </div>
          </aside-item>
          <aside-item class="col-md-4 aside-item" title="标签云">
            <div class="content" slot="content">
              <a href="#">客户端</a>
              <a href="#">Android</a>
              <a href="#">jQuery</a>
              <a href="#">开源</a>
              <a href="#">助手函数</a>
              <a href="#">上传</a>
            </div>
          </aside-item>
          <aside-item class="col-md-4 aside-item" title="合作伙伴"></aside-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myArticle from "@/public/index/article.vue";
import asideItem from "@/public/index/asideitem.vue";
export default {
  components: {
    myArticle,
    asideItem,
  },
  //   mounted() {},
};
</script>

<style lang="less" scoped>
@import url("~@/assets/style/color.less");
@import url("~@/assets/style/demo.less");
@import url("~@/assets/style/screen.less");
.ghost {
  background-color: #color[bgcolor];
  display: flex;
  flex-direction: column;
  .navbar {
    border: 0;
    border-bottom: 1px solid #color[borderline];
    background-color: #color[bgnavbarcolor];
    a {
      color: #color[standStone];
    }
    li {
      z-index: 10;
    }
    .container {
      height: 50px;
      max-width: 1000px;
      .navbar-header span {
        background-color: #color[grepOrgrep];
      }
      .navbar-header button {
        border: 1px solid #color[grepOrgrep];
      }
    }
  }
  .main {
    max-width: 1200px;
    padding-top: 50px;
    flex-grow: 1;
    .col {
      padding: 15px;
    }
    .aside {
      .tag-cloud a {
        border: 1px solid #color[aborder];
        color: #color[standStone];
        display: inline-block;
        padding: 2px 7px;
        margin: 0 7px 7px 0;
        text-decoration: none;
        transition: all 0.3s;
        outline: none;
        &:hover {
          background-color: #color[ahover];
          color: #color[antiqueWhite];
        }
      }
    }
  }
  .footer {
    background-color: #color[footercolor];
    flex-shrink: 0;
    width: 100%;
    .row .aside-item {
      background-color: transparent;
      color: #color[antiqueWhite];
      .content a {
        border: 1px solid #color[standStone];
        color: #color[standStone];
        display: inline-block;
        padding: 2px 7px;
        margin: 0 7px 7px 0;
        text-decoration: none;
        transition: all 0.3s;
        outline: none;
        &:hover {
          background-color: #color[ahover];
          color: #color[antiqueWhite];
        }
      }
    }
  }
}
</style>