<template>
  <!--系统头部-->
  <div class="header">
    <div class="title">xxxx后台管理系统</div>
    <el-dropdown class="user-list" @command="handleCommand">
      <div>
        <div class="user-logo"><img src="../../static/user.jpg" alt=""></div>
        <span>admin</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command ="1">修改密码</el-dropdown-item>
        <el-dropdown-item command ="2">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: 'page_header',
    data(){
      return{

      }
    },
    methods: {
      handleCommand(command){
        if(command == 1){
          this.editPassword();
        }
        else if(command == 2){
          this.logout();
          localStorage.clear();
        }
      },
      editPassword(){
        this.$message({
          type:"warning",
          message:"开发中..."
        });
      },
      logout(){
        this.$message({
          type:"success",
          message:"退出成功！"
        });
        // this.$router.push({path:'/login'})
      }
    }
  }
</script>

<style scoped>
  ul{
    list-style: none;
  }
  .header .title{
    padding-left: 40px;
    color: #fff;
  }
  .header{
    height: 80px;
    line-height: 80px;
    background: #01A5A6;
    display: flex;
    justify-content:space-between;
    position: relative;
  }
  .user-list{
    margin-right: 80px;
  }
  .user-list li {
    /*line-height: 20px;*/
  }
  .user-list span{
    display: inline-block;

  }
  .user-logo{
    cursor: pointer;
    width: 45px;
    height: 45px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    line-height: 45px;
    position: absolute;
    top: 50%;
    margin-top: -22.5px;
    right: 50px;


  }
  .user-logo ul{
    color: black;
  }
  .user-logo img{
    width: 45px;
    height: 45px;
  }
</style>
