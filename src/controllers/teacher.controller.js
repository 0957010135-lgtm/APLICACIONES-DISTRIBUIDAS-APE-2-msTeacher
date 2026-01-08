const teachers = [
  { id: 1, nombre: "Carlos Gómez", especialidad: "Java" },
  { id: 2, nombre: "Ana Torres", especialidad: "Spring Boot" }
];

const getTeacher = (req, res) => {
  const id = parseInt(req.params.id);
  const teacher = teachers.find(t => t.id === id);

  if (!teacher) {
    return res.status(404).json({ message: "Instructor no encontrado" });
  }

  res.json(teacher);
};

module.exports = { getTeacher };
