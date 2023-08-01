game.showLongText("Use arrow keys and eat the clouds before the timer run out!", DialogLayout.Bottom)
info.setScore(0)
let mySprite = sprites.create(img`
    . . . . . . c c c c c c c . . .
    . . . . . c f f 6 6 f f 7 c . .
    . . . . c 7 6 6 6 6 6 6 7 6 c .
    . . . c 7 7 7 7 7 7 7 7 7 7 c .
    . . . c 7 8 1 f f 1 6 7 7 7 c .
    . . . f 6 f 1 f f 1 f 7 7 7 f .
    . . . f 6 f 2 2 2 2 f 7 7 7 f .
    . . c c 6 f 2 2 2 2 f 7 7 6 f .
    . c 7 7 7 7 2 2 2 2 7 7 f c . .
    c 7 1 1 1 7 7 7 7 7 c c 7 7 c .
    f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c
    f 1 1 1 1 1 1 6 f c c 6 6 6 c c
    f 6 1 1 1 1 1 6 6 c 6 6 6 c . .
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . .
    . f 6 1 1 1 1 6 6 6 6 6 c . . .
    . . f f c c c c c c c c . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
let bob: Sprite = null
game.onUpdateInterval(400, function () {
    bob = sprites.createProjectileFromSide(img`
        .........bbbb...........
        .......bb1111bb.........
        ......bb111111bbbbb.....
        ......b1111111ddd11b....
        ......b11111111d1111b...
        ...bbbd11111111d1111b...
        ..b11111111111111111bb..
        .b11111111111111111d11b.
        .b111d11111111111111111b
        cdd1d111111111111111111c
        cdddd11111111111111111dc
        cddbd11111d11111dd111dc.
        .cbbdd111dddd11ddbdddcc.
        .ccbbdddddbdddddddbcc...
        ...cccdddbbbdddddcc.....
        ......ccccccccccc.......
    `, 30, -70)
    bob.setPosition(Math.randomRange(0, 160), 120)
    bob.setKind(SpriteKind.Food)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})

pause(10000)

game.gameOver(true)