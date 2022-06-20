<template>
    <el-drawer :model-value="visible" :title="title" :size="size" :close-on-click-modal="false" :destory-on-close="destoryOnClose">
        <div class="form-drawer">
            <div class="body">
                <slot> </slot>
            </div> 
            <div class="action">
                <el-button type="primary" @click="onConfirm">{{ confirmText }}</el-button>
                <el-button type="default" @click="onClose"> 取消</el-button>
            </div>
        </div>
    </el-drawer>
</template>
<script setup lang='ts'>
const props = defineProps({
    title: {
        type: String,
        default: '标题'
    },
    size: {
        type: String,
        default: '45%'
    },
    destoryOnClose: {
        type: Boolean,
        default: false
    },
    confirmText: {
        type: String,
        default: '提交'
    },
    visible: {
        type: Boolean,
        default: false
    },
})

const emit = defineEmits(['onClose', 'onConfirm'])
const onClose = () => {
    emit('onClose')
}
const onConfirm = () => {
    emit('onConfirm')
}

</script>
<style scoped lang='less'>
.form-drawer{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    .body{
        flex: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 50px;
        overflow-y: auto;
    }
    .action{
        height: 50px;
        margin-top: auto;
        display: flex;
        align-items: center;
    }
}
</style>