import React from "react";
export default function Footer(){
    return(
        <footer id="footer">
            <div className="footer-box">
                <h1>FnamyCakes</h1>
                <p>22, Lead Avenue <br /> Odoguyan <br /> Ikorodu, Lagos State.</p>
            </div>
            <div className="footer-box">
                <h1>STAY INFORMED</h1>
                <p>Subscribe to our newsletter to receive industry news, updates and best prices.</p>
                <input type="text" value = "" />
                <button>SUBSCRIBE NOW</button>
            </div>
            <div className="footer-box">
                <h1>QUICK LINKS</h1>
                <div className="footer-three-container">
                    <ul className="footer-three-box">
                        <li>About us</li>
                        <li>Reviews</li>
                        <li>Shop</li>
                    </ul>
                    <ul className="footer-three-box">
                        <li>Cart</li>
                        <li>FAQ</li>
                        <li>Return Policy</li>
                    </ul>
                </div>
            </div>
            <div className="footer-box">
                <p>Developed By Nifemi - 2023 </p>
            </div>
        </footer>
    )
}