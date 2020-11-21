const router = require('express').Router();

const {
    getAllContacts,
    createNewContact,
    getContactsById,
    updateContactById,
    deleteContactById
} = require('./contactController')

router.get('/', getAllContacts);

router.post('/', createNewContact);
 router.get('/:id', getContactsById);
router.put('/:id', updateContactById);
router.delete('/:id', deleteContactById);



module.exports = router;