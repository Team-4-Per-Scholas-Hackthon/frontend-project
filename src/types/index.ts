export type UserRole = "ADMIN" | "ALUMNI" | "LEARNER";

export interface BaseUser {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  role: UserRole;
}

export interface Alumni extends BaseUser {
  role: "ALUMNI";
  skills: string[];
  cohort?: string;
  availability?: string; // e.g. "Evenings", "Weekends"
}

export interface Learner extends BaseUser {
  role: "LEARNER";
  skills: string[];
  cohort?: string;
  instructor?: string;
}

export interface Admin extends BaseUser {
  role: "ADMIN";
}

export type AnyUser = Alumni | Learner | Admin;