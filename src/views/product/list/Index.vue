<!--产品搜索-->
<!--
           el-form 表单
            :inline="true"      设置 inline 属性可以让表单域变为行内的表单域
            :model="formInline" 表单数据对象 object
            el-form-item 表单控件 每一项内容
        -->
<template>
  <div class="goods">
    <!-- 1.搜索区域 -->
    <div class="header">
      <el-input v-model="searchQuery" @keyup.enter.native="handleQuery" placeholder="查询商品"></el-input>
      <el-button @click="handleQuery" type="primary">查询</el-button>
      <el-button type="primary" @click="addData">添加</el-button>
      <el-button type="primary" @click="handleBatchDelete">批量删除</el-button>
    </div>

    <!-- 2.表格区域展示视图数据 -->
    <div class="wrapper">
      <el-table :data="filteredData" style="width: 100%" border header-cell-class-name="active-header"
        cell-class-name="table-center">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="商品编号" width="100"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column prop="price" label="商品价格" width="100"></el-table-column>
        <el-table-column prop="num" label="商品数量" width="100"></el-table-column>
        <el-table-column prop="category" label="商品类目" width="100"></el-table-column>
        <el-table-column prop="date" label="预订时间"></el-table-column>
        <el-table-column prop="sellingpoint" label="商品卖点" show-overflow-tooltip></el-table-column>
        <el-table-column prop="description" label="商品描述" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" v-model="tableData[0].name">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--产品列表-->
    <div class="content">
      <el-table :data="tableData" style="width: 100%" border header-cell-class-name="active-header"
        cell-class-name="table-center">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="商品编号" width="100"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="120"></el-table-column>
        <el-table-column prop="price" label="商品价格" width="120"></el-table-column>
        <el-table-column prop="num" label="商品数量" width="120"></el-table-column>
        <el-table-column prop="category" label="商品类目" width="120"></el-table-column>
        <el-table-column prop="date" label="预订时间"></el-table-column>
        <el-table-column prop="sellingpoint" label="商品卖点"></el-table-column>
        <el-table-column prop="description" label="商品描述" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)"
              icon="el-icon-edit">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 3.分页 -->
      <div class="pagination">
        <Pagination></Pagination>
      </div>

      <!-- 弹框内容设置 -->
      <div class="dialog">
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
          <el-form :model="flowerInfo">
            <el-form-item label="商品编号" prop="id" :label-width="formLabelWidth">
              <el-input v-model="flowerInfo.id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品名称" prop="name" :label-width="formLabelWidth">
              <el-input v-model="flowerInfo.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="price" :label-width="formLabelWidth">
              <el-input v-model="flowerInfo.price" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="num" :label-width="formLabelWidth">
              <el-input v-model="flowerInfo.num" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品类目" prop="category" :label-width="formLabelWidth">
              <el-input v-model="flowerInfo.category" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="预订时间" prop="date" :label-width="formLabelWidth">
              <el-input v-model="flowerInfo.date" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品卖点" prop="sellingpoint" :label-width="formLabelWidth">
              <el-input v-model="flowerInfo.sellingpoint" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品描述" prop="description" :label-width="formLabelWidth">
              <el-input v-model="flowerInfo.description" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitFlower()">确 定</el-button>
          </div>
        </el-dialog>
      </div>

    </div>
  </div>
</template>
      
<script>
import Pagination from '@/components/Pagination/Pagination.vue';
export default {
  name: "app",
  components: {
    Pagination,
  },
  data() {
    return {
      dialogFormVisible: false,
      title: '',
      rowIndex: null,
      flowerInfo: {},
      searchQuery: '',
      formInline: {
        user: '',
        region: ''
      },
      filteredData: [],
      tableData: [
        { id: '001', name: '菊花', price: '99', num: '6', category: '菊科植物', date: '2023-12-18', sellingpoint: '美好的明天', description: '把笑容挂脸上，就会如花似玉' },
        { id: '002', name: '金盖花', price: '89', num: '20', category: '菊科植物', date: '2023-12-06', sellingpoint: '昭昭星野', description: '曼塔玫瑰喷乌梅子酱漆，拼心形)，裸粉色蝴蝶结，裸粉色丝袋绕一圈' },
        { id: '003', name: '翠菊', price: '199', num: '30', category: '菊科植物', date: '2023-12-05', sellingpoint: '就要你的爱', description: '要你的心，要你的爱，要你的全部。', },
        { id: '004', name: '玫瑰', price: '999', num: '9999', category: '玫瑰科植物', date: '2023-12-10', sellingpoint: '满天星辰，只因有你', description: ' 我携满天星辰赠你，好教你不逊色人间错落烟火；只有这满天星辰，足够与你相配。' },
        { id: '005', name: '蔷薇', price: '88', num: '888', category: '玫瑰科植物', date: '2023-12-10', sellingpoint: '暖暖情意', description: '无限的眷恋，来源于爱的温暖，只为能靠在您的臂弯，说声，谢谢' },
        { id: '006', name: '月季', price: '88', num: '880', category: '玫瑰科植物', date: '2023-12-10', sellingpoint: '健康长久', description: '时光时光慢些吧，不想让你再变老啦~我愿用我一切，换你岁月长留' },
        { id: '007', name: '芍药', price: '88', num: '99', category: '芍药科植物', date: '2023-12-10', sellingpoint: '美好时光/粉色百合、红豆', description: '美好升温，日子闪光', },
        { id: '008', name: '牡丹', price: '88', num: '99', category: '芍药科植物', date: '2023-12-10', sellingpoint: '清风徐来', description: '清风徐来，水波不兴；顺流而上，海阔天空' },
        { id: '009', name: ' 百合', price: '88', num: '2', category: '百合科植物', date: '2023-12-10', sellingpoint: '棉花堡', description: '无' },
        { id: '010', name: '郁金香', price: '88', num: '2', category: '百合科植物', date: '2023-12-10', sellingpoint: '恋恋情深', description: '喜欢像是一阵风，而爱你是细水长流' },
        { id: '011', name: '风信子', price: '88', num: '88', category: '百合科植物', date: '2023-12-10', sellingpoint: '健康长久', description: '时光时光慢些吧，不想让你再变老啦~我愿用我一切，换你岁月长留' },
        { id: '012', name: '兰花', price: '88', num: '99', category: '兰科植物', date: '2023-12-10', sellingpoint: '美好时光/粉色百合、红豆', description: '美好升温，日子闪光', },
        { id: '013', name: '蝴蝶兰', price: '88', num: '99', category: '兰科植物', date: '2023-12-10', sellingpoint: '清风徐来', description: '清风徐来，水波不兴；顺流而上，海阔天空' },
        { id: '014', name: '石斜', price: '88', num: '2', category: '兰科植物', date: '2023-12-10', sellingpoint: '棉花堡', description: '无' },
      ],
    }
  },

  methods: {
    // 搜索模糊查询name的数据
    handleQuery() {
      if (this.searchQuery) {
        this.filteredData = this.tableData.filter((item) =>
          item.name.includes(this.searchQuery)
        );
      } else {
        this.filteredData = [...this.tableData];
      }
    },

    // 点击新增弹出框
    addData() {
      this.title = '新增';
      this.flowerInfo = {};
      this.dialogFormVisible = true
    },
    // 点击编辑弹出框
    handleEdit(index, row) {
      this.title = '编辑'
      this.dialogFormVisible = true
      this.flowerInfo = row;
      this.rowIndex = index;

    },
    //编辑确认/取消 
    submitFlower() {
      if (this.title === '编辑') {
        this.tableData.splice(this.rowIndex, 1, this.flowerInfo);
        this.dialogFormVisible = false;
        return;
      }
      this.tableData.splice(0, 0, this.flowerInfo);
      this.dialogFormVisible = false;
    },

    // 删除操作
    handleDelete(index, row) {
      if (confirm('确定要删除该行数据吗？')) {
        // 这里只是简单的将该行数据从表格中移除
        // console.log(index, row);
        this.tableData.splice(index, 1);
        this.$forceUpdate(); // 强制更新表格显示
      }
    },

    handleBatchDelete() {
      // 获取所有被选中的数据
      const selectedData = this.tableData.filter(item => item.selected);
      // 使用Element UI的确认对话框
      this.$confirm('确定要删除这些数据吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          // 删除选中的数据
          this.tableData = this.tableData.filter(item => !item.selected);
          // 提示删除成功
          this.$message({
            type: 'success',
            message: '删除成功',
          });
        })
        .catch(() => {
          // 如果用户取消了删除操作，则提示取消删除
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
    },

  },
  created() {
    this.filteredData = this.tableData;
  }
}
</script>
      
<style scoped>
.goods {
  margin: 20px;
}

.header {
  display: flex;
}

.header button {
  margin-left: 20px;
}

.wrapper {
  margin: 20px 0;
  color: #000;
  text-align: center;
}

.pagination {
  margin: 10px;
}
</style>
