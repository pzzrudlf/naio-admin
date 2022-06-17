import { getDeptParentApi } from '@/api/dept/dept'
import { DeptModel, SelectNode } from '@/api/dept/deptModel'
import { reactive } from 'vue'

export default function useDeptParent() {
    //上级树的数据
    const treeData = reactive({
        data: []
    })
    //选中的数据
    const selectNode = reactive<SelectNode>({
        id: '',
        name: ''
    })
    //树的属性
    const defaultProps = reactive({
        children: 'children', //设置树的children,后台api返回的json中的字段名
        label: 'name' //设置树的名字，后台api返回的json中的字段名
    })
    //树的点击事件
    const handleNodeClick = (data: DeptModel)=>{
        selectNode.id = data.id
        selectNode.name = data.name
    }
    //获取树的数据
    const getTreeData = async ()=>{
        let res = await getDeptParentApi()
        if(res && res.code == 200){
            treeData.data = res.data
        }
    }
    return {
        treeData,
        selectNode,
        defaultProps,
        handleNodeClick,
        getTreeData
    }
}