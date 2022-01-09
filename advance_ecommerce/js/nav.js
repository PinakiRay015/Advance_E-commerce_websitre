

const createNav = () =>

{
    let nav = document.querySelector('.navbar');
    nav.innerHTML=`<div class="nav">
    <img src="img/logo-dark.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search items , brand">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div><hr><img src="img/thank you.png" class="thank-you-logo">
</div><hr>
<ul class="links-container">
    <li class="link-item"><a href="index.html" class="link">Home</a></li>
    <li class="link-item"><a href="#" class="link">women</a></li>
    <li class="link-item"><a href="#" class="link">men</a></li>
    <li class="link-item"><a href="#" class="link">kids</a></li>
    <li class="link-item"><a href="#" class="link">accessories</a></li>
    <li class="link-item"><a href="feedback.html" class="link">Feedback</a></li>
</ul>`;
}

createNav();