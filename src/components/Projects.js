import React, { useEffect, useState } from "react";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Controller,
  Autoplay,
  EffectCards,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Projects.module.css";
import "swiper/css";
import "swiper/css/bundle";
import CarouselCard from "./CarouselCard";
import BEML from "../assets/gui1.webp";
import Yelp from "../assets/yelpcamp.webp";
import PW from "../assets/ss.webp";
import ISS from "../assets/iss.webp";
const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  if (width > 768) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Projects</div>
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Keyboard, Mousewheel, Navigation, Controller, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            keyboard={{ enabled: true }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // navigation={true}
            mousewheel={true}
            controller={true}
            className={styles.swiper}
          >
            <SwiperSlide style={{ height: "400px" }}>
              <CarouselCard
                title="Fraud Buster"
                image={require("../assets/imppro.jpg")}//image={BEML}
                description="Built a fraud detection system with ANN. Deployed highly scalable, open source data transaction streamer of Kafka. The model, converts the 
                json data into a preprocessed format that the model further predicts upon. The model showed an accuracy of 99.6 % and had been tuned to reduce 
                amount of false positives.  (Deep Learning, Kafka, Flask, Python)"
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="HACS"
                image={require("../assets/imppro.jpg")}//image={BEML}
                description="(Hostel Attendance Coordination System) Taking the manual system to the next level using face 
                recognition in Attendance, efficient room cleaning system, chatbot along with other salient features like 
                leave application, room booking, complaint redressal etc.  (Deep Learning, Kafka, Flask, Python)"
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide style={{ height: "400px" }}>
              <CarouselCard
                title="ShePower"
                image={require("../assets/imppro.jpg")}//image={BEML}
                description="Transformed the involvement of women in STEM domains through the development of an all-encompassing platform, leveraging technologies 
                such as MERN for web development, AI/ML/DL models for automating intricate processes, and fortified security with blockchain. The platform 
                encompasses a range of offerings including a Career Guidance Hub, Skill Development Hub, Mentorship, Interview Booking, Socials, Chatbot, 
                Resume Analyzer, and Job/Internship alerts."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide style={{ height: "400px" }}>
              <CarouselCard
                title="Autonomous Electric Jeep"
                image={require("../assets/imppro.jpg")}// image={Yelp}
                description="This project (under Team Oorja) deals with self-driving cars which 
                are powered by electricity and use sensors and computer vision. The project is in progress which aims for 
                human safety, improved mobility, less vehicle emissions etc hereby bringing a revolutionary change in 
                human lifestyle. (AI/ML/DL)"
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide style={{ height: "400px" }}>
        
              <CarouselCard
                title="Veritas Digital Design Logbook"
                image={require("../assets/imppro.jpg")}//image={ISS}
                description="The entire project has been executed online following the `Engineering 
                Design Process'. I am working for the further development of the digital logbook."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide style={{ height: "400px" }}>
              <CarouselCard
                title="ScholarVerse"
                image={require("../assets/imppro.jpg")}//image={ISS}
                description="A robust online portal, giving insights of courses offered by National and International 
                Institutions, along with Scholarships and Grants based on merit, income etc.  Schematic360 is a new, updated and redesigned version.
                "
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide style={{ height: "400px" }}>
              <CarouselCard
                title="Other Projects"
                image={require("../assets/imppro.jpg")}//image={ISS}
                description="Other Projects: 
                Web Dev: CTF website, Personal Finance Tracker with chatbot, Password Generator, Running Game, Tic-Tac-To, etc.
                Python: Virtual Assistants, YouTube Video Downloader, Number Guessing Game, Handwritten Numbers Recognition etc.
                MATLAB: Face Detection, Face Recognition, Hand Gesture detection etc.
                Web Scraping: Amazon/Flipkart Data Web Scraping using Python with Beautiful Soup library etc.
                Clones: Spotify, Hotstar. "
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
        <p className={styles.infoText}>
          View more on{" "}
          <a
            className="text-success"
            href="https://github.com/Shatakshi127"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </p>
        <p className={styles.infoText}>
          To collaborate,{" "}
          <a className="text-info" href="#contact">
            Click Here!!
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Projects</div>
        <div className={styles.mobileSwiper}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            // mousewheel={true}
            // className={styles.swiper}
          >
            <SwiperSlide>
              <CarouselCard
                title="AIM"
                //image={BEML}
                description="An ALL IN ONE MEDICALCARE website integrated with Artificial Intelligence (AI) which can 
                revolutionize health-tech for the better."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="UpdateAI"
                //image={Yelp}
                description="This project, currently in progress, is made for the Microsoft Imagine Cup. It is an AI suite 
                integrated with web development, with an aim to make education interactive and modern. "
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Project Sakhi"
                //image={PW}
                description="Menstrual sanitation faces barriers of social, economic and cultural factors. To overrule this 
                stigma, Project Sakhi is initiated. It’s basically a website which aims to aid the menstruating population."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Veritas Digital Design Logbook"
                //image={ISS}
                description="The entire project has been executed online following the `Engineering 
                Design Process'. I am working for the further development of the digital logbook."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="ScholarVerse"
                //image={ISS}
                description="A robust online portal, giving insights of courses offered by National and International 
                Institutions, along with Scholarships and Grants based on merit, income etc."
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Other Projects"
                //image={ISS}
                description="Web Dev: Password Generator, Running Game, Tic-Tac-Toe, Spotify Clone
                Python : YouTube Video Downloader. Number Guessing Game
                MATLAB : Face Detection, Face Recognition, Hand Gesture
                Web Scraping : Amazon Data Web Scraping using Python with Beautiful Soup library"
                github="https://github.com/Shatakshi127?tab=repositories"
              />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
        <p className={styles.infoText}>
          View more on{" "}
          <a
            className="text-success"
            href="https://github.com/Shatakshi127"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </p>
        <p className={styles.infoText}>
          To collaborate,{" "}
          <a className="text-info" href="#contact">
            Click Here!!
          </a>
        </p>
      </div>
    );
  }
};

export default Projects;
