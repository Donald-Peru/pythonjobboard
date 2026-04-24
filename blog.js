const axios = require('axios');

async function getBlogPosts() {
    try {
        const response = await axios.get('http://localhost:1337/api/posts');
        const posts = response.data.data;
        
        console.log('Blog Posts:');
        posts.forEach(post => {
            console.log(`- ${post.title}`);
            console.log(`  URL: /blog/${post.documentId}`);
            console.log(`  Published: ${post.publishedAt}`);
            console.log('---');
        });
    } catch (error) {
        console.error('Error fetching posts:', error.message);
    }
}

getBlogPosts();