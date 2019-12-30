import { connect } from 'react-redux';

const PostsSupplier = ({ allPosts, loading, currentPost, render, filter }) => {
	let toShow = [];

	switch (filter) {
		case 'mostPopular':
			toShow = allPosts.sort((a, b) => (b.views || 0) - (a.views || 0));
			break;
		case 'sameCategory':
			if (currentPost.id) {
				currentPost.categories.forEach(cat => {
					toShow.push(...allPosts.filter(post => post.categories.indexOf(cat) != -1));
				});
			}
			break;
		case 'sameAuthor':
			if (currentPost.id) {
				toShow = allPosts.filter(post => post.author === currentPost.author);
			}
			break;
		default:
			toShow = allPosts;
	}

	return render(toShow, loading, currentPost);
};

const mapStateToProps = state => {
	return {
		allPosts: state.posts.posts,
		loading: state.status.postsLoading,
		currentPost: state.posts.post
	};
};

export default connect(mapStateToProps, null)(PostsSupplier);
