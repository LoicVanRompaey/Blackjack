var total = 0;
var amount;
var AIamount;
var AItotal = 0;

(function () {

    function randomGenerateCard(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.getElementById("hit").addEventListener("click", function () {
        amount = randomGenerateCard(2, 11);
        total = total + amount;

        if (amount === 11 && total > 21) {
            total = total - 10;
        }


        console.log("player total: " + total);
        alert("your total is: " + total);

        if (total === 21) {
            alert("BLACKJACK!");

        }

        if (total > 21) {
            alert("You died, thanks Obama");
            total = -50;
        }


    });

    document.getElementById("hold").addEventListener("click", function () {
        do {
            AIamount = randomGenerateCard(2, 11);
            AItotal = AItotal + AIamount;

            if (amount === 11 && total > 21) {
                total = total - 10;
            }

            console.log("dealer total: " + AItotal);

        } while (AItotal < 17);


        alert("the dealer's total is: " + AItotal);

        if (AItotal === 21) {
            alert("Dealer has blackjack.");
        }

        if (AItotal > 21) {
            alert("Dealer went broke");
            AItotal = -50;
        }
        if (total > AItotal) {
            alert("You win");
        }

        if (AItotal > total) {
            alert("Dealer wins");
        }
        if (AItotal === total) {
            alert("It's a tie!");
        }
    });

    document.getElementById("reset").addEventListener("click", function () {
        total = 0;
        AItotal = 0;
        console.log("player total: " + total);
        console.log("dealer total: " + AItotal);
        alert("your total is: " + total + ". \n the dealer's total is: " + AItotal + "\n Reset complete")
    });

})();