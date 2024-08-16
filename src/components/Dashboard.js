import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TableView from "./TableView";
import PieChart from "./PieChartView";

const Dashboard = () => {
  const DATA = useSelector(
    (state) => state?.DashboardReducer?.dashboardList || []
  );

  const [chartData, setChartData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [filteredData, setFilteredData] = useState(DATA);

  useEffect(() => {
    if (filteredData?.length > 0) {
      const randomNumbersArray = filteredData?.map(() =>
        Math.floor(Math.random() * 100)
      );

      const userLabels = filteredData?.map((item) => item.user);

      setChartData(randomNumbersArray);
      setLabels(userLabels);
    } else {
      setChartData([]);
      setLabels([]);
    }
  }, [filteredData]);

  const handleApplyFilter = () => {
    if (selectValue) {
      const temp = DATA.filter((el) => el.id == selectValue);
      setFilteredData(temp);
    } else {
      setFilteredData(DATA);
    }
  };

  return (
    <div>
      <div className="main-container">
        <div style={{ height: "250px" }}>
          {chartData?.length > 0 && (
            <PieChart chartData={chartData} labels={labels} />
          )}
        </div>
        <div className="filter-container">
          <select
            name=""
            id=""
            className="select-style"
            onChange={(e) => setSelectValue(e.target.value)}
            value={selectValue}
          >
            <option value="">Select User</option>
            {DATA?.map((item) => (
              <option value={item?.id} key={item?.id}>
                {item.user}
              </option>
            ))}
          </select>
          <button className="Filter-button" onClick={handleApplyFilter}>
            Apply Filter
          </button>
        </div>
      </div>
      <TableView data={filteredData} />
    </div>
  );
};

export default Dashboard;
