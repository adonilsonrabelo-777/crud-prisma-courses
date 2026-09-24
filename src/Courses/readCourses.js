const prisma = require("../prisma");

async function readCourses() {
  const courses = await prisma.course.findMany();

  console.log("Cursos cadastrados:");
  console.log(courses);
}

readCourses()
  .catch((error) => {
    console.error("Erro ao buscar cursos:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });