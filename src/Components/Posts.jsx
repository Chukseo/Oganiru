import React, { useState, useEffect } from 'react';

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) 
    return<div className="card" aria-hidden="true">
  {/* {{<placeholder width="100%" height="180" class="card-img-top" text="false">}} */}
  <div className="card-body">
    <div clasNames="h5 card-title placeholder-glow">
      <span className="placeholder col-6"></span>
    </div>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>
    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>
    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>
    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>
    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>

  if (error) return <div>You are offline: {error}</div>;

  return (
    
    <div className="d-flex">
    <div className="row-4">
      <div className="col-md-12">
        <div className="cards">
          {posts.map((post) => (
            <div key={post.id}>
            <h4 className="card-title">{post.title}</h4>
            <p className="card-content">{post.body} <a href={`/postdetail/${post.id}`}>Read More...</a></p>
            {/* <p className="card-text">Posted by: Oge Nnaji</p>
            <p className="card-text">Date</p> */}
            </div>
            ))}
            </div>
        </div>
      
      </div>
        
      
    </div>
  );
};


export default PostsComponent;