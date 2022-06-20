<template>
    <FormDrawer :title="drawer.title" :visible="drawer.visible" :size="drawer.size" :destory-on-close="drawer.destoryOnClose"
        @onClose='onClose' @onConfirm='onConfirm'>
        <template v-slot>
            <div style="height: 1000px;">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam, qui accusantium ea sunt consequatur architecto fugit at rem sequi exercitationem doloribus id ex eligendi delectus, enim ullam beatae nihil.
            </div>
        </template>
    </FormDrawer>
</template>
<script setup lang='ts'>
import FormDrawer from '@/components/FormDrawer/FormDrawer.vue'
import useDrawer from '@/hooks/useDrawer'
import { EditType, Title } from '@/utils/baseEnum'

//弹框属性
const { drawer, onShow, onClose, onConfirm } = useDrawer()

const show = (type: string)=>{
    //设置弹框标题
    type == EditType.ADD ? drawer.title = Title.ADD : Title.EDIT
    onShow()
}

defineExpose({
    show
})
</script>
