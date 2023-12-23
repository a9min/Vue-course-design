<!--
 * @Date: 2023-12-22 22:32:46
 * @LastEditTime: 2023-12-22 22:32:46
 * @作者: Danny
 * @简介:     
-->
<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
        <strong>请输入类目名称：</strong>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitHandle">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
export default {
    props: ['title', 'type'],
    data() {
        return {
            dialogVisible: false,
            input: ''
        }
    },
    methods: {
        submitHandle() {
            console.log('......')
            if (this.type == 1) {
                console.log('新增', this.input);
            } else {
                console.log('修改', this.input);
            }
        }
    }
}
</script>
<style></style>