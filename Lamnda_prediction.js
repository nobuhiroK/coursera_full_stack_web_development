exports.handler = function(event, context) {
    var aws = require('aws-sdk');
    aws.config.region = 'us-east-1';
 
    var ml = new aws.MachineLearning();
 
    var params = {
        MLModelId: 'ml-WNck4RiPU5e', 
        PredictEndpoint: 'https://realtime.machinelearning.us-east-1.amazonaws.com', 
        Record: event
    };
 
    ml.predict(params, function(err,data){
        if (err) context.fail(err.stack);
        else {
            context.succeed(data['Prediction']);
        }
    });
};
