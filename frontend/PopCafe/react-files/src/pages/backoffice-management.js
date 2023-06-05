import React, { useState } from "react";
import Bookings from "../components/backoffice/Bookings";
import Menu from "../components/backoffice/Menu";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

const BackofficeManagement = () => {
    const [activeTab, setActiveTab] = useState("menu");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Layout>
            <Breadcrumb
                pageTitle="Backoffice Management"
                pageName="Backoffice"
            />
            <div className="backoffice-management">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="backoffice-management-tabs">
                                <button
                                    className={`backoffice-management-tab ${
                                        activeTab === "menu" ? "active" : ""
                                    }`}
                                    onClick={() => handleTabChange("menu")}
                                >
                                    Menu
                                </button>
                                <button
                                    className={`backoffice-management-tab ${
                                        activeTab === "bookings" ? "active" : ""
                                    }`}
                                    onClick={() => handleTabChange("bookings")}
                                >
                                    Bookings
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            {activeTab === "menu" && <Menu />}
                            {activeTab === "bookings" && <Bookings />}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BackofficeManagement;
