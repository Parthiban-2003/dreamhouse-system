import { memo } from "react";

const Card = memo(({ children }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
      {children}
    </div>
  );
});

export default Card;