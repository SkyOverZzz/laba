    window.onload = function () {
      document.body.classList.add('loaded_hiding');
      window.setTimeout(function () {
        document.body.classList.add('loaded');
        console.log('preloader add')
        document.body.classList.remove('loaded_hiding');
        
      }, 500);
    }