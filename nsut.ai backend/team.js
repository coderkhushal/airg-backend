const express= require("express")
const router = express()

router.get("/",(req,res)=>{
    res.send([
        {
            name:"Mohit Chaurasiya",
            image:"https://media.licdn.com/dms/image/C5603AQGODyP7Y44yEQ/profile-displayphoto-shrink_800_800/0/1638076827122?e=1702512000&v=beta&t=CmaVgw3OKzL3aWud4YpODFiiFoLLx-xmgQ846twT4Po",
            post:"Founder",
            about:"Research Associate at Harvard University, Researcher at NUS, Visiting Scholar at UVA and Mentor at MIT Policy Hackathon 2022.",
            github:"https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
            linkedin:"https://www.linkedin.com/in/mohitc02/"

        },
        {
            name:"Harshit Kumar",
            image:"https://media.licdn.com/dms/image/C4D03AQHBYO-of7DLVg/profile-displayphoto-shrink_800_800/0/1651331126607?e=1702512000&v=beta&t=oNF-w7JlVJDMjXhrPTOF4JvjGnevpfifj4QpMdzmqdE",
            post:"President",
            about:"Research paper (STCAI), NLP, CV, DL, ML",
            github:"https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
            linkedin:"https://www.linkedin.com/in/harshit-kumar-/"

        },
        {
            name:"Poojan Vachharajani",
            image:"https://media.licdn.com/dms/image/D4D03AQFlLGHmpSd12A/profile-displayphoto-shrink_400_400/0/1682360774302?e=1702512000&v=beta&t=Txuy3xkudxSa0g4uo3PO7cSi26_tNhZ1plQgQ7IU8_E",
            post:"Vice President",
            about:"Data Scientist and Python Developer @Topcoder, NLP/RNN/LSTM, Social Network Analysis, Spatial Analysis",
            github:"https://github.com/pj-mathematician",
            linkedin:"https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADlYcAsBPlT1HEatLMHPj3JepVqAnCGBDwE&keywords=poojan%20vachharajani&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c329c87a-faf8-4ce4-bb80-8894f6d939dd&sid=pDc&spellCorrectionEnabled=false"

        },
        {
            name:"Chaitanya Giri",
            image:"https://media.licdn.com/dms/image/C4D03AQFowCh7RfMnOg/profile-displayphoto-shrink_800_800/0/1656612095977?e=1702512000&v=beta&t=vJ-t4pRfhi722Vj18dZeqUUswhRW8HS5rbrHmOCUbts",
            post:"Vice President",
            about:"Full Stack Developer, DL, NLP, CV, LSTM.",
            github:"https://github.com/Chaitanya134",
            linkedin:"https://www.linkedin.com/in/chaitanya-giri/"

        },
        {
            name:"Parth Mahajan",
            image:"https://media.licdn.com/dms/image/D4D03AQFuvikMY3t6zQ/profile-displayphoto-shrink_800_800/0/1672547439508?e=1702512000&v=beta&t=ep-lFSzgPTQ-R8ritfAT46yVs08fdaQxJZWPRzXtGPo",
            post:"Director",
            about:"Full Stack Developer with 1.5+ years of professional experience in designing and implementing",
            github:"https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
            linkedin:"https://www.linkedin.com/in/parthmahajan08/?originalSubdomain=in"

        },
        {
            name:"Roshan Shankar",
            image:"https://i.imgur.com/TxTSjjE.jpg&quot",
            post:"Advisor",
            about:"PhD Candidate at Princeton, MS & MPA from Stanford, NSIT Batch of 2011.",
            github:"https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
            linkedin:"https://www.linkedin.com/company/nsut-ai/"

        },
        {
            name:"Yugal Raj Jain",
            image:"https://i.imgur.com/ggkmHCr.jpg&quot",
            post:"Advisor",
            about:"MEngg from MIT, Ex-Tesla, NSIT Batch of 2015.",
            github:"https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
            linkedin:"https://www.linkedin.com/company/nsut-ai/"

        },
        {
            name:"Dhruv Mullick",
            image:"https://i.imgur.com/pnu2pe5.png&quot",
            post:"Advisor",
            about:"MS, Computer Science at University of Alberta, Ex - Amazon, Alberta Machine Learning Institute (AMII).",
            github:"https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
            linkedin:"https://www.linkedin.com/company/nsut-ai/"

        },
        {
            name:"Lohit Malik",
            image:"https://i.imgur.com/jv4rjhk.jpg&quot",
            post:"Advisor",
            about:"PhD at Princeton University, Ex - Research at IITD, Universite de Lorraine",
            github:"https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
            linkedin:"https://www.linkedin.com/company/nsut-ai/"

        },
        {
            name:"Amisha Bhaskar",
            image:"https://i.imgur.com/Df6jFYP.png&quot",
            post:"Advisor",
            about:"PhD at University of Maryland, College Park, Data Scientist @OYO.",
            github:"https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/",
            linkedin:"https://www.linkedin.com/company/nsut-ai/"

        },
        
        
    ])
})

module.exports= router