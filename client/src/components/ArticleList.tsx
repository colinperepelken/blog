import ArticlePreview from './ArticlePreview'
import { ApiClient } from '../features/apiClient/ApiClient'
import { useEffect, useState } from 'react'
import { IArticleDetails } from '@blog/shared-types'

const ArticleList = () => {
    const [articles, setArticles] = useState<IArticleDetails[]>([])
    useEffect(() => {
        ApiClient.build()
            .articles.list()
            .then((articles) => {
                setArticles(articles)
            })
    }, [])

    // TODO add pagination eventually
    return (
        <div>
            {articles.map((article) => (
                <ArticlePreview key={article.id} article={article} />
            ))}
        </div>
    )
}

export default ArticleList
