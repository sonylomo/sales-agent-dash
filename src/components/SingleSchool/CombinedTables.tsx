import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import CollectionsTable from "./CollectionsTable";
import InvoiceTable from "./InvoiceTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CombinedTables = () => {
  return (
    <Tabs defaultValue="account" className="">
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
            <InvoiceTable />
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
