document.addEventListener('DOMContentLoaded', function() {
    // Get all pagination elements
    const pageItems = document.querySelectorAll('.pagination .page-item[data-page]');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    
    // Get all page content elements
    const pageContents = document.querySelectorAll('.page-posts');
    
    // Current active page
    let currentPage = 1;
    
    // Function to update pagination
    function updatePagination() {
        // Update page items
        pageItems.forEach(item => {
            const pageNum = parseInt(item.getAttribute('data-page'));
            if (pageNum === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Update page content visibility
        pageContents.forEach((content, index) => {
            if (index + 1 === currentPage) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
        
        // Update prev/next buttons
        if (currentPage === 1) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }
        
        if (currentPage === pageContents.length) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
        
        // Scroll to top of page
        window.scrollTo(0, 0);
    }
    
    // Add click event to page items
    pageItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            currentPage = parseInt(this.getAttribute('data-page'));
            updatePagination();
        });
    });
    
    // Add click event to prev button
    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });
    
    // Add click event to next button
    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < pageContents.length) {
            currentPage++;
            updatePagination();
        }
    });
    
    // Initial pagination setup
    updatePagination();
});