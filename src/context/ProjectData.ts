export type ProjectType = {
    id: string;
    title: string;
    description: string;
    images: string[],
    link: string,
    github_link?: string,
    default_image_index: number;
}

export const PROJECTS: ProjectType[] = [
    {
        id: "1",
        title: "Mcnif Cuisine",
        description: "A buffet booking and food ordering platform.",
        images: [
            "/images/projects/mcnif-1.png",
            "/images/projects/mcnif-2.png",
            "/images/projects/mcnif-3.png",
        ],
        link: "https://mcnifcuisine.co.uk/",
        github_link: "",
        default_image_index: 0, 
    },
    {
        id: "2",
        title: "Green Atlas",
        description: "Real estate web application.",
        images: [
            "/images/projects/ga-1.png",
            "/images/projects/ga-2.png",
            "/images/projects/ga-3.png",
            "/images/projects/ga-4.png",
            "/images/projects/ga-5.png",
        ],
        link: "https://greenatlas.co.uk/",
        github_link: "",
        default_image_index: 0,
    },
    {
        id: "3",
        title: "PeacefulSky Travel",
        description: "Travel and Tour Agency Web Application",
        images: [
            "/images/projects/ps-1.png",
            "/images/projects/ps-2.png",
            "/images/projects/ps-3.png",
            "/images/projects/ps-4.png",
            "/images/projects/ps-5.png",
        ],
        link: "https://peacefulskytravel.com/",
        github_link: "",
        default_image_index: 0
    },
    {
        id: "4",
        title: "247 Travels",
        description: "Travel and Vacation Management Company. Worked closely with a team member and team leader to implement core functionalities and improve overall project performance.",
        images: [
            "/images/projects/247-1.png",
            "/images/projects/247-2.png",
            "/images/projects/247-3.png",
            "/images/projects/247-4.png",
            "/images/projects/247-5.png",
        ],
        link: "https://247travels.com",
        github_link: "",
        default_image_index: 0
    }
]