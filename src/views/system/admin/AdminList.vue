<template>
    <el-container :style="{ height: containerHeight + 'px' }">
        <!-- <el-aside width="200px" style="border-right: 1px solid #dfe6ec">
            <LeftTree ref="userLeftTree" @treeClick="treeClick"></LeftTree>
        </el-aside> -->
        <el-main>
            <!-- 搜索栏 -->
            <el-form :model="listParam" label-width="80px" :inline="true" size="small">
                <el-form-item label>
                    <el-input v-model="listParam.loginName"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button size="small" :icon="Search" @click="searchBtn">搜索</el-button>
                    <el-button size="small" :icon="Close" @click="resetBtn">重置</el-button>
                    <el-button size="small" :icon="Plus" type="primary" @click="addBtn">新增</el-button>
                </el-form-item>
            </el-form>
            <!-- 用户表格 -->
            <el-table :height="tableHeight" :data="tableData.list" border stripe>
                <el-table-column prop="loginName" label="用户名"></el-table-column>
                <el-table-column prop="deptName" label="所属部门"></el-table-column>
                <el-table-column prop="mobile" label="电话"></el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                <el-table-column align="center" width="290" label="操作">
                    <template #default="scope">
                        <el-button type="primary" size="small" :icon="Edit" v-permission="['sys:user:edit']" @click='editBtn(scope.row)'>编辑</el-button>
                        <el-button type="primary" size="small" :icon="Setting" v-permission="['sys:user:assign']" @click='assignBtn(scope.row)'>分配角色
                        </el-button>
                        <el-button type="danger" size="small" :icon="Delete" v-permission="['sys:user:delete']" @click='deleteBtn(scope.row.id)'>删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination @size-change="sizeChange" @current-change="currentChange"
                :current-page.sync="listParam.currentPage" :page-sizes="[10, 20, 40, 80, 100]"
                :page-size="listParam.pageSize" :total="listParam.total" layout="total, sizes, prev, pager, next, jumper"
                background></el-pagination>
        </el-main>
    </el-container>
    <!-- add edit dialog -->
    <AddAndEdit ref="adminAddRef" @save="save" />
    <!-- 分配角色弹框 -->
    <AssignRole ref="assignRoleRef" />
</template>
<script setup lang='ts'>
import { Search, Setting, Close, Plus, Delete, Edit } from '@element-plus/icons-vue'
import useAdminTable from '@/composables/admin/useAdminTable'
import useAdmin from '@/composables/admin/useAdmin'
import { ref, onMounted, nextTick } from 'vue'
import AddAndEdit from './AddAndEdit.vue'
import AssignRole from './AssignRole.vue'

const containerHeight = ref(0)
const tableHeight = ref(0)
const { listParam, tableData, sizeChange, currentChange, getAdminList, searchBtn, resetBtn } = useAdminTable()
const { addBtn, editBtn, deleteBtn, assignBtn, adminAddRef, save, assignRoleRef } = useAdmin(getAdminList)

onMounted(() => {
    nextTick(() => {
        containerHeight.value = window.innerHeight - 100
        tableHeight.value = window.innerHeight - 220
    })
})

</script>