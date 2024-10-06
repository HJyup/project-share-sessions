// TODO: Think about implementation of type safety in models.
// TODO we need to store in a class or better to use types

export interface QueueData {
  userId: string;
  name: string;
  projectName: string;
}

export interface ProjectData {
  authorName: string;
  name: string;
  description: string;
  githubLink: string;
}

export interface CurrentSessionData {
  time: number;
  date: Date;
  location: string;
  isSessionStarted: boolean;
  queue: QueueData[];
}

export interface SessionData {
  time: number;
  date: Date;
  location: string;
  projects: ProjectData[];
}
