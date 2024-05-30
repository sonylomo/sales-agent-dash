import { formatCurrency } from "@/lib/utils";
import { UpcomingInvoicesType } from "@/types/dashboard";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import { AlertDialogHeader, AlertDialogFooter } from "../ui/alert-dialog";
import { Button } from "../ui/button";
// import { RxDotsHorizontal } from "react-icons/rx";
// import { labels } from "../data/data";
// import { Button } from "../ui/button";
// import { DropdownMenuGroup, DropdownMenuShortcut } from "../ui/dropdown-menu";

const formatDate = (date: Date): string => {
  return format(date, "dd-MM-yyyy");
};

const UpcomingInvoicesColumns: ColumnDef<UpcomingInvoicesType>[] = [
  {
    accessorKey: "school",
    header: "School Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("school")}</div>
    ),
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
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => (
      <div className="lowercase">{formatDate(row.getValue("dueDate"))}</div>
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
              <AlertDialogTitle>{payment.name}</AlertDialogTitle>
              <AlertDialogDescription>
                <p className="text-xs text-muted-foreground">
                  {formatDate(payment.dueDate)}
                </p>
                <div className="text-2xl font-bold">
                  {formatCurrency(payment.amountDue)}
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

export default UpcomingInvoicesColumns;
