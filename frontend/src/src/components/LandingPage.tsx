import React, {useEffect, useState} from "react";
import axios from "axios";

interface LandingProps {
    setPage : (page: string) => void
}

interface Club {
    id: number
    name: string
    description: string
}

interface Response {
    data: Club[]
}

const LandingPage = ({setPage}: LandingProps): React.JSX.Element =>{
    const [clubList, setClubList] = useState<Club[] | undefined >();
    async function getClubs(): Promise<Club[] | undefined> {
        try{

            const response = await axios.get<Response>(
                'http://127.0.0.1:8000/clubs/',
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );

            const clubs: Club[] = []
            console.log(response)
            if (response.data instanceof Array){
                response.data?.map((club: Club): void => {
                    clubs.push(club as Club)
                })
            }

            setClubList(clubs)
            console.log("Clubs: ", clubs)

            return clubs
        }catch(e){
            console.error("Error!", e)
        }
    }

    useEffect(() => {
        console.time('filter');
        getClubs()
        console.timeEnd('filter');
    }, []);

    return(
        // use <> to keep it consistent like our main component
        <>
            <h1>book clubs: </h1>
                {clubList && clubList.map((item:Club) => {
                    return (
                        <p key={item.id}>Club: {item.name} Description: {item.description}</p>
                    )
                })}

            <button onClick={()=> setPage("bookClub")}>Join book club</button>
            <button style={{margin: "0px 0px 0px 1000px"}} onClick={() =>setPage("createClub")}>Create Book Club</button>
        </>
    )
}

export default LandingPage