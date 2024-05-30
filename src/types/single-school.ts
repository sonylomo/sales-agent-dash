import { Product, SchoolCategory } from "./all-schools";

export type InvoiceData = {
  id: string;
  invoiceItem: string;
  createdAt: Date;
  dueDate: Date;
  amount: number;
  amountPaid: number;
  amountDue: number;
  status: string;
  daysUntilDue: number;
};

export type ContactInfo = {
  phone: string;
  email: string;
};

export type SingleSchoolDetails = {
  id: string;
  name: string;
  category: SchoolCategory;
  product: Product[];
  county: string;
  registrationDate: string;
  contactInfo: ContactInfo;
  balance: number;
  imageSrc: string;
  invoices: InvoiceData[];
  collections: SingleSchoolCollection[];
};

export enum CollectionStatus {
  PENDING = "pending",
  COMPLETED = "completed",
}

export type SingleSchoolCollection = {
  invoiceNumber: string;
  collectionNumber: string;
  collectionDate: Date;
  paidAmount: number;
  completionStatus: CollectionStatus;
};
