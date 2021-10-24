import { Link } from 'react-router-dom'

const PostPreview = () => {
  return (
    <div>
        <h2><Link to="/post">Post title</Link></h2>
        <p>Posted June 13th, 2021</p>
    </div>
  )
}

export default PostPreview
