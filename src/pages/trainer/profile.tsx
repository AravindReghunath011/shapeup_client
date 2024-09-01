import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/trainer/TrainerNavbar";
import Sidebar from "@/components/trainer/trainerSideBar";
import { axiosPrivet } from "@/utils/axios/baseUrl";
import { TrainerInterface } from "@/utils/interface/trainerInterface";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { findByIdURL, profileUpdateURL } from "@/utils/axios/apiUrls";

const Profile = () => {
 
  const trainer = useSelector((state:any)=>state.persisted.trainer.trainer)
  

  const [trainerData, setTrainerData] = useState<TrainerInterface>();

  useEffect(() => {
    axiosPrivet
      .get(findByIdURL +`${trainer._id}`)
      .then(({ data }: { data: TrainerInterface }) => {
        console.log(data, "trainerdata");
        setTrainerData(data);
      });
  }, []);
  const navigate = useNavigate();

  const [isEditing,setIsEditing] = useState(false)
  const [headline,setHeadline] = useState(trainerData?.headline || "")
  const [about,setAbout] = useState(trainerData?.about || "")
  const textareaRef1 = useRef(null);
  const textareaRef2 = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const headlineHandleChange = (event) => {
    setHeadline(event.target.value);
  };
  
  const aboutHandleChange = (event) => {
    setAbout(event.target.value);
  };

  const saveChanges = () =>{
    axiosPrivet.post(profileUpdateURL,{headline:headline,about:about,trainerId:trainer._id}).then((response)=>{
      console.log(response,'jjj')
    })
  }

  useEffect(() => {
    if (isEditing && textareaRef1.current) {
      adjustTextareaHeight();
    }
  }, [isEditing]);

  const adjustTextareaHeight = () => {
    if (textareaRef1.current) {
      textareaRef1.current.style.height = 'auto';
      textareaRef1.current.style.height = `${textareaRef1.current.scrollHeight}px`;
    }
  };

  
  return (
    <div className="flex">
      <Navbar />
      <Sidebar/>
      
      <div className="w-full lg:pb-5 mt-32 flex justify-center">
        <div className="w-6/12">
          <Card className="   border-input">
            <div className="w-full  border-b h-40">
              <img
                src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg"
                alt="banner img"
                className="w-full h-full rounded-t-xl"
              />
            </div>
            <div className=" lg:pl-5">
              <div className="w-32 h-32  rounded-full bg-black inset-10 lg:mt-[-6rem]  outline outline-1">
                <img
                  src="https://i.pinimg.com/originals/4d/56/c9/4d56c9bf4e37a5cd0607feb036886aa9.jpg"
                  alt="profile"
                  className="w-full h-full z-50 rounded-full"
                />
              </div>
              <div className="lg:w-8/12">
                <h1 className="text-2xl font-semibold mt-3">
                  {trainerData?.name}
                </h1>
                <h2 className="font-light text-xl">Headline</h2>
                <textarea
        ref={textareaRef1}
        style={{ resize: 'none', overflow: 'hidden' }}
        className="bg-neutral-950 outline-none w-full"
        disabled={!isEditing}
        value={headline}
        onChange={headlineHandleChange}
      />
                  {
                    isEditing ? <Button className="rounded mb-2" onClick={()=>saveChanges()}>save changes</Button> :
                    <Button className="rounded mb-2" onClick={handleEditClick}>
                    Edit profile
                  </Button> 
                  }
                     
                  
                <div className=" w-72">
                  
                </div>
              </div>
            </div>
          </Card>
          <Card className=" lg:mt-3 w-full border-input p-5">
            <div>
              <h2 className="text-xl font-semibold lg:mb-3 ">About</h2>
              <textarea
  style={{ resize: 'none', overflow: 'hidden', height: 'auto' }}
  ref={textareaRef2}
  className="bg-neutral-950 outline-none w-full"
  disabled={!isEditing}
  value={about}
  onChange={aboutHandleChange}
/>
              
            </div>
          </Card>
        </div>

       
      </div>
    </div>
  );
};

export default Profile;
