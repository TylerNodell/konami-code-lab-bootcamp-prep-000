const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  var checkCode = [];
  window.addEventListener('keydown', (event) => {
    checkCode.push(event.key)
    console.log(checkCode)
  })
  if (checkCode.length === 10) {
    if (checkCode === codes) {
      alert('Right')
    } else {
      alert('Nope')
      checkCode = []
    }
  }
}

init()
