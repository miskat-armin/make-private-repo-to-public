let totalPrice = 0;


function handleCardClick(card) {
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = card.childNodes[3].childNodes[3].innerText;
    const itemPrice = card.childNodes[3].childNodes[5].innerText.split(' ')[0];

    const countChildren = selectedItemContainer.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-2');
    p.innerText = `${countChildren + 1}. ${itemName}`;

    selectedItemContainer.appendChild(p);

    totalPrice = parseFloat(totalPrice) + parseFloat(itemPrice);
    totalPrice = totalPrice.toFixed(2);

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;

    if (totalPrice > 200)
        document.getElementById('applyBtn').removeAttribute('disabled');

    if (totalPrice > 0)
        document.getElementById('purchaseBtn').removeAttribute('disabled');
}

function handleDiscountBtnClick() {
    const input = document.getElementById('couponInput').value;

    if (input == 'SELL200') {
        const discountAmount = totalPrice * 0.20;
        totalPrice = totalPrice - discountAmount;

        document.getElementById('discount-price').innerText = discountAmount.toFixed(2);
        document.getElementById('total').innerText = totalPrice.toFixed(2);
    }
    else {
        alert('Please use the valid promo code');
        const field = document.getElementById('couponInput');
        field.value = '';
    }

}

function handleReset() {
    
    document.getElementById('applyBtn').setAttribute('disabled', 'true');
    document.getElementById('purchaseBtn').setAttribute('disabled', 'true');
    
    totalPrice = 0;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    document.getElementById('discount-price').innerText = totalPrice.toFixed(2);
    document.getElementById('total').innerText = totalPrice.toFixed(2);


    const selectedItemContainer = document.getElementById('selected-items');
    while (selectedItemContainer.firstChild) {
        selectedItemContainer.removeChild(selectedItemContainer.firstChild);
    }

    const field = document.getElementById('couponInput');
    field.value = '';

    window.scrollTo({ top: 0, behavior: 'smooth' });

}