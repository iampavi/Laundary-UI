export default function Pricing() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Laundry Pricing</h2>

      <table className="w-full">
        <thead className="text-gray-500">
          <tr>
            <th className="text-left">Item</th>
            <th>Category</th>
            <th>Price</th>
            <th>Priority Fee</th>
          </tr>
        </thead>

        <tbody className="divide-y">
        <tr className="hover:bg-gray-50">
  <td className="py-3 font-medium">Silk Saree</td>
  <td>
    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
      Dry Clean
    </span>
  </td>
  <td>$24.50</td>
  <td className="text-blue-600 font-medium">+15%</td>
</tr>

          <tr>
            <td>Suit Jacket</td>
            <td>Dry Clean</td>
            <td>$18.00</td>
            <td className="text-blue-600">+20%</td>
          </tr>

          <tr>
            <td>Cotton Shirt</td>
            <td>Steam Press</td>
            <td>$6.50</td>
            <td className="text-blue-600">+10%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}