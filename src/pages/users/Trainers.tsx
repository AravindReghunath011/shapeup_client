
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/users/Navbar";
import { axiosPrivet } from "@/utils/axios/baseUrl";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TrainerInterface } from "@/utils/interface/trainerInterface";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { getTrainersUrl, searchTrainersURL, trainerFollowURL, trainerUnfollowURL } from "@/utils/axios/apiUrls";

const Trainers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state:any) => state.persisted.user.user);
  const [value, setValue] = useState('');
  const [trainers, setTrainers] = useState([]);

  

  const fetchdata = async () => {
    axiosPrivet.get(getTrainersUrl).then(({data}) => {
      console.log(data.trainers, 'dataaa okokoko');
      setTrainers(data.trainers);
    });
  };
  useEffect(()=>{
    fetchdata()
  },[])

  const handleUnfollow = async (trainerId: string) => {
    axiosPrivet.put(trainerUnfollowURL + `${trainerId}`, { userId: user.id }).then(({data}) => {
      console.log(data, 'follow data');
      if (data.message === 'success') {
        toast.success('you have unfollowed');
        fetchdata();
      }
    });
  };

  const handleFollow = async (trainerId: string) => {
    axiosPrivet.put(trainerFollowURL + `${trainerId}`, { userId: user.id }).then(({data}) => {
      console.log(data, 'follow data');
      if (data.message === 'success') {
        toast.success('you started following');
        fetchdata();
      }
    });
  };

  const searchFn = (value: string) => {
    console.log(value, 'vallllll');
    axiosPrivet.get(searchTrainersURL + value).then(({data}) => {
      console.log(data, 'dataaaa jjj');
      setTrainers(data.data);
    });
  };

  const debounce = (fn: any, delay: number) => {
    let timer: NodeJS.Timeout;
    return function (...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    getData(newValue);
  };

  const getData = debounce(searchFn, 500);

  return (
    <>
      <Navbar/>
      <Input type='search' name='Search' onChange={handleChange} placeholder='Search...' className='rounded w-72 pl-2 py-2 ml-40 mt-32'/>

      <div className="flex justify-center">
        <div className="flex mt-10 w-10/12 flex-wrap gap-10 ml-20 mb-10">
          {
            trainers.map((trainer: TrainerInterface) => {
              return (
                <Card key={trainer._id} className="h-[17rem] w-52 hover:ring-2">
                  <div className="h-40 ">
                    <img onClick={() => navigate(`/trainerdetails/${trainer._id}`)} className="object-cover object-center rounded-t-xl h-full w-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbDddKg124nPwgxCjzujO_2VV0B6VCi08Hg&usqp=CAU" alt="" />
                  </div>
                  <div className="text-center p-2">
                    <h1 className="mb-5">{trainer?.name}</h1>
                    {
                      trainer.followers.includes(user.id) ? (
                        <Button onClick={() => handleUnfollow(trainer._id)} variant={"outline"} className="rounded">
                          Unfollow
                        </Button>
                      ) : (
                        <Button onClick={() => handleFollow(trainer._id)} variant={"outline"} className="rounded">
                          Follow
                        </Button>
                      )
                    }
                  </div>
                </Card>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default Trainers;
