import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'

const sidebar = () => {
  return (
    <div>
        <div className="flex flex-col mt-20  h-[100vh] p-3 w-72 outline outline-1 outline-gray-700  dark:text-gray-100">
	<div className="space-y-3 fixed w-60  h-screen">
		<div className="flex items-center justify-between">
			<h2>Dashboard</h2>
			<button className="p-2">
				
			</button>
		</div>
		<div className="relative">
			<span className="absolute inset-y-0 left-0 flex items-center py-4">
				<button type="submit" className="p-2 focus:outline-none focus:ring">
					
				</button>
			</span>
			<Input type='search' name='Search' placeholder='Search...' className='rounded w-full py-2 pl-10'/>
			{/* <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" /> */}
		</div>
		<div className="flex-1">
			<ul className="pt-2 pb-4  space-y-1 text-sm">
				<li className="rounded-sm hover:bg-neutral-900 ">
					<Link rel="noopener noreferrer" to={'/trainer'} className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>Home</span>
					</Link>
				</li>
				{/* <li className="rounded-sm hover:bg-neutral-900">
					<Link rel="noopener noreferrer" to={'/trainer/subscribers'} className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>Subscribers</span>
					</Link>
				</li>
				<li className="rounded-sm hover:bg-neutral-900">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>Subscription Plan</span>
					</a>
				</li>
				<li className="rounded-sm hover:bg-neutral-900">
					<Link rel="noopener noreferrer" to={'/trainer/subscription'} className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>Subscription </span>
					</Link>
				</li> */}
				
				<li className="rounded-sm hover:bg-neutral-900">
					<Link rel="noopener noreferrer" to={'/trainer/profile'} className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>Profile</span>
					</Link>
				</li>
				<li className="rounded-sm hover:bg-neutral-900">
					<Link rel="noopener noreferrer" to={'/trainer/video/upload'} className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>video Upload</span>
					</Link>
				</li>
				<li className="rounded-sm hover:bg-neutral-900">
					<Link rel="noopener noreferrer" to={'/trainer/diet/upload'} className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>Diet Upload</span>
					</Link>
				</li>
				<li className="rounded-sm hover:bg-neutral-900">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>Logout</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	
</div>

    </div>
  )
}

export default sidebar