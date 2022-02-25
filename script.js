const tiles = document.getElementsByClassName("tile")
let current_tile = 0

function insert_char(char){
    tiles[current_tile].innerHTML = char;
    current_tile++;
}

function delete_char(){
    console.log(current_tile)
    current_tile--;
    tiles[current_tile].innerHTML = "";
}

function on_key(event){
    console.log(event)
    if(event.key == "Backspace"){
        (current_tile > 0 && Math.ceil(current_tile/5) == Math.ceil((current_tile+1)/5)) ? delete_char() : null;
    } else if ("abcdefghijklmnopqrstuvwxyzåäö".includes(event.key)){
        current_tile < 30 ? insert_char(event.key) : null;
    } else if (event.key == "Enter"){
        
    }
}

document.addEventListener("keydown", function(event){on_key(event)})