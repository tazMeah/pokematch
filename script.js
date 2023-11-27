let card1;
let card2;
let clicks = 1;

// when we click cards
document.addEventListener("click", function(event){
    //console.log(event.target.alt)
    //console.log(event.target.src)

    // when you click a face down card
    if (event.target.src.includes("pokeball.png")) {
        console.log("you clicked a face down card");
        // flip the card
        event.target.src = event.target.alt;

        console.log({clicks});

        if (clicks == 1) {

            clicks = 2;
            // remember what card 1 is
            card1 =  event.target;
            console.log({card1});

        } else if (clicks == 2) {

            clicks = 1;
            // remember what card 2 is
            card2 = event.target;
            console.log({card2});

            if (card1.alt == card2.alt) {
                console.log("That's a match!!!");
            } else {
                console.log("Not a match!!!");

                setTimeout(function(){
                    // flip the cards back over
                    card1.src = "images/pokeball.png";
                    card2.src = "images/pokeball.png";

                }, 500)


            }

        }

    }
})


// shuffle the cards
document.querySelectorAll("img").forEach(function(card){
    card.style.order = Math.round(Math.random() * 100);
})