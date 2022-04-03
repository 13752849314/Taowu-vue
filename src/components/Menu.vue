<template>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
  >
    <el-menu-item index="0">
      <template #title>
        <el-icon><home-filled /></el-icon>
        <span>主页</span>
      </template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <operation/>
        </el-icon>
        <span>系统管理</span>
      </template>

      <router-link to="/sys/User">
        <el-menu-item index="1-1">
          <el-icon>
            <user/>
          </el-icon>
          <template #title>用户管理</template>
        </el-menu-item>
      </router-link>

      <el-menu-item index="1-2">
        <el-icon>
          <user-filled/>
        </el-icon>
        <template #title>角色管理</template>
      </el-menu-item>
      <el-menu-item index="1-3">
        <el-icon>
          <notebook/>
        </el-icon>
        <template #title>菜单管理</template>
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <tools/>
        </el-icon>
        <span>系统工具</span>
      </template>
      <el-menu-item index="2-1">
        <el-icon>
          <calendar/>
        </el-icon>
        <template #title>数字字典</template>
      </el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script>

export default {
  name: "Menu"
}
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100%;
}
</style>