import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import fashionBagImage from './assets/images/10.jpg/';
import productImage1 from './assets/images/701.jpg';
import productImage2 from './assets/images/2new.jpeg';
import productImage3 from './assets/images/1new.jpeg';
import productImage4 from './assets/images/new 4.jpeg'
import productImage5 from './assets/images/new 5.jpeg';
import productImage6 from './assets/images/new 8.jpeg';
import productImage7 from './assets/images/new3.jpg';
import productImage9 from './assets/images/new 6.jpeg';
import productImage10 from './assets/images/new 7.jpeg';
import productImage11 from './assets/images/00.webp';
import productImage12 from './assets/images/301.jpeg';
import productImage13 from './assets/images/303.jpeg';





import './App.css'






function App() {
  return (
    <>
      <header>
        <a href="#" className="logo">
          <i className="bx bxs-shopping-bag" />
          HAIDER  BAG STORE
        </a>
        <i className="bx bx-menu" id="menu-icon" />
        <ul className="navbar">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#products">products</a>
          </li>
          <li>
            <a href="#customers">customers</a>
          </li>
        </ul>
        <div className="header-icon">
          <i className="bx bx-search" id="search-icon" />
          <i className="bx bxs-cart-alt">
            <span>0</span>
          </i>
        </div>
        <div className="search-box">
          <input type="search" placeholder="search here" />
        </div>
      </header>

      <section className="home" id="home">
        <div className="home-text">
          <h3>Fashion Bag</h3>
          <h1>
            Look <span>Stylish</span> <br /> <span>Best</span> Stylish
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti atque
            obcaecati at ipsa velit minima voluptas ad facilis nesciunt, quia aut.
            Culpa doloremque sed blanditiis officia ducimus quo necessitatibus
            natus!
          </p>
          <a href="#" className="btn">
            Buy Now
          </a>
        </div>
        <div className="home-img">
          <img src={fashionBagImage} alt="Fashion Bag" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={productImage1} alt="About Us" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            culpa iusto impedit incidunt cupiditate adipisci eos at consequuntur,
            laboriosam animi!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae optio
            quisquam expedita cum dolor adipisci natus aspernatur accusamus! Sed,
            totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ut quo
            architecto esse ea!
          </p>
          <a href="#" className="btn">
            Learn more
          </a>
        </div>
      </section>

      <section className="products" id="products">
        <div className="heading">
          <h1> Our Popular Products </h1>
        </div>
        <div className="products-container">
          <div className="box">
            <img src={productImage2} alt="Louis Vuitton" />
            <h2>Louis Vuitton</h2>
            <span>$30.99</span>
            <i className="bx bxs-cart-alt" />
          </div>
          <div className="box">
            <img src={productImage6} alt="Louis Vuitton bags" />
            <h2>Louis Vuitton bags</h2>
            <span>$50.00</span>
            <i className="bx bxs-cart-alt" />
          </div>
          <div className="box">
            <img src={productImage3} alt="Louis Vuitton large" />
            <h2>Louis Vuitton large</h2>
            <span>$80.00</span>
            <i className="bx bxs-cart-alt" />
          </div>
          <div className="box">
            <img src={productImage4} alt="Louis Vuitton l-bags" />
            <h2>Louis Vuitton l-bags</h2>
            <span>$90.99</span>
            <i className="bx bxs-cart-alt" />
          </div>
          <div className="box">
            <img src={productImage5} alt="Louis Vuitton 2-way" />
            <h2>Louis Vuitton 2-way</h2>
            <span>$30.99</span>
            <i className="bx bxs-cart-alt" />
          </div>
          <div className="box">
            <img src={productImage7} alt="Louis Vuitton 2-way" />
            <h2>Louis Vuitton 2-way</h2>
            <span>$30.99</span>
            <i className="bx bxs-cart-alt" />
          </div>
          <div className="box">
            <img src={productImage9} alt="Louis Vuitton 2-way" />
            <h2>Louis Vuitton 2-way</h2>
            <span>$30.99</span>
            <i className="bx bxs-cart-alt" />
          </div>
          <div className="box">
            <img src={productImage10} alt="Louis Vuitton 2-way" />
            <h2>Louis Vuitton 2-way</h2>
            <span>$30.99</span>
            <i className="bx bxs-cart-alt" />
          </div>
        </div>
      </section>

      <section className="customers" id="customers">
        <div className="heading">
          <h2>Our Customers</h2>
        </div>
        <div className="customers-container">
          <div className="box">
            <img src={productImage11} alt="Bee Jordon"/ >
            <h2>Bee Jordon</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              neque atque minima id aliquam.
            </p>
            <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star-half-stroke" />
            </div>
          </div>
          <div className="box">
            <img src={productImage12} alt="Bee Jordon" />
            <h2>Bee Jordon</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              neque atque minima id aliquam.
            </p>
            <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star-half-stroke" />
            </div>
          </div>
          <div className="box">
            <img src={productImage13}  alt="Bee Jordon" />
            <h2>Bee Jordon</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              neque atque minima id aliquam.
            </p>
            <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star-half-stroke" />
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h2>
          Subscribe For Special <br /> Discounts
        </h2>
        <form action="">
          <input type="email" placeholder="Enter your Email...." />
          <input type="submit" value="Subscribe" className="email-btn" />
        </form>
      </section>
    </>
  );
}

export default App;
