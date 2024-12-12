class User {
    // construtor
    constructor(database) {
        this.database = database
    }

    // Adiciona uma postagem
    cadastrar(name) {
        const userId = Date.now(); 

        const user = {
            id: userId, 
            name: name
        };

        this.database.users.push(user);   
        return user;
    }

    usuarios() {
        return this.database.users.find(user => user.userId === id);
    }
}

export default User;