let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite.setPosition(0, 0)
mySprite = sprites.create(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 1 1 9 9 9 9 9 9 1 1 1 9 9 
9 9 2 2 2 9 9 9 9 9 9 2 2 2 9 9 
9 9 8 1 2 9 9 9 9 9 9 8 1 2 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 2 2 2 2 2 2 2 2 9 9 9 9 
9 9 9 9 9 2 5 5 5 5 2 9 9 9 9 9 
9 9 9 9 9 9 2 2 2 2 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, SpriteKind.Player)
info.setLife(3)
