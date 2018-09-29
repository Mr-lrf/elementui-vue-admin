<template>
  <div class="menu">
    <el-menu
      background-color="#32323A"
      text-color="#fff"
      active-text-color="#01A5A6"
      :default-active = active>
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-shangcheng"></i>
          <span>商城管理</span>
        </template>
        <el-menu-item index="/carousel" @click="routerLink('/carousel')">
          <span>轮播图设置</span>
        </el-menu-item>
        <el-menu-item index="/sign_in" @click="routerLink('/sign_in')">
          <span>签到规则</span>
        </el-menu-item>
        <el-menu-item index="/contact" @click="routerLink('/contact')">
          <span>平台联系方式</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont icon-cangku"></i>
          <span>仓库管理</span>
        </template>
        <el-menu-item index="/repertory_list" @click="routerLink('/repertory_list')">
          <span>仓库列表</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont icon-shebeiguanli"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item index="/equipment_list" @click="routerLink('/equipment_list')">
          <span>设备列表</span>
        </el-menu-item>
        <el-menu-item index="/storage" @click="routerLink('/storage')">
          <span>出入库管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="iconfont icon-dingdanguanli"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item index="/order"  @click="routerLink('/order')">
          <span>订单管理</span>
        </el-menu-item>
        <el-menu-item index="/remark"  @click="routerLink('/remark')">
          <span>评价列表</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="iconfont icon-qiyeguanli"></i>
          <span>企业管理</span>
        </template>
        <el-menu-item index="/register" @click="routerLink('/register')">
          <span>企业注册</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="iconfont icon-pingtaixinxiguanli"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item index="/information_release" @click="routerLink('/information_release')">
          <span>信息发布</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "page_banner",
    created(){
      //刷新获取刷新前的路由
      //判断是否是home页面
      let urlIndex = location.href.split("/").reverse()[0];
      if(urlIndex !== "home"){
        this.active = localStorage.getItem('router');
      }else {
        this.active = ''
      }
    },
    data(){
      return{
        active:""
      }
    },
    methods:{
      //存储路由手动刷新页面保持刷新前状态
      routerLink(path){
        localStorage.setItem("router",path);
        this.$router.push({path:path});
      }
    }
  }
</script>

<style scoped>
  .menu{
    width: 230px;
    height:calc(100vh - 80px);
    background: #32323A;
    box-sizing: border-box;
  }
  .el-menu{
    width: 230px;
  }
  .iconfont{
    margin-right: 10px;
  }
</style>
