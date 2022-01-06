var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
    document.getElementById("pre-carregamento").style.display = "none";
    document.getElementById("teste").style.display = "inline";

}, 4000);
