function count() {
  let start = document.getElementById('start')
  let end = document.getElementById('end')
  let step = document.getElementById('step')
  let res = document.getElementById('res')
  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    step.value.length == 0
  ) {
    res.innerHTML = 'I can not count'
  } else {
    res.innerHTML = 'Counting: <br> '
    let s = Number(start.value)
    let e = Number(end.value)
    let st = Number(step.value)
    if (st <= 0) {
      alert('Invalid step, cconsidering step = 1 ')
      st = 1
    }
    if (s < e) {
      for (let c = s; c <= e; c += st) {
        res.innerHTML += `${c}  \u{1F449}`
      }
    } else {
      for (let c = s; c >= e; c -= st) {
        res.innerHTML += `${c}  \u{1F449}`
      }
    }
    res.innerHTML += `\u{1f3c1}`
  }
}
