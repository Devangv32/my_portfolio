import React, { lazy, Suspense } from 'react';

const ContactForm = lazy(() => import('../components/ContactForm'));

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </section>
  );
};

export default Contact;