export interface Project {
    title?: string;
    year?: string;
    description?: string;
    image?: string;
    github?: string;
}

export const MyProjects: Project[] = [
    {
        title: "Portfolio",
        year: "2021",
        description: "First of all this website.",
    },
    {
        title: "Bachelor",
        year: "2021",
        description:
            "An app for healthcare professionals to remote monitor patients.",
    },
    {
        title: "GK",
        year: "2021",
        description:
            "A website for my friends and I to display what movies we want to watch for the next movie night. Each user can upvote or downvote a movie wish.",
    },
    {
        title: "Harmoni",
        year: "2020",
        description:
            "Scrum-project in Software Engineering 2 with web applications. The main task was to develope a system for event planning",
    },
];
