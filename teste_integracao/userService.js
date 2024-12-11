class User {
    // construtor
    constructor(userId ,nome, idade, genero) {
        this.database = [];
        this.userId = userId;
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }

    // cadastra um usuário
    cadastrar(user) {
        this.database.push(user);
    }

    usuarios() {
        return this.database.map(user => `userId: ${user.userId}, nome: ${user.nome}, idade: ${user.idade}, genero: ${user.genero}`);
    }
}

export default User;