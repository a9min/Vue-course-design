<!--
 * @Date: 2023-12-21 13:49:52
 * @LastEditTime: 2023-12-22 21:51:44
 * @作者: Danny
 * @简介:     
-->
<template>
    <div>
        <!--顶部区域-->
        <div class="header">
            <div class="form">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="订单编号">
                        <el-input v-model="formInline.user" size="small" placeholder="请输入订单编号"></el-input>
                    </el-form-item>
                    <el-form-item label="汇总时间">
                        <el-date-picker v-model="formInline.date" size="small" type="date" placeholder="请选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="汇总人">
                        <el-date-picker v-model="formInline.date" size="small" type="person" placeholder="请输入汇总人">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small">查询</el-button>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="汇总状态">
                        <el-input v-model="formInline.user" size="small" type="state" placeholder="请选择汇总状态"></el-input>
                    </el-form-item>
                    <el-form-item label="所属单位">
                        <el-date-picker v-model="formInline.date" size="small" type="unit" placeholder="请选择单位">
                        </el-date-picker>
                    </el-form-item>
                </el-form>
            </div>
            <div class="group">
                <el-button size="small" type="warning"  @click="open4" >导出</el-button>
            </div>
        </div>
        <!--表格区域-->
        <div class="content">
            <!--el-table 表头加粗，内容居中 -->
            <el-table :data="tableData" border style="width: 100%" header-cell-class-name="active-header" cell-class-name="table-center">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="订单编号" width="180">
                </el-table-column>
                <el-table-column prop="person" label="汇总人" width="180">
                </el-table-column>
                <el-table-column prop="unit" label="所属单位" width="180">
                </el-table-column>
                <el-table-column prop="phone" label="联系电话" width="180">
                </el-table-column>  
                <el-table-column prop="date" label="预定日期" width="200">
                </el-table-column>
                <el-table-column prop="price" label="订单总价" width="180">
                </el-table-column>   
                <el-table-column prop="state" label="汇总状态" width="140">
                </el-table-column>    
            </el-table>
            <!--分页组件-->
            <div class="pagination">
                <Pagination></Pagination>
            </div>
        </div>
    </div>

</template>

<script>
import Pagination from '@/components/Pagination/Pagination.vue'
export default {
    components:{
        Pagination
    },
    data() {
        return {
            formInline: {},
            tableData: [{
                id:'6428881472',
                person:'天使',
                unit:'某某单位',
                phone:'15777768974',
                date: '2023-12-20',
                price:'567',
                state:'未汇总',
            }, {
                id:'6428881472',
                person:'天使',
                unit:'某某单位',
                phone:'15777768974',
                date: '2023-12-20',
                price:'445.5',
                state:'未汇总',
            }, {
                id:'6428881472',
                person:'天使',
                unit:'某某单位',
                phone:'15777768974',
                date: '2023-12-20',
                price:'1299',
                state:'已汇总',
            },{
                id:'6428881472',
                person:'天使',
                unit:'某某单位',
                phone:'15777768974',
                date: '2023-12-19',
                price:'154',
                state:'已汇总',
            }, {
                id:'6428881777',
                person:'小美',
                unit:'某某单位',
                phone:'18456768974',
                date: '2023-12-19',
                price:'466',
                state:'已汇总',
            }, {
                id:'6428881777',
                person:'小美',
                unit:'某某单位',
                phone:'18456768974',
                date: '2023-12-19',
                price:'712',
                state:'已汇总',
            }, {
                id:'6428881777',
                person:'小美',
                unit:'某某单位',
                phone:'18456768974',
                date: '2023-12-18',
                price:'247.5',
                state:'已汇总',
            }, {
                id:'6428881777',
                person:'小美',
                unit:'某某单位',
                phone:'18456768974',
                date: '2023-12-17',
                price:'996.5',
                state:'已汇总',
            }, 
            ]
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!', this.formInline);
        },
        handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    //   导出功能提示信息
      open4() {
        this.$message({
          message: '导出失败耶，请重试哦~',
          type: 'warning'
        });
      },
    },
}
</script>

<style lang="less" scoped>
.header {
    background: #fff;
    margin-bottom: 20px;
    padding: 10px;

    .el-form-item {
        margin-bottom: 16px;
    }

    .group {
        border: 1px solid #eee;
        padding: 8px;
    }
}

.content {
    background: #fff;

    /deep/.active-header {
        color: #333;
        text-align: center;
    }

    /deep/.table-center {
        text-align: center;
    }

    .pagination {
        margin: 10px;
    }
}
</style>