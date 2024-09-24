document.getElementById("card1-btn").addEventListener('click', function(){
    balance = parseFloat(document.getElementById("total-balance").innerText);
    money = parseFloat(document.getElementById("card1-inp").value);

    if (!isNaN(money) && money > 0 && money <= balance) {
        document.getElementById("total-balance").innerText = balance - money;
        document.getElementById("card1-balance").innerText = parseFloat(document.getElementById("card1-balance").innerText) + money;

    }
})

