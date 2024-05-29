import { HighSchool } from "@/assets";
import CombinedTables from "@/components/SingleSchool/CombinedTables";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleSchool = () => {
  return (
    <div className="hidden flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* School details */}
        {/* Name, type, Product using, country , registration date, contact info, school balance */}
        <div className="flex w-[80%] mx-auto gap-20 items-center pb-16 pt-5">
          <LazyLoadImage
            className="rounded-full size-36 "
            src={HighSchool}
            alt="Lakeside Middle School"
          />
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="font-bold text-2xl -ml-2">
                Lakeside Middle School
              </h1>
              <p className="text-sm font-medium text-primary-pink bg-try-pink w-fit px-2 py-1 rounded-full">
                IGCSE
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-sm flex items-center gap-1">
                  <MdLocationPin className="size-4 text-primary-pink" />{" "}
                  Nairobi, Kenya
                </p>
                <a
                  href="mailto:lakeside@gmail.com"
                  className="text-sm flex items-center gap-1 hover:text-primary-pink hover:underline"
                >
                  <MdEmail className="size-4 text-primary-pink " />{" "}
                  lakeside@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm flex items-center gap-1 ">
                  Joined: <span className="font-semibold"> 17-06-2000</span>
                </p>
              </div>
            </div>
            <p className="text-sm flex items-center gap-1 mt-4">
              <span className="text-sm font-medium text-primary-pink bg-try-pink w-fit px-2 py-1 rounded-full">
                {" "}
                Zeraki Timetable
              </span>
              <span className="text-sm font-medium text-primary-pink bg-try-pink w-fit px-2 py-1 rounded-full">
                {" "}
                Zeraki Finance
              </span>
            </p>
          </div>
          <Card className="min-w-64 ml-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Payment Balance:
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$500.00</div>
            </CardContent>
          </Card>
        </div>{" "}
        {/* Invoice Table */}
        <CombinedTables />
      </div>
    </div>
  );
};

export default SingleSchool;
