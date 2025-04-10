// Quiz functionality
document.addEventListener("DOMContentLoaded", function () {
  // Quiz functionality
  const quizForm = document.getElementById("safety-quiz");
  const submitButton = document.getElementById("submit-quiz");
  const resultsContainer = document.getElementById("quiz-results");
  const scoreDisplay = document.getElementById("score-display");
  const feedbackDisplay = document.getElementById("feedback");
  const retakeButton = document.getElementById("retake-quiz");

  if (submitButton) {
    submitButton.addEventListener("click", function () {
      // Define correct answers
      const correctAnswers = {
        q1: "c",
        q2: "d",
        q3: "b",
        q4: "b",
        q5: "c",
      };

      let score = 0;
      let total = Object.keys(correctAnswers).length;

      // Check answers
      Object.keys(correctAnswers).forEach((question) => {
        const selectedOption = document.querySelector(
          `input[name="${question}"]:checked`
        );
        if (
          selectedOption &&
          selectedOption.value === correctAnswers[question]
        ) {
          score++;
        }
      });

      // Display results
      const percentage = Math.round((score / total) * 100);
      scoreDisplay.textContent = `You scored ${score} out of ${total} (${percentage}%)`;

      // Provide feedback based on score
      if (percentage >= 80) {
        feedbackDisplay.innerHTML = `<p>Excellent! You have a strong understanding of internet safety. Keep up the good work in protecting your family online.</p>`;
      } else if (percentage >= 60) {
        feedbackDisplay.innerHTML = `<p>Good job! You have a decent understanding of internet safety, but there's room for improvement. Review the sections on our website to strengthen your knowledge.</p>`;
      } else {
        feedbackDisplay.innerHTML = `<p>It looks like you could benefit from learning more about internet safety. We recommend exploring our guidelines and dangers sections to better protect your family online.</p>`;
      }

      // Show results container
      quizForm.style.display = "none";
      resultsContainer.style.display = "block";
    });
  }

  if (retakeButton) {
    retakeButton.addEventListener("click", function () {
      // Reset the form
      quizForm.reset();
      quizForm.style.display = "block";
      resultsContainer.style.display = "none";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Add active class to current page in navigation
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add animation for cards
  const cards = document.querySelectorAll(".card");

  function checkCardVisibility() {
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 100) {
        card.classList.add("visible");
      }
    });
  }

  // Check visibility on initial load and scroll
  checkCardVisibility();
  window.addEventListener("scroll", checkCardVisibility);

  // Add mobile menu toggle functionality
  const setupMobileMenu = () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    // Remove existing mobile menu toggle if any
    const existingToggle = document.querySelector(".mobile-menu-toggle");
    if (existingToggle) {
      existingToggle.remove();
    }

    if (window.innerWidth <= 768) {
      // Create mobile menu toggle button
      const mobileMenuToggle = document.createElement("button");
      mobileMenuToggle.classList.add("mobile-menu-toggle");
      mobileMenuToggle.innerHTML = "☰";
      navbar.appendChild(mobileMenuToggle);

      mobileMenuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        // Change icon when menu is open
        mobileMenuToggle.innerHTML = navLinks.classList.contains("show")
          ? "✕"
          : "☰";
      });
    }
  };

  // Check window size on initial load and resize
  setupMobileMenu();
  window.addEventListener("resize", setupMobileMenu);

  // Handle resize events for responsive cover image
  function handleResize() {
    const coverContainer = document.querySelector(".cover-container");
    if (coverContainer) {
      // Ensure cover container is always viewport height
      coverContainer.style.height = window.innerHeight + "px";
    }
  }

  // Initial call and add event listener
  handleResize();
  window.addEventListener("resize", handleResize);
  window.addEventListener("orientationchange", handleResize);
});
