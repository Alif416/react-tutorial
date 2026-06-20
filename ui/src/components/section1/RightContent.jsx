import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
      <div className="h-full w-3/4 ">
      <RightCard users={props.users} />
    </div>
  )
}

export default RightContent