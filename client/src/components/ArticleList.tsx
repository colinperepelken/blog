import ArticlePreview from './ArticlePreview'
import { useEffect, useState } from 'react'
import { ApiClientBuilder } from 'src/features/apiClient/ApiClientBuilder'
import { IArticleDetails } from '@blog/shared-types'

const ArticleList = () => {
    const [articles, setArticles] = useState<IArticleDetails[]>([])
    useEffect(() => {
        ApiClientBuilder.build().then((apiClient) => {
            apiClient
                .listArticle()
                .then((articles) => setArticles(articles.data.results ?? []))
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
