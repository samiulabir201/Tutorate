import React, { useEffect, useState } from 'react'
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/ChatRoom.css";

var stompClient =null;
export const ChatRoom = () => {
    const [privateChats, setPrivateChats] = useState(new Map());     
    const [publicChats, setPublicChats] = useState([]); 
    const[results,setResutlts]=useState([]);
    const [tab,setTab] =useState("CHATROOM");
    const [permission,setPermission]=useState(false);
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: false,
        message: ''
      });
    useEffect(() => {
      console.log(userData);
    }, [userData]);

    const connect =()=>{
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }

    const onConnected = () => {
        setUserData({...userData,"connected": true});
        stompClient.subscribe('/chatroom/public', onMessageReceived);
        stompClient.subscribe('/user/'+userData.username+'/private', onPrivateMessage);
    
        userJoin();
    }


    const getMessage = async () => {
       
    

      };

    const userJoin=async()=>{


       

          var chatMessage = {
            senderName: userData.username,
            status:"JOIN"
          };
          console.log("User join")
          stompClient.send("/app/message", {}, JSON.stringify(chatMessage));

          const res = await fetch(`http://localhost:8080/message/prefetch?name=${userData.username}`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            
          });
          const data = await res.json();
          console.log(data);

          

        //    setPrivateChats(new Map(data));

        

          
            var all=data.map(function(item,index){
                
             if(userData.username!=item.senderName) 
            {    if(privateChats.get(item.senderName)){
                    privateChats.get(item.senderName).push(item);
                    
                    setPrivateChats(new Map(privateChats));
              }
              else{
                let list =[];
                list.push(item);
                privateChats.set(item.senderName,list);
                setPrivateChats(new Map(privateChats));
            }
        }
            else if(userData.username==item.senderName){
                if(privateChats.get(item.receiverName)){
                    privateChats.get(item.receiverName).push(item);
                    
                    setPrivateChats(new Map(privateChats));
              }
              else{
                let list =[];
                list.push(item);
                privateChats.set(item.receiverName,list);
                setPrivateChats(new Map(privateChats));
            }
            }
  
        
        
        
        
        }
            )

            console.log(all);
        
  
         // setResutlts(data);

        //console.log(results)
        //   setPrivateChats(new Map(privateChats));
            
       
    }

    const getOtherUsers=()=>{

    }

    const onMessageReceived = (payload)=>{
        var payloadData = JSON.parse(payload.body);
        switch(payloadData.status){
            case "JOIN":
                if(!privateChats.get(payloadData.senderName)){
                    privateChats.set(payloadData.senderName,[]);
                    setPrivateChats(new Map(privateChats));

                      

                }

                var chatMessage = {
                    senderName: userData.username,
                    receiverName:payloadData.senderName,
                    message: userData.message,
                    status:"OTHERS"
                  };
                  stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));   
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
        }
    }
    
    const onPrivateMessage = (payload)=>{
        
        if(payload.status!="OTHERS")
      {  console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            console.log(privateChats.get());
            setPrivateChats(new Map(privateChats));
        }else{
            let list =[];
            list.push(payloadData);
            privateChats.set(payloadData.senderName,list);
            setPrivateChats(new Map(privateChats));
        }
    }
        else{
            console.log(payload)
            if(!privateChats.get(payloadData.senderName)){
                privateChats.set(payloadData.senderName,[]);
                setPrivateChats(new Map(privateChats));

            }
        }

        console.log(privateChats);
    }

    const onError = (err) => {
        console.log(err);
        
    }

    const handleMessage =(event)=>{
        const {value}=event.target;
        setUserData({...userData,"message": value});
    }
    const sendValue=()=>{
            if (stompClient) {
              var chatMessage = {
                senderName: userData.username,
                message: userData.message,
                status:"MESSAGE"
              };
              console.log(chatMessage);
              stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
              setUserData({...userData,"message": ""});
            }
    }

    const sendPrivateValue=async()=>{

        const res = await fetch(`http://localhost:8080/user/checkSession?username=${userData.username}`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        });

       
      
        const check= await res.json();
        if(check==true){
        if (stompClient) {
          var chatMessage = {
            senderName: userData.username,
            receiverName:tab,
            message: userData.message,
            status:"MESSAGE"
          };
          
          if(userData.username !== tab){
            privateChats.get(tab).push(chatMessage);
            setPrivateChats(new Map(privateChats));
          }
          stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
          setUserData({...userData,"message": ""});
        }
    }
    }

    const handleUsername=(event)=>{
        const {value}=event.target;
        setUserData({...userData,"username": value});
    }
 
    const registerUser=async()=>{

    

        const res = await fetch(`http://localhost:8080/user/checkSession?username=${userData.username}`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        });

       
      
        const check= await res.json();

        console.log(check);
        if(check==true)
        connect();

       else
       console.log("nope")
    }
    useEffect(async () => {
        await registerUser();
    }, [])
    
    return (
    <div className="container">
        {userData.connected?
        <div className="chat-box">
            <div className="member-list">
                <ul>
                    <li onClick={()=>{setTab("CHATROOM")}} className={`member ${tab==="CHATROOM" && "active"}`}>Chatroom</li>
                    {[...privateChats.keys()].map((name,index)=>(
                         <li onClick={()=>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>{name}</li>
                        
                    ))}
                </ul>
            </div>
            {tab==="CHATROOM" && <div className="chat-content">
                <ul className="chat-messages">
                    {publicChats.map((chat,index)=>(
                        <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                            <div className="message-data">{chat.message}</div>
                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                        </li>
                    ))}
                </ul>

                <div className="send-message">
                    <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
                    <button type="button" className="send-button" onClick={sendValue}>send</button>
                </div>
            </div>}
            {tab!=="CHATROOM" && <div className="chat-content">
                <ul className="chat-messages">
                    {[...privateChats.get(tab)].map((chat,index)=>(
                        <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                            <div className="message-data">{chat.message}</div>
                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                        </li>
                    ))}
                </ul>

                <div className="send-message">
                    <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
                    <button type="button" className="send-button" onClick={sendPrivateValue}>send</button>
                </div>
            </div>}
        </div>
        :
        <div className="register">
            <input
                id="user-name"
                placeholder="Enter your name"
                name="userName"
                value={userData.username}
                onChange={handleUsername}
                margin="normal"
              />
              <button type="button" onClick={registerUser}>
                    connect
              </button> 
        </div>}
    </div>
    )
}

