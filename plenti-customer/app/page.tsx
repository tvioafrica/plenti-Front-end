"use client";
import * as React from "react";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import { AiOutlineStar } from "react-icons/ai";
import Cashback from "./Components/Cashback";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Balance from "./Components/Balance";

export default function Home() {
  return (
    <>
      <h2 className="m-[1.5rem] text-[#818080]">
        Good Day ,<span className="font-bold text-black"> Romeoscript</span>
      </h2>
      <Tabs>
        <TabList>
          <Tab>Cash Back</Tab>
          <Tab>
            {" "}
            <span className="flex items-center justify-center">
              <AiOutlineStar /> For you
            </span>
          </Tab>
          <Tab>Plenti Credit</Tab>
        </TabList>

        <TabPanel>
          <Cashback />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <Balance />
        </TabPanel>
      </Tabs>
    </>
  );
}
