const express = require('express');
const teacherRoutes = require('./routes/teacher.routes');

const app = express();
app.use(express.json());

app.use('/teachers', teacherRoutes);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`mTeacher corriendo en el puerto ${PORT}`);
});
