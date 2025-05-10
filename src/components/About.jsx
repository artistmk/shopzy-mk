import React from "react";

const About = () => {
  
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <div style={myStyle}>
      <h2 style={{fontFamily: "revert-layer"}}>About Us</h2>
      <p className="my-5" style={{fontFamily: "cursive", fontSize: "18px", width: "60vw", margin: "auto", textAlign: "center"}}>
        Welcome to Shopzy.com, your one-stop destination for premium-quality products at unbeatable prices. 
        We are committed to providing a seamless shopping experience, offering a diverse range of products 
        that cater to your lifestyle, needs, and preferences. Our mission is to bring you the best in quality, 
        affordability, and customer satisfaction.

        At Shopzy.com, we prioritize excellence by ensuring that every product is carefully selected and meets 
        the highest standards. Our user-friendly platform, secure payment options, and efficient customer support 
        make shopping with us hassle-free and enjoyable. Whether you’re looking for the latest trends, everyday 
        essentials, or exclusive deals, we’ve got you covered.

        We value our customers and strive to build long-term relationships by delivering exceptional service and 
        a shopping experience that exceeds expectations. Thank you for choosing Shopzy.com — where quality meets 
        convenience. Happy shopping! 🚀
      </p>
    </div>
  );
};

export default About;
