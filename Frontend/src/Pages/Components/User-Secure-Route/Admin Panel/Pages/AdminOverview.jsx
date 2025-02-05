import React, { useState, useEffect } from "react";
import { Api } from "../../../../../backend";
import axios from "axios";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const AdminOverview = () => {
  const [yeardata, setYeardata] = useState([]);
  const [batchdata, setBatchdata] = useState([]);

  const fetchBatchdata = async () => {
    const authToken = localStorage.getItem("token");
    const { data } = await axios.get(`${Api}branchdata`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("Batch data - ", data);
    setYeardata(await data);
  };

  const fetchYeardata = async () => {
    const authToken = localStorage.getItem("token");
    const { data } = await axios.get(`${Api}yeardata`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("Year data - ", data);
    setBatchdata(await data);
  };

  const yerarDataSet = [
    { name: "AEIE", value: yeardata.AEIE },
    { name: "AIML", value: yeardata.AIML },
    { name: "BBA", value: yeardata.BBA },
    { name: "BCA", value: yeardata.BCA },
    { name: "CE", value: yeardata.CE },
    { name: "CSBS", value: yeardata.CSBS },
    { name: "CSE", value: yeardata.CSE },
    { name: "ECE", value: yeardata.ECE },
    { name: "EE", value: yeardata.EE },
    { name: "IT", value: yeardata.IT },
    { name: "MCA", value: yeardata.MCA },
    { name: "ME", value: yeardata.ME },
  ];

  const batchDataSet = [
    { name: "First", value: batchdata.first },
    { name: "Second", value: batchdata.second },
    { name: "Third", value: batchdata.third },
    { name: "Fourth", value: batchdata.fourth }
  ];

  useEffect(() => {
    fetchBatchdata();
    fetchYeardata();
  }, []);

  return (
    <>
      {console.log("Whats your year", yeardata)}
      {console.log("Whats your branch", batchdata)}
      {console.log("Whats your branch", yerarDataSet)}

      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart
          data={yerarDataSet}
          width={100}
          height={100}
          margin={{ top: 10, left: 10, bottom: 0, right: 900 }}
        >
          <CartesianGrid strokeDasharray="3 15" />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "black" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#EAE2B7"
            legendType="wye"
            activeDot={{ stroke: "red", strokeWidth: 2, r: 7 }}
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart
          data={batchDataSet}
          width={100}
          height={100}
          margin={{ top: 10, left: 10, bottom: 0, right: 900 }}
        >
          <CartesianGrid strokeDasharray="3 15" />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "black" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#D93E39"
            legendType="wye"
            activeDot={{ stroke: "red", strokeWidth: 2, r: 7 }}
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
      <h1>Overview</h1>
    </>
  );
};

export default AdminOverview;
