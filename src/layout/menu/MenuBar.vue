<template>
  <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose" background-color="#304156" text-color="#303133" unique-opened router>
    <MenuItem :menuList="menuList" />
  </el-menu>
</template>
    
<script setup lang='ts'>
import MenuItem from './MenuItem.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCollapseStore } from '@/store/collapseStore'
import { useMenuStore } from '@/store/menuStore'

//控制菜单展开和关闭
const collapseStore = useCollapseStore()
const isCollapse = computed(() => {
  return collapseStore.getCollapse
})
const handleOpen = (key: string | number, keyPath: string) => {
  console.log(key, keyPath)
}
const handleClose = (key: string | number, keyPath: string) => {
  console.log(key, keyPath)
}

const route = useRoute()
const activeIndex = computed(() => {
  const { path } = route
  return path
})

//菜单数据
const menuStore = useMenuStore()
const menuList = computed(() => {
  return menuStore.getMenuList
})
</script>
    
<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}

:deep(.el-sub-menu .el-sub-menu__title) {
  color: #f4f4f5 !important;
}

/* .el-submenu .is-active .el-submenu__title {
  border-bottom-color: #1890ff;
} */
:deep(.el-menu .el-menu-item) {
  color: #bfcbd9;
}

/* 菜单点中文字的颜色 */
:deep(.el-menu-item.is-active) {
  color: #409eff !important;
}

/* 当前打开菜单的所有子菜单颜色 */
:deep(.is-opened .el-menu-item) {
  background-color: #1f2d3d !important;
}

/* 鼠标移动菜单的颜色 */
:deep(.el-menu-item:hover) {
  background-color: #001528 !important;
}
</style>