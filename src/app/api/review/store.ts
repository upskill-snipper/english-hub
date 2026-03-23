export interface ReviewRecord {
  referenceNumber: string;
  userId: string;
  essayId: string;
  essayTitle: string;
  reason: string;
  detail: string;
  selfAssessment?: string;
  status: "submitted" | "under-review" | "completed";
  reviewerResponse?: string;
  timeline: {
    stage: string;
    label: string;
    timestamp: string | null;
    description?: string;
  }[];
  createdAt: string;
}

// Temporary in-memory store — will be replaced by a database table.
export const reviews: ReviewRecord[] = [];
