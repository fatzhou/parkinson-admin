<template>
  <div class="participater-data table">
    <div class="table-head">
      <div class="th">
        <div class="tr">参加人员</div>
        <div class="tr">手机号码</div>
        <div class="tr">报名时间</div>
      </div>
    </div>
    <div class="table-body">
      <div class="td">
        <div class="tr"><span class="participater-pic"></span>某某某</div>
        <div class="tr">13012345678</div>
        <div class="tr">2017-11-11 11:11</div>
      </div>
      <div class="td">
        <div class="tr"><span class="participater-pic"></span>某某某</div>
        <div class="tr">13012345678</div>
        <div class="tr">2017-11-11 11:11</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  @import "../../../assets/css/base.less";
  .table{
    width: 100%;
    background-color: #fff;
    .table-head {
      background-color: #CDD4DF;
      line-height: 120 / 3px;
      padding-left: 40 / 3px;
      padding-right: 40 / 3px;
    }
    .table-body {
      padding-left: 40 / 3px;
      padding-right: 40 / 3px;
      line-height: 200 / 3px;
      .td {
        .setBorder1px(#93A2B9, "bottom");
        &:last-child {
          .setBorder1px(#fff, "bottom");
        }
        .tr {
          .participater-pic {
            display: inline-block;
            width: 140 / 3px;
            height: 137 / 3px;
            background-color: #555;
            border-radius: 50%;
            margin-right: 40/3px;
            vertical-align: middle;          
          }
        }
      }
    }
    .td, .th{
      display: flex;
      .tr {
        width: 100 / 3 * 100%;
        font-family: PingFangSC-Regular;
        text-align: center;
        color: #3C485A;
        letter-spacing: 0;
      }
    }
    .th {
      .tr {
        font-size: 42 / 3px;
      }
    }
    .td {
      .tr {
        font-size: 41 / 3px;
      }
    }
  }
</style>