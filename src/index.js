
// const init = () => {
//     document.querySelector('form').addEventListener('submit', (e) => {e.preventDefault()
//     // console.log(e.target)
//     let response = fetch('http://localhost:3000/movies')
//     let data = response.json();
//     console.log(data)
// })
// }

// document.addEventListener('DOMContentLoaded', init);


//corrected solution to the previous one
// const init = () => {
//     const inputForm = document.querySelector('form')
  
//     inputForm.addEventListener('submit', (event) => {
//       event.preventDefault();
//       const input = document.querySelector('input#searchByID');
  
//       fetch(`http://localhost:3000/movies/${input.value}`)
//       .then(response => response.json())
//       .then(data => {
//         const title = document.querySelector('section#movieDetails h4');
//         const summary = document.querySelector('section#movieDetails p');
  
//         title.innerText = data.title;
//         summary.innerText = data.summary;
//       });
//     });
//   }
  
//   document.addEventListener('DOMContentLoaded', init);

const init = () => {
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            // Fetch data from the server
            let response = await fetch('http://localhost:3000/movies');
            
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            
            // Extract JSON data from the response
            let data = await response.json();
            
            // Log the data
            console.log(data);

            console.log(data[0]);
            console.log(data[1]);
            console.log(data[2]);

            let movieid = document.getElementById('searchByID').value
            // document.querySelector('input#searchByID').value
            // e.target.children[1].value
            console.log(data[movieid - 1])

            //now how do we push those contents to the title and summary
            let movies = document.getElementById('movieDetails')
            movies.firstChild.remove();
            movies.firstChild.innerHTML= data[movieid-1].title
            movies.lastChild.remove();
            movies.lastChild.innerHTML= data[movieid-1].summary


            // if(){

            // }
        } catch (error) {
            // Handle any errors
            console.error('Error:', error);
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
