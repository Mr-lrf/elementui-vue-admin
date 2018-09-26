<template>
  <div class="menu">
    <el-menu
      background-color="#32323A"
      text-color="#fff"
      active-text-color="#01A5A6"
      :default-active = active
    router>
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-shangcheng"></i>
          <span>商城管理</span>
        </template>
        <el-menu-item index="/carousel">
          <span>轮播图设置</span>
        </el-menu-item>
        <el-menu-item index="/sign_in">
          <span>签到规则</span>
        </el-menu-item>
        <el-menu-item index="/contact">
          <span>平台联系方式</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont icon-cangku"></i>
          <span>仓库管理</span>
        </template>
        <el-menu-item index="/repertory_list">
          <span>仓库列表</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont icon-shebeiguanli"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item index="/equipment_list">
          <span>设备列表</span>
        </el-menu-item>
        <el-menu-item index="/storage">
          <span>出入库管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="iconfont icon-dingdanguanli"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item index="/order">
          <span>订单管理</span>
        </el-menu-item>
        <el-menu-item index="/remark">
          <span>评价列表</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="iconfont icon-qiyeguanli"></i>
          <span>企业管理</span>
        </template>
        <el-menu-item index="/register">
          <span>企业注册</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="iconfont icon-pingtaixinxiguanli"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item index="/information_release">
          <span>信息发布</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "page_banner",
    data(){
      return{
        active:""
      }
    }
  }
</script>

<style scoped>
  .menu{
    width: 220px;
    height:calc(100vh - 80px);
    background: #32323A;
  }
  .iconfont{
    margin-right: 10px;
  }
</style>
