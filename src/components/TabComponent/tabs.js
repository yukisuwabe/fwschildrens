import React, { useState } from "react";
import './tab.css';
import BaseballTab from "../AllTabs/baseballtab";
import SylviaTab from "../AllTabs/sylviatab";
import EnemyTab from "../AllTabs/enemytab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  return (
    <div class="Tabs">
      <ul class="nav">
        <li class={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Elementary-Grade</li>
        <li class={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Middle-Grade</li>
        <li class={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>High-Grade</li>
      </ul>
      <div class="outlet">
        {activeTab === "tab1" ? <BaseballTab /> : (activeTab === "tab2" ? <SylviaTab /> : <EnemyTab />)}
      </div>
    </div>
  );
}

export default Tabs;