export interface IProject {
    title: string;
    year: number;
    description: string;
    technologies: string[]; 
    url?: string;
    image: string; // this should be the img filename
}