function openOrderForm() {
    document.getElementById('orderForm').style.display = 'flex';
}

function closeOrderForm() {
    document.getElementById('orderForm').style.display = 'none';
}

function submitOrderForm(event) {
    event.preventDefault();
    const ram = document.getElementById('ram').value;
    const software = document.getElementById('sof').value;
    const payment = document.getElementById('payment').value;
    const waLink = `https://wa.me/6282275512596?text=Order%20Details:%0ASoftWare:%0A${software}%20RAM:%20${ram}%0APayment:%20${payment}`;
    window.location.href = waLink;
}

function redirectToSeller() {
    window.location.href = 'https://wa.me/6282275512596';
}