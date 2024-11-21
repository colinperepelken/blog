import Alert from 'src/components/common/Alert'
import { config } from 'src/config'
import ArticleList from './ArticleList'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Link from 'src/components/common/Link'

const Blog = () => {
    return (
        <div className="h-[400px]">
            {config.isBlogEnabled ? (
                <ArticleList />
            ) : (
                <div className="mt-5">
                    <h3 className="text-3xl font-extralight text-center">
                        Blog coming soon...
                    </h3>
                    <Alert
                        icon={faExclamationTriangle}
                        className="w-[700px] mx-auto mt-9"
                    >
                        <p>
                            My blog is still being developed, but I&apos;m
                            looking forward to writing some short articles about
                            bicycling, software development, and anything else
                            that captures my interest.
                        </p>
                        <p className="mt-2">
                            You can track my progress and{' '}
                            <Link href="https://github.com/colinperepelken/blog">
                                view the source code on GitHub
                            </Link>
                            .
                        </p>
                    </Alert>
                </div>
            )}
        </div>
    )
}

export default Blog
