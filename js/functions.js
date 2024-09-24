function donateBtn(btn, inpField, cardBalance, cardTitle) {
    document.getElementById(btn).addEventListener('click', function(){
        const balance = parseFloat(document.getElementById("total-balance").innerText);
        const money = parseFloat(document.getElementById(inpField).value);
    
        if (!isNaN(money) && money > 0 && money <= balance) {
            document.getElementById("total-balance").innerText = balance - money;
            document.getElementById(cardBalance).innerText = parseFloat(document.getElementById(cardBalance).innerText) + money;
            
            document.getElementById("my_modal_5").showModal();

            const newElement = document.createElement('div');
            const campaignName = document.getElementById(cardTitle).innerHTML;
            const date = `Date : ${new Date().toUTCString()}`;

            newElement.innerHTML =
            `<div class="card card-bordered p-10 mt-5"><h2 class="font-bold">${money} Taka is Donated for ${campaignName}.</h2> <p>${date}</p></div>`;
            
            document.getElementById("history-section").appendChild(newElement);
        }

        else {
            alert("invalid donation!");
        }
    })
}

function toggle(invokeBtn, actvID, deactvID) {
    document.getElementById(invokeBtn).addEventListener('click', function() {
        document.getElementById(actvID).classList.add('hidden');
        document.getElementById(deactvID).classList.add('hidden');

        document.getElementById(actvID).classList.remove('hidden');

        // active button color manipulation
        document.getElementById("don-btn").classList.remove("bg-lime-300");
        document.getElementById("his-btn").classList.remove("bg-lime-300");

        document.getElementById(invokeBtn).classList.add("bg-lime-300");
    })
}

