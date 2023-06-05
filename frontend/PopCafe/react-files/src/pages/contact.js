import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactAddress from "../components/contact/ContactAddress";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import Layout from "../layout/Layout";
function ContactPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Contatti" pageTitle="Contatti" />
      <ContactAddress />
      
      <ContactMap />
    </Layout>
  );
}

export default ContactPage;
