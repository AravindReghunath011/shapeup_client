import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/users/Navbar";
import { axiosPrivet } from "@/utils/axios/baseUrl";
import { getSubscribedTrainers } from "@/utils/axios/apiUrls";

const socket = io("https://aravindreghunath.online/chat");

interface Trainer {
  _id: string;
  name: string;
}

interface Message {
  message: string;
  from: string;
}

const Chat = () => {
  const user = useSelector((state: any) => state.persisted.user.user);
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [time, setTime] = useState<string>("fetching");
  const [msg, setMsg] = useState<string>("waiting");
  const [text, setText] = useState<string>("");
  const [focusMessage, setFocusMessage] = useState<Trainer | null>(null);
  const [messageArray, setMessageArray] = useState<Message[]>([]);

  useEffect(() => {
    axiosPrivet
      .get<{ data: Trainer[] }>(getSubscribedTrainers + `${user.id}`)
      .then(({ data }) => {
        console.log(data, "data from getsubscription");
        setTrainers(data.data);
      });
  }, []);

  useEffect(() => {
    socket.on("connect", () => console.log(socket.id));
    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 5000);
    });
    joinRoom(user.id);
    socket.on("time", (data: string) => setTime(data));
    socket.on("message", (data: Message) => {
      setMsg(data.message);
      setMessageArray(prevMessages => [
        ...prevMessages,
        { message: data.message, from: "trainer" },
      ]);
    });
    socket.on("disconnect", () => setTime("server disconnected"));

    return () => {
      socket.disconnect(); // Clean up socket connection on component unmount
    };
  }, []);

  const joinRoom = (room: string) => {
    socket.emit("joinRoom", room); // Emitting a socket event to join a room
  };

  const sentMsg = (roomName: string, msg: string) => {
    setMessageArray(prevMessages => [
      ...prevMessages,
      { message: msg, from: "user" },
    ]);
    console.log(messageArray, "arr");
    socket.emit("sentMsg", { roomName: roomName, message: msg }); // Emitting a socket event to send a message
  };

  const selectFocusMessage = (trainer: Trainer) => {
    setFocusMessage(trainer);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-32">
        <Card className="h-[82vh] border-b-0 border-input rounded-b-none w-9/12 flex">
          <div className="w-4/12 border-e-2 border-input">
            <div className="border-b border-input h-14 text-xl p-3">
              Messaging
            </div>
            <div className="overflow-y-auto max-h-[90%] scrollbar-hidden">
              {/* {trainers.map(trainer => (
                <div
                  onClick={() => selectFocusMessage(trainer)}
                  className="border border-input h-16 flex items-center gap-3 pl-3 hover:bg-neutral-900"
                  key={trainer._id}
                >
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGC0q2Fa-hKs3WnOvOO9R9LD_zyJ-ctZVV6tQhVx1JI31Q5Rz2Cfod6IKAp0LKtAnNhV96"
                    alt=""
                  />
                  <h3>{trainer.name}</h3>
                </div>
              ))} */}
              <div
                  onClick={() => selectFocusMessage({name:'Aravind',_id:'1'})}
                  className="border border-input h-16 flex items-center gap-3 pl-3 hover:bg-neutral-900"
                  
                >
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGC0q2Fa-hKs3WnOvOO9R9LD_zyJ-ctZVV6tQhVx1JI31Q5Rz2Cfod6IKAp0LKtAnNhV96"
                    alt=""
                  />
                  <h3>Aravind</h3>
                </div>
            </div>
          </div>
          <div className="w-10/12">
            <div className="border-b border-input h-14 w-full text-xl flex items-center pl-5">
              {focusMessage?.name}
            </div>
            <div className="h-[88%] overflow-y-auto max-h-[90%] scrollbar-hidden  flex flex-col ">
              {!focusMessage ? <p className="ml-5 mt-5 text-lg">No conversation selected</p>: 
              <div  className="flex-grow">
              {messageArray.map(message => (
                  <div key={messageArray.indexOf(message)} className="flex items-center pl-3 my-4">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGC0q2Fa-hKs3WnOvOO9R9LD_zyJ-ctZVV6tQhVx1JI31Q5Rz2Cfod6IKAp0LKtAnNhV96"
                      alt=""
                    />
                    <div className=" h-14 pl-3 w-8/12">
                      <p className="font-semibold ">
                        {message.from === "user"
                          ? user.name
                          : focusMessage?.name}
                      </p>
                      <p className="font-light mt-2">{message.message}</p>
                    </div>
                  </div>
              ))}
              </div>
}

              <div className="flex justify-center border-input fixed bottom-5 bg-neutral-950 w-[53.5%] border-t h-20 items-center">
                <Input
                  onChange={e => setText(e.target.value)}
                  type="text"
                  className="ml-2 w-9/12 rounded rounded-e-none "
                />
                <Button
                  onClick={() => sentMsg(focusMessage?._id || "", text)}
                  className="w-2/12 rounded rounded-s-none"
                >
                  send
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
