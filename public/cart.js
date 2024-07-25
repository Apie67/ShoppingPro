const payBtn = document.querySelector('.btn-buy');

payBtn.addEventListener('click', () => {
    fetch('/stripe-checkout' , {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            items: JSON.parse(localStorage.getItem('cartItems')),
        }),
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
    })
    .then((data) => {
        if (data.url) {
            location.href = data.url;
        } else {
            console.error('URL not found in response', data);
        }
    })
    .catch((error) => console.error('Fetch error: ', error));
});
    