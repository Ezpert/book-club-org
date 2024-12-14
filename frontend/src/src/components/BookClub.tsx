import {PageProps} from "./types.ts"

const BookClub = ({setPage}: PageProps): React.JSX.Element =>{
    return(
        <div>
            <button onClick={() => setPage("landingPage")}>Go back to landing</button>
            <p>Hello book clubbers! Weclome to the most optimal book club, BradleySexuals!</p>
            <h1>Books being read right now:</h1>
            <p>38 laws of power</p>
            <p>psychology 101</p>
        </div>
    )
}

export default BookClub