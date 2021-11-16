import Button from '../base/Button'
import Card from '../base/Card'
import PostList from '../PostList'

const Home = () => {
    return (
        <div>
            <PostList></PostList>
            <Button title="Example button" />
            <Card content="Test card content!"></Card>
        </div>
    )
}

export default Home
