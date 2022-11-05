export type CandidateId = string;

export interface Candidate {
  id: CandidateId;
  firstName: string;
  lastName: string;
  email: string;
}

export interface CandidateWithoutID extends Omit<Candidate, "id"> {}
