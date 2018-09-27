<template>
<div class="container">
  <div class="search-box">

  </div>
  <el-table :data="tableData" border>
    <el-table-column label="用户名" prop="userName" width="180" align="center"></el-table-column>
    <el-table-column label="手机号" prop="phoneNum" width="180" align="center"></el-table-column>
    <el-table-column label="标题" prop="title" align="center"></el-table-column>
    <el-table-column label="发布类型" prop="type" align="center">
      <template slot-scope="scope">
        <el-tag v-if="scope.row.type == 2" type="success">企业发布</el-tag>
        <el-tag v-else type="primary">用户发布</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="审核状态" align="center" prop="status">
      <template slot-scope="scope">
        <el-tag v-if="scope.row.status == 0" type="danger">未通过</el-tag>
        <el-tag v-if="scope.row.status == 1" type="success">已通过</el-tag>
        <el-tag v-if="scope.row.status == 2" type="warning">待审核</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button v-if="scope.row.status == 2" type="warning" size="small" @click="handleCheck(scope.row.id)">审核</el-button>
        <el-button type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    class="pagination"
    background
    layout="prev, pager, next"
    :total="100">
  </el-pagination>
</div>
</template>

<script>
    export default {
        name: "information_release",
      data(){
          return{
            tableData:[{
              userName:'admin',
              phoneNum:'1388982645',
              type:1,
              title:'求购雷蛇鼠标',
              status:0,
              id:1
            },{
              userName:'admin2',
              phoneNum:'13445678767',
              type:2,
              title:'招聘一个厨师',
              status:1,
              id:2
            },{
              userName:'admin3',
              phoneNum:'13345678767',
              type:1,
              title:'暑期打工求职',
              status:2,
              id:3
            }]
          }
      },
      methods:{
        handleCheck(id){
          this.$confirm('此操作将审核信息发布, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '审核成功!'
            });
            this.tableData[id - 1].status = 1;
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消审核'
            });
          });
        }
      }
    }
</script>

<style scoped>
.pagination{
  background: #fff;
  padding-top: 20px;
  text-align: right;
}
</style>
