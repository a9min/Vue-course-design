<template>
    <div class="full-background">
        <div class="login-box">
            <h2 class="title">登录</h2>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import jscookie from "js-cookie" 
export default {
    data() {
        var validateUser = (rule, value, callback) => {
            // 判断用户名是否为空
            if (value === '') {
                // 如果为空，则抛出错误
                callback(new Error('请用户名'));
            } else {
                // 如果不为空，则调用回调函数
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            // 判断输入的值是否为空
            if (value === '') {
                // 如果为空，则报错
                callback(new Error('请输入密码'));
            } else {
                // 如果不为空，则判断用户名是否为空
                if (this.ruleForm.username !== '') {
                    // 如果用户名不为空，则验证用户名
                    this.$refs.ruleForm.validateField('username');
                }
                // 验证通过，则调用回调函数
                callback();
            }
        };

        return {
            ruleForm: {
                password: '',
                username: '',
            },
            rules: {
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                username: [
                    { validator: validateUser, trigger: 'blur' }
                ],
            }
        };
    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    jscookie.set('username',this.ruleForm.username);
                    // 定义跳转的目标路由，这里假设首页的路由是'/home'
                    const targetRoute = "/home";

                    // 使用Vue Router的push方法来跳转路由
                    this.$router.push(targetRoute);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
};
</script>
<style scoped>
.login-box {
    width: 400px;
    height: 300px;
    padding: 20px;
    /* margin: 150px  auto; */
    border-radius: 10px;
    border: 1px solid #eee;
    background: #fff;
}
.title {
    margin-bottom: 30px;
    text-align: center;
    color: #666;
}
.full-background {
    /* 设置背景图片 */
    background-image: url('./3.jpg');
    /* 背景图片铺满整个容器 */
    height: 100vh; 
    /* 如果需要，设置背景图片不重复 */
    background-size:cover;
    background-repeat: no-repeat;
    /* 如果需要，设置背景图片的位置 */
    background-position: center;
    display: flex;
	justify-content: center;
	align-items: center;
}
</style>
