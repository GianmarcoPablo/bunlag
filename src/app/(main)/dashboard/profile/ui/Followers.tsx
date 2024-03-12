
export default function Followers() {
    return (
        <div>
            <div className="bg-white p-3 hover:shadow">
                <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                    <span className="text-green-500">
                        <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </span>
                    <span>Similar Profiles</span>
                </div>
                <div className="grid grid-cols-3">
                    <div className="text-center my-2">
                        <img className="h-16 w-16 rounded-full mx-auto"
                            src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                            alt="" />
                        <a href="#" className="text-main-color">Kojstantin</a>
                    </div>
                    <div className="text-center my-2">
                        <img className="h-16 w-16 rounded-full mx-auto"
                            src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                            alt="" />
                        <a href="#" className="text-main-color">James</a>
                    </div>
                    <div className="text-center my-2">
                        <img className="h-16 w-16 rounded-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt="" />
                        <a href="#" className="text-main-color">Natie</a>
                    </div>
                    <div className="text-center my-2">
                        <img className="h-16 w-16 rounded-full mx-auto"
                            src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                            alt="" />
                        <a href="#" className="text-main-color">Casey</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
