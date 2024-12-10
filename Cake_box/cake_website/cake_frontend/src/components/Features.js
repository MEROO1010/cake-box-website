import React from 'react';

function Features() {
  const features = [
    { icon: '🍰', title: 'The freshest ingredients' },
    { icon: '🚚', title: 'Fast delivery' },
    { icon: '❤️', title: 'Handmade baked goods' },
  ];

  return (
    <section className="features">
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
