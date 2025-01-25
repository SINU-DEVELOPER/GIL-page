

// here i write js function for read more functionality 

document.getElementById("readMoreBtn").addEventListener("click", function () {
    const extraContent = document.querySelector(".extra-content");
    const isHidden = extraContent.classList.contains("d-none");
  
    if (isHidden) {
      extraContent.classList.remove("d-none"); // Show the hidden content
      this.textContent = "Show Less"; // Change button text
    } else {
      extraContent.classList.add("d-none"); // Hide the content again
      this.textContent = "Read More"; // Reset button text
    }
  });
  
  