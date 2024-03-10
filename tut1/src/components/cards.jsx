function Card(props,{btntxt="visit"}) {
    // console.log(obj);
    return (
        <>
            {/* <h1 className="bg-green-400 text-black p-4 rounded-xl text-4xl w-40">card</h1> */}
            <div className="flex items-center justify-center h-screen">
            <div className="w-[300px] rounded-md border ">
                <img
                    src={props.img}
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        {props.greet}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                    {props.greet} Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                        debitis?
                    </p>
                    <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Macbook
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Apple
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Laptop
                        </span>
                    </div>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        {props.btntxt || "visit me"}
                    </button>
                </div>
            </div>
            </div>
        </>
    )
}
export default Card;