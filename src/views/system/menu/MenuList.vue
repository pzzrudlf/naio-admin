<template>
    <el-main>
        <!-- 新增按钮 -->
        <el-form :inline="true" size="small">
            <el-form-item>
                <el-button type="primary" @click="addBtn" :icon="Plus">新增</el-button>
            </el-form-item>
        </el-form>
        <!-- 表格 -->
        <el-table :height="tableHeight" :data="menuTable.list" style="width: 100%" row-key="id" border
            default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
            <el-table-column prop="label" label="菜单名称" />
            <el-table-column prop="type" label="类型">
                <template #default="scope">
                    <el-tag v-if="scope.row.type == '0'">目录</el-tag>
                    <el-tag v-if="scope.row.type == '1'" type="success">菜单</el-tag>
                    <el-tag v-if="scope.row.type == '2'" type="danger">按钮</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="label" label="图标">
                <template #default="scope">
                    <Icon class="icons" :icon="scope.row.icon" />
                </template>
            </el-table-column>
            <el-table-column prop="name" label="路由名称" />
            <el-table-column prop="path" label="路由地址" />
            <el-table-column prop="url" label="组件路径" />
            <el-table-column prop="code" label="权限字段" />
            <el-table-column label="操作" width="210" align="center">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="editBtn(scope.row)" :icon="Edit">编辑</el-button>
                    <el-button type="danger" size="small" @click="deleteBtn(scope.row.id)" :icon="Close">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-main>
    <AddAndEdit ref="addMenuRef" @save="save" />
</template>
<script setup lang='ts'>
import { Plus, Edit, Close } from '@element-plus/icons-vue'
import { ref, onMounted, nextTick } from 'vue'
import useMenuTable from '@/composables/menu/useMenuTable'
import useMenu from '@/composables/menu/useMenu'
import AddAndEdit from './AddAndEdit.vue'

//表格的高度
const tableHeight = ref(0)
//表格数据获取
const { menuTable, getMenuTable } = useMenuTable()
//表格的操作
const { addBtn, editBtn, deleteBtn, save, addMenuRef } = useMenu(getMenuTable)

onMounted(() => {
    nextTick(() => {
        tableHeight.value = window.innerHeight - 200
    })
})
</script>
<style lang='less' scoped>
.icons {
    width: 24px;
    height: 18px;
    margin-right: 5px;
}
</style>