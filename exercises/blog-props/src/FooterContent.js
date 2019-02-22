import React from 'react'
import { SocialIcon } from 'react-social-icons';

const FooterContent = () => {
    return(
        <footer>
                <a href="www.twitter.com"> <SocialIcon network="twitter" bgColor="#000"/></a>
                <a href="www.facebook.com"> <SocialIcon network="facebook" bgColor="#000"/></a>
                <a href="www.github.com"><SocialIcon network="github" bgColor="#000"/></a>
        </footer>
    )
}

export default FooterContent