import { useState } from "react";
import { firestore } from '../firebase';
import { useFormInput } from '../hook';

function CreatePost() {
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');

    function handleSubmit(e) {
        e.preventDefault();

        console.log('title', title.value);
        console.log('Subtitle', subTitle.value);
        console.log('Content', content.value);

        firestore.collection('posts').add({
            title: title.value,
            subTitle: subTitle.value,
            content: content.value,
            createdAt: new Date() // Corrected typo: "creatAt" -> "createdAt"
        });
    }

    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-field">
                    <label>Title</label>
                    <input {...title} />
                </div>

                <div className="form-field">
                    <label>Sub Title</label>
                    <input {...subTitle} />
                </div>

                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content}></textarea>
                </div>

                <button className="create-post-btn">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
