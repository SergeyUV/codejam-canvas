
function navChooseImgEvent(event){
    
    clearMenuBack();
    this.classList.add('nav_gray_back');

    switch (this.id){
        case 'set_4x4':
            
            break;
        case 'set_32x32':
            break;
        case 'set_png':
            break;
    }
    console.log(this.id);
}

 for ( let i = 0; i < document.getElementById('nav-choose_img').getElementsByTagName('li').length; i++){
     document.getElementById('nav-choose_img').getElementsByTagName('li').item(i).addEventListener('click', navChooseImgEvent);
 };

function clearMenuBack(){
    
    for ( let i = 0; i < document.getElementById('nav-choose_img').getElementsByTagName('li').length; i++){
        document.getElementById('nav-choose_img').getElementsByTagName('li').item(i).classList.remove('nav_gray_back');
    };
}