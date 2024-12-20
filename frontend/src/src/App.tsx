import LandingPage from "./components/LandingPage.tsx";
import CreateClub from "./components/CreateClub.tsx";
import BookClub from "./components/BookClub.tsx"
import React, {useState} from "react";


//Made an interface to declare the types of props beforehand. Apparently this is best practice
// Essentially it just declares the setPage prop to have a function type that has a parameter page and returns void
// We can just use LandingProps to type setPage in all the three other components i.e. ( LandingPage, BookClub, CreateClub )
// React.JSX.Element essentially is just explicitly annotating the return type of the component.
// This is so TypeScript knows for sure that is our return type on each of our components.



//so this syntax allows us to not have to do prop.whatever, it destructures it for us, that's why the component is declared so weirdly
//if you have any questions about the code shoot me a message, typescript makes component  declaration weird :) - Ruben


//Making inline component BookClub







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