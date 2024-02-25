async function newPost(){
    try{
        const url='https://jsonplaceholder.typicode.com/posts';
        
        const post = {
            title: "New post",
            completed: false,
          };

          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
          });

          if (!response.ok) {
            throw new Error("Error");

            
          }
          const postCreated = await response.json();
          console.log("New post created:", postCreated);

    }
    catch(error){
        console.error("Error", error);


    }
}
newPost();