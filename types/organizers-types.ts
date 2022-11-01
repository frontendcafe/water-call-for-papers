export type OrganizerId = string;

export interface Organizer {
  id: OrganizerId;
  fullName: string;
  email: string;
}

export interface OrganizerWithoutID extends Omit<Organizer, "id"> {}
