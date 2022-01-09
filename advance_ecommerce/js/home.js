const productcontainer = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productcontainer.forEach((item,i) =>
{
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    nxtBtn[i].addEventListener('click' , () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click' , () => {
        item.scrollLeft -= containerWidth;
    })
})
