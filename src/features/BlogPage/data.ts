export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "I Was Tired Of Forgetting People, So I Built Honor",
    excerpt: "Discover why and how I built Honor, a personal CRM to help maintain and manage personal connections and relationships.",
    date: "Recent",
    link: "https://medium.com/@joelthousend/i-was-tired-of-forgetting-people-so-i-built-honor-5a961b4216c0?source=your_stories_outbox---writer_outbox_published",
    tags: ["Productivity", "Personal CRM", "Engineering"],
  },
  {
    id: "2",
    title: "Designing Offline-First Sync For Multiple Devices",
    excerpt: "An in-depth look into the architecture and challenges of building a robust offline-first synchronization engine across multiple devices.",
    date: "Recent",
    link: "https://medium.com/@joelthousend/designing-offline-first-sync-for-multiple-devices-ad25d293196f",
    tags: ["Architecture", "Offline-First", "Sync", "System Design"],
  },
];
