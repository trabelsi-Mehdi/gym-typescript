const StatCard = ({ title, value, color }: { title: string; value: string; color: string }) => {
    return (
      <div className="bg-white p-6 rounded-xl shadow border-l-[4px]" style={{ borderColor: color }}>
        <h3 className="text-sm text-gray-400">{title}</h3>
        <p className="text-3xl font-bold" style={{ color }}>{value}</p>
      </div>
    );
  };
  
  export default StatCard;