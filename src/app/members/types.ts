export type MemberStats = {
  attendance: string;
  introduced: string;
  events: string;
  works: string;
};

export type Member = {
  id: string;
  name: string;
  name_en: string;
  name_vertical: string;
  company: string;
  position: string;
  category: string;
  role_tag: string;
  join_year: string;
  committee: string;
  area: string;
  message: string;
  business_pr: string;
  city_thought: string;
  connection_story: string;
  member_comment: string;
  matching: string[];
  stats: MemberStats;
  skills: string[];
  address: string;
  tel: string;
  url: string;
  sns_links: Record<string, string>;
  image_path: string;
  gallery: string[];
  related_ids: string[];
};
