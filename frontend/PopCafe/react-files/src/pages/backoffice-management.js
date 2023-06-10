import React, { useState } from "react";
import Bookings from "../components/backoffice/Bookings";
import Menu from "../components/backoffice/Menu/Menu";
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
                            <div className="section-title3">
                                <h2>Servizi</h2>

                                <span>Clicca sul servizio desiderato.</span>
                            </div>
                            <hr></hr>
                            <ul>
                                <div className="backoffice-management-tabs">
                                    <li class="menu-lista">
                                        <button
                                            class="menu-lista  hover-effetto"
                                            className={`backoffice-management-tab ${
                                                activeTab === "menu"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleTabChange("menu")
                                            }
                                        >
                                            <div className="section-title3  hover-effetto">
                                                <h5>Il Menù</h5>
                                            </div>
                                        </button>
                                    </li>
                                    <br></br>
                                    <li class="  menu-lista">
                                        <button
                                            class="  menu-lista hover-effetto"
                                            className={`backoffice-management-tab ${
                                                activeTab === "bookings"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleTabChange("bookings")
                                            }
                                        >
                                            <div className="section-title3 hover-effetto">
                                                <h5>Prenotazioni</h5>
                                            </div>
                                        </button>
                                    </li>
                                </div>
                            </ul>
                            <hr></hr>
                        </div>
                        <div className="section-title3">
                            <div className="col-lg-12">
                                <span>In questa sezione potrai:</span>
                                {activeTab === "menu" && <Menu />}

                                {activeTab === "bookings" && <Bookings />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BackofficeManagement;
