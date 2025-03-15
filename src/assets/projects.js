import sign_img from "/images/database.png"
import portfolio_img from "/images/portfolio.png"

let projects = [
    {
        key: 1,
        title: "Sign Database",
        blurb: "Database for sign company",
        skills: "DotNet, C#, SQL",
        project_link: "https://github.com/spartanjax/sign_database",
        project_cover: sign_img
    },
    {
        key: 2,
        title: "Porfolio Website",
        blurb: "You're looking at it!",
        skills: "React, JavaScript, SCSS",
        project_link: "https://github.com/spartanjax/jf_portfolio",
        project_cover: portfolio_img
    },
    // {
    //     key: 3,
    //     title: "More Coming Soon!",
    //     cover_img: "",
    //     blurb: "",
    //     skills: "Heapssss!",
    //     project_link: "https://github.com/spartanjax",
    //     project_cover: ""
    // },
];


export default projects;