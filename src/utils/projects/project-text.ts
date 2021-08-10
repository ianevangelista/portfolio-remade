export interface Project {
    id: string;
    title?: string;
    year?: string;
    description?: string;
    images?: string[];
    github?: string;
    path?: string;
    moreTitle?: string;
    moreDescription?: string;
    moreTaskDescription?: string;
}

export const MyProjects: Project[] = [
    {
        id: "portfolio",
        title: "Portfolio",
        year: "2021",
        description:
            "First of all this website to display some of my recent projects.",
        github: "https://github.com/ianevangelista/portfolio-remade",
        path: "/projects/portfolio",
        moreDescription:
            "A website to show you a litte about myself and what I have been up to. I wanted this website to be simple and clean so that it wouldn´t overwhelm the reader.",
    },
    {
        id: "bachelor",
        title: "Bachelor",
        year: "2021",
        path: "/projects/bachelor",
        description:
            "An app for healthcare professionals to remote monitor patients.",
    },
    {
        id: "gk",
        title: "GK",
        year: "2021",
        path: "/projects/gk",
        description:
            "A website for my friends and I to display what movies we want to watch for the next movie night. Each user can upvote or downvote a movie wish.",
        github: "https://github.com/gkonsulting/gk-client",
    },
    {
        id: "harmoni",
        title: "Harmoni",
        year: "2020",
        path: "/projects/harmoni",
        description:
            "Scrum-project in Software Engineering 2 with web applications. The main task was to develope a system for event planning",
        github: "https://github.com/ianevangelista/Harmoni",
        images: [
            `/Harmoni/harmoni.png`,
            `/Harmoni/profile.png`,
            `/Harmoni/event.png`,
            `/Harmoni/events.png`,
            `/Harmoni/calendar.png`,
        ],
    },
    {
        id: "community-news",
        title: "Community News",
        year: "2019",
        description:
            "My first ever full-stack web-project. Not the greatest visuals, however this project shows how much I have evolved and learned throughout the years.",
        github: "https://github.com/ianevangelista/Harmoni",
        path: "/projects/community-news",
        moreDescription:
            "Even though this was not my finest work, it certainly was my first work! I really enjoyed creating this fictional news page as it taught me how to build a full-stack project from scratch.",
        images: [
            `/News/news.jpg`,
            `/News/article.jpg`,
            `/News/article2.jpg`,
            `/News/comments.jpg`,
            `/News/category.jpg`,
            `/News/register.jpg`,
        ],
    },
];
