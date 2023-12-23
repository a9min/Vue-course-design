<template>
    <div>
        <!--顶部区域-->
        <div class="header">
            <div class="form">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="订单编号">
                        <el-input v-model="formInline.user" size="small" placeholder="请输入订单编号"></el-input>
                    </el-form-item>
                    <el-form-item label="预定时间">
                        <el-date-picker v-model="formInline.date" size="small" type="date" placeholder="请选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="商品名称">
                        <el-date-picker v-model="formInline.date" size="small" type="name" placeholder="请输入商品名称">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="订单状态">
                        <el-date-picker v-model="formInline.date" size="small" type="state" placeholder="请选择状态">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="group">
                <el-button size="small" type="warning">订单汇总</el-button>
                <el-button size="small" type="warning" @click="open3">导出</el-button>
            </div>
        </div>
        <!--表格区域-->
        <div class="content">
            <!--el-table 表头加粗，内容居中 -->
            <el-table :data="tableData" border style="width: 100%" header-cell-class-name="active-header" cell-class-name="table-center">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="订单编号" width="90">
                </el-table-column>
                <el-table-column prop="date" label="预定日期" width="160">
                </el-table-column>    
                <el-table-column prop="name" label="商品名称" width="150">
                </el-table-column>
                <el-table-column prop="number" label="数量" width="90">
                </el-table-column>
                <el-table-column prop="price" label="总价" width="90">
                </el-table-column>
                <el-table-column prop="state" label="订单状态" width="150">
                    <template slot-scope="scope">
                        {{ scope.row.huizongStatus==1?'待收货':'已收货' }}
                    </template>
                </el-table-column>    
                <el-table-column prop="person" label="买家" width="150">
                </el-table-column>
                <el-table-column prop="phone" label="联系电话" width="150">
                </el-table-column>          
                <el-table-column prop="address" label="地址">
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
                id:'001',
                date: '2023-12-18 13:24:31',
                name: '香槟玫瑰',
                number:'99',
                price:'247.5',
                state:'已收货',
                person:'饼饼',
                phone:'15777768974',
                address: '上海市普陀区金沙江路1518'
            }, {
                id:'002',
                date: '2023-12-18 20:24:41',
                name: '向日葵',
                number:'50',
                price:'248',
                state:'已收货',
                person:'YOYO',
                phone:'17477768974',
                address: '上海市普陀区金沙江路1519'
            }, {
                id:'003',
                date: '2023-12-19 00:12:56',
                name: '圣诞满天星干花',
                number:'100',
                price:'400',
                state:'待发货',
                person:'糖果',
                phone:'1867768974',
                address: '北京市朝阳区向阳路B栋627'
            },{
                id:'004',
                date: '2023-12-20 12:56:51',
                name: '粉色百合',
                number:'66',
                price:'198.9',
                state:'待发货',
                person:'不发韵达',
                phone:'13456689471',
                address: '南宁市青秀区发财路碧桂园7栋'
            }, {
                id:'005',
                date: '2023-12-22 18:04:01',
                name: '白色马蹄莲',
                number:'88',
                price:'888',
                state:'待发货',
                person:'肥肥猫',
                phone:'15788582030',
                address: '南宁市青秀区凯旋一号'
            },{
                id:'006',
                date: '2023-12-22 16:44:21',
                name: '乌梅子酱玫瑰',
                number:'99',
                price:'299.9',
                state:'待收货',
                person:'萌萌',
                phone:'15976897420',
                address: '广州市越秀区星光大厦C栋'
            }, {
                id:'007',
                date: '2023-12-23 14:35:31',
                name: '康乃馨',
                number:'50',
                price:'188',
                state:'待收货',
                person:'YOYO',
                phone:'17477768974',
                address: '上海市普陀区金沙江路1519弄'
            }, {
                id:'008',
                date: '2023-12-19 00:12:56',
                name: '卡罗拉红玫瑰',
                number:'100',
                price:'400',
                state:'待发货',
                person:'糖果',
                phone:'1867768974',
                address: '北京市朝阳区向阳路B栋627'
            },{
                id:'009',
                date: '2023-12-20 12:56:51',
                name: '多肉植物',
                number:'66',
                price:'198.9',
                state:'待发货',
                person:'不发韵达',
                phone:'13456689471',
                address: '南宁市青秀区发财路碧桂园7栋'
            }, {
                id:'010',
                date: '2023-12-22 18:04:01',
                name: '红色康乃馨',
                number:'88',
                price:'888',
                state:'待发货',
                person:'肥肥猫',
                phone:'15788582030',
                address: '南宁市青秀区凯旋一号'
            },]
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
      open3() {
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