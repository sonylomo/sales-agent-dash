import { Card } from "@/components/ui/card";
import { MdLocationPin } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const SchoolCard = ({
  schoolDetails,
}: {
  schoolDetails: {
    name: string;
    imageSrc: string;
    id: string;
    category: string;
    location: string;
    email: string;
  };
}) => {
  return (
    <Link to={`/school-management/${schoolDetails.id}`}>
      <Card className="flex flex-between items-center min-h-48 p-4 gap-10">
        <div className="w-1/3">
          <LazyLoadImage
            className="rounded-md border"
            src={schoolDetails.imageSrc}
            alt={schoolDetails.name}
          />
        </div>

        <div className="w-2/3 space-y-4 flex flex-col justify-between">
          <h3 className="text-2xl font-bold">{schoolDetails.name}</h3>
          <div className="space-y-1">
            <p className="text-sm bg-try-pink w-fit px-3 py-2 mb-4 rounded-full">
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
              {schoolDetails.location}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SchoolCard;
