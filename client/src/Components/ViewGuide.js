import React, {useEffect, useState} from "react"

function ViewGuide(){
    const [blocks, setData] = useState([]);
    const fetchData = async () => {
      const response = await fetch("/api", {
        method: "GET"
      }).then(response => response.json());
        console.log(response);
        setData(response);
      }

      useEffect(()=> {
        fetchData();
      }, [])

      console.log(blocks);

      return(
        <div>
            {blocks && blocks.map(block => {
              if(block.type === "paragraph"){
                return(
                  <p key={block.id}>paragraph styling: {block.data.text}</p>
                )
              }

              
              if(block.type === "header"){
                return(
                  <div key={block.id}>
                    <p style={{margin: 0}}>header styling: {block.data.text}</p>
                    <p style={{margin: 0}}>header level: {block.data.level}</p>
                  </div>
                )

              }

            })}
        </div>
      );

}

export default ViewGuide;