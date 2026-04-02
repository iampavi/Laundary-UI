import { Home, ShoppingCart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3">

      <Link to="/mobile" className="flex flex-col items-center text-xs">
        <Home size={18} />
        Home
      </Link>

      <Link to="/shop" className="flex flex-col items-center text-xs">
        <ShoppingCart size={18} />
        Shop
      </Link>

      <Link to="/track" className="flex flex-col items-center text-xs">
        <Clock size={18} />
        Track
      </Link>

    </div>
  );
}