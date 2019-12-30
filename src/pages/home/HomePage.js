import React from 'react';
import { Helmet } from 'react-helmet';

import LastPosts from 'widgets/LastPostsExtendedWidget';

function Home() {
	return (
		<React.Fragment>
			<Helmet>
				<title>React WP</title>
				<meta name="description" content="Welcome Home" />
			</Helmet>
			<h1>Welcome Home</h1>
			<LastPosts number={3} />
		</React.Fragment>
	);
}

export default Home;
