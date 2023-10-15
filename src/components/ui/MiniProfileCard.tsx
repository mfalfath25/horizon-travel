interface Props {
  name: string | undefined
}

const MiniProfileCard = ({ name }: Props) => {
  return (
    <div className="rounded-md border-[1px] border-slate-600 bg-blue-100 p-2">
      <p>Hello,</p>
      <p className="font-bold">{name}</p>
    </div>
  )
}

export default MiniProfileCard
