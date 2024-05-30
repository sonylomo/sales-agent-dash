import { Collections, CollectionStatus } from "@/types/single-school";

const collectionsData: Collections[] = [
  {
    invoiceNumber: "INV-001",
    collectionNumber: "COL-001",
    collectionDate: new Date("2024-05-20T10:30:00Z"),
    paidAmount: 1500,
    completionStatus: CollectionStatus.COMPLETED,
  },
  {
    invoiceNumber: "INV-002",
    collectionNumber: "COL-002",
    collectionDate: new Date("2024-06-15T14:45:00Z"),
    paidAmount: 1200,
    completionStatus: CollectionStatus.PENDING,
  },
  {
    invoiceNumber: "INV-003",
    collectionNumber: "COL-003",
    collectionDate: new Date("2024-06-30T09:00:00Z"),
    paidAmount: 500,
    completionStatus: CollectionStatus.COMPLETED,
  },
  {
    invoiceNumber: "INV-004",
    collectionNumber: "COL-004",
    collectionDate: new Date("2024-07-10T11:15:00Z"),
    paidAmount: 2000,
    completionStatus: CollectionStatus.COMPLETED,
  },
  {
    invoiceNumber: "INV-005",
    collectionNumber: "COL-005",
    collectionDate: new Date("2024-07-25T16:00:00Z"),
    paidAmount: 750,
    completionStatus: CollectionStatus.PENDING,
  },
  {
    invoiceNumber: "INV-006",
    collectionNumber: "COL-006",
    collectionDate: new Date("2024-08-05T12:30:00Z"),
    paidAmount: 1300,
    completionStatus: CollectionStatus.COMPLETED,
  },
  {
    invoiceNumber: "INV-007",
    collectionNumber: "COL-007",
    collectionDate: new Date("2024-08-20T08:45:00Z"),
    paidAmount: 1600,
    completionStatus: CollectionStatus.COMPLETED,
  },
  {
    invoiceNumber: "INV-008",
    collectionNumber: "COL-008",
    collectionDate: new Date("2024-09-01T15:00:00Z"),
    paidAmount: 900,
    completionStatus: CollectionStatus.PENDING,
  },
  {
    invoiceNumber: "INV-009",
    collectionNumber: "COL-009",
    collectionDate: new Date("2024-09-15T10:15:00Z"),
    paidAmount: 1100,
    completionStatus: CollectionStatus.COMPLETED,
  },
  {
    invoiceNumber: "INV-010",
    collectionNumber: "COL-010",
    collectionDate: new Date("2024-10-01T13:30:00Z"),
    paidAmount: 1400,
    completionStatus: CollectionStatus.PENDING,
  },
  {
    invoiceNumber: "INV-011",
    collectionNumber: "COL-011",
    collectionDate: new Date("2024-10-15T09:00:00Z"),
    paidAmount: 1700,
    completionStatus: CollectionStatus.COMPLETED,
  },
  {
    invoiceNumber: "INV-012",
    collectionNumber: "COL-012",
    collectionDate: new Date("2024-11-01T11:45:00Z"),
    paidAmount: 1900,
    completionStatus: CollectionStatus.COMPLETED,
  },
  {
    invoiceNumber: "INV-013",
    collectionNumber: "COL-013",
    collectionDate: new Date("2024-11-15T14:30:00Z"),
    paidAmount: 1800,
    completionStatus: CollectionStatus.PENDING,
  },
  {
    invoiceNumber: "INV-014",
    collectionNumber: "COL-014",
    collectionDate: new Date("2024-12-01T10:15:00Z"),
    paidAmount: 1500,
    completionStatus: CollectionStatus.COMPLETED,
  },
  {
    invoiceNumber: "INV-015",
    collectionNumber: "COL-015",
    collectionDate: new Date("2024-12-15T12:45:00Z"),
    paidAmount: 2000,
    completionStatus: CollectionStatus.COMPLETED,
  },
];

export default collectionsData;