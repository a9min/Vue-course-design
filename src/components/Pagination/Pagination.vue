<!--
 * @Date: 2023-12-21 13:49:52
 * @LastEditTime: 2023-12-21 19:57:37
 * @作者: Danny
 * @简介:  el-pagination 分页组件    
-->
<template>
  <div style="text-align: center; margin: 20px">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="total"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 10,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit("CurrentChange", val);
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>

<style lang="less" scoped></style>
