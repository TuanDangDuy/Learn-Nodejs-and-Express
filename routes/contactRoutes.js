const express = require('express')
const router = express.Router()
const { getContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController')

//GET ALL
router.get('/', getContacts)

//GET ID
router.get('/:id', getContact)

//POST
router.post('/', createContact)

//PUT ID
router.put('/:id', updateContact)

//DELETE ID
router.delete('/:id', deleteContact)




// //có thể viết gọn lại như này:
// router.get('/', getContacts).post('/', createContact)
// router.get('/:id', getContact).put('/:id', updateContact).delete('/:id', deleteContact)



module.exports = router