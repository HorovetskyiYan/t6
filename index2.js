const mainLength = document.querySelector("#main-input-length")
const mainWidth = document.querySelector("#main-input-width")
const mainHeigth = document.querySelector("#main-input-heigth")
const mainWidthRoll = document.querySelector("#main-input-width-roll")
const mainHeigthRoll = document.querySelector("#main-input-heigth-roll")
const mainOutputResult = document.querySelector("#main-output-result")

function getAmountRoll (length = state.length, width = state.width, heigth = state.heigth, widthRollmm = state.widthRoll, lengthRollmm = state.heigthRoll) {
  if (typeof length === 'number' && typeof width === 'number' && typeof heigth === 'number' && typeof widthRollmm === 'number' && typeof lengthRollmm === 'number') {
    let pyrimeter = length + width * 2
    let squreWalls = pyrimeter * heigth
    let unusingSqure = squreWalls - (squreWalls - (squreWalls * 0.15))
    let squreCeiling = length * width
    let clearSqure = squreWalls + squreCeiling - unusingSqure
    widthRollmm = widthRollmm / 1000
    let lengthRollm = lengthRollmm / 1000
    let squreRoll = widthRollmm * lengthRollm
    let amountRoll = clearSqure /  squreRoll + squreRoll * 0.1
    return amountRoll
  } else {
    return 'Заполните все поля'
  }
}


const state = {
  length: null,
  width: null,
  heigth: null,
  widthRoll: null,
  heigthRoll: null,
}

mainLength.addEventListener('input', (event) => {
    state.length = Number(event.target.value)
})

mainLength.addEventListener('input', (event) => {
  mainOutputResult.innerHTML = getAmountRoll()
})

mainWidth.addEventListener('input', (event) => {
    state.width = Number(event.target.value)
})

mainWidth.addEventListener('input', (event) => {
  mainOutputResult.innerHTML = getAmountRoll()
})

mainHeigth.addEventListener('input', (event) => {
    state.heigth = Number(event.target.value)
})

mainHeigth.addEventListener('input', (event) => {
  mainOutputResult.innerHTML = getAmountRoll()
})

mainWidthRoll.addEventListener('input', (event) => {
    state.widthRoll = Number(event.target.value)
})

mainWidthRoll.addEventListener('input', (event) => {
  mainOutputResult.innerHTML = getAmountRoll()
})

mainHeigthRoll.addEventListener('input', (event) => {
    state.heigthRoll = Number(event.target.value)
})

mainHeigthRoll.addEventListener('input', (event) => {
  mainOutputResult.innerHTML = getAmountRoll()
})
