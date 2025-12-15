// Predefined courses/skills available in the system
export interface Skill {
	_id: string;
	name: string;
	category: SkillCategory;
	description?: string;
}

export type SkillCategory =
	| "Programming"
	| "Web Development"
	| "Soft Skills"
	| "Career Development";

export const PREDEFINED_SKILLS: Skill[] = [
    	{ _id: "skill-1", name: "JavaScript", category: "Programming", description: "Core JavaScript fundamentals and ES6+" },
        { _id: "skill-12", name: "REST APIs", category: "Web Development", description: "Designing and consuming REST APIs" },
        { _id: "skill-27", name: "Technical Communication", category: "Soft Skills", description: "Explaining technical concepts clearly" },
	    { _id: "skill-30", name: "Resume Building", category: "Career Development", description: "Creating effective tech resumes" },

];

// Learning goal set by learner
export interface LearningGoal {
	_id: string;
	title: string;
	description?: string;
	targetDate?: string;
	status: "not_started" | "in_progress" | "completed";
	relatedSkills: string[]; // skill IDs
	createdAt: string;
	updatedAt: string;
}

// Learner profile extending base user
export interface LearnerProfile {
	_id: string;
	userId: string;
	selectedSkills: string[]; // skill IDs they need help with
	learningGoals: LearningGoal[];
	cohort?: string;
	track?: string; // e.g., "Software Engineering", "Cybersecurity", "Data Engineering"
	bio?: string;
	preferredSessionLength: 30 | 45 | 60; // minutes
	preferredSessionType: "video" | "chat" | "both";
	timezone?: string;
	createdAt: string;
	updatedAt: string;
}

// Tutor (Alumni) profile
export interface TutorProfile {
	_id: string;
	userId: string;
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	avatar?: string;
	bio?: string;
	skills: string[]; // skill IDs they can teach
	cohort?: string;
	track?: string;
	rating: number; // 1-5
	totalSessions: number;
	totalHours: number;
	badges: string[];
	availability: AvailabilitySlot[];
	preferredSessionTypes: ("video" | "chat")[];
	responseTime: "immediate" | "within_hour" | "within_day";
}

export interface AvailabilitySlot {
	_id: string;
	dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday
	startTime: string; // "09:00"
	endTime: string; // "17:00"
}

// Session request from learner
export interface SessionRequest {
	_id: string;
	learnerId: string;
	tutorId: string;
	skillId: string;
	topic: string;
	description?: string;
	preferredDate: string;
	preferredTime: string;
	duration: 30 | 45 | 60;
	sessionType: "video" | "chat";
	status: "pending" | "accepted" | "declined" | "cancelled" | "completed";
	meetingLink?: string;
	createdAt: string;
	updatedAt: string;
}

// Completed session with feedback
export interface Session {
	_id: string;
	request: SessionRequest;
	tutor: TutorProfile;
	learner: {
		_id: string;
		username: string;
		firstname: string;
		lastname: string;
	};
	actualStartTime?: string;
	actualEndTime?: string;
	notes?: string;
	learnerFeedback?: {
		rating: number;
		comment?: string;
	};
	tutorFeedback?: {
		comment?: string;
		recommendedResources?: string[];
	};
}

// Async question from learner
export interface Question {
	_id: string;
	learnerId: string;
	skillId: string;
	title: string;
	content: string;
	codeSnippet?: string;
	status: "open" | "answered" | "closed";
	answers: Answer[];
	createdAt: string;
	updatedAt: string;
}

export interface Answer {
	_id: string;
	tutorId: string;
	tutor: {
		username: string;
		firstname: string;
		lastname: string;
		avatar?: string;
	};
	content: string;
	codeSnippet?: string;
	isAccepted: boolean;
	createdAt: string;
}

// API response types
export interface ApiResponse<T> {
	success: boolean;
	data: T;
	message?: string;
}

export interface PaginatedResponse<T> {
	success: boolean;
	data: T[];
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
	};
}
