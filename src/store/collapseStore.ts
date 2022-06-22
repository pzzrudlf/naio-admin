import { defineStore } from 'pinia'
import { Type, ICollapseState } from './type'

export const useCollapseStore = defineStore({
    id: Type.COLLAPSE,
    state: (): ICollapseState => {
        return {
            count: 0,
            collapse: false
        }
    },
    getters: {
        getCount(): number {
            return this.count
        },
        getCollapse(): boolean {
            return this.collapse
        }
    },
    actions: {
        setCount(count: number) {
            this.$state.count = count
        },
        setCollapse(collapse: boolean) {
            this.$state.collapse = collapse
        }
    }
})