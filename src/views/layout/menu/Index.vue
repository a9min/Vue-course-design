<!--
 * @Date: 2023-12-21 13:49:52
 * @LastEditTime: 2023-12-22 22:31:04
 * @作者: Danny
 * @简介: 左侧菜单栏
-->
<template>
    <div>
        <el-menu :default-active="$router.path" class="el-menu-vertical-demo"
            background-color="#112f50" text-color="#fff" 
            active-text-color="#ffd04b" router :collapse="isCollapse">
            <el-menu-item>
                <span slot="title">鲜花<i class="el-icon-loading"></i>销售管理系统</span>
            </el-menu-item>
            <el-menu-item index="/home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/product">
                <template slot="title">
                    <i class="el-icon-sold-out"></i>
                    <span>产品管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/product/list">
                        <i class="el-icon-notebook-2"></i>
                <span slot="title">产品列表</span>
            </el-menu-item>
                    <el-menu-item index="/product/category">
                        <i class="el-icon-coin"></i>
                <span slot="title">产品分类</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/order">
                <template slot="title">
                    <i class="el-icon-s-order"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/order/order-list">
                        <i class="el-icon-tickets"></i>
                <span slot="title">订单列表</span>
            </el-menu-item>
                    <el-menu-item index="/order/collect">
                        <i class="el-icon-finished"></i>
                <span slot="title">订单汇总</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/advert">
                <template slot="title">
                    <i class="el-icon-s-shop"></i>
                    <span>商家合作</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/advert/advert-list">
                        <i class="el-icon-s-home"></i>
                <span slot="title">商家信息</span>
            </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    props:['isCollapse'],
    data(){
        return{
            // isCollapse:false
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu{
    border-right: 0;
    /deep/.is-active{
        background: #1e78bf !important;
        color: #fff !important;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>