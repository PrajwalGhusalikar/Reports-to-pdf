import React from "react";

const SalesTable = () => {
  const salesData = {
    "Sales Volume": {
      "All Products": 50235,
      "Product 7-1": 31631,
      "Product 7-2": 18604,
    },
    "Unfilled Orders": {
      "All Products": 0,
      "Product 7-1": 0,
      "Product 7-2": 0,
    },
    Price: {
      "All Products": 18604,
      "Product 7-1": 374,
      "Product 7-2": 357,
    },
  };

  const Revenues = {
    "All Products": 18511800,
    "Product 7-1": 11857200,
    "Product 7-2": 6654600,
    details: {
      "Product Costs": {
        "All Products": 8050921,
        "Product 7-1": 4689926,
        "Product 7-2": 3360995,
      },
      "Order Processing": {
        "All Products": 0,
        "Product 7-1": 0,
        "Product 7-2": 0,
      },
      "Replacement Parts": {
        "All Products": 659780,
        "Product 7-1": 442244,
        "Product 7-2": 217536,
      },
      "RFID Costs": {
        "All Products": 114946,
        "Product 7-1": 409395,
        "Product 7-2": 46558,
      },
      "Transportation Costs": {
        "All Products": 237675,
        "Product 7-1": 68388,
        "Product 7-2": 171720,
      },
      "Transportation Rebates": {
        "All Products": 237675,
        "Product 7-1": 68388,
        "Product 7-2": 171720,
      },
      "Volume Discount": {
        "All Products": 237675,
        "Product 7-1": 68388,
        "Product 7-2": 171720,
      },
      "Duties and Traffic": {
        "All Products": 237675,
        "Product 7-1": 68388,
        "Product 7-2": 171720,
      },
    },
  };
  const GrossMargin = {
    "All Products": 0.431,
    "Product 7-1": 0.564,
    "Product 7-2": 0.188,
  };
  return (
    <table className="w-full text-start whitespace-nowrap">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="px-4 py-2">Metric</th>
          <th className="px-4 py-2">All Products</th>
          <th className="px-4 py-2">Product 7-1</th>
          <th className="px-4 py-2">Product 7-2</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(salesData).map((key, index) => (
          <tr key={index}>
            <td className=" border font-bold px-4 py-2">{key}</td>
            <td className="border px-4 py-2 text-right">
              {typeof salesData[key] === "object"
                ? Object.values(salesData[key])[0]
                : salesData[key]}
            </td>
            <td className="border px-4 py-2 text-right">
              {typeof salesData[key] === "object"
                ? Object.values(salesData[key])[1]
                : salesData[key]}
            </td>
            <td className="border px-4 py-2 text-right">
              {typeof salesData[key] === "object"
                ? Object.values(salesData[key])[2]
                : salesData[key]}
            </td>
          </tr>
        ))}
        <tr>
          <td className="font-bold border px-4 py-2">Revenue</td>
          <td className="border px-4 py-2 text-right">{Revenues["All Products"]}</td>
          <td className="border px-4 py-2 text-right">{Revenues["Product 7-1"]}</td>
          <td className="border px-4 py-2 text-right">{Revenues["Product 7-2"]}</td>
        </tr>
        {Object.keys(Revenues.details).map((detailKey, index) => (
          <tr key={index}>
            <td className="border px-4 py-2 pl-8">- {detailKey}</td>
            <td className="border px-4 py-2 text-right">
              {Revenues.details[detailKey]["All Products"]}
            </td>
            <td className="border px-4 py-2 text-right">
              {Revenues.details[detailKey]["Product 7-1"]}
            </td>
            <td className="border px-4 py-2 text-right">
              {Revenues.details[detailKey]["Product 7-2"]}
            </td>
          </tr>
        ))}
        <tr>
          <td className="font-bold border px-4 py-2">Gross Margin</td>
          <td className="border px-4 py-2 text-right">{GrossMargin["All Products"]}</td>
          <td className="border px-4 py-2 text-right">{GrossMargin["Product 7-1"]}</td>
          <td className="border px-4 py-2 text-right">{GrossMargin["Product 7-2"]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SalesTable;
