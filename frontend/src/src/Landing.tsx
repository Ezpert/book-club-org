import {useState} from "react";


//so this syntax allows us to not have to do prop.whatever, it destructures it for us, that's why the component is declared so weirdly
//if you have any questions about the code shoot me a message, typescript makes component  declaration weird :) - Ruben
const LandingPage = ({setPage}: {setPage: (page: string) => void}) =>{
    return(
        <div>
            <button onClick={()=> setPage("bookClub")}>Go to Book Club</button>
            <button onClick={() =>setPage("createClub")}>Create Book Club</button> 
        </div>
    )
}

const BookClub = ({setPage}: {setPage: (page: string) => void}) =>{
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

const CreateClub = ({setPage}: {setPage: (page: string) => void}) => {
    return(
        <div>
            <p>here we can create clubs</p>
            <button onClick={()=> setPage("landingPage")}>Go back to landing page</button>
        </div>
    )
}




const Landing = () =>{

    const [page, setPage] = useState<string>("landingPage")


    return (
        <>
        {
        
            page === "landingPage"?(
                <LandingPage setPage={setPage}/>
            ): page === "bookClub" ?(
                <BookClub setPage={setPage}/>
            ): page === "createClub"? (
                <CreateClub setPage={setPage}/>
            ): (
                <p>error page</p>
            )

        }
        
        </>
    )



}


export default Landing