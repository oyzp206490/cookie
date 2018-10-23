<template>
<div>
  <div>
    <span v-text="h"></span>
  </div>
  <form action="">
    <!-- <tem v-model="h"></tem> -->
    <label>账号:</label>
    <input type="text" placeholder="请输入账号" v-model="zh"><br><br>
    <label>密码:</label>
    <input type="password" placeholder="请输入密码" v-model="password"><br><br>
    <button @click="btn">登陆</button>
  </form>
  </div>
</template>
<script>
import {setCookie} from '../cookie.js'
export default {
  data () {
    return {
      zh: '',
      password: '',
      h: ''
    }
  },
  mounted () {
    // if (getCookie('username')) {
    //   this.$router.push('/')
    // }
  },
  methods: {
    btn () {
      if (!this.zh && !this.password) {
        // alert('请输入完整的信息')
        this.h = '请输入完整的信息'
      } else {
        setCookie('username', this.zh, 1000 * 6)
        this.$router.push('/')
      }
    }
  }
}
</script>
<style>
</style>
