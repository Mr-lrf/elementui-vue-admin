<template>
  <div class="carousel">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,index) in carousels" :key="index">
        <el-card>
          <img :src="item.url" alt="">
          <div>
            <el-form label-width="100px">
              <el-form-item label="轮播图标题：">
                <el-input v-model="item.carouselTitle" :disabled="item.disable"></el-input>
              </el-form-item>
              <el-form-item label="轮播图排序：">
                <el-input v-model="item.rank" :disabled="item.disable"></el-input>
              </el-form-item>
              <div class="footer">
                <el-button type="success" @click="save(item.id)" v-if="item.disable == false">保存</el-button>
                <el-button type="warning" @click="edit($event,item.id)" v-else>编辑</el-button>
                <el-button type="danger">删除</el-button>
              </div>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "carousel",
    data(){
      return{
        carousels:[{
          carouselTitle:"标题1",
          disable:true,
          url:'../../../static/1.png',
          id:'1',
          rank:1
        },{
          carouselTitle:"标题2",
          disable:true,
          url:'../../../static/2.png',
          id:'2',
          rank:2
        },{
          carouselTitle:"标题3",
          disable:true,
          url:'../../../static/3.png',
          id:'3',
          rank:3
        }],
      }
    },
    methods:{
      edit(e,id){
        this.carousels[id - 1].disable = false;

      },
      save(id){
        this.carousels[id - 1].disable = true;
      }
    }
  }
</script>

<style scoped>
  .carousel img{
    width: 100%;
  }
  .footer{
    text-align: right;
  }
</style>
