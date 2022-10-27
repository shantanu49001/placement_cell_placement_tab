// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilMapPin, 
  UilArrowCircleUp,
  
  
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilMapPin,
    heading: "2021-22'",
  },
  {
    icon: UilMapPin,
    heading: "2020-21'",
  },
  {
    icon: UilMapPin,
    heading: "2019-20'",
  },
  {
    icon: UilMapPin,
    heading: "2018-19'"
  },
  {
    icon: UilMapPin,
    heading: "2017-18'"
  },
  {
    icon: UilMapPin,
    heading: "2016-17'"
  },
];

// Analytics Cards Data
export const cardsData202221 = [
  {
    title: "CSE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 98,
    value: "17.76LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64,6.7, 12.75, 11, 11.59, 17.76],
      },
    ],
  },
  {
    title: "ECE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 90,
    value: "10.67LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64,6.56,5.19,8.1, 6.48,  10.67],
      },
    ],
  },
  {
    title: "CSE MEDIAN",
    color: {
      backGround:"linear-gradient(180deg,#1e90ff 0%, #1e90ff 100%",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 98,
    value: "16.2LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64,6.7, 6.5, 6.5, 10.2, 16.2],
      },
    ],
  },
  {
    title: "ECE MEDIAN",
    color: {
      backGround:
        "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 90,
    value: "8.5LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64,6.56, 4.0, 5.0, 6.26, 8.5],
        Date:null,
      },
    ],
  },
];
export const cardsData202021 = [
  {
    title: "CSE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 87.5,
    value: "11.59LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64,6.7, 12.75, 11, 11.59],
      },
    ],
  },
  {
    title: "ECE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 66.67,
    value: "6.48LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64,6.56,5.19,8.1, 6.48],
      },
    ],
  },
  {
    title: "CSE MEDIAN",
    color: {
      backGround:"linear-gradient(180deg,#1e90ff 0%, #1e90ff 100%",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 87.5,
    value: "10.2LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.65,6.7, 6.5, 6.5,10.2],
      },
    ],
  },
  {
    title: "ECE MEDIAN",
    color: {
      backGround:
        "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 66.67,
    value: "6.26LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64,6.56, 4.0, 5.0,6.26],
        Date:null,
      },
    ],
  },
];
export const cardsData201920 = [
  {
    title: "CSE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 88,
    value: "11.0LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64,6.7, 12.75,11],
      },
    ],
  },
  {
    title: "ECE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 60,
    value: "8.1LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64,6.56,5.19,8.1],
      },
    ],
  },
  {
    title: "CSE MEDIAN",
    color: {
      backGround:"linear-gradient(180deg,#1e90ff 0%, #1e90ff 100%",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 88,
    value: "6.5LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64,6.7,6.5,6.5],
      },
    ],
  },
  {
    title: "ECE MEDIAN",
    color: {
      backGround:
        "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 60,
    value: "5.0LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64,6.56,4.0,5.0],
        Date:null,
      },
    ],
  },
];
export const cardsData201819 = [
  {
    title: "CSE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 83,
    value: "12.75LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [,5.64,6.7,12.75],
      },
    ],
  },
  {
    title: "ECE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 37,
    value: "5.19LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64,6.56,5.19],
      },
    ],
  },
  {
    title: "CSE MEDIAN",
    color: {
      backGround:"linear-gradient(180deg,#1e90ff 0%, #1e90ff 100%",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 83,
    value: "6.5LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64,6.7, 6.5],
      },
    ],
  },
  {
    title: "ECE MEDIAN",
    color: {
      backGround:
        "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 37,
    value: "4.0LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64,6.56, 4.0],
        Date:null,
      },
    ],
  },
];
export const cardsData201718 = [
  {
    title: "CSE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 78.1,
    value: "6.7LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64,6.7],
      },
    ],
  },
  {
    title: "ECE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 65.4,
    value: "6.56LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64,6.56],
      },
    ],
  },
  {
    title: "CSE MEDIAN",
    color: {
      backGround:"linear-gradient(180deg,#1e90ff 0%, #1e90ff 100%",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 78.1,
    value: "6.7LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64,6.7],
      },
    ],
  },
  {
    title: "ECE MEDIAN",
    color: {
      backGround:
        "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 65.4,
    value: "6.56LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64,6.56],
        Date:null,
      },
    ],
  },
];
export const cardsData201617 = [
  {
    title: "CSE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 62.5,
    value: "5.64LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64],
      },
    ],
  },
  {
    title: "ECE AVERAGE",
    color: {
      backGround: "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 62.5,
    value: "5.64LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "AVG",
        data: [5.64],
      },
    ],
  },
  {
    title: "CSE MEDIAN",
    color: {
      backGround:"linear-gradient(180deg,#1e90ff 0%, #1e90ff 100%",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 62.5,
    value: "5.64LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64],
      },
    ],
  },
  {
    title: "ECE MEDIAN",
    color: {
      backGround:
        "linear-gradient(180deg, #1e90ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 6.25,
    value: "5.64LPA",
    png: UilArrowCircleUp,
    series: [
      {
        name: "MEDIAN",
        data: [5.64],
        Date:null,
      },
    ],
  },
];

