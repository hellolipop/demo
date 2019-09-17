<template>
  <div id="app">
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="个人简历" name="index">
      <router-link to='/index'></router-link>

      </el-tab-pane>
    <el-tab-pane label="项目介绍" name="ability">
      <router-link to='/ability'></router-link>
    </el-tab-pane>
    <el-tab-pane label="点我有惊喜" name="work">
      <router-link to='work'></router-link>
    </el-tab-pane>
  </el-tabs>
  <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'index'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab.name)
      console.log(event)

      this.$router.push(`/${tab.name}`)
    }
  }
}
</script>

<style lang="less">

</style>
