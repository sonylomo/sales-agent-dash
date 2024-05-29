import { useState } from "react";
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

type SchoolDetails = {
  id: string;
  name: string;
  imageSrc: string;
  category: string;
  location: string;
  email: string;
};

const data: SchoolDetails[] = [
  {
    id: "1",
    name: "Greenwood High School",
    imageSrc: Sample,
    category: "Secondary",
    location: "Greenwood City",
    email: "contact@greenwoodhigh.edu",
  },
  {
    id: "2",
    name: "Sunnydale Elementary",
    imageSrc: Sample2,
    category: "Primary",
    location: "Sunnydale",
    email: "info@sunnydaleelem.edu",
  },
  {
    id: "3",
    name: "Riverdale Academy",
    imageSrc: Sample3,
    category: "Academy",
    location: "Riverdale",
    email: "contact@riverdaleacademy.edu",
  },
  {
    id: "4",
    name: "Mountainview High",
    imageSrc: Sample4,
    category: "Secondary",
    location: "Mountainview",
    email: "info@mountainviewhigh.edu",
  },
  {
    id: "5",
    name: "Lakeside Middle School",
    imageSrc: Sample5,
    category: "IGCSE",
    location: "Lakeside",
    email: "contact@lakesidemiddle.edu",
  },
  {
    id: "6",
    name: "Springfield Primary",
    imageSrc: HighSchool,
    category: "Primary",
    location: "Springfield",
    email: "info@springfieldprimary.edu",
  },
  {
    id: "7",
    name: "Hilltop High School",
    imageSrc: HighSchool2,
    category: "Secondary",
    location: "Hilltop",
    email: "contact@hilltophigh.edu",
  },
  {
    id: "8",
    name: "Cedarwood Academy",
    imageSrc: Sample,
    category: "IGCSE",
    location: "Cedarwood",
    email: "info@cedarwoodacademy.edu",
  },
  {
    id: "9",
    name: "Brookfield Elementary",
    imageSrc: Sample3,
    category: "Primary",
    location: "Brookfield",
    email: "contact@brookfieldelem.edu",
  },
  {
    id: "10",
    name: "Maplewood High",
    imageSrc: Sample5,
    category: "Secondary",
    location: "Maplewood",
    email: "info@maplewoodhigh.edu",
  },
];

const AllSchools = () => {
  const [filterValue, setFilterValue] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const filteredData = data.filter(
    (school) =>
      school.name.toLowerCase().includes(filterValue.toLowerCase()) &&
      (filterCategory === "" ||
        school.category.toLowerCase() === filterCategory)
  );

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
          <SelectContent>
            <SelectItem value="primary">Primary</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
            <SelectItem value="igcse">IGCSE</SelectItem>
          </SelectContent>
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
