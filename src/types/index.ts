export type UserRole = "admin" | "alumni" | "learner";

export interface BaseUser {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  role: UserRole;
}

export interface alumni extends BaseUser {
  role: "alumni";
  skills: string[];
  cohort?: string;
  availability?: string; // e.g. "Evenings", "Weekends"
}

export interface learner extends BaseUser {
  role: "learner";
  skills: string[];
  cohort?: string;
  instructor?: string;
}

export interface admin extends BaseUser {
  role: "admin";
}

export type AnyUser = alumni | learner | admin;