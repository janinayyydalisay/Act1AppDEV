const express = require('express');
const router = express.Router();
const janine = require('../controller/Janine');  

//janine.index yung janine dun un ung parang variable or identifier natin para matawag ang ating controller

router.get('/', janine.index);          
router.get('/about', janine.about);     
router.get('/contact', janine.contact); 
router.get('/portfolio', janine.portfolio); 
router.get('/services', janine.services); 
router.get('/blog', janine.blog);
router.get('/team', janine.team);
router.get('/testimonials', janine.testimonials);
router.get('/pricing', janine.pricing);
router.get('/faq', janine.faq);

module.exports = router;
