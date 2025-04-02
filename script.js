// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Generate divisions A-M
    const divisionSelect = document.getElementById('division');
    for (let i = 65; i <= 77; i++) {
        const option = document.createElement('option');
        option.value = String.fromCharCode(i);
        option.textContent = String.fromCharCode(i);
        divisionSelect.appendChild(option);
    }

    // Mobile menu toggle
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuButton.addEventListener('click', function() {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Form submission
    document.getElementById('idForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const classVal = document.getElementById('class').value;
        const division = document.getElementById('division').value;
        const rollNo = document.getElementById('rollNumber').value;
        
        if (!classVal || !division || !rollNo) {
            alert('Please fill all fields');
            return;
        }
        
        if (rollNo < 1 || rollNo > 120) {
            alert('Roll number must be between 1-120');
            return;
        }
        
        const imagePath = `images/${classVal}${division}/${rollNo}.jpg`;
        
        // Open in new tab on desktop, same tab on mobile
        if (window.innerWidth > 768) {
            window.open(imagePath, '_blank');
        } else {
            window.location.href = imagePath;
        }
    });

    // PWA Installation Prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
    });
});