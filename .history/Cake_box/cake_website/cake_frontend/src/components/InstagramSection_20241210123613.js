import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InstagramSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/instagram/')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section className="instagram-section">
      <h2>Our Instagram - Let's Be Friends!</h2>
      <div className="instagram-gallery">
        {posts.map(post => (
          <div key={post.id} className="instagram-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstagramSection;
