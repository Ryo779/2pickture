var titleLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        cc.audioEngine.playMusic(res.title_bgm, true);
        var backgroundColor = new cc.LayerColor(new cc.Color(255, 255, 255, 255));
        this.addChild(backgroundColor);
        // 背景レイヤーをその場で作る
        var backgroundLayer = cc.Sprite.create(res.title_logo_png);
        backgroundLayer.setPosition(size.width / 2,size.height * 0.5 );
        this.addChild(backgroundLayer);

        var label01 = cc.Sprite.create(res.gamestart_button);　
        label01.setPosition(size.width / 2, size.height * 0.2);　
        this.addChild(label01);

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
        // 次のシーンに切り替える
        cc.director.runScene(new gamenn_setumeiScene());
      },
});

var titleScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        var layer1 = new titleLayer();
        this.addChild(layer1);
    }
});
