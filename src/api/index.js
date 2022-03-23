import { Router } from 'express'

import students from './students'
import departments from './departments'
import Faculty from './Faculty'
import FacultySubjects from './FacultySubjects'
import Academicyear from './Academicyear'
import marks from './marks'
import Employees from './Employees'

const router = new Router()

router.use('/students', students)
router.use('/departments', departments)
router.use('/Faculty',Faculty)
router.use('/FacultySubjects',FacultySubjects)
router.use('/Academicyear',Academicyear)
router.use('/marks',marks)
router.use('/Employees',Employees)

export default router
