import { PageProps } from "./types.ts"

const LandingPage = ({setPage}: PageProps): React.JSX.Element =>{

    return(
        <div>
            <button onClick={()=> setPage("bookClub")}>Go to Book Club</button>
            <button onClick={() =>setPage("createClub")}>Create Book Club</button>
        </div>
    )
}

export default LandingPage