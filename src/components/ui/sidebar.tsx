import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'

const sidebar = ({select}) => {
  return (
    <div>
        <div className="flex flex-col   h-[100vh] p-3 w-72 outline outline-1 outline-gray-700  dark:text-gray-100">
	<div className="space-y-3 fixed w-60  h-screen">
		<div className="flex items-center justify-between">
			<h2>Dashboard</h2>
			<button className="p-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-100">
					<rect width="352" height="32" x="80" y="96"></rect>
					<rect width="352" height="32" x="80" y="240"></rect>
					<rect width="352" height="32" x="80" y="384"></rect>
				</svg>
			</button>
		</div>
		<div className="relative">
			{/* <span className="absolute inset-y-0 left-0 flex items-center py-4">
				<button type="submit" className="p-2 focus:outline-none focus:ring">
					<svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-400">
						<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
					</svg>
				</button>
			</span> */}
			{/* <Input type='search' name='Search' placeholder='Search...' className='rounded w-full py-2 pl-10'/> */}
			{/* <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" /> */}
		</div>
		<div className="flex-1">
			<ul className="pt-2 pb-4 space-y-1 text-sm">
				{/* <li id={'Home'} className={`rounded-sm hover:bg-neutral-900 ${select === 'Home' ? 'bg-white text-black' : ''}`}>
					<Link rel="noopener noreferrer" to={'/admin'} className="flex items-center p-2 space-x-3 rounded-md">

						
						<span>Home</span>
					</Link>
				</li> */}
				<li className={`rounded-sm hover:bg-neutral-900 ${select === 'Trainers' ? 'bg-white text-black' : ''}`}>
					<Link rel="noopener noreferrer" to={'/admin/trainers'} className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>Trainers</span>
					</Link>
				</li>
				<li className={`rounded-sm hover:bg-neutral-900 ${select === 'Users' ? 'bg-white text-black' : ''}`}>
					<Link rel="noopener noreferrer" to={'/admin/users'} className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>Users</span>
					</Link>
				</li>
				<li className={`rounded-sm hover:bg-neutral-900 ${select === 'trainersRequests' ? 'bg-white text-black' : ''}`}>
					<Link rel="noopener noreferrer" to={'/admin/trainersrequests'} className="flex items-center p-2 space-x-3 rounded-md">
						
						<span>Trainer Requests</span>
					</Link>
				</li>
				{/* <li className={`rounded-sm hover:bg-neutral-900 ${select === 'Subscription' ? 'bg-white text-black' : ''}`}>
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
						</svg>
						<span>Subscription</span>
					</a>
				</li>
				<li className={`rounded-sm hover:bg-neutral-900 ${select === 'settings' ? 'bg-white text-black' : ''}`}>
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
							<path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
						</svg>
						<span>Settings</span>
					</a>
				</li>
				<li className="rounded-sm hover:bg-neutral-900">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
							<rect width="32" height="64" x="256" y="232"></rect>
						</svg>
						<span>Logout</span>
					</a>
				</li> */}
			</ul>
		</div>
	</div>
	
</div>

    </div>
  )
}

export default sidebar