import { formatCurrency } from "@/lib/utils";
import { Invoice } from "@/types/single-school";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import { AlertDialogHeader, AlertDialogFooter } from "../ui/alert-dialog";
import { Button } from "../ui/button";

export const formatDate = (date: Date): string => {
  return format(date, "dd-MM-yyyy");
};

export const Columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "invoiceNumber",
    header: "Invoice Number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("invoiceNumber")}</div>
    ),
  },
  {
    accessorKey: "invoiceItem",
    header: "Invoice Item",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("invoiceItem")}</div>
    ),
  },

  {
    accessorKey: "creationDate",
    header: "Created At",
    cell: ({ row }) => (
      <div className="lowercase">
        {formatDate(row.getValue("creationDate"))}
      </div>
    ),
  },
  {
    accessorKey: "totalAmount",
    header: () => <div className="text-left">Total Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));

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
    accessorKey: "paidAmount",
    header: () => <div className="text-left">Paid Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("paidAmount"));

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
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{payment.amountDue}</AlertDialogTitle>
              <AlertDialogDescription>
                <p className="text-xs text-muted-foreground">
                  {formatDate(payment.dueDate)}
                </p>
                <div className="text-2xl font-bold">
                  {formatCurrency(payment.amountDue)}
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <MoreHorizontal className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuItem
        //       onClick={() => navigator.clipboard.writeText(payment.school)}
        //     >
        //       Copy payment ID
        //     </DropdownMenuItem>
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem>View customer</DropdownMenuItem>
        //     <DropdownMenuItem>View payment details</DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
      );
    },
  },
];
