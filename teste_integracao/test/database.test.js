import Database from "../database";
import User from "../userService";
import Post from "../postService";

describe("database", () => {
    let database;
    let user1;
    let user2;
    let post1;
    let post2;

    // Usando beforeEach para inicializar os objetos antes de cada teste
    beforeEach(() => {
        database = new Database(); // Reinicia o banco de dados antes de cada teste
        user1 = new User(1, "João", 20, "M");
        user2 = new User(2, "maria", 19, "F");
        post1 = new Post(1, 1, "title", "body");
        post2 = new Post(2, 2, "title", "body");
    });

    it("cadastrar usuarios e verficar se os dados estao corretos", () => {
        database.add_Usuario(user1);
        database.add_Usuario(user2);
        
        console.log(database.get_Usuarios());
        expect(database.get_Usuarios()).toEqual([user1, user2]);
    });

    it("cadastrar postagens e verficar se os dados estao corretos", () => {
        database.add_Postagem(post1);
        database.add_Postagem(post2);

        console.log(database.get_Postagens());
        expect(database.get_Postagens()).toEqual([post1, post2]);
    });

    it('pegar postagem pelo usuario', () => {
        database.add_Usuario(user2);
        database.add_Postagem(post2);

        console.log(database.get_Postagem_Usuario(2));

        expect(database.get_Postagem_Usuario(2)).toEqual({
            usuario: user2,
            postagem: post2
        });
    });
});
