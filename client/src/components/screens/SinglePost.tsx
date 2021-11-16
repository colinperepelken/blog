import { Link } from 'react-router-dom'
import Button from '../base/Button'

interface IProps {
    postId: string
}

const SinglePost = (props: IProps) => {
    // TODO make call to API with postId and get post title and content

    return (
        <div>
            <Link to="/">
                <Button title="Back"></Button>
            </Link>
            <div>
                <article>
                    <h2>Post title</h2>
                    <section>
                        <p>Blog post content here</p>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default SinglePost
