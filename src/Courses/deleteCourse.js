const prisma = require("../prisma");

async function deleteCourse() {
  const course = await prisma.course.delete({
    where: {
      id: 3,
    },
  });

  console.log("Curso excluído com sucesso!");
  console.log(course);
}

deleteCourse()
  .catch((error) => {
    console.error("Erro ao excluir curso:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });