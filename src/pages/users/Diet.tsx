
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
import { dietListURL, searchTrainersURL } from "@/utils/axios/apiUrls";

const Diets = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state:any) => state.persisted.user.user);
  const [value, setValue] = useState('');
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    axiosPrivet.get(dietListURL).then(({data}) => {
      console.log(data.diets, 'dataaa okokoko');
      setDiets(data.diets);
    });
  };

  

  const searchFn = (value: string) => {
    console.log(value, 'vallllll');
    axiosPrivet.get(searchTrainersURL + value).then(({data}) => {
      console.log(data, 'dataaaa jjj');
      setDiets(data.data);
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
            diets.map((diet: any) => {
              return (
                <Card key={diet._id} className="h-[17rem] w-52 hover:ring-2">
                  <div className="h-40 ">
                    <img  className="object-cover object-center rounded-t-xl h-full w-full " src={diet.image} alt="" />
                  </div>
                  <div className="text-center p-2">
                    <h1 className="text-lg">{diet?.title}</h1>
                    <p className="mb-1 text-xs text-gray-400">{diet.description.slice(0,8)}...</p>
                    <Button onClick={() => navigate(`/diet/${diet._id}`)} className="rounded">view Details</Button>
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

export default Diets;
