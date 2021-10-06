const express = require('express');

const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
var cookieSession = require('cookie-session')

// const router = require('./router');
const PORT = process.env.PORT || 5000;
;
const app = express();  
const server = http.createServer(app);

const bodyParser = require('body-parser');
const{Announcement} = require('./DatabaseApis/Chat')
const {Messages} = require('./DatabaseApis/Messages');

const io = socketio(server);
  


// const homeRoutes = require("./routes/home");
const sampleRoutes = require("./routes/sample");
const loginRoutes = require("./routes/login");
const UserInfoRoutes = require("./routes/userinfo");
// const { userInfo } = require('os');
const CreateClassRoutes = require("./routes/createclass");
const joinClassRoutes= require("./routes/joinclass");
const getClassRoutes= require("./routes/getclass");
const AssignmentRoutes = require("./routes/assignment")
const AssignmentResponseRoutes = require("./routes/assignmentresponse");
const GetPeopleRoutes = require("./routes/getpeople");
const AnnouncementRoutes = require("./routes/announcement");
const MessageRoutes = require("./routes/message");


app.use(bodyParser.urlencoded({extended: false}));  
app.use(bodyParser.json());

 
app.use(cors());  
var corsOptions = {
    origin: 'https://nextsmartclass.netlify.app',
    optionsSuccessStatus: 200
}

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))
 

app.use('/sample', cors(corsOptions), sampleRoutes);
app.use('/login',cors(corsOptions), loginRoutes);  
app.use('/userinfo', cors(corsOptions), UserInfoRoutes);  
app.use('/createclass', cors(corsOptions),CreateClassRoutes)
app.use('/joinclass', cors(corsOptions), joinClassRoutes) 
app.use('/getclass', cors(corsOptions), getClassRoutes) 
app.use('/assignment', cors(corsOptions), AssignmentRoutes) 
app.use('/assignmentresponse', cors(corsOptions), AssignmentResponseRoutes) 
app.use('/getpeople', cors(corsOptions), GetPeopleRoutes) 
app.use('/announcement', cors(corsOptions), AnnouncementRoutes) 
app.use('/messages', cors(corsOptions), MessageRoutes) 




io.on('connect', (socket) => {    

 

  socket.on('join', async ({classcode}) => {
    console.log(classcode,"room joined",socket.id);
 
     
       
     
  });

  socket.on('announcement', async ({classcode, message}) => {

    await Announcement("post",classcode, message);
    io.emit('announcementalert', { message:"alert", classcode:classcode}); 
  
  }); 

  socket.on('sendMessage', async ({classcode, name, message}) => {
   let messa=  await Messages(classcode, name, message);
  
    io.emit('message', { message:messa,name:name, classcode:classcode}); 

}); 

  socket.on('disconnect', async () => { 
    console.log("dicsonne"); 
 
       
  
  });
});


 
server.listen(PORT, () => console.log(`server is running on ${PORT} `));       

// module.exports = schema;