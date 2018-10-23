// 设置cookie
export function setCookie (name, value, expire) {
  var date = new Date()
  date.setSeconds(date.getSeconds() + expire)
  document.cookie = name + '=' + escape(value) + '; expires=' + date.toGMTString()
  console.log(document.cookie)
}

// 获取cookie
export function getCookie (name) {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) end = document.cookie.length
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}
// 删除cookie

export function delCookie (name) {
  setCookie(name, '', -1)
}

// export function setCookie (c_name, value, expire) {
//   var date = new Date()
//   date.setSeconds(date.getSeconds() + expire)
//   document.cookie = c_name + '=' + escape(value) + '; expires=' + date.toGMTString()
//   console.log(document.cookie)
// }

// export function getCookie (c_name) {
//   if (document.cookie.length > 0) {
//     let c_start = document.cookie.indexOf(c_name + '=')
//     if (c_start != -1) {
//       c_start = c_start + c_name.length + 1
//       let c_end = document.cookie.indexOf(';', c_start)
//       if (c_end == -1) c_end = document.cookie.length
//       return unescape(document.cookie.substring(c_start, c_end))
//     }
//   }
//   return ''
// }

// export function delCookie (c_name) {
//   setCookie(c_name, '', -1);
// }
