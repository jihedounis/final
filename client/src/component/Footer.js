import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className="footerLeft">
            <div className="footerMenu">
                <h1 className="fMenuTitle">About Us</h1>
                <ul className="fList">
                    <li className="fListItem">Company</li>
                    <a href="contact.html"><li className="fListItem">Contact</li></a>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Affiliates</li>
                    <li className="fListItem">Stores</li>
                </ul>
            </div>
            <div className="footerMenu">
                <h1 className="fMenuTitle">Useful Links</h1>
                <ul className="fList">
                    <li className="fListItem">Support</li>
                    <li className="fListItem">Refund</li>
                    <li className="fListItem">FAQ</li>
                    <li className="fListItem">Feedback</li>
                    <li className="fListItem">Stories</li>
                </ul>
            </div>
            <div className="footerMenu">
                <h1 className="fMenuTitle">Products</h1>
                <ul className="fList">
                    <li className="fListItem">Anime</li>
                    <li className="fListItem">Streetwear</li>
                    <li className="fListItem">Hoodies</li>
                    <li className="fListItem">Tshirt</li>
                    <li className="fListItem">Coming soon</li>
                </ul>
            </div>
        </div>
        <div className="footerRight">
            <div className="footerRightMenu">
                <h1 className="fMenuTitle">Subscribe to our newsletter</h1>
                <div className="fMail">
                    <input type="text" placeholder="your@email.com" className="fInput"/>
                    <button className="fButton">Join!</button>
                </div>
            </div>
            <div className="footerRightMenu">
                <h1 className="fMenuTitle">Follow Us</h1>
                <div className="fIcons">
                    <img src="./img/facebook.png" alt="" className="fIcon"/>
                    <img src="./img/twitter.png" alt="" className="fIcon"/>
                    <img src="./img/instagram.png" alt="" className="fIcon"/>
                    <img src="./img/whatsapp.png" alt="" className="fIcon"/>
                </div>
            </div>
            <div className="footerRightMenu">
                <span className="copyright">Djosuke. All rights reserved. 2022.</span>
            </div>
        </div>
    </div>
  )
}

export default Footer