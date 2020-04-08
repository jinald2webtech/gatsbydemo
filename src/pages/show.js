import React from "react"
import firebase from '../components/firebase'

export default class Show extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const ref = firebase.firestore().collection('posts');
        let posts = [];
        ref.get()
            .then(async (docs) => {
                await docs.forEach(async doc => {
                    const data = await doc.data();
                    let post = {
                        ...data
                    }
                    posts.push(post);
                });
                this.setState({
                    posts: posts
                });
            })
    }

    render() {
        const posts = this.state.posts
        console.log("Posts Available", posts)
        return (
            <div>
                <table>
                    <tr>                        
                        <th>Title</th>
                        <th>Description</th>                        
                    </tr>
                    {
                        posts.map(post => {
                            return (
                                <tr key={post.title}>                                    
                                    <td>{post.title}</td>
                                    <td>{post.desc}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div >
        );
    }
}