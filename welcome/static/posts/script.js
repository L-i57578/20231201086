document.addEventListener('DOMContentLoaded', () => {
    // Get the posts container element
    const postsContainer = document.getElementById('posts');
    let currentStart = 0;
    const postsPerPage = 10;
    let isLoading = false;
    
    // Function to fetch and display posts
    function fetchPosts(start, end) {
        if (isLoading) return; // Prevent multiple simultaneous requests
        
        isLoading = true;
        
        // Show loading indicator
        const loadingElement = document.createElement('div');
        loadingElement.className = 'loading';
        loadingElement.textContent = 'Loading posts...';
        postsContainer.appendChild(loadingElement);
        
        // Fetch posts from the API
        fetch(`/posts?start=${start}&end=${end}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Remove loading indicator
                postsContainer.removeChild(loadingElement);
                
                // Display posts
                if (data.posts && data.posts.length > 0) {
                    data.posts.forEach(post => {
                        const postElement = document.createElement('div');
                        postElement.className = 'post';
                        postElement.textContent = post;
                        postsContainer.appendChild(postElement);
                    });
                } else {
                    const noMorePostsElement = document.createElement('div');
                    noMorePostsElement.className = 'post';
                    noMorePostsElement.style.backgroundColor = '#ffcccc';
                    noMorePostsElement.textContent = 'No more posts to load.';
                    postsContainer.appendChild(noMorePostsElement);
                }
                
                isLoading = false;
            })
            .catch(error => {
                // Remove loading indicator
                postsContainer.removeChild(loadingElement);
                
                // Display error message
                const errorElement = document.createElement('div');
                errorElement.className = 'post';
                errorElement.style.backgroundColor = '#ff9999';
                errorElement.textContent = 'Error loading posts. Please try again later.';
                postsContainer.appendChild(errorElement);
                
                console.error('Error fetching posts:', error);
                isLoading = false;
            });
    }
    
    // Function to handle infinite scroll
    function handleScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // If we're near the bottom of the page, load more posts
        if (scrollPosition >= documentHeight - 300 && !isLoading) {
            fetchPosts(currentStart, currentStart + postsPerPage - 1);
            currentStart += postsPerPage;
        }
    }
    
    // Initial load of posts
    fetchPosts(currentStart, currentStart + postsPerPage - 1);
    currentStart += postsPerPage;
    
    // Add scroll event listener for infinite scroll
    window.addEventListener('scroll', handleScroll);
});