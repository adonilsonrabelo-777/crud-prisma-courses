const prisma = require("../prisma");

async function createCourse() {
  try {
    const course = await prisma.course.create({
      data: {
        name: "Programação para Web",
        description: "Curso de desenvolvimento web utilizando Node.js e Prisma.",
        duration: 40
      }
    });

    console.log("Curso cadastrado com sucesso!");
    console.log(course);
  } catch (error) {
    console.error("Erro ao cadastrar curso:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createCourse();