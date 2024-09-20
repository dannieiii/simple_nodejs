const main ={
    index: (req, res)=>{
        res.render('index');
    },
    about: (req, res)=>{
        res.render('about');
    },
    service: (req, res)=>{
        res.render('service');
    },
    gallery: (req, res)=>{
        res.render('gallery');
    },
    contact: (req, res)=>{
        res.render('contact');
    },
};

module.exports = main;