export type Tweet = {
    account: {
      fullname: string;
      href: string;
      id: number;
    };
    date: string;
    hashtags: string[];
    likes: number;
    replies: number;
    retweets: number;
    text: string;
  }