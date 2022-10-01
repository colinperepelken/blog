import { IArticleDetails } from '@blog/shared-types'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApiClientBuilder } from 'src/features/apiClient/ApiClientBuilder'
import Button from '../common/Button'

const SingleArticle = () => {
    const { id } = useParams<{ id: string }>()
    const [article, setArticle] = useState<IArticleDetails>()
    useEffect(() => {
        ApiClientBuilder.build()
            .getArticle(id)
            .then((article) => setArticle(article))
    }, undefined)

    if (!article) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <Link to="/">
                <Button title="Back"></Button>
            </Link>
            <div>
                <article>
                    <h2>{article.title}</h2>
                    <section>
                        <p>{article.content}</p>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default SingleArticle
