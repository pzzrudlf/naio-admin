import { ref } from 'vue'
import { EditType } from '@/utils/baseEnum'
import { addDeptApi, deleteDeptApi, editDeptApi } from '@/api/dept/dept'
import { DeptModel, AddAndEditDeptModel, ListParam } from '@/api/dept/deptModel'
import { Result, StatusCode } from '@/http/request'
import useInstance from '@/hooks/useInstance'

export default function useDept(getDeptList, searchForm: ListParam) {

    const { global } = useInstance()

    const addAndEditDeptRef = ref<{ show: (type: string, row?: DeptModel) => void }>()

    // 下面这种方式在npm run build时会报错
    // const addAndEditDeptRef = ref<InstanceType<typeof addAndEditVue>>()
    
    //搜索
    const searchBtn = () => {
        getDeptList()
    }
    const resetBtn = ()=>{
        searchForm.searchName = ''
        getDeptList()
    }
    //新增
    const addBtn = () => {
        addAndEditDeptRef.value?.show(EditType.ADD)
    }
    //编辑
    const editBtn = (row: DeptModel) => {
        addAndEditDeptRef.value?.show(EditType.EDIT, row)
    }
    //删除
    const deleteBtn = async (row: DeptModel) => {
        let param = {
            id: row.id
        }
        const confirm = await global.$myconfirm('确定删除该数据吗?')
        if (confirm) {
            let res = await deleteDeptApi(param)
            if (res && res.code == StatusCode.Success) {
                //信息提示
                global.$message({ message: res.msg, type: 'success' })
                //刷新表格
                getDeptList()
            }
        }
    }
    //保存（新增、编辑）
    const save = async (model: AddAndEditDeptModel) => {
        //真正的提交表单
        let res: Result
        if (model.type == EditType.ADD) {//新增
            res = await addDeptApi(model)
        } else {//编辑
            res = await editDeptApi(model)
        }

        if (res && res.code == StatusCode.Success) {
            //信息提示
            global.$message({ message: res.msg, type: 'success' })
            //刷新表格
            getDeptList()
        }
    }
    return {
        searchBtn,
        resetBtn,
        addBtn,
        editBtn,
        deleteBtn,
        save,
        addAndEditDeptRef
    }
}