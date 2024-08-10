// const nav = document.querySelector('.navbar');
// const navLinks = document.querySelector('.nav-links');
// const hamburger = document.querySelector('.hamburger');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
// });

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('nav-active');
// });
// Navbar Scroll and Hamburger Menu Toggle
// Function to handle tab navigation
function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove the active class from all tab links
    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab content and add the active class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Display the first tab by default
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-link").click();
});

// Function to handle bio card flipping
document.querySelectorAll('.flip-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.bio-card').classList.toggle('flipped');
    });
});

// Function for Navbar Scroll Effect and Hamburger Toggle
const nav = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Function for Modal
const modal = document.getElementById("messageModal");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".communication ul li a").forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Merged JavaScript code (already provided above)

// Function to open project details in a new tab
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const projectDetailsUrl = "http://example.com/project-details"; // Replace with the actual project details URL
        window.open(projectDetailsUrl, '_blank');
    });
});

document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))