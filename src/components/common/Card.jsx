export const Card = ({ icon: Icon, title, description, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${className}`}>
      <div className="text-blue-600 mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};