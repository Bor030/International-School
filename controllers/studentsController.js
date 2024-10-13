const db = require('../database/config')

const index = async (req,res) => {
    const [students] = await db.query('SELECT * FROM students')
    res.render('students', {title: 'Students', students})
  }

const create = (req,res) => {

    res.render('students/create', {title: 'Create Students'});
  }

const store = async (req, res) => {

    const {first_name, last_name, email} = req.body
    const dbQuery = ('INSERT INTO students (first_name, last_name, email) VALUES (?,?,?)')
    await db.query(dbQuery, [first_name, last_name, email])
    res.redirect('/students')
}

const show = async (req, res) => {
    
    const {id} = req.params
    const dbShow = ('SELECT * FROM students where student_id=?')
    const [[student]] = await db.query(dbShow, [id])
    const [courses] = await db.query('SELECT * FROM courses')
    const [enrollments] = await db.query('SELECT * FROM enrollments JOIN courses ON enrollments.course_id = courses.course_id  WHERE student_id=?', [id])
    const [payments]= await db.query(`SELECT * FROM payments
                                       JOIN courses ON payments.course_id = courses.course_id
                                       WHERE student_id=?`, [id])
    
    const displayCourses = [];
    courses.forEach(course => {
      let found = false 
      enrollments.forEach(enrollment => {
        if (enrollment.course_id === course.course_id) {
          found = true
        }
      });
      if (!found) {
        displayCourses.push(course);
      }
    })
    res.render('students/profile', {title: 'Students', student:student, courses, enrollments, displayCourses, payments})
    
}

module.exports = {index, create, store, show}
