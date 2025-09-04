import sign_img from "/images/database.png"
import portfolio_img from "/images/portfolio.png"
import nb_img from "/images/nbml.png"
import gen_img from "/images/gen.png"

let projects = [
    {
        key: 4,
        title: "GenAI Playground",
        blurb: "Project coming soon!",
        skills: ["React", "Typescript", "Node.js", "AWS"],
        project_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUJcmljayByb2xsoAcB",
        project_cover: gen_img
    },
    {
        key: 3,
        title: "Technology Guesser",
        blurb: "Naive bayes supervised ML model",
        skills: ["Python", "Jupyter", "SKLearn"],
        project_link: "https://github.com/spartanjax/nb_income",
        project_cover: nb_img
    },
    {
        key: 2,
        title: "Sign Database",
        blurb: "Database for sign company",
        skills: ["DotNet", "C#", "SQL"],
        project_link: "https://github.com/spartanjax/sign_database",
        project_cover: sign_img
    },
    {
        key: 1,
        title: "Porfolio Website",
        blurb: "You're looking at it!",
        skills: ["React", "JavaScript", "SCSS"],
        project_link: "https://github.com/spartanjax/jf_portfolio",
        project_cover: portfolio_img
    },
];


export default projects;