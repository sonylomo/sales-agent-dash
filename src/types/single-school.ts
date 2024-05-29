export type SchoolCategory = "Primary" | "Secondary" | "IGCSE";

export type School = {
  id: string;
  name: string;
  category: SchoolCategory;
  product: string;
  county: string;
  registrationDate: Date;
  contactInfo: {
    phone: string;
    email: string;
  };
  balance: number;
};

export type InvoiceStatus = "completed" | "pending";

export type Invoice = {
  invoiceNumber: string;
  invoiceItem: string;
  creationDate: Date;
  dueDate: Date;
  totalAmount: number;
  paidAmount: number;
  amountDue: number;
  completionStatus: InvoiceStatus;
  daysUntilDue: number;
};
