import { Canvas } from "./_components/canvas"
import { Room } from "@/components/room"
import { Loading } from "./_components/loading"

interface BoardIgPageProps{
    params:{
        boardId:string
    }
}

const BoardIdPage = ({params}:BoardIgPageProps) => {
    return (
        <Room roomId={params.boardId} fallback={<Loading />}>
        <Canvas boardId={params.boardId}/>
        </Room>
    )
}

export default BoardIdPage