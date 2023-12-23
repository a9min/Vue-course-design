<!--
 * @Date: 2023-12-21 13:49:52
 * @LastEditTime: 2023-12-21 20:04:31
 * @作者: Danny
 * @简介: 头部
-->
<template>
    <div>
        <!--顶部-->
        <div class="header">
            <div class="open">
                <span v-if="!isCollapse" class="iconfont icon-right-indent" @click="changMenu"></span>
                <span v-else class="iconfont icon-left-indent" @click="changMenu"></span>

                <div class="header-right">
                    <el-dropdown>
                        <span class="el-dropdown-link" style="color: #fff">
                            多语言
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>中文</el-dropdown-item>
                            <el-dropdown-item>English</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <div class="user">
                        <span style="margin: 25px">您好，{{ showUserName }}</span>
                        <el-button @click="dialogVisible = true" type="danger" round>
                            <i class="el-icon-switch-button"></i>
                            退出登录
                        </el-button>
                        <!-- 提示框 -->
                        <el-dialog title="退出登录" :visible.sync="dialogVisible" width="30%">
                            <span>确定要退出吗？</span>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="danger" @click="logOff">确 定</el-button>
                            </span>
                        </el-dialog>
                    </div>
                </div>
            </div>
        </div>
        <!--内容-->
        <div class="wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import jscookie from "js-cookie";
export default {
    computed: {
        showUserName() {
            return jscookie.get("username");
        },
    },
    data() {
        return {
            dialogVisible: false, // 提示框
        };
    },
    props: ["isCollapse"],
    methods: {
        changMenu() {
            // 触发父组件传入的changShow事件
            this.$emit("changShow");
        },
        //// 退出登录
        logOff() {
            //    清除localStorage中的用户名
            //   localStorage.removeItem("username");
            // 跳转到登录页面
            this.$router.push("/login");
        },
    },
};
</script>
<style lang="less" scoped>
.header {
    height: 50px;
    background: #1e78bf;
    color: #fff;
    line-height: 50px;

    .open {
        .iconfont {
            font-size: 22px;
            cursor: pointer;
        }
    }
}

.wrapper {
    padding: 10px;
}

.header-right {
    float: right;
    padding-right: 20px;
    display: flex;

    .user {
        margin-left: 20px;
    }
}
</style>
