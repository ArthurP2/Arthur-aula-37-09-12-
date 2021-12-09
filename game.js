class Game{
constructor(){

}
getState(){
    var gameState_ref = database.ref('gameState');
    gameState_ref.on("value",function(data){
    gameState = data.val();
    }
    )
}
update(state){
    database.ref('/').update({
        gameState : state
    })
}
start(){
    if(gameState === 0 ){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
}
play(){
    form.hide();
    textSize(15);
    text("game start",120,100);
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
        var displayPosition = 130;
        displayPosition += 20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,displayPosition);
    }
}

}