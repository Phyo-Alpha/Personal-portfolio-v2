export type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type Project = {
  title: string;
  techs: {
    techImg: string;
    name: string;
  }[];
  description: string;
  image: string;
  link?: string;
};
