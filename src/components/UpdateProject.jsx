import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalState, setGlobalState } from '../store';
import { updateProject } from '../services/blockchain';
import { toast } from 'react-toastify';

const UpdateProject = ({ project }) => {
    const [updateModal] = useGlobalState('updateModal')
    const [title, setTitle] =useState(project?.title)
    const [description, setDescription] =useState(project?.description)
    const [date, setDate] =useState(project?.date)
    const [imageURL, setImageURL] =useState(project?.imageURL)

    const toTimestamp = (dateStr) => {
        const dateObj = Date.parse(dateStr)
        return dateObj / 1000
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!title || !description || !date || !imageURL) return

        const params = {
            id: project?.id,
            title,
            description,
            expiresAt: toTimestamp(date),
            imageURL,
        }

        await updateProject(params)
        toast.success('Project updated successfully, will reflect in 30sec')
        onClose()
    }

    const onClose = () => {
        setGlobalState('updateModal', 'scale-0')
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transition-transform duration-300 ${updateModal}`}>
        <div className="bg-yellow-500 shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className=" flex justify-between items-center">
                    <p className="font-bold text-white">
                        Edit Project
                    </p>
                    <button
                        onClick={onClose}
                        type="button" className=" border-0 bg-transparent focus:outline-none"
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <div className="rounded-xl overflow-hidden h-20 w-20">
                        <img src={imageURL || 'https://i0.wp.com/living.ai/wp-content/uploads/2020/12/product2.jpg?fit=1024%2C1024&ssl=1'}
                            alt="project title"
                            className="h-full w-full object-cover cursor-pointer" />
                    </div>
                </div>
                <div className="flex justify-between items-center bg-yellow-300 rounded-xl mt-5">
                    <input className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0" 
                        type="text"
                        name="title"
                        placeholder="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </div>
                <div className="flex justify-between items-center bg-yellow-300 rounded-xl mt-5">
                    <input className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0" 
                        type="date"
                        name="date"
                        placeholder="Expires"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        required
                    />
                </div>
                <div className="flex justify-between items-center bg-yellow-300 rounded-xl mt-5">
                    <input className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0" 
                        type="url"
                        name="imageURL"
                        placeholder="Image URL"
                        onChange={(e) => setImageURL(e.target.value)}
                        value={imageURL}
                        required
                    />
                </div>
                <div className="flex justify-between items-center bg-yellow-300 rounded-xl mt-5">
                    <textarea className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0" 
                        type="text"
                        name="description"
                        placeholder="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required>
                    </textarea>
                </div>
                <button type="submit" className="inline-block px-6 py-2.5 bg-yellow-700 text-white font-medium text-md leading-tight rounded-full shadow-md hover:bg-yellow-800 mt-5">
                    Update Project
                </button>
            </form>
        </div>
    </div>
  )
}

export default UpdateProject