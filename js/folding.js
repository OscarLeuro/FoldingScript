
function menu(e,i,e2,i2,cn){


    var tab = document.querySelectorAll(e)[i];
    var submenu = document.querySelectorAll(e2)[i2];
    var count_menu = 0;
    var clase = cn;


tab.addEventListener('click',function(){

    if(count_menu == 0){

            submenu.classList.add(clase);

            count_menu = 1;

    }
    else if(count_menu == 1){

        submenu.classList.remove(clase);
        count_menu = 0;

}
})


}

function down(array,element1,element2,cn){

    for(var i = 0; i < array; i++){

        menu(element1,i,element2,i,cn)
    
    }
    
}

down(3,'.major','.sub-menu','bgred')