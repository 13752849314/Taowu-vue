<template>

  <el-row class="row-bg" justify="center">
    <el-col :xl="6" :lg="7">
      <h1>梼杌系统</h1>
      <el-image :src="require('@/assets/logo.png')"></el-image>
      <p>happygh0st</p>
    </el-col>
    <el-col :span="1">
      <el-divider direction="vertical"/>
    </el-col>
    <el-col :xl="6" :lg="7">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px">
        <el-form-item label="用户名" prop="username" style="width: 380px;">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="width: 380px;">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code" style="width: 380px;">
          <el-input v-model="loginForm.code" style="width: 150px;float: left"></el-input>
          <el-image :src="captchaImg" class="captchaImg" @click="getCaptcha"></el-image>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import qs from 'qs'

export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {min: 5, max: 5, message: '长度为5个字符', trigger: 'blur'}
        ]
      },
      captchaImg: ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('可以提交！')
          console.log(this.loginForm)

          this.$axios.post('/login?' + qs.stringify(this.loginForm)).then(res => {
            console.log(res)
            const jwt = res.headers.Authorization
            console.log(res.headers)
            console.log(jwt)
            this.$store.commit('SET_TOKEN', jwt)
            this.$router.push('/index')
          })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getCaptcha() {
      this.$axios.get('/captcha').then(res => {
        // console.log(res)
        this.loginForm.token = res.data.data.token
        this.captchaImg = res.data.data.captchaImg
        this.loginForm.code = ''
      })
      console.log('getCaptcha!')
    }
  },
  created() {
    console.log('created!')
    this.getCaptcha()
  }
}
</script>

<style scoped>
.el-row {
  background-color: #faefef;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
}

.el-divider {
  height: 200px;
}

.captchaImg {
  float: left;
  margin-left: 8px;
  border-radius: 4px;
}
</style>