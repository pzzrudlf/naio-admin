<template>
  <SysDialog :title="dialog.title" :width="dialog.width" :height="dialog.height" :visible="dialog.visible"
    @onClose="onClose" @onConfirm="confirm">
    <template #content>
      <el-tree :data="treeData.data" :props="defaultProps" node-key="id" default-expand-all
        :expand-on-click-node="false" :highlight-current="true" :show-checkbox="true" @node-click="handleNodeClick">
      </el-tree>
    </template>
  </SysDialog>
</template>
<script setup lang='ts'>
import SysDialog from '@/components/SysDialog/SysDialog.vue'
import useDialog from '@/hooks/useDialog'
import useDeptParent from '@/composables/dept/useDeptParent'

const { dialog, onClose, onShow } = useDialog()

const emits = defineEmits(['select'])
const confirm = () => {
  emits('select', selectNode)
  onClose()
}

//供父组件使用，显示弹框
const show = async () => {
  //
  await getTreeData()
  dialog.title = '选择上级部门'
  dialog.height = 420
  dialog.width = 300
  onShow()
}

defineExpose({
  show
})

//树相关数据
const { treeData, selectNode, defaultProps, handleNodeClick, getTreeData } = useDeptParent()

</script>
<style lang='less' scoped>
</style>