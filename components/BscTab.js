import React from "react";

const Table = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {" "}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {" "}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {" "}
          <tr>
            {" "}
            <th scope="col" className="px-6 py-3">
              {" "}
              Hash
            </th>{" "}
            <th scope="col" className="px-6 py-3">
              {" "}
              from{" "}
            </th>{" "}
            <th scope="col" className="px-6 py-3">
              {" "}
              to{" "}
            </th>{" "}
            <th scope="col" className="px-6 py-3">
              {" "}
              Gas{" "}
            </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {data?.result?.map((d) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <a
                  href={`https://bscscan.com/tx/${d.hash}`}
                  target="_blank"
                  className="text-blue-400"
                >
                  {d.hash.substring(0, 12)}...
                </a>
              </th>{" "}
              <td className="px-6 py-4">
                <a
                  href={`https://bscscan.com/address/${d.from}`}
                  target="_blank"
                  className="text-blue-400"
                >
                  {d.from.substring(0, 12)}...{" "}
                </a>{" "}
              </td>{" "}
              <td className="px-6 py-4">
                <a
                  href={`https://bscscan.com/address/${d.to}`}
                  target="_blank"
                  className="text-blue-400"
                >
                  {d.to.substring(0, 12)}...{" "}
                </a>
              </td>
              <td className="px-6 py-4"> {d.gas} </td>{" "}
            </tr>
          ))}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};

export default Table;
