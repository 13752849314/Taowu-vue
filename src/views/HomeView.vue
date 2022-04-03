<template>
  <el-container>
    <el-aside width="200px">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header>
        <strong>梼杌管理系统</strong>
        <div class="header-avatar">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ userInfo.username }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <router-link to="/userCenter">个人中心</router-link>
                </el-dropdown-item>
                <el-dropdown-item @click="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-link href="https://www.bilibili.com" target="_blank">网站</el-link>
          <el-link href="https://github.com/13752849314" target="_blank">Github</el-link>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import {ElMessage} from 'element-plus'
import Menu  from "@/components/Menu"
export default {
  name: "home",
  components: {Menu},
  data() {
    return {
      userInfo: {
        username: '梼杌'
      }
    }
  },
  methods: {
    logout() {
      ElMessage.info({
        message: 'bey bey!',
        duration: 2000
      })
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.el-container {
  padding: 0;
  margin: 0;
  height: 100%;
}

.header-avatar {
  float: right;
  width: 210px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.el-header {
  background-color: #c5efea;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
}

.el-dropdown-link {
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>
