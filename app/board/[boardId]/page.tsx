import { Canvas } from "./_components/canvas"

interface BoardIgPageProps{
    params:{
        boardId:string
    }

}

const BoardIdPage = ({params}:BoardIgPageProps) => {
    return (
        <Canvas boardId={params.boardId}/>
    )
}

export default BoardIdPage