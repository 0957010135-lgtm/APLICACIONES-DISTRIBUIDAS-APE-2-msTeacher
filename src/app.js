const express = require('express');
const cors = require('cors');
const teacherRoutes = require('./routes/teacher.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/teachers', teacherRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`mTeacher corriendo en el puerto ${PORT}`);
});
