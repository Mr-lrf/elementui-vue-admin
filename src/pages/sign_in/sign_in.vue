<template>
  <div>
    <el-row type="flex" justify="end">
      <el-col><el-button type="success" @click="addRules" >新增规则</el-button></el-col>
    </el-row>
    <el-row>
      <el-table border :data="signRules">
        <el-table-column label="签到天数" align="center" prop="days"></el-table-column>
        <el-table-column label="赠送积分" align="center" prop="bouns"></el-table-column>
        <el-table-column label="操作" align="center" prop="bouns">
          <template slot-scope="scope">
            <el-button type="danger" @click="deleteData(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!--签到规则设置弹框-->
    <el-dialog title="新增规则" :visible.sync="visible">
      <el-form>
        <el-form-item label="签到天数:">
          <el-input-number :min="0" v-model="day"></el-input-number>
        </el-form-item>
        <el-form-item label="赠送积分:">
          <el-input-number :min="0" v-model="bouns"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="success" @click="add">新增</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "sign_in",
    data(){
      return{
        signRules:[{days:1,bouns:10,id:1}],
        visible:false,
        day:0,
        bouns:0,
        id:2
      }
    },
    methods:{
      addRules(){
        this.visible = true;
      },
      add(){
        this.signRules.push({days:this.day,bouns:this.bouns,id:this.id++});
        this.$message({
          type:'success',
          message:'新增成功！'
        });
        this.visible = false;
        this.$forceUpdate();
      },
      deleteData(id){
        this.signRules = this.signRules.filter(function (val) {
          return val.id != id;
        });
        console.log(this.signRules)
        this.$forceUpdate();
      }
    }
  }
</script>

<style scoped>
  .el-row{
    margin-bottom: 20px;
  }
</style>
