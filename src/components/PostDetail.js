import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { firestore } from "../firebase";

function PostDetail() {
    const [post,setPost] = useState({});
    //* using useParams to find the id form url;
    const {postId} = useParams();
    
    useEffect(()=>{
            firestore
                .collection('posts')
                    .doc(postId)
                        .get()
                            .then((snapshot)=>{
                                console.log('snapshot',snapshot.data());
                                setPost(snapshot.data());
                            });
    })

    return (
        <div className="post-detail">PostDetail
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;
