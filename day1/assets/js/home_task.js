
var  width, height;

 
function getWidth(width)
{
    return width;
}

function getHeight(height)
{
    return height;
}

function duzbucaqli_sahe(width,height){
    
    return width*height;
}

function kvadrat_perimetr(width,height){
    return width*2+height*2
}

function ucb_sahe(width,height){
    return (width*height)/2
}

function dioganal(width,height){
    return Math.sqrt(Math.pow(width,2)+Math.pow(height,2));
}

getWidth(15);
getHeight(10);

console.log(duzbucaqli_sahe(getWidth(15),getHeight(10)));
duzbucaqli_sahe(getWidth(15),getHeight(10));
duzbucaqli_sahe(15,10);