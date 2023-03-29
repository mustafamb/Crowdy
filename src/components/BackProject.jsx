import { FaTimes } from 'react-icons/fa';
import { useGlobalState, setGlobalState } from '../store';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { backProject } from '../services/blockchain';

const BackProject = ({ project }) => {
    const [backModal] = useGlobalState('backModal')
    const [amount, setAmount] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!amount) return

        await backProject(project?.id, amount)
        toast.success('Project Backed successfully, will reflect in 30sec')
        setGlobalState('backModal', 'scale-0')
    }

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transition-transform duration-300 ${backModal}`}>
            <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className=" flex justify-between items-center">
                        <p className="font-semibold">
                            {project?.title}
                        </p>
                        <button
                            onClick={() => setGlobalState('backModal', 'scale-0')}
                            type="button" className=" border-0 bg-transparent focus:outline-none"
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <div className="rounded-xl overflow-hidden h-20 w-20">
                            <img src={project?.imageURL || 'https://i0.wp.com/living.ai/wp-content/uploads/2020/12/product2.jpg?fit=1024%2C1024&ssl=1'}
                                alt={project?.title}
                                className="h-full w-full object-cover cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
                        <input className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0" 
                            type="number"
                            step={0.01}
                            min={0.01}
                            name="amount"
                            placeholder="Amount {ETH}"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                            required
                        />
                    </div>
                    <button type="submit" className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-md leading-tight rounded-full shadow-md hover:bg-green-700 mt-5">
                        Back Project
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BackProject