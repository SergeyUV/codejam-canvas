
function navChooseImgEvent(event){
    
    clearMenuBack();
    this.classList.add('nav_gray_back');
    let myCanvasDrawer = {};
    switch (this.id){
        case 'set_4x4':
            myCanvasDrawer = new CanvasDrawer(document.getElementById('main_canvas'), 4, 4, 'data/4x4.json');
            myCanvasDrawer.doDraw();
            break;
        case 'set_32x32':
            myCanvasDrawer = new CanvasDrawer(document.getElementById('main_canvas'), 32, 32, 'data/32x32.json');
            myCanvasDrawer.doDraw();
            break;
        case 'set_png':
            myCanvasDrawer = new CanvasDrawer(document.getElementById('main_canvas'), 32, 32, 'data/image.png');
            myCanvasDrawer.doDrawPNG();
            break;
    }
}

function clearMenuBack(){
    
    for ( let i = 0; i < document.getElementById('nav-choice_img').getElementsByTagName('li').length; i++){
        document.getElementById('nav-choice_img').getElementsByTagName('li').item(i).classList.remove('nav_gray_back');
    };
}

function CanvasDrawer(canvasElement, datasizeX, datasizeY, dataPath) {
    
    this.that = this;
    this.canvasElement = canvasElement;
    this.datasizeX = datasizeX;
    this.datasizeY = datasizeY;
    this.ctx = undefined;
    this.dataPath = dataPath;
    
   
    if(canvasElement.getContext){
        this.ctx = canvasElement.getContext('2d');
        this.canvaswidth = canvasElement.width;
        this.canvasheight = canvasElement.height;
    }

    this.doDraw = function() {
        
        if(!canvasElement.getContext){return;};

        const deltaX = this.canvaswidth / datasizeX;
        const deltaY = this.canvasheight / datasizeY;
        
        fetch(this.dataPath)
        .then(response => response.json())
        .then(cdata => {
            
            let makecolor = function(d) {return d;};
            
            if(this.dataPath == 'data/4x4.json'){
                makecolor = function(d){ return '#' + d; };
            }else if(this.dataPath == 'data/32x32.json'){
                makecolor = function(d){ 
                 let [r,g,b,a] = d;
                    return `rgba(${r}, ${g}, ${b}, ${a})`; 
                };
            }

            let rectY = 0;
            for(let j = 0; j < datasizeY; j++, rectY+=deltaY) {
                let rectX = 0;    
                for(let i = 0; i < datasizeX; i++, rectX+=deltaX){
                    this.ctx.fillStyle = makecolor(cdata[j][i]);
                    this.ctx.fillRect (rectX, rectY, deltaX, deltaY);
                }
            }
        });
    }

    this.doDrawPNG = function(){
        if(!canvasElement.getContext){return;};
        
        const img = new Image(this.canvaswidth, this.canvasheight);
        img.onload = ()=>{
            this.ctx.drawImage(img, 0, 0);
        }//drawImageActualSize;
        img.src = 'data/image.png';

    }

    
};

for ( let i = 0; i < document.getElementById('nav-choice_img').getElementsByTagName('li').length; i++){
    document.getElementById('nav-choice_img').getElementsByTagName('li').item(i).addEventListener('click', navChooseImgEvent);
};