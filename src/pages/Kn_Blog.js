
import React from 'react'
import { useEffect } from "react";
import { useState } from 'react';
import CourseCard from "./BlogCard";

function Kn_Blog() {


    // json starts from here 

    const Courses = [
        {
          id:1,
          "course_img": "https://ik.imagekit.io/microdegree/Blog/m_UXtpKZb-A.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667799074794",
          "course_category":'08 DEC 2020 •7 MIN READ',
          "course_name":'ವೃತ್ತಿ ಜೀವನದ ಜೊತೆಗೆ ಸಿ++/ C++',
          "course_desc":'ವ್ಯಾಪಕ ಜ್ಞಾನ ಹೊಂದಿರುವ ಅಭ್ಯರ್ಥಿಗಳಿಗೆ ಸಿ++ ಪ್ರೋಗ್ರಾಮಿಂಗ್‌ನಲ್ಲಿ ಪ್ರಕಾಶಮಾನವಾದ ನಿರೀಕ್ಷೆಗಳು ಮತ್ತು ವಿವಿಧ ಮಾರ್ಗಗಳಿವೆ. ಸಿ++ ಪ್ರೊಗ್ರಾಮಿಂಗ್‌ನಲ್ಲಿನ ವೃತ್ತಿಜೀವನದ ಬಗ್ಗೆ ನಿಮಗೆ ತಿಳಿದಿಲ್ಲದಿದ್ದರೆ, ನೀವು ಸರಿಯಾದ ಸ್ಥಳಕ್ಕೆ ಬಂದಿದ್ದೀರಿ. ಇಲ್ಲಿ, ಸಿ ++ ಭಾಷೆಯಲ್ಲಿ ಅಗತ್ಯವಿರುವ skillಗಳನ್ನು ಹೊಂದಿದ ವ್ಯಕ್ತಿಗೆ ಲಭ್ಯವಿರುವ ವಿಭಿನ್ನ ಅವಕಾಶಗಳನ್ನು ನಾವು ಅನ್ವೇಷಿಸಲಿದ್ದೇವೆ.',
          "course_link":'https://courses.microdegree.work/courses/aws-developer-certification-live',
          "course_status":['daily live'],
        
        },
        {
          "id":2,
          "course_name":'ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಕಲಿಯುವುದು ಹೇಗೆ?',
          "course_img":"https://ik.imagekit.io/microdegree/Blog/q_uqCu24b6J.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667800290040",
          "course_link":"https://form.jotform.com/222551029277051?whichCourse=Automation Testing - Java",
          "course_desc":"ಕೋಡ್ ಕಲಿಯುವುದು ಈ ದಿನಗಳಲ್ಲಿ ಜನಪ್ರಿಯವಾಗಿರುವ ಹೊಸ ಕೌಶಲ್ಯ/ Skill. ಇದು ತುಂಬಾ ಬೇಡಿಕೆಯಿದ್ದು, ಶಾಲೆಗಳು ಸಹ ತಮ್ಮ ಪಠ್ಯಕ್ರಮದಲ್ಲಿ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಅನ್ನು ಸೇರಿಸಿದೆ. ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಮತ್ತು ಕೋಡಿಂಗ್ ಅನ್ನು ಹೆಚ್ಚಾಗಿ ವಿನಿಮಯವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ ಆದರೆ ಎರಡೂ ವಿಭಿನ್ನವಾಗಿವೆ ಮತ್ತು ನೀವು ಅವುಗಳ ಬಗ್ಗೆ ಇಲ್ಲಿ ಓದಬಹುದು. ಪ್ರತಿ ಮನೆಗೆಲಸವನ್ನು ಡಿಜಿಟಲೀಕರಣಗೊಳಿಸಲಾಗುತ್ತಿದೆ",
          "course_category":'07 NOV 2020 •10 MIN READ',
          "course_status":['daily live'],
      
        },
        {
          id:3,
          "course_img": "https://ik.imagekit.io/microdegree/Blog/t_BoGpdpQPf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667799061470",
          "course_category":'09 NOV 2020 •8 MIN READ',
          "course_name":'2020 ರಲ್ಲಿ ಮಾಸ್ಟರ್ ಮಾಡಲು ಟಾಪ್ 10 ಟ್ರೆಂಡಿಂಗ್ ತಂತ್ರಜ್ಞಾನಗಳು(Technology)',
          "course_desc":"Technology ಯು rapid speed ಅಲ್ಲಿ ನಿರಂತರವಾಗಿ ನವೀಕರಿಸುತ್ತಿದೆ, ಅದು ಬೆಳಕಿಗಿಂತ ವೇಗವಾಗಿರಬಹುದು ಎಂದು ತೋರುತ್ತದೆ! ಈ ವಾರ use ಮಾಡುತ್ತಿರುವ technology ಅಥವಾ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಭಾಷೆ ಮುಂದಿನ ಕೆಲವು ದಿನಗಳಲ್ಲಿ ಬಳಕೆಯಲ್ಲಿಲ್ಲದಿರಬಹುದು! ಸಂಶೋಧನೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿಯಲ್ಲಿ ಹೆಚ್ಚು ಹೆಚ್ಚು ಹಣವನ್ನು ಹೂಡಿಕೆ ಮಾಡಲಾಗಿರುವುದರಿಂದ, ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನಿಗಳು",
          "course_link":'https://form.jotform.com/222551029277051?whichCourse=Network certifications(CCNA)',
          "course_status":['daily live'],
        },
        {
          id:4,
          "course_img": "https://ik.imagekit.io/microdegree/Blog/t_qFfq7lgBz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667799564253",
          "course_category":'09 NOV 2020 •14 MIN READ',
          "course_name":'Web Developers ಗೆ ಬಿಗಿನರ್ಸ್ ಗೈಡ್',
          "course_desc":"ನೀವು Web Developer ಆಗಲು ಬಯಸುವಿರಾ ಆದರೆ ಎಲ್ಲಿಂದ ಪ್ರಾರಂಭಿಸಬೇಕು ಎಂದು ತಿಳಿದಿಲ್ಲವೇ? ಇಂದು, ನಿಮ್ಮ Web Development ಪ್ರಯಾಣದ ಸಂಪೂರ್ಣ guides ನಾವು ನೀಡುತ್ತೇವೆ. ನೀವು ಓದುವಿಕೆಯನ್ನು ಬಿಟ್ಟು Web Development ಸರಿಯಾಗಿ ಕಲಿಯಲು ಬಯಸಿದರೆ, ನೀವು ಈ ಉತ್ತಮ free ಕೋರ್ಸ್‌ಗೆ ಭೇಟಿ ನೀಡಬಹುದು, Web Development scratchನಿಂದ ಕಲಿಯಿರಿ: Syntax ಜೊತೆಗೆ.",
          "course_link":'https://courses.microdegree.work/courses/python',
          "course_status":['daily live'],
        },
        {
          "id":5,
          "course_name":'ಪೈಥಾನ್ ಕಲಿಕೆ: Zeroದಿಂದ Heroತನಕ',
          "course_img":"https://ik.imagekit.io/microdegree/Blog/o_N1qN92C3sf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667800290126",
          "course_link":"https://courses.microdegree.work/courses/full-stack-web-development-certification",
          "course_desc":"ಉನ್ನತ-ಮಟ್ಟದ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಭಾಷೆ, ಮತ್ತು ಅದರ core design philosophyವು ಕೋಡ್ ಓದುವಿಕೆ ಮತ್ತು ಸಿಂಟ್ಯಾಕ್ಸ್ ಬಗ್ಗೆ ಆಗಿದೆ, ಇದು ಪ್ರೋಗ್ರಾಮರ್ಗಳಿಗೆ ಕೆಲವು conceptಗಳನ್ನು ವ್ಯಕ್ತಪಡಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.",
          "course_category":'06 NOV 2020• 18 MIN READ',
          "course_status":['daily live'],
     },
    {
          id:6,
          "course_img": "https://ik.imagekit.io/microdegree/Blog/n_0KcO4sU6dx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667800290162",
          "course_category":'06 NOV 2020• 8 MIN READ',
          "course_name":'Java — What, Where, How & Job Opportunities',
          "course_desc": "Java Career Opportunities ನಮಗೆ ವಿವಿಧ Java career ಆಯ್ಕೆಗಳ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ, ಜೊತೆಗೆ Java ವೃತ್ತಿಜೀವನದ ಸಂಬಳವನ್ನೂ ನೀಡುತ್ತದೆ. ಇದರೊಂದಿಗೆ, ನಾವು ವಿವಿಧ java job roleಗಳು ಮತ್ತು java developerಗೆ ಅಗತ್ಯವಿರುವ ಕೌಶಲ್ಯಗಳನ್ನು ಚರ್ಚಿಸುತ್ತೇವೆ.",
          "course_status":['daily live'],
          "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:7,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/s__ECuM8Z4P.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667800289845",
      "course_category":'08 NOV 2020 •11 MIN READ',
      "course_name":'ನಿಮ್ಮ Dream Projectನ್ನು Find ಮಾಡಲು ಇರುವ ಭಾರತದ Top Freelancing Sites',
      "course_desc": "ನಿಮ್ಮ ಹವ್ಯಾಸವನ್ನು ಆದಾಯ ಗಳಿಸುವ ಕಲ್ಪನೆಯಾಗಿ ಪರಿವರ್ತಿಸಲು ಬಯಸುವಿರಾ? ಹೌದು ಎಂದಾದರೆ, ಇಂದು ಕೆಲವು ಹೆಚ್ಚುವರಿ ಆದಾಯವನ್ನು ಗಳಿಸುವ ಅತ್ಯುತ್ತಮ ಉದ್ಯೋಗವೆಂದರೆFreelancing. ",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:8,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/p_Y9kDvNJoE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667800290208",
      "course_category":'08 NOV 2020 •11 MIN READ',
      "course_name":'How To Learn Programming',
      "course_desc": "ಕೋಡ್ ಕಲಿಯುವುದು ಈ ದಿನಗಳಲ್ಲಿ ಜನಪ್ರಿಯವಾಗಿರುವ ಹೊಸ ಕೌಶಲ್ಯ/ Skill. ಇದು ತುಂಬಾ ಬೇಡಿಕೆಯಿದ್ದು, ಶಾಲೆಗಳು ಸಹ ತಮ್ಮ ಪಠ್ಯಕ್ರಮದಲ್ಲಿ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಅನ್ನು ಸೇರಿಸಿದೆ. ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಮತ್ತು ಕೋಡಿಂಗ್ ಅನ್ನು ಹೆಚ್ಚಾಗಿ ವಿನಿಮಯವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ ಆದರೆ ಎರಡೂ ವಿಭಿನ್ನವಾಗಿವೆ ಮತ್ತು ನೀವು ಅವುಗಳ ಬಗ್ಗೆ ಇಲ್ಲಿ ಓದಬಹುದು. ಪ್ರತಿ ಮನೆಗೆಲಸವನ್ನು ಡಿಜಿಟಲೀಕರಣಗೊಳಿಸಲಾಗುತ್ತಿದೆ",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:9,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/r_jR3b6xwUOj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667800290537",
      "course_category":'08 NOV 2020 •10 MIN READ',
      "course_name":'ಪೈಥಾನ್ ಡೆವಲಪರ್ ಆಗುವುದು ಹೇಗೆ: ಪೈಥಾನ್‌ಗಾಗಿ ಕಲಿಕೆಯ ಹಾದಿ',
      "course_desc": "ಜಾವಾ ಜಗತ್ತಿನಲ್ಲಿ, ಪೈಥಾನ್ ವೇಗವಾಗಿ ಪಟ್ಟಿಯಲ್ಲಿ ಸ್ಥಾನ ಪಡೆಯುತ್ತಿದೆ. Python Developers ಬೇಡಿಕೆಯಲ್ಲಿ ಹೆಚ್ಚು, ಮತ್ತು ಪೂರೈಕೆಯಲ್ಲಿ ಅಷ್ಟೊಂದು ಹೆಚ್ಚಿಲ್ಲ. ಇದರರ್ಥ ಅವರು ಸಹ ಸಾಕಷ್ಟು ಸಂಬಳ ಪಡೆಯುತ್ತಾರೆ.",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:10,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/k_XsiKBXoiv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667802374878",
      "course_category":'05 NOV 2020• 15 MIN READ',
      "course_name":'Internet ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ?',
      "course_desc": "ಇಂಟರ್ನೆಟ್ ಪ್ರೊಟೊಕಾಲ್(Internet Protocol) (IP), Transport Control Protocol(TCP) ಮತ್ತು ಇತರ ಪ್ರೋಟೋಕಾಲ್‌(Protocol)ಗಳಿಗೆ ಅನುಸಾರವಾಗಿ packet routing network ಮೂಲಕ Internet ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:11,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/l_hheQMBqUr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667802525359",
      "course_category":'05 NOV 2020• 9 MIN READ',
      "course_name":'HTML ಮೂಲಗಳು',
      "course_desc": "ಎಚ್ಟಿಎಮ್ಎಲ್ (ಹೈಪರ್ಟೆಕ್ಸ್ಟ್ ಮಾರ್ಕಪ್ ಲಾಂಗ್ವೇಜ್) ಎನ್ನುವುದು ವೆಬ್ page ಮತ್ತು ಅದರ contentನ್ನು ರಚಿಸಲು ಬಳಸುವ ಕೋಡ್ ಆಗಿದೆ. ಉದಾಹರಣೆಗೆ, contentನ್ನು ಪ್ಯಾರಾಗ್ರಾಫ್‌ಗಳ ಗುಂಪಿನಲ್ಲಿ, ಬುಲೆಟೆಡ್ ಪಾಯಿಂಟ್‌ಗಳ ಪಟ್ಟಿಯಲ್ಲಿ ಅಥವಾ ಚಿತ್ರಗಳು ಮತ್ತು ಡೇಟಾ ಟೇಬಲ್‌ಗಳನ್ನು ಬಳಸಿ ರಚಿಸಬಹುದು. ಶೀರ್ಷಿಕೆಯು ಸೂಚಿಸುವಂತೆ, ಈ ಲೇಖನವು ನಿಮಗೆ HTML ಮತ್ತು ಅದರ ಕಾರ್ಯಗಳ ಬಗ್ಗೆ ಮೂಲಭೂತ ತಿಳುವಳಿಕೆಯನ್ನು ನೀಡುತ್ತದೆ.",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:12,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/i_YPpWqLxeu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667802883905",
      "course_category":'04 NOV 2020• 8 MIN READ',
      "course_name":'ಡೇಟಾ ಸೈನ್ಸ್: ಬಿಗಿನರ್ಸ್‌ಗಾಗಿ ಒಂದು ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ',
      "course_desc": "ಡೇಟಾ ಸೈನ್ಸ್/ದತ್ತಾಂಶ ವಿಜ್ಞಾನವು ಅಂತರ-ಶಿಸ್ತಿನ ಕ್ಷೇತ್ರವಾಗಿದ್ದು, ಅನೇಕ ರಚನಾತ್ಮಕ ಮತ್ತು ರಚನೆರಹಿತ ದತ್ತಾಂಶಗಳಿಂದ ಜ್ಞಾನ ಮತ್ತು ಒಳನೋಟಗಳನ್ನು ಹೊರತೆಗೆಯಲು ವೈಜ್ಞಾನಿಕ ವಿಧಾನಗಳು, ಪ್ರಕ್ರಿಯೆಗಳು, ಕ್ರಮಾವಳಿಗಳು ಮತ್ತು ವ್ಯವಸ್ಥೆಗಳನ್ನು ಬಳಸುತ್ತದೆ.",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:13,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/j_EtxzZrtl7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667803191236",
      "course_category":'04 NOV 2020• 14 MIN READ',
      "course_name":'ವೆಬ್ ಅಭಿವೃದ್ಧಿಗೆ ಬಿಗಿನರ್ಸ್ ಗೈಡ್',
      "course_desc": "ನೀವು Web Developer ಆಗಲು ಬಯಸುವಿರಾ ಆದರೆ ಎಲ್ಲಿಂದ ಪ್ರಾರಂಭಿಸಬೇಕು ಎಂದು ತಿಳಿದಿಲ್ಲವೇ? ಇಂದು, ನಿಮ್ಮ Web Development ಪ್ರಯಾಣದ ಸಂಪೂರ್ಣ guides ನಾವು ನೀಡುತ್ತೇವೆ. ನೀವು ಓದುವಿಕೆಯನ್ನು ಬಿಟ್ಟು Web Development ಸರಿಯಾಗಿ ಕಲಿಯಲು ಬಯಸಿದರೆ, ನೀವು ಈ ಉತ್ತಮ free ಕೋರ್ಸ್‌ಗೆ ಭೇಟಿ ನೀಡಬಹುದು,",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:14,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/g_-1PvmrXJt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667803375749",
      "course_category":'03 NOV 2020• 9 MIN READ',
      "course_name":'ಫ್ರಂಟ್ಎಂಡ್ ಡೆವಲಪರ್ಸ್ ವರ್ಸಸ್ ಬ್ಯಾಕ್ಎಂಡ್ ಡೆವಲಪರ್ಸ್ ವರ್ಸಸ್ ಫುಲ್ ಸ್ಟ್ಯಾಕ್ ಡೆವಲಪರ್ಸ್',
      "course_desc": "ಫ್ರಂಟ್ಎಂಡ್ ಮತ್ತು ಬ್ಯಾಕ್ಎಂಡ್(Frontend and Backend) ವೆಬ್ ಅಭಿವೃದ್ಧಿಯಲ್ಲಿ(development) ಬಳಸುವ ಎರಡು ಜನಪ್ರಿಯ ಪದಗಳಾಗಿವೆ. ವೆಬ್ ಅಭಿವೃದ್ಧಿಗೆ ಈ ಪದಗಳು ಬಹಳ ನಿರ್ಣಾಯಕ/crucial ಆದರೆ ಪರಸ್ಪರ ಭಿನ್ನವಾಗಿವೆ/different.",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:15,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/o_NKlxWFp2E.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667805605429",
      "course_category":'03 NOV 2020• 15 MIN READ',
      "course_name":'ಬಿಗಿನರ್ಸ್‌ಗಾಗಿ ಗಿಟ್ ಮತ್ತು ಗಿಟ್‌ಹಬ್‌ನ/ಒಂದು ಪರಿಚಯ',
      "course_desc": "GitHub Version control ಮತ್ತು ಸಹಯೋಗಕ್ಕಾಗಿ ಕೋಡ್ ಹೋಸ್ಟಿಂಗ್ ವೇದಿಕೆಯಾಗಿದೆ. ಇದು ನಿಮಗೆ ಮತ್ತು ಇತರರಿಗೆ ಎಲ್ಲಿಂದಲಾದರೂ ಯೋಜನೆಗಳಲ್ಲಿ ಒಟ್ಟಾಗಿ ಕೆಲಸ ಮಾಡಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:16,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/d_KlOplg_ns.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667803662011",
      "course_category":'02 NOV 2020• 12 MIN READ',
      "course_name":'CSS Basics',
      "course_desc": "ಸಿಎಸ್ಎಸ್(CSS) (Cascading Style Sheet) ವೆಬ್ contentನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸುವ ಕೋಡ್ ಆಗಿದೆ. ಸಿಎಸ್ಎಸ್ ಬೇಸಿಕ್ಸ್, ಕಲಿಯಲು ಬೇಕಾದ ವಿಷಯವನ್ನು ತಿಳಿಸುತ್ತದೆ. ನಾನು textಗಳನ್ನು ಕೆಂಪು ಬಣ್ಣಕ್ಕೆ ಹೇಗೆ ಮಾಡುವುದು? ನನ್ನ ವೆಬ್‌ಪುಟವನ್ನು background colorಗಳು ಮತ್ತು ಬಣ್ಣಗಳಿಂದ ಅಲಂಕರಿಸುವುದು ಹೇಗೆ? ಎನ್ನುವ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತೇವೆ.",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
    {
      id:17,
      "course_img": "https://ik.imagekit.io/microdegree/Blog/e_yUUEQ_nZCO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667805096313",
      "course_category":'02 NOV 2020• 9 MIN READ',
      "course_name":'Beginnersಗಾಗಿ ಡೇಟಾ ಸೈನ್ಸ್',
      "course_desc": "ಈ ಶತಮಾನದ ಅತ್ಯಂತ Sensual ಕೆಲಸವೆಂದು ಕರೆಯಲ್ಪಡುವ ಡಾಟಾ ಸೈನ್ಸ್ ನಮ್ಮಲ್ಲಿ ಅನೇಕರಿಗೆ ಕನಸಿನ ಕೆಲಸವಾಗಿದೆ. ಆದರೆ ಕೆಲವರಿಗೆ ಇದು ಸವಾಲಿನಂತೆ ತೋರುತ್ತಿದೆ ಮತ್ತು ಎಲ್ಲಿಂದ ಪ್ರಾರಂಭಿಸಬೇಕು ಎಂದು ಅವರಿಗೆ ತಿಳಿದಿಲ್ಲ. ನೀವು ಅವರಲ್ಲಿ ಒಬ್ಬರಾಗಿದ್ದರೆ, ನಂತರ ಓದುವುದನ್ನು ಮುಂದುವರಿಸಿ.",
      "course_status":['daily live'],
      "course_link":'https://courses.microdegree.work/courses/mysql',
    },
      ]

//   #function starts from here    

    const [status, setStatus] = useState("daily live")
    const [courseOutput, setCourseOutput] = useState(Courses)

    useEffect(() => {

        if(status===''){
          setCourseOutput(Courses)
        }
        else{
          setCourseOutput(Courses.filter((item)=>item.course_status.includes(status)))
        }
    }, [status])

    console.log(status.includes('live'))



  return (

<div>

<div className='w-full flex flex-col  space-y-3 2xl:space-y-4' style={{marginTop:"50px",backgroundColor:"#000",padding:"80px"}}>
    <div className='px-5 sm:px-0 w-full flex flex-col space-y-3 2xl:space-y-5'>

    <center>
    <h1 className='sm:text-5xl text-4xl 2xl:text-6xl  text-gray-700  mb-4' style={{color:"#fff"}}> <span className='font-[600]'>MicroDegree </span>Blogs</h1>

      <p className="max-w-[800px] font-regular text-gray-700 text-base xl:text-lg 2xl:text-xl" style={{color:"#fff"}}>
      Learn Job Ready skills in Kannada
        </p>
        </center>
    </div>
 
    </div>
    
<div className='sm:flex w-full px-10 md:px-14 xl:px-18 2xl:px-18  items-center hidden '>
    <div className="w-full h-full basis-1/2 flex items-center pb-10 xl:mt-20 2xl:mt-14">
      <div className=" px-5 overflow-visible w-fit   h-fit min-w-[380px]  text-left space-y-9">
        <div className="space-y-7 min-w-[450px] max-w-[600px] 2xl:max-w-[600px]">
        <h1 className='text-3xl xl:text-4xl sm:text-[2.3rem] sm:leading-[2.4rem] 2xl:text-5xl font-bold leading-[2.4rem] 2xl:leading-[3.1rem] text-gray-700'>
          <span className='w-full font-benne xl:text-5xl white '>ಡೇಟಾ ಸೈನ್ಸ್ ಅಲ್ಲಿ ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಪ್ರಾರಂಭಿಸಿ</span> 
        </h1>
        <p className="text-sm 1xl:text-lg font-medium w-fit"><b>ಡೇಟಾ ಸೈನ್ಸ್ ಅಲ್ಲಿ ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಪ್ರಾರಂಭಿಸಿ : ನಿಮ್ಮ ಆಯ್ಕೆಗಳು ಯಾವುವು?</b></p>
        <p className="text-sm 1xl:text-lg font-medium w-fit">
        ಡೇಟಾ ವಿಜ್ಞಾನ ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಯುವುದರಿಂದ ನಿಮ್ಮ ವೃತ್ತಿಜೀವನದಲ್ಲಿ ಕ್ರಾಂತಿಯುಂಟಾಗುತ್ತದೆ. ಆದರೆ ದುರದೃಷ್ಟವಶಾತ್, ನೀವು ಪೈಥಾನ್ ಅಥವಾ ಆರ್, ಎಸ್‌ಕ್ಯುಎಲ್ ಮತ್ತು ಇತರ ಅಗತ್ಯ ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯಗಳನ್ನು ಕರಗತ ಮಾಡಿಕೊಂಡ ತಕ್ಷಣ ಉತ್ತಮ ಉದ್ಯೋಗಗಳು ಆಕಾಶದಿಂದ ಬೀಳುವುದಿಲ್ಲ.
        ಕೆಲಸ ಹುಡುಕಲು ಸಮಯ ಮತ್ತು ಶ್ರಮ ಬೇಕಾಗುತ್ತದೆ. ಸರಿಯಾದ ಕೆಲಸವನ್ನು ಹುಡುಕಲು ಸಮಯ, ಶ್ರಮ ಮತ್ತು ಜ್ಞಾನ ಬೇಕಾಗುತ್ತದೆ.        </p>
        <div className='space-x-8'>
          <button className=" p-[0.9rem] px-9 bg-[#FF0049] text-white text-base 2xl:text-lg rounded-md">10 DEC 2020 •7 MIN READ</button>
        </div> 
        </div>

      </div>
    </div>
    <div className='px-10 basis-1/2 relative'>
      <div className='w-fit relative'>
        <img className='2xl:w-[550px] w-[550px] xl:w-[600px]' style={{borderRadius:"10px"}} src="https://ik.imagekit.io/microdegree/Blog/v_CdL2jA470.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667797873463" alt="" loading="lazy"/>
       
      </div>
      </div>
  </div>

    
    <div className="w-full h-full py-5 px-10 md:px-14 xl:px-18 2xl:px-20   space-y-8" id="courses">
    <center>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {
        courseOutput.map(item=>(
          <CourseCard key={item.id} desc={item.course_desc} course_details={item.course_details} courseLink={item.course_link} title={item.course_name} category={item.course_category} cardImg={item.course_img} price={item.course_price} ></CourseCard>
        ))
      }
    </div>

    </center>
    <div className='py-2'>
    <a href="https://courses.microdegree.work/pages/premium-courses">
      <button className="h-fit sm:hidden bg-purple-700 text-white text-sm rounded-md px-6 py-3 ">See All Courses</button>
    </a>
    </div>
  </div>
  </div>
  )
}

export default Kn_Blog