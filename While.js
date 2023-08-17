input =[];
bootle = 100;

function allBootle() {

    while (bootle >= 0) {
        input.push(bootle + " Bootles of beer on the wall");
        bootle--;
    }
    console.log(input);
    
}


allBootle();