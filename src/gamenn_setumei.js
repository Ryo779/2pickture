var gamenn_setumeiLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        var backgroundColor = new cc.LayerColor(new cc.Color(255, 255, 255, 255));
        this.addChild(backgroundColor);
        
        var background = cc.Sprite.create(res.gamenn_setumei);
        background.setPosition(size.width /2, size.height /2);
        background.setScale(1.1, 1.1);
        this.addChild(background);

        // タップイベントリスナーを登録する
                cc.eventManager.addListener({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: true,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                }, this);

        return true;
    },
      onTouchBegan: function(touch, event) {
        return true;
      },
      onTouchMoved: function(touch, event) {},
      onTouchEnded: function(touch, event) {
        //titleシーンから再生されている音楽をゲームシーンに入る前にここで止める
        cc.audioEngine.stopMusic();
        // 次のシーンに切り替える
        cc.director.runScene(new gameScene());
    }
});

var gamenn_setumeiScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        var layer1 = new gamenn_setumeiLayer();
        this.addChild(layer1);
    }
});
