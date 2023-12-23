<template>
  <div class="category">
    <div class="wrapper">
      <div class="title">产品类目管理</div>
      <div class="tree">
        <!-- 一级按钮 -->
        <el-button type="warning" style="margin-bottom:20px;">新增一级导航类目</el-button>
        <!-- tree内容结构 -->
        <el-tree :data="data" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false"
          :render-content="renderContent">
        </el-tree>
      </div>

    </div>
    <div>
      <Dialog :title="title" ref="child" type="type"></Dialog>
    </div>
  </div>
</template>
  
<script>
import Dialog from './Dialog.vue'
export default {
  components: {
    Dialog
  },
  data() {
    return {
      title: '标题',
      type: 1,
      data: [
        {
          id: 1, label: '菊科植物',
          children: [
            { id: 4, label: '菊花' },
            { id: 4, label: '金盖花' },
            { id: 4, label: '翠菊' },
          ]
        },
        {
          id: 2, label: '玫瑰科植物',
          children: [
            { id: 5, label: '玫瑰' },
            { id: 6, label: '蔷薇' },
            { id: 6, label: '月季' }
          ]
        },
        {
          id: 3, label: '兰科植物',
          children: [
            { id: 5, label: '兰花' },
            { id: 6, label: '蝴蝶兰' },
            { id: 6, label: '石斜' }
          ]
        },
        {
          id: 4, label: '芍药科植物',
          children: [
            { id: 5, label: '芍药' },
            { id: 6, label: '牡丹' }
          ]
        },
        {
          id: 5, label: '百合科植物',
          children: [
            { id: 5, label: '百合' },
            { id: 6, label: '郁金香' },
            { id: 6, label: '风信子' }
          ]
        },
      ]
    }
  },

  methods: {
    append(data) {
      console.log('新增......', data);
      this.$refs.child.dialogVisible = true;
      this.title = `新增【${data.label}】子级分类`;
      this.type = 1;
      this.$refs.child.input = '';
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    update(data) {
      console.log('修改----', data);
      this.$refs.child.dialogVisible = true;
      this.title = `修改【{${data.label}】子级分类`;
      this.type = 2;
      this.$refs.child.input = data.label;
    },

    //树节点的内容区的渲染
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span class='name'>{node.label}</span>
          {
            node.level == 1 ? <span>
              <el-button class='mini' on-click={() => this.append(data)} icon="el-icon-plus">新增</el-button>
              <el-button class='mini' on-click={() => this.update(node, data)} icon="el-icon-edit">修改</el-button>
              <el-button class='mini' type="danger" on-click={() => this.remove(node, data)} icon="el-icon-delete">删除</el-button>
            </span> : <span>
              <el-button class='mini' on-click={() => this.update(node, data)} icon="el-icon-edit">修改</el-button>
              <el-button class='mini' type="danger" on-click={() => this.remove(node, data)} icon="el-icon-delete">删除</el-button>
            </span>
          }
        </span>);
    }
  }
}
</script>
  
<style lang="less" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.category {
  margin: 10px;
}

.wrapper {
  padding: 10px;
  margin-top: 10px;
  background: #fff;

  .title {
    background: #f6f6f6;
    height: 50px;
    line-height: 50px;
    color: black;
    font-weight: bold;
    padding-left: 10px;
  }

  .tree {
    margin: 10px;


    /deep/ .mini {
      padding: 4px 10px;
      font-size: 14px;
    }

    /deep/ .el-tree-node__content {
      margin-bottom: 10px;
    }
  }

  /deep/ .name {
    width: 300px;
    display: inline-block;
  }


}</style>