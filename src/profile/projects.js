export const ExpProjects = [
    {
        title: "DSTA Brainhack 2020",
        subtitle: "Champion - Today I Learned (TIL) Artificial Intelligence (AI) Camp",
        linktitle: "Github Repo",
        category: "competition",
        image: "assets/images/projects/dsta_pic.JPG",
        link: "https://github.com/xfated/DSTA_BrainHack2020_TIL_Group6",
        briefdesc:"Proud to say that my team has emerged Champion for this competition!",
        details:[
            "<h3>What is it?",
            "TIL 2020 is a competition organized by the Defence Science and Technology Agency as part of BrainHack2020 which involves Natural Language Processing and Computer Vision to train a robot to complete challenges autonomously.",
            "",
            "<h3>What did I accomplish?",
            "<boldfirst>Achieved 1st place out of 92 Uni/Poly teams.", 
            "<boldfirst>Implemented transfer learning to create object detection models.",
            "<boldfirst>Adapted image augmentation script into data pipeline to enhance model training.",
            "<boldfirst>Developed code logic and applied object detection models in robot to autonomously identify objects, navigate obstacles and retrieve target."
            ],
        year: "2020"
    },
    {
        title: "LumiNus",
        subtitle: "NUS Robomaster - Team LumiNUS",
        linktitle: "Midterm Video",
        category: "competition",
        image: "assets/images/projects/robomaster.JPG",
        link: "https://www.youtube.com/watch?v=puT_16ck2c8&feature=youtu.be",
        briefdesc: "I was part of the pioneering team in NUS that laid the foundation and built the first prototypes.",
        details: [
            "<h3>What is it?",
            "RoboMaster is an annual robotics competition held in Shenzhen, China and is organized by DJI. The purpose of " +
            "RoboMaster is to develop young talents in the field of robotics and engieering.",
            "",
            "<h3>What did I accomplish?", 
            "<boldfirst>Part of the standard robot development team.", 
            "<boldfirst>Developed real-time software architecture for robots to interface with different sensors and motors.", 
            "<boldfirst>Implemented control loops for precise movement control.",
            "<boldfirst>Embedded systems development in an ARM Cortex microcontroller."
            ],
        year: "2020"
    },
    {
        title: "Call For Code 2020",
        subtitle: "SCDF X IBM Lifesavers' Innovation Challenge",
        linktitle: "Github Repo",
        category: "hackathon",
        image: "assets/images/projects/scdfxibm.jpeg",
        link: "https://github.com/xfated/BBM-ekaWay_SCDFXIBM",
        briefdesc: "For this hackathon, my team and I have tackled the issue of how the traffic jams that plague " +
            "our roads can affect the efficiency of our emergency responders.",
        details: [
            "<h3>Problem Statement:",
            "How might we leverage a network of smart infrastructure in the built environment to make better and more timely " +
            "sense of emergency incidents (e.g. detection of fires developing, building collapses, falls, road traffic accidents " +
            "etc.) and to trigger early intervention measures, without the need to activate precious emergency resources?",
            "",
            "<h3>Our Solution:",
            "Our solution aims to **notify drivers in advance** and make the **journey smoother and more efficient** for emergency vehicles.", 
            "",
            "<boldfirst>Using the streetlights as visual signals for drivers to keep to the side of the roads.",
            "<boldfirst>Preemptive control of traffic lights to prepare an uninterrupted route to the scene of an emergency."
            ],
        year: "2020"
    },
    {
        title: "NUS-IEEE Online Hackathon Fortnight",
        subtitle: "Achieved 4th place",
        linktitle: "",
        category: "hackathon",
        image: "assets/images/projects/dunduino.jpg",
        link: "",
        briefdesc: "Our project, FLOMK, is an interactive pet that simulates the experience of raising a pet." + 
                "Prototyped with Arduino, it's as realistic as it can get!",
        details: [
            "<h3> What is it?",
            "Organized by the IEEE NUS Student Branch, the Hackathon aims to provide a platform for cross-disciplinary appreciation and" +
            " project implementation (hardware and software) with an end goal of exposing the varsity landscape to hack culture.",
            "",
            "<h3>Problem statement:",
            "Using design concepts, create a software or hardware product that can benefit and contribute to environmental change in your community.",
            "", 
            "<h3>Problem identified:", 
            "Irresponsible pet keeping results in undesirable release of invasive species into the ecosystem, endangering local wildlife.",
            "",
            "<h3>Identified HMW statement:",
            "How might we use **technology** to create an **edutainment** tool to teach proper **petkeeping skills** to **young children**?",
            "", 
            "<h3>Solution - FLOMK [Free Landscape Of Meddling Kritters]", 
            "<boldfirst>Interactive pet that helps to simulate the experience of raising a pet.",
            "<boldfirst>Used arduino for robotic control.",
            "<boldfirst>LED with photodetector to simulate feeding the pet.",
            "<boldfirst>Object detection for responsive behaviour to changes in the environment.", 
            "<boldfirst>Robotic pet will be used in conjuction with a mobile app."
            ],
        year: "2020"
    },
    {
        title: "PRISM",
        subtitle: "A Social Hackathon and Festival",
        linktitle: "Presentation Slides",
        category: "hackathon",
        image: "assets/images/projects/prism.JPG",
        link: "https://drive.google.com/file/d/1oaAsI7h5FYOpiSrG5MnFDc9Bb74puJyA/view?usp=sharing",
        briefdesc: "Turnout is a platform that provides informal avenues to connect people who need mental support " +
                "to those who are willing to interact and share.",
        details: [
            "<h3>What is it?",
            "PRISM is a weekend-long social hackathon and festival that aims to provide a platform for youths to generate innovative, and sustainable, solutions to challenge statements sourced from community partners.",
            "",
            "<h3>Solution - Turnout", 
            "<boldfirst>Platform that provides informal avenues to connect people who need mental support to those who are willing to interact and share.", 
            "<boldfirst>Platform to connect two categories of people.",
            "<boldfirst>Partake in discounted activities together.",
            "<boldfirst>Conversation prompts that encourage sharing.",
            "<boldfirst>Overcome the stigma behind seeking help.",
            ],
        year: "2020"
    },
    {
        title: "Line2Image Generation",
        subtitle:"",
        linktitle: "Google Colab Notebook",
        category: "sideproject",
        image:"assets/images/projects/line2img.JPG",
        link:"https://colab.research.google.com/drive/1oNHmhXipeI62CtVRLgaYoUej0sl4Brsc?usp=sharing",
        briefdesc:"A mini project to experiment with pix2pix generation using CNNs",
        details:[
            "<h3>Inspiration",
            "I just wanted to do a project using CNNs",
            "",
            "<h3>Data",
            "<boldfirst>Used fatkun to batch download images from the internet.",
            "<boldfirst>Canny edge detection to extract edges from original image.",
            "",
            "<h3>Method",
            "<boldfirst>U-Net model to create an output image of the same size as the input.",
            "<boldfirst>VGG16 network as a feature extractor to compare the generated image and the original image.",
            "<boldfirst>Root mean squared distance between the two features as loss function."
        ],
        year:"2020"
    },
    {
        title: "Gym Equipment Classifier",
        subtitle:"",
        linktitle: "Website Deployment",
        category: "sideproject",
        image:"assets/images/projects/gymclass.JPG",
        link:"https://xfated.github.io/gymclass/",
        briefdesc:"I used transfer learning to create a gym equipment classifier :)",
        details:[
            "<h3>Motivation",
            "<boldfirst>When the thought of losing weight and getting in shape presents itself, a common go-to place that many think of is the local gym. " + 
            "However, these new gym-goers who enter the place for the first time face a very similar experience. ",
            "Their untrained eyes breeze past a sea of foreign objects as they head towards the only equipment they know: dumbbells and treadmills. " + 
            "The occasional motivation to try out new machines might surface, only to be quickly brushed aside by the intimidating looks of massive bulking beasts or nonchalant individuals with their earpieces plugged in.",
            "If only there was an easier way to make sense of these complicated machinery and learn how to use them...",
            "",
            "<boldfirst>P.S. This is a proof of concept I did with only 8 different types of gym equipment.",
            "",
            "<h3>What I did",
            "<boldfirst>Batch downloaded images of gym equipment online.",
            "<boldfirst>Finetuned on a pretrained VGG16 network.",
            "<boldfirst>Used vanilla html and css to deploy it on a website."
        ],
        year:"2020"
    },
    {
        title: "K-Means Image Processing",
        subtitle:"",
        linktitle: "Github Repo",
        category: "sideproject",
        image:"assets/images/projects/kmeans.jpg",
        link:"https://github.com/xfated/kmeans-picturecompression",
        briefdesc:"Using K-means clustering to decrease the number of colors in an image.",
        details:[
            "<h3>What is it about?",
            "This project explores the use of K-means clustering to identify the most common colors " + 
            "in an image, and repalces all pixels with the closest color.",
            "",
            "<h3>Motivation",
            "<boldfirst>i find the minimalist versions of pictures to have a unique and pleasing aesthetic."
        ],
        year:"2020"
    },
    {
        title: "Telegram Chatbot",
        subtitle:"",
        linktitle: "Telegram Bot",
        category: "sideproject",
        image:"assets/images/projects/toiletpaperbot.JPG",
        link:"http://t.me/paper_toilet_bot",
        briefdesc:"A short project done to explore the use of Google's Dialogflow for chatbots.",
        details:[
            
        ],
        year:"2020"
    },
    {
        title: "",
        subtitle:"",
        linktitle: "",
        category: "",
        image:"assets/images/projects/",
        link:"",
        briefdesc:"",
        details:[

        ],
        year:""
    }
]