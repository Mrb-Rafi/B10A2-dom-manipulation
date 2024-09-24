function donateBtn(btn, inpField, cardBalance) {
    document.getElementById(btn).addEventListener('click', function(){
        balance = parseFloat(document.getElementById("total-balance").innerText);
        money = parseFloat(document.getElementById(inpField).value);
    
        if (!isNaN(money) && money > 0 && money <= balance) {
            document.getElementById("total-balance").innerText = balance - money;
            document.getElementById(cardBalance).innerText = parseFloat(document.getElementById(cardBalance).innerText) + money;
            
            document.getElementById("my_modal_5").showModal();
        }

        else {
            alert("invalid donation!");
        }
    })
}

