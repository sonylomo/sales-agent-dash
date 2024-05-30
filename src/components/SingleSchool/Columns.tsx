import { formatCurrency } from "@/lib/utils";
import { SingleSchoolCollection,  InvoiceData } from "@/types/single-school";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import { AlertDialogHeader, AlertDialogFooter } from "../ui/alert-dialog";
import { Button } from "../ui/button";

export const formatDate = (date: Date): string => {
  return format(date, "dd-MM-yyyy");
};

export const InvoiceColumns: ColumnDef<InvoiceData>[] = [
  {
    accessorKey: "id",
    header: "Invoice Number",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "invoiceItem",
    header: "Invoice Item",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("invoiceItem")}</div>
    ),
  },

  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <div className="lowercase">{formatDate(row.getValue("createdAt"))}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-left">Total Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      return (
        <div className="text-left font-medium">{formatCurrency(amount)}</div>
      );
    },
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => (
      <div className="lowercase">{formatDate(row.getValue("dueDate"))}</div>
    ),
  },

  {
    accessorKey: "amountPaid",
    header: () => <div className="text-left">Paid Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amountPaid"));

      return (
        <div className="text-left font-medium">{formatCurrency(amount)}</div>
      );
    },
  },
  {
    accessorKey: "amountDue",
    header: () => <div className="text-left">Amount Due</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amountDue"));

      return (
        <div className="text-left font-medium">{formatCurrency(amount)}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Completion Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "daysUntilDue",
    header: "Days Until Due",
    cell: ({ row }) => (
      <div className="capitalize text-center">
        {row.getValue("daysUntilDue")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-try-pink p-4">
            <AlertDialogHeader>
              <AlertDialogTitle>{payment.invoiceItem}</AlertDialogTitle>
              <AlertDialogDescription>
                <p className="text-xs text-muted-foreground">
                  {formatDate(payment.dueDate)}
                </p>
                <div className="text-2xl font-bold">
                  {formatCurrency(payment.amountPaid)}
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4">
              <AlertDialogAction>
                <Button variant="destructive" className="w-full">
                  Collect Payment
                </Button>
              </AlertDialogAction>
              <AlertDialogCancel>
                <Button variant="outline" className="w-full">
                  Cancel
                </Button>
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    },
  },
];

// invoice number, collection number, date of collection, status (Valid, Bounced), and amount

export const CollectionColumns: ColumnDef<SingleSchoolCollection>[] = [
  {
    accessorKey: "invoiceNumber",
    header: "Invoice Number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("invoiceNumber")}</div>
    ),
  },
  {
    accessorKey: "collectionNumber",
    header: "Collection Number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("collectionNumber")}</div>
    ),
  },
  {
    accessorKey: "collectionDate",
    header: "Collection Date",
    cell: ({ row }) => (
      <div className="lowercase">
        {formatDate(row.getValue("collectionDate"))}
      </div>
    ),
  },

  {
    accessorKey: "completionStatus",
    header: "Completion Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("completionStatus")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "paidAmount",
    header: () => <div className="text-left">Collected Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("paidAmount"));

      return (
        <div className="text-left font-medium">{formatCurrency(amount)}</div>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-try-pink p-4">
            <AlertDialogHeader>
              <AlertDialogTitle>{payment.collectionNumber}</AlertDialogTitle>
              <AlertDialogDescription>
                <p className="text-xs text-muted-foreground">
                  {formatDate(payment.collectionDate)}
                </p>
                <div className="text-2xl font-bold">
                  {formatCurrency(payment.paidAmount)}
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4">
              <AlertDialogAction>
                <Button variant="destructive" className="w-full">
                  Collect Payment
                </Button>
              </AlertDialogAction>
              <AlertDialogCancel>
                <Button variant="outline" className="w-full">
                  Cancel
                </Button>
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    },
  },
];
