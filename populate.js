import prismadb from "@/lib/prismadb";
import movieData from "./movies.json";

const start = async () => {
  try {
    await prismadb.movie.create({ movieData });
    console.log("success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
