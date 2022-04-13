<template>
  <div>
    <div class="loading-container" v-if="loading">
      <a-spin :spinning="loading" size="large" tip="处理中..."/>
    </div>
    <a-tabs default-active-key="1" v-if="!loading">
      <a-tab-pane key="1" tab="添加水印">
        <a-steps :current="current">
          <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
        </a-steps>
        <div class="steps-content">
          <div v-if="steps[current].index === 0">
            <a-upload
                name="image"
                class="image-uploader"
                list-type="picture-card"
                :show-upload-list="false"
                :action="uploadPath"
                :before-upload="beforeUpload"
                @change="handleUploadImageChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="image"/>
              <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'"/>
                <div class="ant-upload-text">
                  上传图片
                </div>
              </div>
            </a-upload>
          </div>
          <div v-if="steps[current].index === 1">
            <a-upload
                name="image"
                class="image-uploader"
                list-type="picture-card"
                :show-upload-list="false"
                :action="uploadPath"
                :before-upload="beforeUpload"
                @change="handleUploadWatermarkChange"
            >
              <img v-if="watermarkUrl" :src="watermarkUrl" alt="watermark image"/>
              <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'"/>
                <div class="ant-upload-text">
                  上传水印
                </div>
              </div>
            </a-upload>
          </div>
          <div v-if="steps[current].index === 2">
            <a-form :form="form1" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-form-item label="密码">
                <a-input
                    v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
                    type="password"
                    placeholder="密码"
                >
                  <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>
              <a-form-item label="确认密码">
                <a-input
                    v-decorator="['repeatPassword', { rules: [{ required: true, message: '请输入密码!' }] }]"
                    type="password"
                    placeholder="确认密码"
                >
                  <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>
            </a-form>
          </div>
        </div>
        <div class="steps-action">
          <a-button v-if="current < steps.length - 1" type="primary" @click="next">
            下一步
          </a-button>
          <a-button
              v-if="current === steps.length - 1"
              type="primary"
              @click="submit1"
          >
            提交
          </a-button>
          <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
            上一步
          </a-button>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="提取水印">
        <a-form :form="form2" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }" @submit="submit2">
          <a-form-item label="密码">
            <a-input
                v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
                type="password"
                placeholder="密码"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item label="上传" extra="支持的图片类型[jpeg/png]，图片大小不能超过2MB。">
            <a-upload
                name="image"
                class="image-uploader"
                list-type="picture-card"
                :show-upload-list="false"
                :action="uploadPath"
                :before-upload="beforeUpload"
                @change="handleUploadImageWithWatermarkChange"
            >
              <img v-if="imageWithWatermarkUrl" :src="imageWithWatermarkUrl" alt="image with watermark"/>
              <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'"/>
                <div class="ant-upload-text">
                  上传图片
                </div>
              </div>
            </a-upload>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 4}">
            <a-button type="primary" html-type="submit">
              提交
            </a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: 'Watermark',
  data() {
    return {
      loading: false,
      current: 0,
      steps: [
        {
          title: '上传图片',
          index: 0
        },
        {
          title: '上传水印',
          index: 1
        },
        {
          title: '密钥',
          index: 2
        },
      ],
      uploadPath: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      imageUrl: '',
      uploadImageLoading: false,
      watermarkUrl: '',
      uploadWatermarkLoading: false,
      imageWithWatermarkUrl: '',
      uploadImageWithWatermarkLoading: false,
      form1: this.$form.createForm(this, {
        name: 'form1'
      }),
      form2: this.$form.createForm(this, {
        name: 'form2'
      })
    }
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    handleUploadImageChange(info) {
      if (info.file.status === 'uploading') {
        this.uploadImageLoading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.

      }
    },
    handleUploadWatermarkChange(info) {
      if (info.file.status === 'uploading') {
        this.uploadWatermarkLoading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.

      }
    },
    handleUploadImageWithWatermarkChange(info) {
      if (info.file.status === 'uploading') {
        this.uploadImageWithWatermarkLoading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.

      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('支持的图片类型[jpeg/png]!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('图片大小不能超过2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
    submit1(e) {
      // 数据校验
      e.preventDefault()
      this.form1.validateFields((err, values) => {
        if (!err) {
          const password = values.password
          const repeatPassword = values.repeatPassword
          if (password !== repeatPassword) {
            this.$message.error('两次输入的密码不一致')
            return;
          }
          if (this.imageUrl === '') {
            this.current = 0
            this.$message.error('图片不能为空')
            return;
          }
          if (this.watermarkUrl === '') {
            this.current = 1
            this.$message.error('水印图片不能为空')
            return;
          }
          this.loading = true
          // 发送请求
        }
      })
    },
    submit2(e) {
      // 数据校验
      e.preventDefault()
      this.form2.validateFields((err, values) => {
        if (!err) {
          const password = values.password
          if (this.imageWithWatermarkUrl === '') {
            this.$message.error('图片不能为空')
            return;
          }
          this.loading = true
          // 发送请求

        }
      })
    }
  }
}
</script>

<style>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-content > div {
  display: inline-block;
  text-align: center;
}

.steps-action {
  margin-top: 24px;
}

.loading-container {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 30px 50px;
  margin: 20px 0;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>