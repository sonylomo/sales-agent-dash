import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import SchoolCard from "./SchoolCard";
import {
  Sample,
  Sample2,
  Sample3,
  Sample4,
  Sample5,
  HighSchool,
  HighSchool2,
} from "@/assets";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SchoolCategory, SchoolDetails } from "@/types/all-schools";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const AllSchools = () => {
  const [filterValue, setFilterValue] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [data, setData] = useState<SchoolDetails[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/schoolDetails`);
        const imagePaths = [
          Sample,
          Sample2,
          Sample3,
          Sample4,
          Sample5,
          HighSchool,
          HighSchool2,
        ];

        const updatedData = response.data.map(
          (item: SchoolDetails, index: number) => ({
            ...item,
            imageSrc: imagePaths[index % imagePaths.length],
          })
        );

        setData(updatedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const filteredData =
    data &&
    data.filter(
      (school) =>
        school.name.toLowerCase().includes(filterValue.toLowerCase()) &&
        (filterCategory === "" ||
          school?.category?.toLowerCase() === filterCategory)
    );

  const categoryOptions = Object.keys(SchoolCategory).map((key) => (
    <SelectItem key={key} value={key}>
      {key}
    </SelectItem>
  ));

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Search for schools..."
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <Select onValueChange={(value) => setFilterCategory(value)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>{categoryOptions}</SelectContent>
        </Select>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredData.map((school) => (
          <li key={school.id}>
            <SchoolCard schoolDetails={school} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllSchools;
