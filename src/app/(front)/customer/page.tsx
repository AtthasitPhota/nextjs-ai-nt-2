import prisma from "@/lib/prisma";
import { connection } from "next/server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// http://localhost:3000/customer
export default async function CustomerPage() {
  await connection(); // signals this is a dynamic route
  await prisma.$connect();
  const customers = await prisma.customer.findMany();

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-heading text-sm font-bold uppercase tracking-[0.1em] text-primary">
              Customers
            </span>
            <h2 className="mt-2 font-heading text-4xl font-bold tracking-[0.01em]">
              รายชื่อลูกค้า
            </h2>
          </div>
          <span className="font-mono text-sm text-muted-foreground">
            {customers.length} customers
          </span>
        </div>

        <div className="mt-12">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>ชื่อลูกค้า</TableHead>
                <TableHead>ที่อยู่</TableHead>
                <TableHead>เบอร์โทร</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell className="whitespace-normal">
                    {customer.address ?? "-"}
                  </TableCell>
                  <TableCell>{customer.phone ?? "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}
