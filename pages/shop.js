import Head from "next/head";
import NavbarShop from "../comonents/navShop";
import Footer from "../comonents/footer";

export default function Shop() {
    return (
      <>
      <Head>
      <link rel="stylesheet" href="css/shop.css" />
      <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
      </Head>
        <NavbarShop/>
        <section className="shop">
                <div className="one">
                    <div className="item">
                        <img src="/img/shop.jpg" />
                        <p className="work-date" ><i className="far fa-calendar-alt"></i> 15/4/2021  <i class="fas fa-dollar-sign"></i>  Price </p>
                        <p><i className="fas fa-shopping-cart"></i> to by this item call: 0096456987 </p>
                        <p className="bottom"><i className="fas fa-barcode"></i> Item barcode : 123</p>
                    </div>
                    <div className="item">
                        <img src="/img/shop.jpg" />
                        <p className="work-date" ><i className="far fa-calendar-alt"></i> 15/4/2021  <i class="fas fa-dollar-sign"></i>  Price </p>
                        <p><i className="fas fa-shopping-cart"></i> to by this item call: 0096456987 </p>
                        <p className="bottom"><i className="fas fa-barcode"></i> Item barcode : 123</p>
                    </div>
                    <div className="item">
                        <img src="/img/shop.jpg" />
                        <p className="work-date" ><i className="far fa-calendar-alt"></i> 15/4/2021  <i class="fas fa-dollar-sign"></i>  Price </p>
                        <p><i className="fas fa-shopping-cart"></i> to by this item call: 0096456987 </p>
                        <p className="bottom"><i className="fas fa-barcode"></i> Item barcode : 123</p>
                    </div>
                </div>
                <div className="two">
                    <div className="item">
                        <img src="/img/shop.jpg" />
                        <p className="work-date" ><i className="far fa-calendar-alt"></i> 15/4/2021  <i class="fas fa-dollar-sign"></i>  Price </p>
                        <p><i className="fas fa-shopping-cart"></i> to by this item call: 0096456987 </p>
                        <p className="bottom"><i className="fas fa-barcode"></i> Item barcode : 123</p>
                    </div>
                    <div className="item">
                        <img src="/img/shop.jpg" />
                        <p className="work-date" ><i className="far fa-calendar-alt"></i> 15/4/2021  <i class="fas fa-dollar-sign"></i>  Price </p>
                        <p><i className="fas fa-shopping-cart"></i> to by this item call: 0096456987 </p>
                        <p className="bottom"><i className="fas fa-barcode"></i> Item barcode : 123</p>
                    </div>
                    <div className="item">
                        <img src="/img/shop.jpg" />
                        <p className="work-date" ><i className="far fa-calendar-alt"></i> 15/4/2021  <i class="fas fa-dollar-sign"></i>  Price </p>
                        <p><i className="fas fa-shopping-cart"></i> to by this item call: 0096456987 </p>
                        <p className="bottom"><i className="fas fa-barcode"></i> Item barcode : 123</p>
                    </div>
                </div>
                <div className="three">
                    <div className="item">
                        <img src="/img/shop.jpg" />
                        <p className="work-date" ><i className="far fa-calendar-alt"></i> 15/4/2021  <i class="fas fa-dollar-sign"></i>  Price </p>
                        <p><i className="fas fa-shopping-cart"></i> to by this item call: 0096456987 </p>
                        <p className="bottom"><i className="fas fa-barcode"></i> Item barcode : 123</p>
                    </div>
                    <div className="item">
                        <img src="/img/shop.jpg" />
                        <p className="work-date" ><i className="far fa-calendar-alt"></i> 15/4/2021  <i class="fas fa-dollar-sign"></i>  Price </p>
                        <p><i className="fas fa-shopping-cart"></i> to by this item call: 0096456987 </p>
                        <p className="bottom"><i className="fas fa-barcode"></i> Item barcode : 123</p>
                    </div>
                    <div className="item">
                        <img src="/img/shop.jpg" />
                        <p className="work-date" ><i className="far fa-calendar-alt"></i> 15/4/2021  <i class="fas fa-dollar-sign"></i>  Price </p>
                        <p><i className="fas fa-shopping-cart"></i> to by this item call: 0096456987 </p>
                        <p className="bottom"><i className="fas fa-barcode"></i> Item barcode : 123</p>
                    </div>
                </div>
                
                    
                </section>
        <Footer/>
    </>
    );
}