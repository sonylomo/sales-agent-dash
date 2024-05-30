export type Metric = {
  name: string;
  value: number;
};

export type PieData = {
  analytics: Metric[];
  finance: Metric[];
  timetable: Metric[];
};

export type UpcomingInvoicesType = {
  name: string;
  amountDue: number;
  dueDate: Date;
};