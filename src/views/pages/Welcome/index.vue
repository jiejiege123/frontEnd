<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 23:54:33
 * @LastEditTime: 2020-03-11 10:18:52
 * @LastEditors: Please set LastEditors
 -->
<template lang="pug">
.index.layout-row
  .content-warp.flex1
    .warp-header
      h1.title(style='') {{article.title}}
      .article-info.layout-row__center.align-center(:class="{'article-p-code': true}")
        .span-warp
          i(class='icon iconfont iconRectangleCopy')
          span {{article.info.author}}
        .span-warp
          i(class='icon iconfont iconRectangleCopy1')
          span {{article.info.time}}
        .span-warp
          i(class='icon iconfont iconchangyongicon-')
          span {{article.info.views}}次浏览
        .span-warp
          i(class='icon iconfont iconrespond')
          span {{article.info.comment}}条评论
        .span-warp
          i(class='icon iconfont icontubiao-')
          span {{article.info.wordNumber}}字数
        .span-warp
          span #
          span {{article.info.type}}
    .article-warp
      //- 文章类容
      div.article-content(v-html="articleHtml" :class="{'article-p-code': true}")
      //- div adfasdfasdfasdfaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxsdfasdf
      //- div adfasdfasdfasdfaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxsdfasdf
      div.article-footer.layout-row.align-center.mt_30.mb_40
        i(class='icon iconfont iconRectangleCopy1')
        span 最后修改： {{article.info.timestamp}}
  right-warp.right-warp
</template>

<script >
import { getArticle } from '@/api/index'
import { mapGetters } from 'vuex'
import RightWarp from '@/components/RightWarp'
import ImageDialog from '@/components/ImageDialog'
import hljs from 'highlight.js/lib/highlight'
window.hljs = hljs
console.log(window.hljs)
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/monokai.css'
import 'highlightjs-line-numbers.js/src/highlightjs-line-numbers.js'
export default {
  name: 'Index',
  components: {
    ImageDialog,
    RightWarp
  },
  filters: {
    filterImg: (val) => {
      return process.env.VUE_APP_BASE_API + val
    }
  },
  data() {
    return {
      article: {
        title: '30分钟写一个简单QQ自动回复机器人',
        info: {
          author: 'zzz',
          time: '2019-09-19',
          views: 5655,
          comment: 45,
          wordNumber: 4564,
          type: 'js'
        }
      },
      articleHtml: ''
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    action() {
      return `${process.env.VUE_APP_BASE_API}/Basic/UploadImage`
    }
  },
  created() {
    this.getDataList()
  },
  mounted() {
    // setTimeout(() => {
    //   const preEl = document.querySelectorAll('p code')
    //   console.log(preEl)
    //   preEl.forEach((el) => {
    //     hljs.highlightBlock(el)
    //   })
    // }, 200)
    // hljs.initHighlightingOnLoad()
    // hljs.initLineNumbersOnLoad()
    // require('highlightjs-line-numbers.js/src/highlightjs-line-numbers.js')
    // hljs.initLineNumbersOnLoad()
    hljs.registerLanguage('javascript', javascript)
    // (function(window, document) {
    //   // 创建行号样式
    //   function createLineNumbersStyle() {
    //     var lineNumbersStyle = [
    //       '.{0} ul {',
    //       'list-style: decimal;',
    //       'margin: 0px 0px 0 40px !important;',
    //       'padding: 0px;}',
    //       '.{0} ul li {',
    //       'list-style: decimal;',
    //       'border-left: 1px solid #ddd !important;',
    //       'padding: 5px!important;',
    //       'margin: 0 !important;',
    //       'line-height: 14px;',
    //       'word-break: break-all;',
    //       'word-wrap: break-word;}'
    //     ]
    //     var styleEl = document.createElement('style')
    //     styleEl.type = 'text/css'
    //     styleEl.innerHTML = lineNumbersStyle.join('').format('hljs')
    //     document.getElementsByTagName('head')[0].appendChild(styleEl)
    //   }
    //   // 初始化代码行号
    //   function initLineNumbersOnLoad() {
    //     createLineNumbersStyle()
    //     var codeList = document.querySelectorAll('pre code')
    //     var block = {}
    //     for (var i = 0; i < codeList.length; i++) {
    //       var codeHtml = codeList[i].innerHTML
    //       codeHtml = '<ul><li>' + codeHtml.replace(/\n/g, '\n</li><li>') + '\n</li></ul>'
    //       codeList[i].innerHTML = codeHtml
    //     }
    //   }
    //   if (window.hljs) {
    //     window.hljs.initLineNumbersOnLoad = initLineNumbersOnLoad
    //   } else {
    //     window.console.error('highlight.js not find!')
    //   }
    // })(window, document)
    // window.onload = function() {
    //   hljs.initLineNumbersOnLoad()
    // }
  },
  methods: {
    /** *** 通用 start *** **/

    /** *** 通用 end *** **/


    /** *** 按钮操作 start *** **/

    /** *** 获取数据 end *** **/
    getDataList() {
      getArticle().then(res => {
        console.log(res)
        this.articleHtml = res.Data
      })
    }

    /** *** 其他 start *** **/

  }
}
</script>
<style lang="scss" scoped>
/***** 基本设置 start ******/
$articleInfoColor: #a0a0a0;
$indexBackgroundC: #F0F3F4;
$titleBackgroundC: #F9F9F9;
$arctilBgc:#fff;
$articleColor: #333;
.index{
  min-height: 100%;
  background: $indexBackgroundC
}
.content-warp{
  font-weight: 300;
}
.warp-header{
  padding: 20px;
  background: $titleBackgroundC;

}
.title{
  font-weight: 300;
  font-size:30px;
  text-align:center;
  margin:0;
  line-height: 40px;
}
.article-info{
  color: $articleInfoColor;
  font-size: 13px;
  margin-top: 10px;
  .span-warp{
    display: flex;
    align-items: center;
    margin-right: 15px;
    .icon{
      margin-right: 5px
    }
  }
}
.article-warp{
  background: $arctilBgc;
  padding: 30px;
  width: 760px;
  border-radius: 6px;
  border: none;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 40px;
  word-wrap:break-word;
  word-break:normal;
  .article-footer{
    font-size: 12px;
    color: #9b9b9b;
  }
}
.right-warp{
  width: 240px
}
.article-content{
  color: $articleColor;
  font-size: 14px;
  font: 87.5%/1.2 -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  line-height: 1.5;
  h1{
    line-height: 1.2 !important
  }
}

</style>
<style lang="scss">
.article-p-code{
  p{
    &>code{
      color: #E74C3C;
      // padding: 2px 5px;
      white-space: nowrap;
      background: #fff;
      // border: solid 1px #e1e4e5;
      font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",Courier,monospace;
      overflow-x: auto;
      // border-radius: 1px;
    }
  }
}
</style>
