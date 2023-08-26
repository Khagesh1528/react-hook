import { firestore } from "../firebase";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Home() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        firestore
            .collection('posts')
                .get()
                    .then((snapshot) => {
                        const posts = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()

                            
                         }));
                        console.log('Posts', posts);
                        setPost(posts);
        });
    }, []);

    return (
        <div className="home">
            <h1>Tech Blog</h1>
            <div id="blog-by">Khagesh Ratre</div>

            {posts.map((post, index) => (
                <div className="post" key={`post-${index}`}>
                    <Link to={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <p>{post.subTitle}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
