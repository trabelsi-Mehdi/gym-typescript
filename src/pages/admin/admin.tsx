import Footer from "../../components/footer";
import { useState ,useEffect } from "react";
import axios from "axios";
import { PieChart , Pie ,Cell , Tooltip } from "recharts";
import AppNavbar from "../../components/navbar2/navbar";
import Dashboard from "./Dashboard";
export default function Admin() {
    const [stats , setStats]=useState({
        clients :0 ,
        drivingSchools :0,
        admins :0
    });
    const data = [
        { name: "Clients", value: stats.clients },
        { name: "Schools", value: stats.drivingSchools },
        { name: "Admins", value: stats.admins },
      ];
      
      const COLORS = ["#dd2e44", "#77b255", "#ffcc4d"];
      

    useEffect(() => {
        const fetchStats = async () => {
          try {
            const token = localStorage.getItem("accessToken");
            const res = await axios.get("http://localhost:5000/api/users/stats", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setStats(res.data);
          } catch (err) {
            console.error("Failed to load stats", err);
          }
        };
      
        fetchStats();
      }, []);
    
    
    return (
      
        <div className="pt-20 px-6"> 
    


        <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#dd2e44]">
        <h3 className="text-sm font-medium text-[#dd2e44]">Clients</h3>
        <p className="text-3xl font-bold text-[#dd2e44]">{stats.clients}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#77b255]">
        <h3 className="text-sm font-medium text-[#77b255]">Driving Schools</h3>
        <p className="text-3xl font-bold text-[#77b255]">{stats.drivingSchools}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#ffcc4d]">
        <h3 className="text-sm font-medium text-[#ffcc4d]">Admins</h3>
        <p className="text-3xl font-bold text-[#ffcc4d]">{stats.admins}</p>
        </div>
        
    


</div>
</div>
        </div>

      );
    }
