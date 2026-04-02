import { create } from "zustand";
import { fetchOrders } from "../api/orders.api";
import { updateOrderStatus } from "../api/orders.api";

export const useStore = create((set) => ({
  orders: [],
  loading: false,

  loadOrders: async () => {
    set({ loading: true });

    try {
      const data = await fetchOrders();
      set({ orders: data });
    } catch (err) {
      console.error(err);
    }

    set({ loading: false });
  },
   changeStatus: async (id, status) => {
    await updateOrderStatus(id, status);

    // refresh after update
    const updated = await fetchOrders();
    set({ orders: updated });
  },
cart: [],

addToCart: (item) =>
  set((state) => {
    const existing = state.cart.find((i) => i.id === item.id);

    if (existing) {
      return {
        cart: state.cart.map((i) =>
          i.id === item.id
            ? { ...i, qty: (i.qty || 0) + item.qty }
            : i
        ),
      };
    }

    return {
      cart: [...state.cart, { ...item, qty: 1 }],
    };
  }),
}));