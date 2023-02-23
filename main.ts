input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            # # # # #
            `)
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
        music.playMelody("G F E D C C - - ", 120)
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("BONJOUR")
    for (let index = 0; index < 4; index++) {
        basic.showNumber(8)
        basic.clearScreen()
        basic.showNumber(16)
        basic.clearScreen()
        basic.showNumber(24)
        basic.clearScreen()
        basic.showNumber(32)
    }
})
