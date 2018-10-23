<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="denglu"
        >
          登陆
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {getCookie, delCookie} from '../cookie.js'
import { setTimeout } from 'timers'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: ''
    }
  },
  mounted () {
    let username = getCookie('username')
    this.name = username
    if (username === '') {
      this.$router.push('/denglu')
    }
  },
  methods: {
    del () {
      setTimeout(() => {
        delCookie('username')
        console.log(1)
      }, 5000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
