import React from 'react'

function Footer(){
    return(
        <footer class="footer-distributed">
            <div class="footer-left">
                <p class="footer-links">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Images</a>
                    <a href="#">Menu</a>
                </p>

                <p class="footer-ahmad-name">Ahmad Rasoulopour &copy; 2019</p>
            </div>

            <div class="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>S Redwood Rd</span> Salt Lake City, Utah</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>801 123 4567</p>
                </div>

                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="mailto:Heydaaar@gmail.com">yourEmail@gmail.com</a></p>
                </div>

            </div>

            <div class="footer-right">
                <div class="footer-icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>

                </div>
            </div>
        </footer>
    )
}


export default Footer