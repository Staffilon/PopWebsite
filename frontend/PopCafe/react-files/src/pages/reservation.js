import React from "react";
import ReservationForm from "../components/category/ReservationForm";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

function reservation() {
  return (
    <Layout>
      <Breadcrumb pageName="Prenotazioni" pageTitle="Prenotazione" />
      <div>
        {/* ========== Reservation end============= */}
        <ReservationForm />
        {/* ========== Reservation end============= */}
      </div>
    </Layout>
  );
}

export default reservation;
