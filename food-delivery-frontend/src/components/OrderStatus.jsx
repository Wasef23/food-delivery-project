export default function OrderStatus({ status }) {
  const steps = ["Ordered", "Preparing", "Delivered"];

  return (
    <div className="flex justify-between items-center mt-3">
      {steps.map(step => (
        <div key={step} className="flex-1 text-center">
          <div
            className={`h-2 rounded ${
              steps.indexOf(step) <= steps.indexOf(status)
                ? "bg-green-500"
                : "bg-gray-300"
            }`}
          />
          <p className="text-xs mt-1">{step}</p>
        </div>
      ))}
    </div>
  );
}
