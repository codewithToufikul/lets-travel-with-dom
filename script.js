const cartBtn = document.getElementsByClassName('add-btn');
let count = 1;
const totalCost = document.getElementById('total-cost');
let totalCostMoney = parseFloat(totalCost.innerText);
const grandTotal = document.getElementById('grand-total');
let grandTotalFinal = parseFloat(grandTotal.innerText);
for (let btn of cartBtn){
    btn.addEventListener('click', function(event){
        let totalBudget = document.getElementById('budget');
        const placeName = event.target.parentNode.childNodes[1].innerText;
        const costPrice = parseFloat(event.target.parentNode.childNodes[3].childNodes[1].innerText);
        
        
        const cartCount = document.getElementById('cart-count');
        cartCount.innerText = count;
        
        const totalMoney = parseFloat(totalBudget.innerText);
        const afterCostMoney = totalMoney - costPrice;
        if(afterCostMoney < 0){
            alert('Low Budget Earn Moeny')
            return ;
        }
        const allCartArea = document.getElementById('selected-place-container')
        const li = document.createElement('li');
        allCartArea.appendChild(li)
        const p1 = document.createElement('p')
        p1.innerText = placeName;
        li.appendChild(p1)
        const p2 = document.createElement('p')
        p2.innerText = costPrice;
        li.appendChild(p2)
        count ++;
        totalBudget.innerText = afterCostMoney;
        event.target.setAttribute("disabled", true);

        totalCostMoney +=costPrice;
        totalCost.innerText = totalCostMoney;
        grandTotalFinal += costPrice;
        grandTotal.innerText = grandTotalFinal;
    })
}

document.getElementById('byBus').addEventListener('click', function(){
        if (grandTotalFinal > 0){
            const withBus = grandTotalFinal + 100;
            
            grandTotal.innerText = withBus;
        }
        else{
            alert('Please select a travel option')
        }
})
document.getElementById('byTrain').addEventListener('click', function(){
    grandTotal.innerText = totalCostMoney
    if(grandTotalFinal > 200){
        const withTrain = grandTotalFinal - 200;
        grandTotal.innerText = withTrain;
    }
    else{
        alert('Please select a travel option')
    }
})

document.getElementById('withFlight').addEventListener('click', function(){
    grandTotal.innerText = totalCostMoney
    if(grandTotalFinal > 0){
        const withFlight = grandTotalFinal + 500;
        grandTotal.innerText = withFlight;
    }
    else{
        alert('Please select a travel option')
    }
})