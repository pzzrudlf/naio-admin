<template>
    <div class="login-container">
        <el-form class="login-form" ref="formRef" :model="loginModel" :rules="loginRules" :inline="false">
            <div class="title-container">
                <h3 class="title">用户登录</h3>
            </div>
            <!-- username -->
            <el-form-item prop="username">
                <el-input placeholder="username" name="username" type="text" v-model="loginModel.username">
                    <template #prefix>
                        <el-icon>
                            <User />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <!-- password -->
            <el-form-item prop="password">
                <el-input placeholder="password" name="password" tabindex="2" auto-complete="on"
                    v-model="loginModel.password">
                    <template #prefix>
                        <el-icon>
                            <Lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <!-- <el-form-item prop='code'>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-input placeholder="请输入验证码" v-model="loginModel.code"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <img :src='imgSrc' @click="getImage" />
                    </el-col>
                </el-row>
            </el-form-item> -->
            <!-- 登录按钮 -->
            <el-button type="primary" style="width: 100%;margin-bottom: 30px" @click="login">登录</el-button>
        </el-form>
    </div>
</template>
    
<script setup lang='ts'>
import { User, Lock } from '@element-plus/icons-vue'
import useBaseModel from '@/composables/login/useBaseModel'
import useLogin from '@/composables/login/useLogin'

// 数据源
const { loginModel, loginRules, formRef } = useBaseModel()
const { login } = useLogin(loginModel)

</script>
    
<style lang='less' scoped>
@bg: #2d3a4b;
@dark_gray: #889aa4;
@light_gray: #eee;
@cursor: #fff;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: @bg;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;

        ::deep(.el-form-item) {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }

        ::deep(.el-input) {
            display: inline-block;
            height: 47px;
            width: 85%;

            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: @light_gray;
                height: 47px;
                caret-color: @cursor;
            }
        }
    }

    // .svg-container {
    //     padding: 6px 5px 6px 15px;
    //     color: @dark_gray;
    //     vertical-align: middle;
    //     display: inline-block;
    // }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            color: @light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: @dark_gray;
        cursor: pointer;
        user-select: none;
    }
}

:deep(.el-row) {
    width: 100% !important;
}
</style>