import { LazyLoadImage } from "react-lazy-load-image-component";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import CardMetrics from "@/components/Dashboard/CardMetrics";
import SignUpOverview from "@/components/Dashboard/SignUpOverview";
import TargetVisual from "@/components/Dashboard/TargetVisual";
import UpcomingInvoices from "@/components/Dashboard/UpcomingInvoices";

const Dashboard = () => {
  return (
    <>
      <div className="md:hidden">
        <LazyLoadImage
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <LazyLoadImage
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>

      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          {/* Top Card Metrics */}
          <CardMetrics />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Signup Overview */}
            <Card className="col-span-3 flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Sign Ups Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2 mb-16">
                <SignUpOverview />
              </CardContent>
            </Card>

            {/* Upcoming Invoices */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Upcoming Invoices</CardTitle>
              </CardHeader>
              <CardContent className="">
                <UpcomingInvoices />
              </CardContent>
            </Card>
          </div>

          {/* Target Visualization */}
          <TargetVisual />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
