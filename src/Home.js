import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/blogs')
    // npx json-server --watch data/db.json --port 8001
    .then(res => {
      return res.json();
    })
    .then(data => {
      setBlogs(data);
    });   
  }, []);

	return (  
		<div className="home">
			{blogs && <BlogList blogs={blogs} title="All blogs!" />}
		</div>
	);
}
 
export default Home;