import express from 'express'
import { toNewDiaryEntry } from '../converters/diaryEntryConverter'
import * as diaryServices from '../services/diaryService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWhithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res, next) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.send(addedDiaryEntry)
  } catch (e: any) {
    // res.status(400).send(e.message)
    console.log('e is type:', typeof e)

    next(e)
  }
})

export default router
