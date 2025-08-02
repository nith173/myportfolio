
// Contact Copy Functionality
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const contactType = this.getAttribute('data-contact');
        const contactValue = this.querySelector('p').textContent;
        const copyText = this.querySelector('.copy-text');
        
        // Copy to clipboard
        navigator.clipboard.writeText(contactValue).then(() => {
            // Show success feedback
            copyText.textContent = 'Copied!';
            copyText.style.color = '#4ecdc4';
            
            // Add a subtle click effect
            this.style.transform = 'scale(0.98) translateX(5px)';
            
            setTimeout(() => {
                this.style.transform = '';
                copyText.textContent = 'Click to copy';
                copyText.style.color = '#cccccc';
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            showNotification('Failed to copy to clipboard', 'error');
        });
    });
});

