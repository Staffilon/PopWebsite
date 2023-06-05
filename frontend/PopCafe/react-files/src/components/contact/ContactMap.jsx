import React from "react";

function ContactMap() {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.1766986311895!2d13.075600676050389!3d43.14281867113094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ddb88f2ffdc01%3A0x4bf64092303b7ec9!2zUG9wIENhZsOo!5e0!3m2!1sit!2sit!4v1685973683283!5m2!1sit!2sit"
        style={{ border: 0}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default ContactMap;
