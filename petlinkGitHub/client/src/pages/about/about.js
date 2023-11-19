import React from "react";
import './about.css'; 
import NavBar2 from "../../component/navbar/LoginUserNavBar";

const linksData = [
  {
    heading: "Review",
    subheading: "Give your Valuable Reviews",
    imgSrc: "https://www.onepointmedical.com.au/wp-content/uploads/2015/12/gp-melbourne-189974771-1500x1066.jpg", 
    href: "#about",
  },
  {
    heading: "Pet Training",
    subheading: "Train your pet",
    imgSrc: "https://www.k9ofmine.com/wp-content/uploads/2020/07/different-types-of-dog-training-850x520.jpg", 
    href: "#pet_training",
  },
  {
    heading: "Veterinary care",
    subheading: "Care for your pet",
    imgSrc: "https://www.ovrs.com/blog/wp-content/uploads/2020/08/Dog-and-xrayAdobeStock_212562137-1-2000x1333.jpeg", 
    href: "#veterinary_care",
  },
  {
    heading: "Pet Day Care",
    subheading: "Daycare services",
    imgSrc: "https://www.synlawn.com/wp-content/uploads/2022/10/synlawn-artificial-grass-at-dogmatico-dog-park-costa-rica-01.jpg", 
    href: "#pet_daycare",
  },
  {
    heading: "Pet Health Care Products",
    subheading: "Find health products",
    imgSrc: "https://sdcvma.org/sites/default/files/styles/page_banner/public/108242429cat_pet_health_info_0.jpg?itok=z70bsplS", 
    href: "#health_products",
  },
];

const About = () => {
  const handleHover = (e) => {
    const img = e.currentTarget.querySelector(".image");
    img.classList.add("pop");
  };

  const handleLeave = (e) => {
    const img = e.currentTarget.querySelector(".image");
    img.classList.remove("pop");
  };

  return (<>
  <NavBar2/>
  <section className="image-links">
      {linksData.map((link, index) => (
        <Link
          key={index}
          heading={link.heading}
          subheading={link.subheading}
          imgSrc={link.imgSrc}
          href={link.href}
          handleHover={handleHover}
          handleLeave={handleLeave}
        />
      ))}
    </section>
  </>
  
  );
};

const Link = ({ heading, imgSrc, subheading, href, handleHover, handleLeave }) => {
  return (
    <a
      href={href}
      className="link"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="content">
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
      <img
        src={imgSrc}
        alt={`Image representing a link for ${heading}`}
        className="image"
      />
    </a>
  );
};

export default About;
