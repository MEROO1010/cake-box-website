import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get('/api/testimonials/')
      .then(response => setTestimonials(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <blockquote>{testimonial.text}</blockquote>
            <p>- {testimonial.name}</p>
            <div className="stars">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
