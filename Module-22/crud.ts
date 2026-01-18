import { prisma } from "./lib/prisma";

async function run() {
  // Create User
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "Mizan",
  //     email: "mizanrbf@next.com",
  //   },
  // });
  // console.log("Created user", createUser);
  // Create post for user id = 1
  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "this is title",
  //     content: "this is content",
  //     author_id: 1,
  //   },
  // });
  // console.log("created post", createPost);

  // Create Profile
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "hii",
  //     user_id: 1,
  //   },
  // });
  // console.log("profile created", createProfile);

  // Find users
  const users = await prisma.user.findMany({
    // include: {
    //   posts: true,
    //   profile: true,
    // },
    select: {
      posts: true,
      profile: true,
    },
  });
  console.dir(users, { depth: Infinity });
}
run();
