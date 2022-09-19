newImg = new Image();
function randomImage(){

    arrayOfImages = ['https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
                     'https://cdn.pixabay.com/photo/2022/09/02/14/38/mountains-7427724_960_720.jpg',
                     'https://cdn.pixabay.com/photo/2022/09/11/14/52/maasai-mara-7446939_960_720.jpg',
                     'https://cdn.pixabay.com/photo/2022/09/07/07/07/cat-7438092_960_720.jpg',
                     'https://cdn.pixabay.com/photo/2022/08/25/20/48/bird-7411277_960_720.jpg',
                     'https://cdn.pixabay.com/photo/2022/08/17/08/14/fish-7391851_960_720.jpg',
                     'https://cdn.pixabay.com/photo/2022/08/21/17/47/color-7401750_960_720.jpg',
                     'https://cdn.pixabay.com/photo/2022/09/05/08/07/butterfly-7433586_960_720.jpg',
                     'https://cdn.pixabay.com/photo/2022/08/31/22/58/little-egret-7424318_960_720.jpg',
                     'https://cdn.pixabay.com/photo/2022/08/27/05/42/heather-7413664_960_720.jpg']


    randomIndex = Math.floor(Math.random()*arrayOfImages.length+1)
    newImg.src = arrayOfImages[randomIndex-1];
    newImg.height = '400';
    newImg.width = '500';
    oldImg = document.getElementsByTagName('img')[0]
    document.getElementsByClassName("imageSpace")[0].replaceChild(newImg,oldImg);
    
}