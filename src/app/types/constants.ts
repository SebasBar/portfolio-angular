import { Project } from './types';

export const emptyProject: Project = {
  _id: '',
  name: '',
  description: '',
  description2: '',
  description3: '',
  github_link: '',
  deployed_link: '',
  pictures: '',
  tech_lang: [
    {
      name: '',
      description: '',
    },
  ],
  clients: [
    {
      name: '',
      description: '',
    },
  ],
  teammates: [
    {
      name: '',
      github_link: '',
    },
  ],
};
