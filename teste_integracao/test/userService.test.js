import User from "../userService";

describe("userService", () => {
    const user = new User();

    const user1 = new User(1, "João", 20, "M");
    const user2 = new User(2, "maria", 19, "F");

    it("cadastrar", () => {
        user.cadastrar(user1);
        user.cadastrar(user2);

        expect(user.usuarios()).toEqual([
            "userId: 1, nome: João, idade: 20, genero: M", 
            "userId: 2, nome: maria, idade: 19, genero: F"
        ]);
    });

});