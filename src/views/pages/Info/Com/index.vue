<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 23:54:33
 * @LastEditTime: 2020-03-11 10:18:52
 * @LastEditors: Please set LastEditors
 -->
<template lang="pug">
.index.layout-column
  .content-warp
    .warp-header
      h1(style='font-weight: 300;') {{article.title}}
      .article-info
        .span-warp
          i(class='icon iconfont iconRectangleCopy')
          span {{article.info.author}}
        .span-warp
          i(class='icon iconfont iconRectangleCopy1')
          span {{article.info.time}}
        .span-warp
          i(class='icon iconfont iconchangyongicon-')
          span {{article.info.views}}
        .span-warp
          i(class='icon iconfont iconrespond')
          span {{article.info.comment}}
        .span-warp
          i(class='icon iconfont icontubiao-')
          span {{article.info.wordNumber}}
        .span-warp
          span #
          span {{article.info.type}}
  right-warp.right-warp
</template>

<script >
// import {
//   getCheckList } from '@/api/warehouses'
import { mapGetters } from 'vuex'
import RightWarp from '@/components/RightWarp'

import ImageDialog from '@/components/ImageDialog'
// import { dateForamt } from '@/utils/index'
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
      }
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    action() {
      return `${process.env.VUE_APP_BASE_API}/Basic/UploadImage`
    }
  },
  created() {
    // this.getDataList()
    this.getDicsDataList()
  },
  mounted() {

  },
  methods: {
    /** *** 通用 start *** **/

    /** *** 通用 end *** **/


    /** *** 按钮操作 start *** **/

    /** *** 获取数据 end *** **/


    /** *** 其他 start *** **/

  }
}
</script>
<style lang="scss" scoped>
/***** 基本设置 start ******/
.title{
  font-weight: 300;
}
