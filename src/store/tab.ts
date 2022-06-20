import { defineStore } from 'pinia'
import { Type, ITabState, ITab } from './type'

export const useTabStore = defineStore({
    id: Type.TAB,
    state: (): ITabState => {
        return {
            count: 0,
            collapse: false,
            tabList: []
        }
    },
    getters: {
        getCount(): number {
            return this.count
        },
        getCollapse(): boolean {
            return this.collapse
        },
        getTabList(): ITab[] {
            return this.tabList
        }
    },
    actions: {
        setCount(count: number) {
            this.$state.count = count
        },
        setCollapse(collapse: boolean) {
            this.$state.collapse = collapse
        },
        addTab(tab: ITab){
            if(this.$state.tabList.some(item=>item.path===tab.path)) return
            this.$state.tabList.push(tab)
        }
    }

})