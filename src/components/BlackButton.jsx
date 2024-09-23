export default function BlackButton({ label, to }) {
  return (
      <div
        to={to}
        className={`bg-black text-white block text-center rounded p-[4px]`}
      >
        {label}
      </div>
  );
}
