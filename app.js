require('dotenv').config();
const express = require('express');
const teacherRoutes = require('./routes/teacher.routes');

const app = express();
app.use(express.json());
app.use(teacherRoutes);

app.listen(process.env.PORT, () => {
  console.log(`msTeacher corriendo en puerto ${process.env.PORT}`);
});
