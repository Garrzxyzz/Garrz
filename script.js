document.getElementById('navigateButton').addEventListener('click', () => {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
  });
  
  document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page1').classList.add('active');
  });