<template>
  <div class="home">
    <!--1.  顶部区域布局---------- -->
    <div class="header">
      <div class="item">
        总销售额
        <div class='num'>6,520</div>
        <div class="bottom">今日销售额：442</div>
      </div>
      <div class="item">总访问量
        <div class='num'>8,175</div>
        <div class="bottom">今日访问量：602</div>
      </div>
      <div class="item">总收藏量
        <div class='num'>3,878</div>
        <div class="bottom">今日销售额：442</div>
      </div>
      <div class="item">总支付量
        <div class='num'>3,402</div>
        <div class="bottom">今日支付量：178</div>
      </div>
    </div>

    <!--2. 访问数据统计 ----------------->
    <div class="content">
      <div class="time-info" id='box13'>
        <div class="title">月销售额</div>
        <div id="charts" style="width: 100%; height: 300px"></div>
      </div>
      <div class="area" id="box1">
        <div class="title">产品销售比例</div>
        <div id="pie" style="width: 100%; height: 300px"></div>
      </div>
    </div>


    <!-- 3.  -->
    <!-- 最新内容 -->
    <div class="home-footer">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>今日订单</span>
        </div>
        <div class="text item">
          <el-row>
            <el-col :span="8">
              <div class="title">今日订单数</div>
              <div>120</div>
            </el-col>
            <el-col :span="8">
              <div class="title">汇总确认订单</div>
              <div>200</div>
            </el-col>
            <el-col :span="8">
              <div class="title">今日金额</div>
              <div>660</div>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>本月订单</span>
        </div>
        <div class="text item">
          <el-row>
            <el-col :span="8">
              <div class="title">本月订单数</div>
              <div>666</div>
            </el-col>
            <el-col :span="8">
              <div class="title">汇总确认订单</div>
              <div>868</div>
            </el-col>
            <el-col :span="8">
              <div class="title">累计金额</div>
              <div>1100</div>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>快捷入口</span>
        </div>
        <div class="text item">
          <el-button type="primary">产品管理</el-button>
          <el-button>消息管理</el-button>
          <el-button>内容管理</el-button>
        </div>
      </el-card>
    </div>

    <Index :router="router" />
  </div>
</template>
  
<script>
import Index from '../login/Index.vue';

import * as echarts from 'echarts'
export default {
  data() {
    return {
      router: this.$router
    };
  },

  mounted() {
    console.log('id', document.getElementById('charts'));
    this.line();
    this.pie();
  },
  methods: {
    //绘制图表--折线
    line() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('charts'));
      // 绘制图表
      myChart.setOption({
        tooltip: {//提示框组件
          trigger: 'axis',
          //提示框浮层内容格式器，支持字符串模版和回调函数两种形式
          formatter: '{a}-{b}-{c}'
        },
        legend: {
      },
        xAxis: {//X轴数据
          data: ['菊科', '芍药科', '玫瑰科', '百合科', '兰科'],
        },
        yAxis: {//Y轴数据，根据data自动创建数据

        },
        series: [//图表内容
          {
            name: '销售额',
            type: 'line',//bar 柱状图 line 折线图 pie 饼图 map 地图
            data: [99, 140, 420, 220, 150, 180],
            smooth: true,//是否平滑曲线显示
          },
          {
            name: '销售量',
            type: 'bar',//bar 柱状图 line 折线图 pie 饼图 map 地图
            data: [99, 140, 420, 220, 150, 180],
            // smooth:true,//是否平滑曲线显示
          },
        ]
      });
    },
    //绘制图表--饼图
  pie() {
    var myChart = echarts.init(document.getElementById('pie'));
    var option;
    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '产品销售',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '玫瑰花' },
            { value: 735, name: '百合花' },
            { value: 580, name: '兰花' },
            { value: 484, name: '芍药' },
            { value: 300, name: '菊花' }
          ],
          emphasis: {//高亮配置
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    option && myChart.setOption(option);
  }
  },
}
</script>
  
<style lang="less" scoped>
.home {
  margin: 10px;
}

.header {
  display: flex;
  padding-right: 30px;

  .item {
    flex: 1;
    height: 100px;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bold;
    color: #fff;
    // text-align: center;
    position: relative;

    .num {
      font-size: 22px;
      margin: 10px;
      color: #fff;
    }

    .bottom {
      position: absolute;
      border-top: 1px solid rgb(246, 245, 245);
      padding: 10px 20px;
      bottom: 0;
      right: 0;
      left: 0;
      color: #fff;
      font-weight: normal;
    }
  }

  .item:nth-child(1) {
    background-image: linear-gradient(#df887d, #88554d);
  }

  .item:nth-child(2) {
    background-image: linear-gradient(#409eff, #2e556e);
  }

  .item:nth-child(3) {
    background-image: linear-gradient(#b54fa8, #713c7a);
  }

  .item:nth-child(4) {
    background-image: linear-gradient(#1cd2f1, #39717a);
  }
}

// 图表

.content {
  margin: 20px;
  display: flex;
  height: 320px;

  .time-info {
    flex: 2;
    background: #fff;
    margin-right: 20px;
    padding: 10px;
  }

  .area {
    flex: 1;
    background: #fff;
    padding: 10px;
  }
}

//内容

.home-footer {
  display: flex;
  padding-left: 20px;
  margin-bottom: 20px;

  .box-card {
    flex: 1;
    margin-right: 30px;

    span {
      font-weight: 600;
    }
  }
}
</style>