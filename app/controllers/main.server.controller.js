exports.render=function(req, res){

    res.sendFile('public/index.client.view.html', { root: __dirname+'../../../' });

};

