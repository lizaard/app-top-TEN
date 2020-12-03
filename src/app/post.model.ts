export interface Lizard {
  title: string;
  ups: number;
  downs: number;
  permalink: Lizard2;
  subreddit_name_prefixed: string;
}

export interface Lizard2 {
  permalink: any[];
}
