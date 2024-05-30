import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InvoiceData, SingleSchoolCollection } from "@/types/single-school";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CollectionsTable from "./CollectionsTable";
import InvoiceTable from "./InvoiceTable";

const CombinedTables = (prop: {
  invoices: InvoiceData[];
  collections: SingleSchoolCollection[];
}) => {

  return (
    <Tabs defaultValue="invoices" className="hidden md:block">
      <TabsList className="grid w-96 grid-cols-2">
        <TabsTrigger value="invoices">Invoices</TabsTrigger>
        <TabsTrigger value="collections">Collections</TabsTrigger>
      </TabsList>
      <TabsContent value="invoices" className="">
        <Card className="col-span-1 md:col-span-4">
          <CardHeader>
            <CardTitle>Invoice History</CardTitle>
          </CardHeader>
          <CardContent>
            <InvoiceTable data={prop.invoices} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="collections">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Collections History</CardTitle>
          </CardHeader>
          <CardContent className="">
            <CollectionsTable data={prop.collections} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CombinedTables;
