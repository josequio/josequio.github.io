// -agregando un evento a section GIFT

const gift_button = document.querySelector('.gift_button');
const gift_containerimg = document.querySelector('.gift_container-img');
const gift_surprise = document.querySelector('.gift_surprise');

gift_surprise.style.display = 'none';
gift_button.addEventListener('click',function(e){
    if(gift_surprise.style.display != 'none'){
        gift_surprise.style.display = 'none';
        gift_containerimg.style.display = 'flex';
    }
    else{
        gift_surprise.style.display = 'flex';
        gift_containerimg.style.display = 'none';
       
    }
});