let cart = [];
let total = 0;

// Add to Cart Function
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

// Update Cart Display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  totalElement.textContent = `Total: ₹${total}`;
}

// Testimonial Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 3000); // Rotate every 3 seconds
