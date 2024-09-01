import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sidebar from '../../components/trainer/trainerSideBar';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navbar from '@/components/trainer/TrainerNavbar';
import { dietUploadURL } from '@/utils/axios/apiUrls';
const DietUpload = () => {
    const trainer = useSelector((state) => state.persisted.trainer.trainer);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data, 'jj');
        const formData = new FormData();
        formData.append('file', data.file[0]);
        formData.append('title', data.title);
        formData.append('type', data.type);
        formData.append('description', data.description);
        formData.append('trainerId', trainer._id);
        axios.post(dietUploadURL, formData, { withCredentials: true }).then((response) => {
            console.log(response.data);
            if (response.data.message == 'success') {
                toast.success('Diet uploaded successfully');
            }
            else {
                console.log(response.data.message);
                toast.error(response.data.message);
            }
        });
    };
    return (_jsxs("div", { className: 'flex ', children: [_jsx(Navbar, {}), _jsx(Sidebar, {}), _jsxs("div", { className: 'pl-10 pt-32 w-5/12 ', children: [_jsx("h1", { className: 'text-5xl font-bold mb-5', children: "Diet Upload" }), _jsxs("form", { action: "", onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { className: 'flex', children: [_jsxs("div", { children: [_jsx("label", { children: " Title " }), " ", _jsx("br", {}), _jsx("input", { type: "text", ...register("title", { required: true }), className: 'mb-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72', placeholder: 'Enter diet title' }), errors.title && _jsx("p", { className: 'font-extralight text-sm h-2  text-red-700', children: "This field is required" })] }), _jsxs("div", { className: 'ml-5', children: [_jsx("label", { children: " type" }), "  ", _jsx("br", {}), _jsx("input", { type: "text ", ...register("type", { required: true }), className: 'mb-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72', placeholder: 'Enter food type' }), " ", _jsx("br", {}), errors.type && _jsx("p", { className: 'font-extralight  text-sm h-2 text-red-700', children: "This field is required" })] })] }), _jsx("label", { children: " description" }), " ", _jsx("br", {}), _jsx("textarea", { ...register("description", { required: true }), placeholder: 'Enter description', className: 'mb-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-full  h-32', children: " " }), errors.description && _jsx("p", { className: 'font-extralight text-sm h-2  text-red-700', children: "This field is required" }), _jsx("br", {}), _jsx("input", { type: "file", ...register("file", { required: true }), className: 'mb-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' }), " ", _jsx("br", {}), _jsx("button", { type: 'submit', name: 'submit', className: 'w-72 rounded bg-white text-black font-medium p-2 mt-5', children: "Upload" }), _jsx("div", { className: 'flex  justify-center  text-center  w-full ' })] })] })] }));
};
export default DietUpload;
