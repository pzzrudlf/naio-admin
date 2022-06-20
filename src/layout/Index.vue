<template>
    <el-container class="layout">
        <el-aside width="auto" class="aside">
            <MenuBar />
        </el-aside>
        <el-container>
            <el-header class="header">
                <Header />
            </el-header>
            <el-main class="main">
                <Tab />
                <router-view></router-view>
                <!-- <router-view v-slot="{ Component }">
                    <transition name="fade">
                        <keep-alive :max="10">
                            <component :is="Component"></component>
                        </keep-alive>
                    </transition>
                </router-view> -->
            </el-main>
        </el-container>
    </el-container>
</template>
    
<script setup lang='ts'>
import Header from './header/Header.vue'
import MenuBar from './menu/MenuBar.vue'
import Tab from './tab/Tab.vue'
</script>
    
<style lang='less' scoped>
.layout {
    height: 100%;

    .aside {
        background-color: rgb(48, 65, 86);
    }

    .header {
        height: 50px;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .main {
        padding-top: 0px;
        .fade-enter-from{
            opacity: 0;
        }
        .fade-enter-to{
            opacity: 1;
        }
        .fade-leave-from{
            opacity: 1;
        }
        .fade-leave-to{
            opacity: 0;
        }
        .fade-enter-active{
            transition: all 0.3s;
            transition-delay: 0.3s;
        }
        .fade-leave-active{
            transition: all 0.3s;
        }
    }
}
</style>