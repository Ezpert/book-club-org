import {useState} from "react";


const Landing = () =>{

    const [page, setPage] = useState<string>("landing")




    return(
        <>


            { page == 'landing' ?
                ( <div>

                    <p>Book clubs: </p>
                    <button onClick={() => setPage("bookClub")}>Go To Book Club</button>


                    <button onClick={() => setPage("createPage")}> Create book club</button>


                </div>
                )
                :
                (<div>
                    <button onClick={()=> setPage("landing")}>Go back home!</button>
                    <p>Hello book clubbers! Weclome to the most optimal book club, BradleySexuals!</p>
                    <h1>Books being read:  </h1>
                    <h4>38 laws of power</h4>
                    <h5>Psychology 101</h5>

                    </div>)

            }
        </>
    )

}


export default Landing