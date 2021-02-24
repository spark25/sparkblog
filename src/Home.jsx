import Bloglist from "./Bloglist";
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {error && <p style={{ color: 'tomato' }}>{error}</p>}
            {isLoading && <p>Loading...</p>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs" />}

        </div>
    );
}

export default Home;