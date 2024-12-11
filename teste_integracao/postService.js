class Post {
    // construtor
    constructor(userId, id, title, body) {
        this.database = [];
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    // Adiciona uma postagem
    cadastrar(post) {
        this.database.push(post);
    }

    postagem() {
        return this.database.map(post => `userId: ${post.userId}, id: ${post.id}, title: ${post.title}, body: ${post.body}`); 
    }
}

export default Post;