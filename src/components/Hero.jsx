import { setGlobalState, useGlobalState } from '../store'

const Hero = () => {
    const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-yellow-500
    00 text-white py-24 px-6">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            <span className="capitalize">Bring Creative Projects to Life on</span>
            <br />
            <span className="uppercase text-yellow-700">Crowdy.</span>
        </h1>
        <div className=" flex justify-center items-center space-x-2">
            <button type="button" className="inline-block px-6 py-2.5 bg-yellow-700 text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-800"
                onClick={() => setGlobalState('createModal', 'scale-100')}
            >
                Add Project
            </button>
            <button type="button" className="inline-block px-6 py-2.5 border border-yellow-700 font-bold text-xs leading-tight uppercase text-yellow-700 rounded-full shadow-md bg-transparent hover:text-white">
                Back Project
            </button>
        </div>
        <div className="flex justify-center items-center mt-10">
            <div className="flex flex-col justify-center items-center h-20 shadow-md w-full bg-yellow-600">
                <span className="text-lg font-bold text-white leading-5">
                    {stats?.totalProjects || 0}
                </span>
                <span>Projects</span>
            </div>
            <div className="flex flex-col justify-center items-center h-20 shadow-md w-full bg-yellow-600">
                <span className="text-lg font-bold text-white leading-5">
                    {stats?.totalBacking || 0}
                </span>
                <span>Backing</span>
            </div>
            <div className="flex flex-col justify-center items-center h-20 shadow-md w-full bg-yellow-600">
                <span className="text-lg font-bold text-white leading-5">
                    {stats?.totalDonations || 0} ETH
                </span>
                <span>Projects</span>
            </div>
        </div>
    </div>
  )
}

export default Hero