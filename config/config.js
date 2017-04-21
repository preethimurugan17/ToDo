var mongoose=require('mongoose');
module.exports={
    'ConnectionUrl' :'mongodb://localhost:27017/todo',
    'ConnectDB': function(){
        mongoose.connect(this.ConnectionUrl);
    },
    'DisconnectDB':function(){
        mongoose.disconnect(this.ConnectionUrl);
    }
};

mongoose.connection.on('open',function(){
    console.log('MongoDB connection established');
});

mongoose.connection.on('error',function(){
    console.log('MongoDB connection has some errors');
});

mongoose.connection.on('close',function(){
    console.log('MongoDB connection closed');
});