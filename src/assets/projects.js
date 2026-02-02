import sign_img from "/images/database.png"
import portfolio_img from "/images/portfolio.png"
import nb_img from "/images/nbml.png"
import gen_img from "/images/playground.png"

let projects = [
    {
        key: 4,
        title: "GenAI Playground",
        blurb: "LLM comparison tool",
        description: "An interactive playground to compare multiple large language models, test prompts, and visualize output differences. Useful for evaluating model strengths across tasks and iterating on prompts.",
        skills: ["React", "Typescript", "Node.js"],
        project_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUJcmljayByb2xsoAcB",
        project_cover: gen_img
    },
    {
        key: 3,
        title: "Technology Guesser",
        blurb: "Naive bayes supervised ML model",
        description: "A supervised Naive Bayes model that predicts technologies from text features. Built for education and experimentation with feature engineering, training pipelines, and evaluation metrics.",
        skills: ["Python", "Jupyter", "SKLearn"],
        project_link: "https://github.com/spartanjax/nb_income",
        project_cover: nb_img
    },
    {
        key: 2,
        title: "Sign Database",
        blurb: "Database for sign company",
        description: "A CRUD application designed to manage inventory and orders for a sign-making business. Includes a C#/.NET backend and SQL database designed for reliability and reporting.",
        skills: ["DotNet", "C#", "SQL"],
        project_link: "https://github.com/spartanjax/sign_database",
        project_cover: sign_img
    },
    {
        key: 1,
        title: "Porfolio Website",
        blurb: "You're looking at it!",
        description: "A responsive personal portfolio built with React and SCSS showcasing projects, skills, and experience. Includes accessibility and theme toggling for a polished presentation.",
        skills: ["React", "JavaScript", "SCSS"],
        project_link: "https://github.com/spartanjax/jf_portfolio",
        project_cover: portfolio_img
    },
];


export default projects;