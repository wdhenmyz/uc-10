import Post from "../postService";

describe( "postService", () => {
    const post = new Post();

    const post1 = new Post(1, 1, "title", "body");
    const post2 = new Post(2, 2, "title", "body");

    it("cadastrar", () => {
        post.cadastrar(post1);
        post.cadastrar(post2);
        expect(post.postagem()).toEqual([
            "userId: 1, id: 1, title: title, body: body", 
            "userId: 2, id: 2, title: title, body: body"
        ]); 
    });
})