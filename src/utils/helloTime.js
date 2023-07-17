const helloTime = () => {
  let result = null
  const hours = new Date().getHours()
  if (hours <= 9) {
    result = {
      title: '早上好！',
      message: '今天也是元气满满的一天呢！'
    }
  } else if (hours <= 12) {
    result = {
      title: '上午好！',
      message: '努力！奋斗！'
    }
  } else if (hours <= 14) {
    result = {
      title: '中午好！',
      message: '劳逸结合，小憩一下~'
    }
  } else if (hours <= 18) {
    result = {
      title: '下午好',
      message: '来杯下午茶？'
    }
  } else {
    result = {
      title: '晚上好',
      message: '今天一天辛苦了，要好好休息哦！'
    }
  }

  return result
}

export default helloTime
