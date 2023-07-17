export interface Project {
  _id: any;
  name: string;
  description: string;
  description2?: string;
  description3?: string;
  github_link?: string;
  deployed_link?: string;
  pictures: string;
  tech_lang?: projectInfo[];
  clients?: projectInfo[];
  teammates?: projectLink[];
  __v?: number;
}

export interface projectInfo {
  name: string;
  description: string;
}

export interface projectLink {
  name: string;
  github_link: string;
}

export interface ProjectaAPIResponse {
  data: Project[];
  status: string;
}
