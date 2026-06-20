import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <div className="flex">
      {props.users.map((user, index) => (
        <RightCardContent key={index} number={index + 1} user={user} />
      ))}
    </div>
  )
}

export default RightCard