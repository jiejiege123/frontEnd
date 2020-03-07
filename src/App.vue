<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-21 16:07:15
 * @LastEditTime: 2019-12-12 15:01:44
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from './store'
import router from './router'
import { getNode, getPost } from '@/api/nodeTest'
export default {
  name: 'App',
  created() {
    this.getRouter()
    this.getNodeTest()
  },
  mounted() {

  },
  methods: {
    getRouter() {
      store.dispatch('user/getRouters').then(res => {
        store.dispatch('permission/generateRoutes', res).then((res) => {
          router.addRoutes(res.allRoutes)
          router.options.routes = res.allRoutes
        })
      }).catch(reson => {
        console.error(reson + '1')
        throw reson
      })
    },
    getNodeTest() {
      getNode({ id: 1 }).then(res => {
        console.log(res)
      })
      getPost({ id: 1 }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss">
// #app{
//   /deep/ .el-table {
//     th.gutter{
//       width: 17px !important;
//       display: table-cell!important;
//     }
//     colgroup.gutter{
//       width: 17px!important;
//       display: table-cell!important;
//     }
//   }
// }
.base-data{
  border: 1px solid rgb(139, 139, 139);
  padding: 10px 0 10px 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  font-size: 14px;
  .span-label{
    padding-right: 15px;
    color: #606266
  }
}
.deep-table{
  // /deep/ .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
  //   border-right: 1px solid #666;
  // }
  // /deep/ .el-table--border th, .el-table__fixed-right-patch {
  //   border-bottom: 1px solid #666;
  // }
  // /deep/ td, th.is-leaf {
  //   border-bottom: 1px solid #666;
  // }
  // /deep/ .el-table--border, .el-table--group {
  //   border: 1px solid #666;
  // }
}
body .el-table th.gutter{
  display: table-cell!important;
}

body .el-table colgroup.gutter{
  display: table-cell!important;
}
body  .el-table .warning-row {
  background: oldlace;
}

body .el-table .success-row {
  background: #f0f9eb;
}
</style>
