class Form{
    constructor(){
        this.input = createInput("Coloque seu nome");
        this.button = createButton('play');
        this.greeting = createElement('h3');
    }
    display(){
    var title = createElement('h2');
    title.html("Jogo De Carro Mult Jogador");
    title.position(130,0);
    this.input.position(130,160);
    this.button.position(250,200);
    this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
        player.name =  this.input.value();
        playerCount += 1;
        player.update(player.name);
        player.updateCount(playerCount);
        this.greeting.html("Ola " + player.name);
        this.greeting.position(130,160);
    });
    }

}