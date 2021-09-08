// Select color input

btn = document.querySelector('#mybtn');

btn.addEventListener('click', makeGrid);

// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
    // Your code goes here!
    event.preventDefault();
    row = document.querySelector('#inputHeight').value;
    console.log("Y =" + row + "\n");
    col = document.querySelector('#inputWidth').value;
    console.log("X =" + col + "\n");

    mytable = document.querySelector('#pixelCanvas');


    mytable.innerHTML = "";



    for (let i = 0; i < row; i++) {

        let row1 = document.createElement('tr');
        console.log(row1);
        mytable.appendChild(row1);



        for (let j = 0; j < col; j++) {

            let col1 = document.createElement('td');
            row1.appendChild(col1);
            col1.addEventListener('click', function () {

                let colorpicked = document.querySelector('#colorPicker').value;
                console.log("YES" + colorpicked);
                col1.style.backgroundColor = colorpicked;

            });
        }

    }

    console.log(mytable.outerHTML);



}


