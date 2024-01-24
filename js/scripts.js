document.addEventListener("DOMContentLoaded", function() {
  var navTrigger = document.querySelector('.navTrigger');
  var mainListDiv = document.getElementById('mainListDiv');

  navTrigger.addEventListener('click', function() {
    this.classList.toggle('active');
    console.log("Clicked menu");
    mainListDiv.classList.toggle('show_list');
  });

  // Menutup toggle jika salah satu item di dalamnya diklik
  var listItems = mainListDiv.getElementsByTagName('li');
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
      navTrigger.classList.remove('active');
      mainListDiv.classList.remove('show_list');
    });
  }
});

