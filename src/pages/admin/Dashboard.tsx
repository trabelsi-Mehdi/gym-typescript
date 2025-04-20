import StatCard from "./StatCard";
import EcommerceMetrics from "./EcommerceMetrics";
import MonthlyTarget from "./MonthlyTarget";

const Dashboard = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-direction-row items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-default sm:p-6">
      <h1 className="text-2xl font-bold text-gray-700 ">Tableau de bord</h1>
      <button
          className=" gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-200 hover:text-gray-800 lg:inline-flex lg:w-min"
        >
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
              fill=""
            />
          </svg>
          Edit
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <div className="grid grid-cols-1 pt-0 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <EcommerceMetrics />
      <EcommerceMetrics />

        <StatCard title="Auto-écoles" value="12" color="#dd2e44" />
        <StatCard title="Clients" value="257" color="#77b255" />
        <StatCard title="Sessions à venir" value="34" color="#ffcc4d" />
        <StatCard title="Réussite (%)" value="81%" color="#ef4444" />
      </div>
      <MonthlyTarget />

      </div>


      {/* Graphs / Recent activity could be added here */}
    </div>
  );
};

export default Dashboard;
