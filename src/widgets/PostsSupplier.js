import { connect } from 'react-redux';

const PostsSupplier = ({ allPosts, loading, currentPost, render, filter, medias }) => {
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

	if (loading || (!currentPost.id && (filter === 'sameCategory' || filter === 'sameAuthor'))) {
		return null;
	} else {
		return render(toShow, currentPost, medias);
	}
};

const mapStateToProps = state => {
	return {
		allPosts: state.posts.posts,
		loading: state.status.postsLoading || state.status.mediasLoading || state.status.usersLoading,
		currentPost: state.posts.post,
		medias: state.posts.medias
	};
};

export default connect(mapStateToProps, null)(PostsSupplier);
