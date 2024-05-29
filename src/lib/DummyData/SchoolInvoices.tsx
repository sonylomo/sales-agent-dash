import { Invoice } from "@/types/single-school";


const SchoolInvoices = (): Invoice[] => {
  const currentDate = new Date();

  const data: Invoice[] = [
    {
      invoiceNumber: "INV-001",
      invoiceItem: "Software Subscription",
      creationDate: new Date("2024-05-15"),
      dueDate: new Date("2024-06-15"),
      totalAmount: 500,
      paidAmount: 500,
      amountDue: 0,
      completionStatus: "completed",
      daysUntilDue:
        (new Date("2024-06-15").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-002",
      invoiceItem: "Hardware Purchase",
      creationDate: new Date("2024-05-20"),
      dueDate: new Date("2024-06-20"),
      totalAmount: 1500,
      paidAmount: 1000,
      amountDue: 500,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-06-20").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-003",
      invoiceItem: "Consulting Services",
      creationDate: new Date("2024-05-25"),
      dueDate: new Date("2024-07-01"),
      totalAmount: 800,
      paidAmount: 200,
      amountDue: 600,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-07-01").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-004",
      invoiceItem: "Cloud Storage",
      creationDate: new Date("2024-05-30"),
      dueDate: new Date("2024-07-05"),
      totalAmount: 300,
      paidAmount: 0,
      amountDue: 300,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-07-05").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-005",
      invoiceItem: "Maintenance Service",
      creationDate: new Date("2024-06-01"),
      dueDate: new Date("2024-07-10"),
      totalAmount: 400,
      paidAmount: 200,
      amountDue: 200,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-07-10").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-006",
      invoiceItem: "Training Session",
      creationDate: new Date("2024-06-05"),
      dueDate: new Date("2024-07-15"),
      totalAmount: 700,
      paidAmount: 350,
      amountDue: 350,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-07-15").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-007",
      invoiceItem: "Custom Software Development",
      creationDate: new Date("2024-06-10"),
      dueDate: new Date("2024-07-20"),
      totalAmount: 2000,
      paidAmount: 1500,
      amountDue: 500,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-07-20").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-008",
      invoiceItem: "Annual Subscription",
      creationDate: new Date("2024-06-15"),
      dueDate: new Date("2024-07-25"),
      totalAmount: 1200,
      paidAmount: 0,
      amountDue: 1200,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-07-25").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-009",
      invoiceItem: "Office Supplies",
      creationDate: new Date("2024-06-20"),
      dueDate: new Date("2024-07-30"),
      totalAmount: 250,
      paidAmount: 250,
      amountDue: 0,
      completionStatus: "completed",
      daysUntilDue:
        (new Date("2024-07-30").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-010",
      invoiceItem: "Website Hosting",
      creationDate: new Date("2024-06-25"),
      dueDate: new Date("2024-08-01"),
      totalAmount: 500,
      paidAmount: 250,
      amountDue: 250,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-08-01").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-011",
      invoiceItem: "Mobile App Development",
      creationDate: new Date("2024-07-01"),
      dueDate: new Date("2024-08-05"),
      totalAmount: 3000,
      paidAmount: 1000,
      amountDue: 2000,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-08-05").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-012",
      invoiceItem: "IT Support",
      creationDate: new Date("2024-07-05"),
      dueDate: new Date("2024-08-10"),
      totalAmount: 400,
      paidAmount: 200,
      amountDue: 200,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-08-10").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-013",
      invoiceItem: "SEO Services",
      creationDate: new Date("2024-07-10"),
      dueDate: new Date("2024-08-15"),
      totalAmount: 900,
      paidAmount: 450,
      amountDue: 450,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-08-15").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-014",
      invoiceItem: "Graphic Design",
      creationDate: new Date("2024-07-15"),
      dueDate: new Date("2024-08-20"),
      totalAmount: 600,
      paidAmount: 300,
      amountDue: 300,
      completionStatus: "pending",
      daysUntilDue:
        (new Date("2024-08-20").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
    {
      invoiceNumber: "INV-015",
      invoiceItem: "Content Creation",
      creationDate: new Date("2024-07-20"),
      dueDate: new Date("2024-08-25"),
      totalAmount: 800,
      paidAmount: 800,
      amountDue: 0,
      completionStatus: "completed",
      daysUntilDue:
        (new Date("2024-08-25").getTime() - currentDate.getTime()) /
        (1000 * 3600 * 24),
    },
  ];

  // Round daysUntilDue to the nearest whole number
  data.forEach((invoice) => {
    invoice.daysUntilDue = Math.round(invoice.daysUntilDue);
  });

  return data;
};

export default SchoolInvoices;
