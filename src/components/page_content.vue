<template>
  <div class="container">
    <el-card class="my-card">
      <!--面包屑-->
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in meta" :key="index" :to="{path:item.path}">{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view/>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "page_content",
    computed:{
      meta(){
        //通过计算属性获取meta视图渲染
        return this.$route.meta;
      }
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .container{
    background: #FAFAFA;
    width: 100%;
  }
  .my-card{
    margin: 40px;
  }
  .breadcrumb{
    padding: 20px 0;
  }

</style>
