var TheEnd = {
    preload: function() {
        game.load.image('dialoge', 'assets/dialoge.jpg');
    },
    text1: null,
    text2: null,
    text3: null,
    text4: null,
    text5: null,
    dialoge: null,
    create: function() {
        this.dialoge = game.add.sprite(0, -900, 'dialoge');
        this.dialoge.scale.setTo(1.7, 5)
        this.text0 = game.add.text(200, 225, 'КОНЕЦ.', { fontSize: '100px', fill: '#FFF', font: 'bold 20pt Sans' });
        game.input.onDown.add(this.clicked, this);
    },
    update: function() {

    },
    clicked: function() {
        game.state.start('menu');
    }
}