<template>
  <div class="app-container documentation-container">
    这是测试页面1111
    <div class="upload-img-container">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :limit="3"
        :file-list="fileList"
        :on-success="onSuccess"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { pca, autocoder } from "api/riverbird";

export default {
  name: "Dashboard",
  data() {
    return {
      fileList: [], // 存储的上传文件列表
    };
  },
  methods: {
    onSuccess(response) {
      console.log(response, '---response');
      // todo 调取接口 及入参修改
      pca({ response }).then((res) => {
        console.log(res, '---接口返回数据');
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    padding: 0 16px;
    margin: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
