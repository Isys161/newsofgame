export type CategoryProps = {
  name: string,
  src: string,
  description: string,
  link: string
  icon?: string;
}

export type CategoryListProps = {
  categories: CategoryProps[]
}


export type ToolsListProps = {
  category: CategoryProps,
  locale: string,
  showMoreLink?: boolean
}

export type ToolProps = {
  name: string,
  description: string,
  url: string,
  icon_url?: string,
  tags?: string[]
  icon?: string;
}

export type ChangelogItem = {
  date: string;
  changes: string[];
}

export type Changelog = {
  [locale: string]: ChangelogItem[];
}

export interface GameCompany {
  name: string;
  logo_url: string;
  description: string;
  link: string;
  founded_year: number;
  headquarters: string;
  website: string;
}

export interface GameSeries {
  name: string;
  cover_url: string;
  description: string;
  link: string;
  genres: string[];
  website: string;
}

export interface GameListProps {
  company: GameCompany;
  series: GameSeries[];
  locale: string;
  showMoreLink?: boolean;
}
