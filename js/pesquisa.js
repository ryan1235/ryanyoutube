function pesquisa(){
    var input,filtro,menu,menuItens,links;
    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("menu");
    menuItens = menu.getElementsByTagName("h4");
    for (var i=0;menuItens.length;i++){
        links = menuItens[i].getElementsByTagName("h4")[0];
        if(links.innerHTML.toUpperCase().indexOF(filtro)>-1){
            menuItens[i].style.display="";
        } else{
            menuItens[i].style.display="none"; 
        }
    }
}