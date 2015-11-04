const Hapi   = require("hapi");
const Boom   = require("boom");
const server = new Hapi.Server();

const posts = [{
  id: 1,
  title: "Lorem ipsum 1",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
}, {
  id: 2,
  title: "Lorem ipsum 2",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
}, {
  id: 3,
  title: "Lorem ipsum 3",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
}];

server.connection({
  host: "localhost",
  port: process.env.PORT || 3000,
  routes: {
    cors: true,
  }
});

server.route({
  method: "POST",
  path: "/posts",
  handler(request, reply) {
    setTimeout(() => {
      reply(posts);
    }, 1500);
  },
});

server.route({
  method: "POST",
  path: "/posts/{id}",
  handler(request, reply) {
    const post = posts.find(post => post.id == request.params.id);
    setTimeout(() => {
      reply(post || Boom.notFound());
    }, 1500);
  },
});

server.start(() => {
  console.log(`Server started at ${server.info.uri}`);
});
