import { useContext} from "react"
import DataContext from "../../contexts/DataContext"

export const List = () => {

  return (
    <>
    <h1>Hp characters</h1>
    <ul>
        <ListItem />
    </ul>
    </>
  )
}

const ListItem = () => {
    const boeien = useContext(DataContext);
    console.log(`listItem`, boeien)
    return(
        <>
            {boeien.map((e,i) => { return <li key={i}>{e?.name}</li>})}
        </>
    )

}

export default List
