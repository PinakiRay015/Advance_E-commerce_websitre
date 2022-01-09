
const createFooter = () =>
{
    let footer = document.querySelector('footer');
    footer.innerHTML = `<div class="footer-content">
            <img src="img/logo-light.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watches</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watches</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">About Company</p>
        <p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus
            necessitatibus natus reprehenderit modi consequuntur possimus exercitationem quis sunt non a in rem eos
            similique at, officia consequatur cupiditate esse! <br> <br> support emails:-<br> help@garmets.com </p>
            <p class="info"> telephone - <br> 91+ 76863953758</p>
            <p class="footer-credit">Find your best accessories here</p>`;
}

createFooter();