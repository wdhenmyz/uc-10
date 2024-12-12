class Post {
    // construtor
    constructor(database) {
        this.database = database
    }

    // Adiciona uma postagem
    cadastrar(userId, content) {
        const postId = Date.now(); 

        const post = {
            id: postId,
            userId: userId, 
            content: content
        };

        this.database.posts.push(post);   
        return post;
    }

    postagem(userId) {
        return this.database.posts.filter(post => post.userId === userId); 
    }
}

export default Post;