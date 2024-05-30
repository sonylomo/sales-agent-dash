import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InvoiceData } from "@/types/single-school";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CollectionsTable from "./CollectionsTable";
import InvoiceTable from "./InvoiceTable";

const CombinedTables = (prop: { data: InvoiceData[] }) => {
  console.log(prop);
  return (
    <Tabs defaultValue="invoices">
      <TabsList className="grid w-96 grid-cols-2">
        <TabsTrigger value="invoices">Invoices</TabsTrigger>
        <TabsTrigger value="collections">Collections</TabsTrigger>
      </TabsList>
      <TabsContent value="invoices">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Invoice History</CardTitle>
          </CardHeader>
          <CardContent className="">
            <InvoiceTable data={prop.data} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="collections">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Collections History</CardTitle>
          </CardHeader>
          <CardContent className="">
            <CollectionsTable />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CombinedTables;
