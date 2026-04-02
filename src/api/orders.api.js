import { apiClient } from "./client";

export const fetchOrders = () =>
  apiClient("/api/laundry/requests");

export const updateOrderStatus = (id, status) =>
  apiClient(`/api/laundry/status/${id}`, {
    method: "PUT",
    body: JSON.stringify({ status }),
  });

  