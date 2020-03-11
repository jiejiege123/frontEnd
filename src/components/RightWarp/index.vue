<!--
 * @Author: your name
 * @Date: 2020-03-11 08:54:13
 * @LastEditTime: 2020-03-11 09:13:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\doit\oneStep\frontend\src\components\RightWarp\index.vue
 -->

<template lang="pug">
.index.layout-column



  //- right-warp.right-warp
</template>

<script >
// import {
//   getCheckList } from '@/api/warehouses'
import { mapGetters } from 'vuex'
import ImageDialog from '@/components/ImageDialog'
// import { dateForamt } from '@/utils/index'
export default {
  name: 'Index',
  components: {
    ImageDialog
  },
  filters: {
    filterImg: (val) => {
      return process.env.VUE_APP_BASE_API + val
    }
  },
  data() {
    return {

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
.right-warp{

}
