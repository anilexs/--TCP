var toggleBtn = document.getElementById('toggleBtn');
var menuItems = document.getElementsByClassName('menu-items')[0];

toggleBtn.addEventListener('click', function() {
  menuItems.style.display = (menuItems.style.display === 'block') ? 'none' : 'block';
});
