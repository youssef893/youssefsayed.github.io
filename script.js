// Add this script to your project to show part of the text with a "Show More" button
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    const projectText = card.querySelector(".project-text");
    const showMoreButton = card.querySelector(".show-more-button");
    const maxTextLength = 100; // Set the maximum number of characters to show initially

    const toggleTextVisibility = () => {
        projectText.classList.toggle("show-text");
        showMoreButton.textContent = projectText.classList.contains("show-text") ? "Show Less" : "Show More";
    };

    const projectDescription = card.querySelector("p");
    const projectDescriptionText = projectDescription.textContent;
    
    if (projectDescriptionText.length > maxTextLength) {
        projectDescription.textContent = projectDescriptionText.slice(0, maxTextLength) + "...";
        showMoreButton.style.display = "block";
    }
    
    showMoreButton.addEventListener("click", toggleTextVisibility);
});
