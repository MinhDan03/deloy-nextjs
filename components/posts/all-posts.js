import classes from './all-posts.module.css'
import PostsGird from './posts-grid';
function AllPosts(props){
    return(
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGird posts={props.posts}/>
        </section>
    );
}
export default AllPosts;