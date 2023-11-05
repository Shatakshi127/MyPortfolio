import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [
    {
      cardTitle: "Indian Institute of Technology-BHU",
      cardSubtitle: "Research Intern",
      cardDetailedText:
        "Created an AI-based platform for visual impaired, a comprehensive digital information system serving parents and stakeholders, with a focus on job opportunities, advocacy, and understanding visual impairment. The research encompasses solutions like education, communication, entertainment, mobility, and daily living; leveraging Generative AI technologies, including GPT-4, LSTM, CNNs, and GANs like Wasserstein GAN. Auditory sensitivity was addressed using algorithms such as AudVisNet, and visual perception is enhanced through the integration of the Retinex model, ultimately aiming to improve accessibility and autonomy for individuals with visual impairments.",
    },
    {
      cardTitle: "CognifAI",
      cardSubtitle: "Software Engineer Intern",
      cardDetailedText:
        "Developed and implemented responsive and user-friendly websites. Built a cutting-edge mental health chatbot and integrated it into the website ensuring seamless communication. Built an AI-powered virtual assistant designed to provide support and resources for users struggling with mental health concerns. It utilizes Natural Language Processing (NLP) techniques, and employs machine learning algorithms such as LSTM (Long Short-Term Memory) and GPT-3. Conducted thorough testing, debugging, and optimization of code to enhance website performance.",
    },
    {
      cardTitle: "IETE",
      cardSubtitle: "Joint Secretary",
      cardDetailedText:
        "Coordinated and executed various administrative and operational tasks to support the organization's mission. Assisted in planning and organizing events, conferences, and meetings, ensuring smooth execution and participant engagement. Collaborated with cross-functional teams, managing communications and fostering strong relationships with members and stakeholders.",
    },
    {
      cardTitle: "GSSoC'23",
      cardSubtitle: " Contributor",
      cardDetailedText:
        "As a contributor, my role is to actively engage in open source projects, leveraging my skills and expertise to make meaningful contributions to the community. I strive to identify areas where I can add value, whether it's through coding, documentation, bug fixes, or testing. I collaborate with the project maintainers and fellow contributors, sharing ideas, discussing issues, and working towards the collective goal of improving the project.",
    },
  
    {
      cardTitle: "Livpal Enterprises",
      cardSubtitle: "Product Manager Trainee",
      cardDetailedText:
        "Conducted market research, competitive analysis, and gathering customer feedback to identify opportunities.Participated in cross-functional teams, collaborating with different departments such as engineering, design, and marketing, to ensure successful product launches and ongoing product support.",
    },
    {
      cardTitle: "HyperEdge",
      cardSubtitle: " Mentee at Winter of Blockchain",
      cardDetailedText:
        "Part of a team of mentees who are dedicated to the advancement of the blockchain and open-source community.",
    },
 
    {
      cardTitle: "ISTE",
      cardSubtitle: "Core Member",
      cardDetailedText:
        "Part of a team of students who are dedicated to the advancement of the technology and open-source community.",
    },
   
   
    
    {
      cardTitle: "IIITH",
      cardSubtitle: "Attendant of Summer School of AI",
      cardDetailedText:
        "Engaged in hands-on projects, applying machine learning techniques, and implementing neural networks using popular frameworks such as TensorFlow and PyTorch. Developed models using a recurrent neural network (RNN) with Long Short-Term Memory (LSTM) cells and conducted research on GANs.",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chrono
        useReadMore={true}
        items={items}
        slideShow
        hideControls={true}
        mode="VERTICAL_ALTERNATING"
        cardWidth={300}
        theme={{
          titleColor: "#6666ff",
          primary: "#6666ff",
          secondary: "#6666ff",
          cardBgColor: "#ffffff",
        }}
      >
        {/* <div className="chrono-icons">
          <img src={MlscSheild} alt="Mlsc Sheild" />
          <Trophy size={32} color="#000" weight="fill" />
        </div> */}
      </Chrono>
    </div>
  );
};

export default Timeline;
