import { Link } from 'react-router-dom'
import Button from '../shared/Button'

interface IProps {
    articleId: string
}

const SingleArticle = (props: IProps) => {
    // TODO make call to API with articleId and get post title and content

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

export default SingleArticle
