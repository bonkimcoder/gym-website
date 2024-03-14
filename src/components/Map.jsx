import mapImage from "../images/hero6.jpg";

const Map = () => {
  return (
    <section className="map">
      <div className="container map__container">
        <div className="map__image">
          <img src={mapImage} alt="Map Image" />
        </div>
        <div className="contact__link">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.807504055567!2d36.8357822!3d-1.19409605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3db91bb4bddf%3A0x2bd49af85b50a23b!2sPhoenicia%20Hotel%20Kiambu!5e0!3m2!1sen!2ske!4v1710429968988!5m2!1sen!2ske"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="map__link"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
