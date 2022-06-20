import { reactive, onMounted } from 'vue'
import { getAdminListApi } from '@/api/admin/admin'
import { AdminListParam } from '@/api/admin/adminModel'

export default function useAdminTable() {
    //列表参数
    const listParam = reactive<AdminListParam>({
        deptId: '',
        currentPage: 1,
        pageSize: 10,
        loginName: '',
        total: 0
    })

    //表格数据
    const tableData = reactive({
        list: []
    })

    //获取表格数据
    const getAdminList = async () => {
        let res = await getAdminListApi(listParam)
        if (res && res.code == 200) {
            tableData.list = res.data.records
            listParam.total = res.data.total
        }
    }

    //树点击数据
    const treeClick = (deptId: number) => {
        //设置点击的部门id
        listParam.deptId = deptId
        //获取部门列表
        getAdminList()
    }

    //页容量改变触发
    const sizeChange = (size: number) => {
        listParam.pageSize = size
        getAdminList()
    }

    //页数改变触发
    const currentChange = (page: number) => {
        listParam.currentPage = page
        getAdminList()
    }

    onMounted(() => {
        getAdminList()
    })

    const searchBtn = ()=>{
        getAdminList()
    }

    const resetBtn = ()=>{
        listParam.loginName = ''
        getAdminList()
    }
    
    return {
        listParam,
        tableData,
        getAdminList,
        treeClick,
        sizeChange,
        currentChange,
        searchBtn,
        resetBtn
    }
}