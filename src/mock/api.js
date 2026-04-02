const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const getOrders = async () => {
  await delay(500);
  return [
    {
      id: "ORD-8921",
      status: "In Progress",
      total: 500,
      items: ["Shirt", "Pants"],
    },
  ];
};

export const getTracking = async () => {
  await delay(300);
  return [
    { step: "Request Received", time: "10:00 AM", done: true },
    { step: "Assigned to Staff", time: "10:15 AM", done: true },
    { step: "In Progress", time: "11:00 AM", done: true },
    { step: "Out for Delivery", time: "", done: false },
  ];
};