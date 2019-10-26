
function navChooseImgEvent(event){
    
    clearMenuBack();
    this.classList.add('nav_gray_back');

    switch (this.id){
        case 'set_4x4':
            const myCanvasDrawer = new CanvasDrawer(document.getElementById('main_canvas'),4,4,[1,2,3]);
            myCanvasDrawer.doDraw();
            break;
        case 'set_32x32':
            break;
        case 'set_png':
            break;
    }
}

function clearMenuBack(){
    
    for ( let i = 0; i < document.getElementById('nav-choice_img').getElementsByTagName('li').length; i++){
        document.getElementById('nav-choice_img').getElementsByTagName('li').item(i).classList.remove('nav_gray_back');
    };
}

for ( let i = 0; i < document.getElementById('nav-choice_img').getElementsByTagName('li').length; i++){
    document.getElementById('nav-choice_img').getElementsByTagName('li').item(i).addEventListener('click', navChooseImgEvent);
};

function CanvasDrawer(canvasElement, datasizeX, datasizeY, dataPath) {
    
    this.that = this;
    this.canvasElement = canvasElement;
    this.datasizeX = datasizeX;
    this.datasizeY = datasizeY;
    this.ctx = undefined;
    
    if(canvasElement.getContext){
        this.ctx = canvasElement.getContext('2d');
    }

    this.doDraw = function() {
        this.ctx.fillStyle = "rgb(200,0,0)";
        this.ctx.fillRect (10, 10, 55, 50);
    }
    
};