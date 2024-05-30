import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FaSalesforce } from "react-icons/fa6";
const SideBar = ({ className }: { className: string }) => {
  const navigate = useNavigate();

  return (
    <div className={cn("pb-12 bg-white relative min-h-screen", className)}>
      <div className="space-y-4 py-4 fixed">
        <div className="px-2 py-2">
          <h1 className="mb-2 px-4 text-2xl font-semibold tracking-tight flex items-center gap-4">
            <FaSalesforce className="text-primary-pink size-24" />
            <span className="sr-only">Sales Agent Dashboard</span>
          </h1>
        </div>
        <div className="px-4 py-2">
          <div className="space-y-1 flex flex-col">
            <Button
              variant="ghost"
              className="text-base font-semibold justify-start text-wrap"
              onClick={() => navigate("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Dashboard
            </Button>
          </div>

          <div className="space-y-1 flex flex-col">
            <Button
              variant="ghost"
              className="text-base font-semibold justify-start text-wrap"
              onClick={() => navigate("/school-management")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m16 6 4 14" />
                <path d="M12 6v14" />
                <path d="M8 8v12" />
                <path d="M4 4v16" />
              </svg>{" "}
              School Management
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
