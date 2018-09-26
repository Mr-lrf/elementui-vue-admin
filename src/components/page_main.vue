<template>
  <div class="main">
    <div class="main-top">
      <lrf-header/>
    </div>
    <div class="main-bottom">
      <lrf-banner/>
      <lrf-content/>
    </div>
  </div>
</template>

<script>
  import page_header from '@/components/page_header'
  import page_banner from '@/components/page_banner'
  import page_content from '@/components/page_content'
  export default {
    name: "page_main",
    components:{
      'lrf-header':page_header,
      'lrf-banner':page_banner,
      'lrf-content':page_content,
    }
  }
</script>

<style scoped>
  .main{
    display: flex;
    flex-direction: column;
  }
  .main-bottom{
   display: flex;
  }
</style>
