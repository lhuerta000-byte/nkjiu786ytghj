let bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let bird: game.LedSprite = null

input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})