<script>
  // Theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check if the user has a preferred theme
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    body.classList.add(storedTheme);
    themeToggle.textContent = storedTheme === 'dark-theme' ? 'light' : 'dark';
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) 
        {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', '');
            themeToggle.textContent = 'dark';
    } else {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark-theme');
      themeToggle.textContent = 'light';
    
  });
</script>
