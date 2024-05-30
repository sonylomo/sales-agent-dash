export type ContactInfo = {
  phone: string;
  email: string;
};

export enum SchoolCategory {
  IGCSE = "IGCSE",
  PRIMARY = "Primary",
  SECONDARY = "Secondary",
}

export enum Product {
  FINANCE = "Zeraki Finance",
  TIMETABLE = "Zeraki Timetable",
  ANALYTICS = "Zeraki Analytics",
}

export type SchoolDetails = {
  id: string;
  name: string;
  category: SchoolCategory;
  product: Product[];
  county: string;
  registrationDate: string;
  contactInfo: ContactInfo;
  balance: number;
  imageSrc: string;
};
