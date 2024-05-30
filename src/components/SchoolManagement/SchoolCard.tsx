import { Card } from "@/components/ui/card";
import { SchoolDetails } from "@/types/all-schools";
import { MdLocationPin } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const SchoolCard = ({
  schoolDetails,
}: {
  schoolDetails: SchoolDetails
}) => {

  return (
    <Link to={`/school-management/${schoolDetails.id}`}>
      <Card className="flex flex-between items-center min-h-48 p-4 gap-10 hover:shadow-none border-try-pink">
        <div className="w-1/3">
          <LazyLoadImage
            className="rounded-[32px] border border-try-pink"
            src={schoolDetails.imageSrc}
            alt={schoolDetails.name}
          />
        </div>

        <div className="w-2/3 space-y-4 flex flex-col justify-between">
          <h3 className="text-2xl font-bold">{schoolDetails.name}</h3>
          <div className="space-y-1">
            <p className="text-sm bg-try-pink w-fit px-3 py-1 mb-4 rounded-full">
              {schoolDetails.category}
            </p>
            {/* <a
              href={`mailto:${schoolDetails.email}`}
              className="text-sm flex items-center gap-1 hover:text-primary-pink hover:underline"
            >
              <MdEmail className="size-4 text-primary-pink " />{" "}
              {schoolDetails.email}
            </a> */}
            <p className="text-sm flex items-center gap-1">
              <MdLocationPin className="size-4 text-primary-pink" />{" "}
              {schoolDetails.county}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SchoolCard;
