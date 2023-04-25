document.querySelector('#menuIcon').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('active');
  });
  
  document.querySelectorAll('.dropdown a').forEach(el => el.addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('active');
  }));