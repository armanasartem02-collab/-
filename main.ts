music.play(music.createSoundExpression(WaveShape.Noise, 5000, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # . # . #
    # # # # #
    . # . # .
    # . # . #
    # . # . #
    `)
basic.forever(function () {
	
})
