<template>
  <SysDialog :title="dialog.title" :width="dialog.width" :height="dialog.height" :visible="dialog.visible"
    @onClose="onClose" @onConfirm="confirm">
    <template v-slot:content>
      <el-form :model="addModel" ref="addAdminForm" :rules="rules" label-width="80px" :inline="false" size="small">
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item prop="deptName" label="所属部门">
              <el-input @click="selectParent" v-model="addModel.deptName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="loginName" label="姓名">
              <el-input v-model="addModel.loginName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item prop="mobile" label="电话">
              <el-input v-model="addModel.mobile"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="nickName" label="昵称">
              <el-input v-model="addModel.nickName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item prop="email" label="邮箱">
              <el-input v-model="addModel.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="username" label="登录名">
              <el-input v-model="addModel.username"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col v-if="addModel.type != '1'" :span="12" :offset="0">
            <el-form-item prop="password" label="密码">
              <el-input v-model="addModel.password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="sex" label="性别">
              <el-radio-group v-model="addModel.sex">
                <el-radio :label="'0'">男</el-radio>
                <el-radio :label="'1'">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
  </SysDialog>
  <!-- 上级部门的弹框 -->
  <DepartmentParent ref="parentRef" @select="select" />
</template>
<script setup lang='ts'>
import DepartmentParent from '../department/DepartmentParent.vue'
import SysDialog from '@/components/SysDialog/SysDialog.vue'
import useDialog from '@/hooks/useDialog'
import useAddAndEditAdmin from '@/composables/admin/useAddAndEditAdmin'
import useBaseModel from '@/composables/admin/useBaseModel'
import useSelectParent from '@/composables/dept/useSelectParent'

//基础属性
const { addModel, rules } = useBaseModel()
//弹框属性
const { dialog, onShow, onClose } = useDialog()

const emit = defineEmits(['save'])
//新增、编辑弹框方法
const { confirm, show, addAdminForm, select } = useAddAndEditAdmin(dialog, onShow, onClose, addModel, emit)
//上级部门
const { parentRef, selectParent } = useSelectParent()
//暴露方法给外部使用
defineExpose({
  show
})
</script>
<style lang='less' scoped>
</style>