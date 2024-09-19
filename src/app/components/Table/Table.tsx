import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Dates = [
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    used_days: "",
    earned_days: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    used_days: "-6",
    earned_days: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    used_days: "",
    earned_days: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    used_days: "",
    earned_days: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    used_days: "-6",
    earned_days: "3.00",
    balance: "3.00",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    used_days: "",
    earned_days: "3.00",
    balance: "3.00",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#DAE6F2] hover:bg-[#DAE6F2]">
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Used Days (-)</TableHead>
          <TableHead>Earned Days (+)</TableHead>
          <TableHead>Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Dates.map((date) => (
          <TableRow key={date.date} className="hover:bg-[#DAE6F2] border-b-2 border-[#7C96B1]">
            <TableCell className="font-medium">{date.date}</TableCell>
            <TableCell>{date.description}</TableCell>
            <TableCell>{date.used_days}</TableCell>
            <TableCell>{date.earned_days}</TableCell>
            <TableCell>{date.balance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
