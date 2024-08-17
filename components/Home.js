import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image from './image.png';
import qr from './qr.png';
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import WinNothingToLose from "./WinNothingToLose/WinNothingToLose";
import Footer from "./Footer/Footer";
import food from'./food.png'
const reviewData = [
  { title: 'Review 1', summary: 'This is a summary of review 1...', fullText: 'This is the full text of review 1...' },
  { title: 'Review 2', summary: 'This is a summary of review 2...', fullText: 'This is the full text of review 2...' },
  { title: 'Review 3', summary: 'This is a summary of review 3...', fullText: 'This is the full text of review 3...' },
  { title: 'Review 4', summary: 'This is a summary of review 4...', fullText: 'This is the full text of review 4...' },
  { title: 'Review 5', summary: 'This is a summary of review 5...', fullText: 'This is the full text of review 5...' },
  { title: 'Review 6', summary: 'This is a summary of review 6...', fullText: 'This is the full text of review 6...' },
  { title: 'Review 7', summary: 'This is a summary of review 7...', fullText: 'This is the full text of review 7...' },
  { title: 'Review 8', summary: 'This is a summary of review 8...', fullText: 'This is the full text of review 8...' },
  { title: 'Review 9', summary: 'This is a summary of review 9...', fullText: 'This is the full text of review 9...' },
  { title: 'Review 10', summary: 'This is a summary of review 10...', fullText: 'This is the full text of review 10...' },
  // Add more reviews as needed
];

const Home = () => {
  return (
    <div>
      <div className="home">
        <h1 className="c">
          Earn <span className="b">Rewards</span>, Elevate Health.
          <br />
          Your Wellness Journey <span className="a">Starts Here.</span>
        </h1>
        <p className="subtext">
          Earn rewards for every step. Access mental health support and nutrition guidance.
          Elevate your health and happiness - all in one app.
        </p>
        <img src={qr} alt="qr" className="qr" />
      </div>
      <div className="container1">
        <div className="tagline">
          <h1>Not sure where to start?</h1>
          <p>Khushi offers rewards, support, and guidance for your wellness and more</p>
        </div>
        <div className="content">
          <div className="box">
            <h2>Workout Videos</h2>
            <div className="box-content">
              <p>Access to hundreds of full-length workout videos.</p>
              <a href="/workout-videos" className="box-link">
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className="box">
            <h2>Workout Programs</h2>
            <div className="box-content">
              <p>Affordable and effective workout programs.</p>
              <a href="/workout-programs" className="box-link">
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className="box">
            <h2>Meal Plans</h2>
            <div className="box-content">
              <p>Plans built with registered dietitians and nutritionists.</p>
              <a href="/meal-plans" className="box-link">
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className="box">
            <h2>WO+ Plus All Access</h2>
            <div className="box-content">
              <p>Access powerful features to your membership.</p>
              <a href="/wo-plus" className="box-link">
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={image} alt="picture1" className="pictures" />
        </div>
        <div className="text-container">
          <h1>Connect. Share. <br></br>Thrive.</h1>
          <h6>Engage with a supportive community of like-minded individuals on the same wellness journey. Share your progress, tips, and experiences to stay motivated and inspired. Benefit from personalised advice and encouragement from experts and peers, fostering growth, positivity, and overall well-being in a nurturing environment.</h6>
        </div>
      </div>
      <div className="container4">
        
        <div className="text-container">
          <h1>Comprehensive <br/>Mental Health and <br/>Nutrition Support</h1>
          <h6>Our app offers comprehensive mental health and nutrition support, providing personalised guidance and resources to help you achieve balance and well-being. Access expert advice, track your progress, and improve both your mental and physical health, all in one convenient place.</h6>  </div>
        <div className="image-container">
          <img src={food} alt="picture1" className="pictures" />
        </div>
      </div>
     
     
      <TestimonialSection />
      <WinNothingToLose />
      <Footer />
    </div>
  );
};

export default Home;
