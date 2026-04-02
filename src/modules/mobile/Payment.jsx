import { useLocation, useNavigate } from "react-router-dom";
import { Wallet, CreditCard, Home } from "lucide-react";
import { useState } from "react";

export default function Payment() {
  const { state } = useLocation();
  const nav = useNavigate();

  const [method, setMethod] = useState("upi");

  const { cart, total } = state || {};

  return (
    <div className="bg-bg min-h-screen p-4">

      <h2 className="text-lg font-semibold mb-4">Payment</h2>

      {/* SUMMARY */}
      <div className="bg-white rounded-3xl p-4 mb-4 shadow">
        <h3 className="font-semibold mb-2">Order Summary</h3>

        {cart?.map((i) => (
          <div key={i.id} className="flex justify-between text-sm">
            <span>{i.name} x{i.qty}</span>
            <span>₹{i.price * i.qty}</span>
          </div>
        ))}

        <div className="flex justify-between mt-3 font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      {/* METHODS */}
      <div className="space-y-3">

        <div
          onClick={() => setMethod("upi")}
          className={`bg-white p-4 rounded-2xl flex justify-between ${
            method === "upi" ? "border-2 border-blue-500" : ""
          }`}
        >
          <div className="flex gap-3">
            <Wallet />
            <div>
              <p>UPI</p>
              <p className="text-xs text-muted">
                GPay / PhonePe
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => setMethod("card")}
          className={`bg-white p-4 rounded-2xl flex justify-between ${
            method === "card" ? "border-2 border-blue-500" : ""
          }`}
        >
          <div className="flex gap-3">
            <CreditCard />
            <p>Card</p>
          </div>
        </div>

        <div
          onClick={() => setMethod("room")}
          className={`bg-white p-4 rounded-2xl flex justify-between ${
            method === "room" ? "border-2 border-blue-500" : ""
          }`}
        >
          <div className="flex gap-3">
            <Home />
            <p>Room Bill</p>
          </div>
        </div>

      </div>

      {/* PAY */}
      <button
        onClick={() => nav("/success")}
        className="mt-6 w-full bg-dark text-white py-4 rounded-2xl"
      >
        Pay Now 🔒
      </button>

    </div>
  );
}