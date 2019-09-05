var total = 0;
var amount;
var AIamount;
var AItotal = 0;

(function () {

    function randomGenerateCard(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.getElementById("hit").addEventListener("click", function () {
        amount = randomGenerateCard(1, 10);
        AIamount = randomGenerateCard(1, 10);

        var sum = total + amount;
        var AIsum = AItotal + AIamount;


        AItotal = AIsum;
        total = sum;

        alert("your total is: "+ total+ ". \n the dealer's total is: "+AItotal);

        if (total === 21) {
            alert("BLACKJACK!");
        }

        if (total > 21) {
            alert("You died, thanks Obama");
            total = -50;
        }

        if(AItotal === 21){
            alert("Dealer has blackjack, you lose.");
        }

        if(AItotal > 21){
            alert("Dealer went broke");
            AItotal= -50;
        }
    });

    document.getElementById("hold").addEventListener("click", function () {
        if(total>AItotal){
            alert("You win");
        }

        if (AItotal>total){
            alert("Dealer wins");
        }
        if(AItotal===total){
            alert("It's a tie!");
        }
    })

})();