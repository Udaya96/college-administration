import { Router } from 'express'

import students from './students'
import departments from './departments'
import Faculty from './Faculty'
import FacultySubjects from './Faculty - Subjects'

const router = new Router()

router.use('/students', students)
router.use('/departments', departments)
router.use('/Faculty',Faculty)
router.use('/Faculty - Subjects',FacultySubjects)

export default router
