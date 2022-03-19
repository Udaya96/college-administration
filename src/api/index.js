import { Router } from 'express'

import students from './students'
import departments from './departments'
import Faculty from './Faculty'
import FacultySubjects from './FacultySubjects'

const router = new Router()

router.use('/students', students)
router.use('/departments', departments)
router.use('/Faculty',Faculty)
router.use('/FacultySubjects',FacultySubjects)

export default router
