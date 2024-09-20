/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function triggerNavBar() {
    let x = document.getElementById("topNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function openSample(target, framework) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(framework).style.display = "block";
    target.className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');
    const featureImage = document.getElementById('feature-image');

    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            
            // Close all other features
            featureItems.forEach(otherItem => {
                if (otherItem !== this) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle the clicked feature
            this.classList.toggle('active');

            // Update the image
            if (!isActive) {
                const featureKey = this.getAttribute('data-feature');
                featureImage.src = `images/${featureKey}.png`;
                featureImage.alt = `${this.querySelector('h3').textContent} Feature`;
                
                // Fade out and in effect for image change
                featureImage.style.opacity = 0;
                setTimeout(() => {
                    featureImage.style.opacity = 1;
                }, 300);
            }
        });
    });
});