// script.js - Interactive Features

document.addEventListener("DOMContentLoaded", function() {
          const darkModeToggle = document.getElementById("darkModeToggle");
          const body = document.body;
          
          // Load dark mode preference from local storage
          if (localStorage.getItem("darkMode") === "enabled") {
              body.classList.add("dark-mode");
          }
      
          // Dark mode toggle event (fixing issue by properly setting class toggle)
          darkModeToggle.addEventListener("click", () => {
              body.classList.toggle("dark-mode");
              if (body.classList.contains("dark-mode")) {
                  localStorage.setItem("darkMode", "enabled");
              } else {
                  localStorage.setItem("darkMode", "disabled");
              }
          });
      
          // Smooth scrolling for navigation links
          document.querySelectorAll("nav ul li a").forEach(anchor => {
              anchor.addEventListener("click", function(event) {
                  event.preventDefault();
                  const targetId = this.getAttribute("href").substring(1);
                  document.getElementById(targetId).scrollIntoView({
                      behavior: "smooth"
                  });
              });
          });
      
          // Typing effect for hero section
          const heroText = document.querySelector(".hero-description");
          const text = "Hello! I'm Evan Kim, student at the University of Georgia (UGA) persuing Bachelor's of Computer Science. I have a strong interest in Software Development, Cybersecurity, and Web Development. This is my personal portfolio where I showcase my projects, skills, and experience.";
          let index = 0;
      
          function typeEffect() {
              if (index < text.length) {
                  heroText.textContent += text.charAt(index);
                  index++;
                  setTimeout(typeEffect, 40);
              }
          }
          heroText.textContent = "";
          typeEffect();
      
          // Project hover animation
          document.querySelectorAll(".project").forEach(project => {
              project.addEventListener("mouseover", () => {
                  project.style.transform = "scale(1.1)";
              });
              project.addEventListener("mouseout", () => {
                  project.style.transform = "scale(1)";
              });
          });
      });