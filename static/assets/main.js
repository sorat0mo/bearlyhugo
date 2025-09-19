document.addEventListener('DOMContentLoaded', function() {
  function debounce(fn, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  const searchPosts = () => {
    const filter = document.getElementById('searchInput').value.toLowerCase();
    const posts = document.querySelectorAll('.blog-posts li');
    posts.forEach(post => {
      const titleEl = post.querySelector('.post-title');
      const title = titleEl ? titleEl.textContent.toLowerCase() : "";
      post.style.display = title.includes(filter) ? "" : "none";
    });
  };

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(searchPosts, 150));
  }
});
