input.onButtonPressed(Button.A, function () {
    ספירה += 1
})
input.onButtonPressed(Button.B, function () {
    ספירה += -1
})
let ספירה = 0
basic.forever(function () {
    basic.showNumber(ספירה)
})
