module.exports=function(app){

    var mainController=require('../controllers/main.server.controller');

    app.all('/*', function(req, res, next){

        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-type,Accept');  // Set custom headers for CORS
        next();

    });


    app.route('/*')
        .get(mainController.render);

};

