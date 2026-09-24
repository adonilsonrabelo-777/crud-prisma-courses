const prisma = require("../prisma");

async function updateCourse() {
  const course = await prisma.course.update({
    where: {
      id: 3,
    },
    data: {
      name: "Programação para Web - Atualizado",
      description: "Curso atualizado de desenvolvimento web utilizando Node.js e Prisma.",
      duration: 50,
    },
  });

  console.log("Curso atualizado com sucesso!");
  console.log(course);
}

updateCourse()
  .catch((error) => {
    console.error("Erro ao atualizar curso:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });