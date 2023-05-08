
//GET
const getContacts = (req, res) => {
    res.status(200).json('get all contacts')
}

//GET ID
const getContact = (req, res) => {
    res.status(200).json(`Get ID contact for ${req.params.id}`)
}

//POST
const createContact = (req, res) => {
    console.log(req.body)
    const {name, email, phone} = req.body
    if(!name || !email || !phone) {
        res.status(400)
        throw new Error('All feild are mandatory')
    }
    res.status(200).json('Create contact')
}

//PUT
const updateContact = (req, res) => {
    res.status(200).json(`Update ID contact for ${req.params.id}`)
}

//DELETE
const deleteContact = (req, res) => {
    res.status(201).json(`Delete ID contact for ${req.params.id}`)
}

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }