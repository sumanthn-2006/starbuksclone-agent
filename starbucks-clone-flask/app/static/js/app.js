document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('cart-button');
    const menuItems = document.querySelectorAll('.menu-item');
    
    cartButton.addEventListener('click', function() {
        // Logic to display the cart
        alert('Cart clicked!');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const productId = this.dataset.id;
            // Logic to fetch product details
            fetch(`/product/${productId}`)
                .then(response => response.json())
                .then(data => {
                    // Display product details
                    console.log(data);
                });
        });
    });
});