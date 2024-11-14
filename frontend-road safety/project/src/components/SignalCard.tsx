interface SignalCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function SignalCard({ icon, title, description }: SignalCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}