<template>
    <div>
        <div ref="commonEchartsRef" :style="{ height: height, width: width }"></div>
    </div>
</template>
<script setup lang='ts'>
import { ref, onMounted, watchEffect } from 'vue'
import useEcharts from '@/hooks/useEcharts'

//echarts的 ref属性
const commonEchartsRef = ref<HTMLElement>()

//接收父组件传来的值
const props = withDefaults(defineProps<{
    width?: string,
    height: string,
    options: any
}>(), {
    width: '100%',
    height: '360px'
})

onMounted(() => {
    const { setOptions, resize } = useEcharts(commonEchartsRef.value!)
    watchEffect(() => {
        setOptions(props.options)
    })
    window.addEventListener('resize', () => {
        resize()
    })
})

</script>