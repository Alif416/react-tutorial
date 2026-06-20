

const RightCardContent = (props) => {
    console.log(props.user);

  return (
    <div className="relative h-120 mx-10 mt-3 w-70 bg-red-500 rounded-4xl overflow-hidden">
      <img className="h-full w-full object-cover " src={props.user.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between'  >
              <div ><h2 className="m-4 text-xl font-bold px-3 py-3 bg-white rounded-full h-10 w-10 flex justify-center items-center ">{props.number}</h2></div>
        <div className="px-3 py-3"><p className="mb-5 text-white text-lg leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam amet omnis deserunt molestiae officiis vitae neque reiciendis praesentium ab.</p>
          <div className="flex justify-between">
                      <button className="bg-blue-600 text-white text-lg font-semibold px-3 py-2 rounded-full">{props.user.tag }</button>
            <button className="bg-blue-600 px-3 py-2 rounded-full "><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>  
      </div>

    </div>
  )
}

export default RightCardContent