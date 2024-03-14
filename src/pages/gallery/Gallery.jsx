import "./gallery.css";
import Header from "../../components/Header";
import headerImage from "../../images/header_bg_3.jpg";
import gallery1 from "../../images/hero1.jpg";
import gallery2 from "../../images/hero2.jpg";
import gallery3 from "../../images/hero3.jpg";
import gallery4 from "../../images/hero4.jpg";
import gallery5 from "../../images/contact.jpg";
import gallery6 from "../../images/values.jpg";
import gallery7 from "../../images/values1.jpg";
import gallery8 from "../../images/gallery8.jpg";
import gallery9 from "../../images/gallery9.jpg";
import gallery10 from "../../images/gallery10.jpg";
import gallery11 from "../../images/gallery11.jpg";
import gallery12 from "../../images/gallery12.jpg";
import gallery13 from "../../images/gallery13.jpg";
import gallery14 from "../../images/gallery14.jpg";
import gallery15 from "../../images/gallery14.jpg";

const Gallery = () => {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
  ];

  return (
    <>
      <Header title="Our Gallery" image={headerImage}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          commodi labore id!
        </p>
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => (
            <article key={index}>
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width="200px"
                height="400px"
              />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
