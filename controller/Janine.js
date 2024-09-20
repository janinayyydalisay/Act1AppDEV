const pal = {
    index: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    portfolio: (req, res) => {
        res.render('portfolio');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    services: (req, res) => {
        res.render('services');
    },
    blog: (req, res) => {
        res.render('blog');
    },
    team: (req, res) => {
        res.render('team');
    },
    testimonials: (req, res) => {
        res.render('testimonials');
    },
    pricing: (req, res) => {
        res.render('pricing');
    },
    faq: (req, res) => {
        res.render('faq');
    }
};


module.exports = pal;
