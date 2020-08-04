window.onload = function() {
  let start = document.getElementById("start")
  let stop = document.getElementById("stop")
  let status = false

  start.onclick = function() {
    if(status == false) {
      status = true
      var start = setInterval(script,300)
    } else return false

    function script() {
      clear()
      change()
    }

    function change() {
      let arr = [].slice.call(document.getElementsByClassName('rect'));
      let ranArr = []
      function ranNum(i) {
        return Math.floor(Math.random() * i)
      }
  
      function colorRanNum() {
        return Math.floor(Math.random() * 255)
      }
  
      while(arr.length > 6) {
        let ranNumber = ranNum(arr.length)
        ranArr.push(arr[ranNumber])
        arr.splice(ranNumber,1)
      }
  
      for(let i = 0;i < 3; i++) {
        ranArr[i].setAttribute("style","background-color: rgb(" + colorRanNum() + "," + colorRanNum() + "," + colorRanNum() + ")");
      }
    }
    
    function clear() {
      for(let i = 0;i < 9 ;i++) {
        let arr = [].slice.call(document.getElementsByClassName('rect'));
        arr[i].setAttribute("style","background-color: orange")
      }
    }

    stop.onclick = function() {
      clearInterval(start)
      clear()
      status = false
    }
  }

  
}