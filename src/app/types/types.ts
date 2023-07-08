export interface Activity {
  activity?: string;
  type?: string;
  participants?: number;
  price?: number;
  link?: string;
  key?: string;
  accessibility?: number;
}

export interface Project {
  _id: any;
  name: string;
  description: string;
  description2?: string;
  description3?: string;
  github_link?: string;
  deployed_link?: string;
  pictures?: string[];
  tech_lang: [
    {
      name: string;
      description: string;
    }
  ];
  clients?: [
    {
      name: string;
      description: string;
    }
  ];
  teammates?: [
    {
      name: string;
      github_link: string;
    }
  ];
}

export interface ProjectaAPIResponse {
  data: [Project];
  status: string;
}
