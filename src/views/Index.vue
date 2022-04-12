<template>
  <div style="padding: 20px;">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="数字水印" :bordered="false" hoverable @click="gotoWatermarkPage">
          <p>图片添加（提取）水印</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="PDF工具" :bordered="false" hoverable @click="unfinished">
          <p>一个工具解决您的所有PDF问题</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="进制转换" :bordered="false" hoverable @click="unfinished">
          <p>常用进制转换工具</p>
        </a-card>
      </a-col>
    </a-row>
    <a-divider type="vertical" />
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="IP地址查询" :bordered="false" hoverable @click="unfinished">
          <p>IP归属地查询</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="加解密" :bordered="false" hoverable @click="unfinished">
          <p>url,base64,md5加密解密</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="图片base64编码" :bordered="false" hoverable @click="unfinished">
          <p>图片base64编码</p>
        </a-card>
      </a-col>
    </a-row>
    <a-divider type="vertical" />
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="时间戳转换" :bordered="false" hoverable @click="unfinished">
          <p>在线时间戳转换</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="手机号归属地" :bordered="false" hoverable @click="unfinished">
          <p>手机号码归属地查询</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="更多工具" :bordered="false" hoverable>
          <p>更多工具，敬请期待...</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    unfinished() {
      this.$message.info('该功能还未上线，敬请大家期待哦!')
    },
    gotoWatermarkPage() {
      this.$router.push('watermark')
    }
  }
}
</script>

<style>

</style>