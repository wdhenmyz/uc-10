import Database from "../database";
import User from "../userService";
import Post from "../postService";

describe("integracao entre userService e postService", () => {
    let database;
    let userService;
    let postService;

    // Usando beforeEach para inicializar os objetos antes de cada teste
    beforeEach(() => {
        database = new Database(); // Reinicia o banco de dados antes de cada teste
        userService = new User(database);
        postService = new Post(database);
    });

    it("cadastrar usuarios e verficar se os dados estao corretos", () => {
        const user1 = userService.cadastrar("João");
        const user2 = userService.cadastrar("maria");
        
        console.log(database.get_Usuarios());
        expect(database.get_Usuarios()).toEqual([user1, user2]);
    });

   /* it("cadastrar postagens e verficar se os dados estao corretos", () => {
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
    });*/
});
