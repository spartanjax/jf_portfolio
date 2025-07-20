import sign_img from "/images/database.png"
import portfolio_img from "/images/portfolio.png"
import nb_img from "/images/nbml.png"

let projects = [
    {
        key: 3,
        title: "Income Predictor",
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