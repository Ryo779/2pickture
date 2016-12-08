var gameLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        //bgm再生
        cc.audioEngine.playMusic(res.game_bgm, true);

        var background = cc.Sprite.create(res.background_png);
        background.setPosition(size.width /2, size.height /2);
        background.setScale(1.5, 1.5);
        this.addChild(background);

        var leftButton = cc.Sprite.create(res.leftButton);　
        leftButton.setPosition(size.width * 0.25, size.height * 0.2);　
        leftButton.setScale(0.5, 0.5);
        this.addChild(leftButton);

        var rightButton = cc.Sprite.create(res.rightButton);　
        rightButton.setPosition(size.width * 0.75, size.height * 0.2);　
        rightButton.setScale(0.5, 0.5);
        this.addChild(rightButton);


        var Sprite1 = cc.Sprite.create(res.building_1jpg);
        Sprite1.setPosition(size.width * 0.25, size.height * 0.6);
        this.addChild(Sprite1);

        var Sprite2 = cc.Sprite.create(res.building_2jpg);
        Sprite2.setPosition(size.width * 0.75, size.height * 0.6);
        this.addChild(Sprite2);
    }
});

//ゲーム要素を追加したらリザルトシーンに遷移するように書き加える
var gameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        var layer1 = new gameLayer();
        this.addChild(layer1);
    }
});
