

export type Project = 
{
    id:string,
    name:string,
    description:string,
    img:Array<{name:string}>,
    technologys: Array<{ name: string; img: string }> ;
}

export type Skill = {
    name:string,
    startYear:number,
    description:string
}

export type Projects = Project[]
export type Skills = Skill[]

