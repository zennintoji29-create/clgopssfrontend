const StatCard = ({ title, value, subtitle }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow">
      <p className="text-sm text-gray-400">{title}</p>
      <h3 className="text-3xl font-bold mt-1">{value}</h3>
      {subtitle && (
        <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default StatCard;
