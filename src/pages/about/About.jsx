import Header from "../../components/Header";
import headerImage from "../../images/header_bg_1.jpg";
import MissionVisionImage from "../../images/hero1.jpg";
import Card from "../../UI/Card";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={headerImage}>
        Where Support, Inspiration, and Results Meet.
      </Header>
      <section className="about_history">
        <div className="container about_history_container">
          <h2>Who We are</h2>
          <hr />
          <div className="about_history_details">
            <div className="about_history_left">
              <h3>
                We are more than just a gym—we're a dedicated team of fitness
                enthusiasts committed to helping you achieve your health and
                wellness goals.
              </h3>
            </div>
            <div className="about_history_right">
              <p>
                At FitnessGuru, we believe that fitness is not just about
                physical strength, but also about mental well-being and
                community support. Founded on the principle of inclusivity, we
                welcome individuals of all ages, fitness levels, and backgrounds
                to join our thriving community. Our experienced trainers are
                passionate about helping you reach your full potential, whether
                you're a seasoned athlete or just starting your fitness journey.
              </p>
              <p>
                Our gym is equipped with the latest in fitness technology and
                equipment, ensuring that you have everything you need to
                succeed. From cardio machines and free weights to group fitness
                classes and personal training sessions, we offer a wide range of
                options to keep your workouts challenging and engaging. But what
                truly sets us apart is our supportive and welcoming atmosphere.
                When you walk through our doors, you become part of a supportive
                community of like-minded individuals who are all working towards
                the same goal: becoming the best versions of themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-content">
            <Card className="about__card">
              <h2>Our Story</h2>
              <p>
                We are committed to delivering exceptional service, personalized
                training, and innovative programs that inspire our members to
                prioritize their health and well-being
              </p>
              <p>
                We want to be the catalyst for positive change in the lives of
                our members, inspiring them to achieve their fitness goals,
                foster meaningful connections, and live life to the fullest
                potential. We strive to create a culture of wellness where
                everyone feels empowered to prioritize their health and
                well-being.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="about_mission">
        <div className="container about__mission-container">
          <div className="about__mission-left">
            <div className="about__mission">
              <h2>Mission</h2>
              <h3>
                Our mission is to empower individuals to lead healthier lives
              </h3>
              <p>
                We aim to achieve this by providing a supportive and inclusive
                environment where our clients can achieve their fitness goals.
                We are committed to delivering exceptional service, personalized
                training, and innovative programs that inspire our members to
                prioritize their health and well-being.
              </p>
            </div>
            <div className="about__mission_divider"></div>
            <div className="about__vision">
              <h2>Vission</h2>
              <h3>
                Our vision is to be the premier destination for fitness
                enthusiasts.
              </h3>
              <p>
                We wish to be recognized for our commitment to excellence,
                inclusivity, and community engagement. We aspire to create a
                positive impact on the lives of our members.
              </p>
            </div>
          </div>
          <div className="about__mission-right">
            <h2>Mission & Vision</h2>
            <div className="about__mission-image">
              <img src={MissionVisionImage} alt="Mission Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
