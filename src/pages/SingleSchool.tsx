import { HighSchool2 } from "@/assets";
import CombinedTables from "@/components/SingleSchool/CombinedTables";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import {
  InvoiceData,
  SingleSchoolCollection,
  SingleSchoolDetails,
} from "@/types/single-school";
import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaRegHandshake } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const SingleSchool = () => {
  const { id } = useParams();

  const [data, setData] = useState<SingleSchoolDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/schoolDetails/${id}`);

        const updatedData = {
          ...response.data,
          imageSrc: HighSchool2,
          registrationDate: new Date(response.data.registrationDate),
          invoices: response.data.invoices.map((invoice: InvoiceData) => ({
            ...invoice,
            createdAt: new Date(invoice.createdAt),
            dueDate: new Date(invoice.dueDate),
          })),
          collections: response.data.collections.map(
            (collection: SingleSchoolCollection) => ({
              ...collection,
              collectionDate: new Date(collection.collectionDate),
            })
          ),
        };

        setData(updatedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div
      className="flex-col flex -mt-6 -mx-8"
      style={{
        background: "linear-gradient(180deg, #F3D6D0 40%, transparent 50%)",
      }}
    >
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* School details */}
        <div className="flex flex-col md:flex-row w-[80%] mx-auto gap-20 items-center pb-16 pt-5">
          <LazyLoadImage
            className="rounded-full size-36 border border-try-pink"
            src={data?.imageSrc}
            alt={data?.name}
          />
          <div>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
              <h1 className="font-bold text-2xl -ml-2">{data?.name}</h1>
              <p className="text-sm font-medium text-primary-pink border border-primary-pink w-fit px-2 py-1 rounded-full">
                {data?.category}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-sm flex items-center gap-1">
                  <MdLocationPin className="size-4 text-primary-pink" />{" "}
                  {data?.county}
                </p>
                <a
                  href="mailto:lakeside@gmail.com"
                  className="text-sm flex items-center gap-1 hover:text-primary-pink hover:underline"
                >
                  <MdEmail className="size-4 text-primary-pink " />{" "}
                  {data?.contactInfo.email}
                </a>
                <p className="text-sm flex items-center gap-1 flex-wrap">
                  <FaRegHandshake className="size-4 text-primary-pink" />
                  Joined:{" "}
                  <span className="font-semibold">
                    {data && format(data.registrationDate, "dd-MM-yyyy")}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-sm flex items-center gap-1 mt-4">
              {data &&
                data.product.map((product) => (
                  <span className="text-sm font-medium text-dark-pink bg-try-pink border border-dark-pink w-fit px-3 py-1 rounded-full">
                    {product}
                  </span>
                ))}
            </p>
          </div>
          <Card className="min-w-64 mx-auto md:ml-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Payment Balance:
              </CardTitle>
              <LuDollarSign className="text-primary-pink size-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {data && formatCurrency(data.balance)}
              </div>
            </CardContent>
          </Card>
        </div>{" "}
        {/* Invoice Table */}
        {data && (
          <CombinedTables
            invoices={data.invoices}
            collections={data.collections}
          />
        )}
      </div>
    </div>
  );
};

export default SingleSchool;
