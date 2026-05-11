// Dark mode toggle
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.onclick = function () {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
  };
}

// Simple animated counters (home page)
function runCounter(id, target) {
  const el = document.getElementById(id);
  if (!el) return;

  let count = 0;
  const step = Math.ceil(target / 50);

  const timer = setInterval(function () {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    el.textContent = count;
  }, 30);
}
runCounter("c1", 60);
runCounter("c2", 1200);
runCounter("c3", 300);

// Contact form validation (email, gender, phone, message)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if (email === "" || gender === "" || phone === "" || message === "") {
      formMsg.textContent = "Please fill all fields.";
      formMsg.style.color = "red";
      return;
    }

    if (!email.includes("@")) {
      formMsg.textContent = "Please enter a valid email.";
      formMsg.style.color = "red";
      return;
    }

    if (phone.length < 9) {
      formMsg.textContent = "Phone number is too short.";
      formMsg.style.color = "red";
      return;
    }

    if (message.length < 10) {
      formMsg.textContent = "Write at least 10 characters in the message.";
      formMsg.style.color = "red";
      return;
    }

    formMsg.textContent = "Your message has been sent (demo). Thank you!";
    formMsg.style.color = "green";
    contactForm.reset();
  });
}

// Product filter
function filterProducts(category) {
  const products = document.querySelectorAll(".product");
  products.forEach(function (item) {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Product search
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(function (item) {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(value) ? "block" : "none";
    });
  });
}