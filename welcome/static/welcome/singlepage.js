// Shows one page and hides the other two 
function showPage(page) { 

    // Hide all page content divs (with class 'page'): 
    document.querySelectorAll('.page').forEach(div => { 
        div.style.display = 'none'; 
        div.classList.remove('active');
    }); 

    // Show the div provided in the argument 
    const targetPage = document.querySelector(`#${page}`);
    if (targetPage) {
        targetPage.style.display = 'block'; 
        targetPage.classList.add('active');
    }

    // Update button active states
    document.querySelectorAll('button[data-page]').forEach(button => {
        if (button.dataset.page === page) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Wait for page to loaded: 
document.addEventListener('DOMContentLoaded', function() { 

    // Select all buttons 
    document.querySelectorAll('button').forEach(button => { 

        // When a button is clicked, switch to that page 
        button.onclick = function() { 
            showPage(this.dataset.page); 
        } 
    }) 
});