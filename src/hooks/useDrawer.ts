import { reactive } from 'vue'
import { DrawerModel } from '@/utils/baseType'

export default function useDrawer() {

    const drawer = reactive<DrawerModel>({
        title: '提交',
        size: '45%',
        destoryOnClose: true,
        confirmText: '确认',
        visible: false,
    })

    const onShow = () => {
        drawer.visible = true
    }

    const onClose = () => {
        drawer.visible = false
    }

    const onConfirm = () => {
        drawer.visible = false
    }

    return {
        drawer,
        onShow,
        onClose,
        onConfirm
    }
}