import React from "react";
import styles from "./About.module.css";
import TickerRow from "./TickerRow";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About me!!</h1>
      <div className={styles.about}>
        <div className={styles.content}>
          I am Shatakshi Saxena,a 4th year B.Techstudent at Thapar Institute Of Engineering
          And Technology, Patiala. I am a{" "}
          <span className={styles.purple}>Frontend Web Developer</span> and have experience in
          <span className={styles.purple}> Cloud Computing (AWS), Artificial Intelligence, Machine Learning and Deep Learning</span>.
           Currently I am interested in learning and exploring{" "}
          <span className={styles.purple}>Blockchain</span>, {" "}
          <span className={styles.purple}>Backend Developement</span> and{" "}
          <span className={styles.purple}>DevOps.</span>
          An optimistic, affable, exuberant, and self-motivated student with excellent organizational skills and a good eye for detail. I am a go-getter and always thrive to achieve the highest standard possible at any task by studying concepts and applying them with clarity in my thought process. I believe that we must embrace and celebrate our differences for these are what make us unique, special, and gifted and move humanity from evolution to revolution!
          I always look forward to meaningful and constructive collaborations, connections, and conversations to explore greater opportunities in order to sharpen my skills.
          I have been awarded the AWS AI & ML Scholarship 2023. AWS has sponsored enrollment in the AI Programming with Python 
Nanodegree by Udacity.
          My Skills include:
Programming Languages : C/C++, Java, Python   
Library/Frameworks : NumPy, Pandas, PyTorch, PySpark, Tensorflow, Scikit-learn, Matplotlib, BeautifulSoup, Bootstrap, Flask 
Tools/Platforms : Jupyter, Google Colab, Anaconda , Power Bi, Tableau, VS Code, Git, MS Office Suite. 
Databases : SQL (MySQL, Oracle) , NoSQL (MongoDB) 
Others : Artificial Intelligence, Machine Learning, Deep Learning, Generative AI, Natural Language Processing (LLMs), Data Visualization and 
Analytics, Big Data Analytics, Information Retrieval, Quantum Computing, Cloud Computing, (AWS), UI/UX, Agile and Scrum, Software 
Development Life Cycle.           
</div>
        
        <div className={styles.abstract}>
          <Timeline />
        </div>
      </div>
      <TickerRow className={styles.ticker} />
    </div>
  );
};

export default About;
