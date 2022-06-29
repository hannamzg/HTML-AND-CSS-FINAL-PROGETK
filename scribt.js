let scrollUp = document.querySelector('.scrol-up');

scrollUp.addEventListener("click", function(){
    window.scrollTo(0,0)
});


let mainImg = document.getElementById('mainImg');
let imgs = document.getElementsByClassName('imgs-in-midea');
let right = document.getElementById('right');
let left = document.getElementById('left');
let close = document.getElementById('close'),
w;
t=0;

mainImg.style.display= 'none';
right.style.display ='none';
left.style.display='none';
close.style.display= 'none';

for(w=0; w<imgs.length; w++){
    imgs[w].onclick = function(){
        mainImg.src = this.src;
        mainImg.style.display= 'block';
        right.style.display ='block';
        left.style.display='block';
        close.style.display= 'block';
        
    }
}

close.addEventListener('click',function(){
    mainImg.style.display= 'none';
right.style.display ='none';
left.style.display='none';
close.style.display= 'none';
})

right.addEventListener('click' , function(){
    t++;
    if(t===imgs.length){
        t=0;
    }
    mainImg.src = imgs[t].src
});

left.addEventListener('click',function(){
    t--
    if(t<0){
        t=imgs.length -1;
    }

    mainImg.src = imgs[t].src;
})

