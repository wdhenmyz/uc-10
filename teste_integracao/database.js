class Database{
    constructor(){
        // inicializa os arrays de usuários e postagens
        this.users = [];
        this.posts = [];
    }

    // Adiciona um usuário ao banco de dados
    add_Usuario(user) {
        this.users.push(user);
    }

    // cadastra uma postagem
    add_Postagem(post) {
        this.posts.push(post);
    }

    // Retorna todos os usuários cadastrados
    get_Usuarios() {
        return this.users;
    }

    // Retorna todas as postagens cadastradas
    get_Postagens() {
        return this.posts;
    }
    
    get_Postagem_Usuario(id) {
        // Encontrar a postagem
        const post = this.posts.find(p => p.userId === id);
    
        if (!post) {
            return null; // Se a postagem não for encontrada, retorna null
        }
    
        // Encontrar o usuário que fez a postagem
        const user = this.users.find(u => u.userId === id);
    
        if (!user) {
            return null; // Se o usuário não for encontrado, retorna null
        }
    
        // Retorna o usuário e a postagem
        return {
            usuario: user,
            postagem: post
        };
    }
    
}

export default Database