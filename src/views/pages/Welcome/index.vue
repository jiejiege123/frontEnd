<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 23:54:33
 * @LastEditTime: 2020-03-13 11:11:57
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

import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/monokai.css'
// import { highlightLineNumber } from '@/utils/highlight-line-number'
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
    window.hljs = hljs
    require('@/utils/highlightjs-line-numbers')
    // require('highlightjs-line-numbers.js/src/highlightjs-line-numbers.js') // 官方queryAll() 值不正确
  },
  mounted() {

  },
  updated() {
    hljs.initHighlightingOnLoad()
    hljs.initLineNumbersOnLoad()
    // highlightLineNumber()
    hljs.registerLanguage('javascript', javascript)
  },
  methods: {
    /** *** 通用 start *** **/

    /** *** 通用 end *** **/


    /** *** 按钮操作 start *** **/

    /** *** 获取数据 end *** **/
    getDataList() {
      getArticle().then(res => {
        // console.log(res)
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
