import {PageProps} from "./types.ts"

const CreateClub = ({setPage}: PageProps): React.JSX.Element => {
    return(
        <div>
            <p>here we can create clubs</p>
            <button onClick={()=> setPage("landingPage")}>Go back to landing page</button>
        </div>
    )
}

export default CreateClub