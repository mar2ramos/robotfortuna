input.onGesture(Gesture.Shake, function () {
    num = randint(0, 9)
    basic.showNumber(num)
    if (num == 0) {
        basic.showIcon(IconNames.No)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.UntilDone)
        basic.pause(1000)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showNumber(num)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
})
let num = 0
basic.showLeds(`
    . # . # .
    . # . # .
    # . . . #
    # # # # #
    . # # # .
    `)
