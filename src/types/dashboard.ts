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

export type CardMetrics = {
  title: string;
  value: string;
  description: string;
  icon: string;
};
