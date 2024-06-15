import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import CardMetrics from "@/components/Dashboard/CardMetrics";
import SignUpOverview from "@/components/Dashboard/SignUpOverview";
import TargetVisual from "@/components/Dashboard/TargetVisual";
import UpcomingInvoices from "@/components/Dashboard/UpcomingInvoices";
import { motion } from "framer-motion";
import { variants } from "@/lib/variants";

const Dashboard = () => {
  return (
    <div className=" flex-col flex">
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
              <motion.div
                initial={{
                  filter: "blur(5px)",
                  opacity: 0,
                  y: -10,
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ ...variants.fadeUp.transition, delay: 0.75 }}
              >
                <SignUpOverview />
              </motion.div>
            </CardContent>
          </Card>
          {/* Upcoming Invoices */}
          <Card className="col-span-4 hidden md:block">
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
  );
};

export default Dashboard;
