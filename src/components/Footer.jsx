import "./Footer.css";
export default function Footer() {
    return (
        <>
        <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h5>
            Teknolojik <br />
            Yemekler
          </h5>
          <div className="footer-left-item">
            <img
              src="images/iteration-2-images/footer/icons/icon-1.png"
              alt=""
            />
            <p className="map">
              341 Londonderry Road, <br />
              Istanbul Türkiye
            </p>
          </div>
          <div className="footer-left-item">
            <img
              src="images/iteration-2-images/footer/icons/icon-2.png"
              alt=""
            />
            <p className="mail">aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="footer-left-item">
            <img
              src="images/iteration-2-images/footer/icons/icon-3.png"
              alt=""
            />
            <p className="phone">+90 216 123 45 67</p>
          </div>
        </div>
        <div className="footer-mid">
          <h6>Hot Menu</h6>
          <ul>
            <li><a href="">Terminal Pizza</a></li>
            <li><a href="">5 Kişilik Hackathlon Pizza</a></li>
            <li><a href="">useEffect Tavuklu Pizza</a></li>
            <li><a href="">Beyaz Console Frosty</a></li>
            <li><a href="">Testler Geçti Mutlu Burger</a></li>
            <li><a href="">Position Absolute Acı Burger</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h6>Instagram</h6>
          <div className="footer-right-images">
            <img src="images/iteration-2-images/footer/insta/li-0.png" alt="" />
            <img src="images/iteration-2-images/footer/insta/li-1.png" alt="" />
            <img src="images/iteration-2-images/footer/insta/li-2.png" alt="" />
            <img src="images/iteration-2-images/footer/insta/li-3.png" alt="" />
            <img src="images/iteration-2-images/footer/insta/li-4.png" alt="" />
            <img src="images/iteration-2-images/footer/insta/li-5.png" alt="" />
          </div>
        </div>
      </div>
      </footer>
    

    <div className="copyright">
      <div className="copyright-items">
        <p>© 2023 Teknolojik Yemekler.</p>
        <img src="public/assets/iteration-2/icons/twitter.svg" alt="" />
      </div>
    </div>
    </>
    );
}