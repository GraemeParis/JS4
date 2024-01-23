// JS4 Session

// Short circuiting

// const one = true;
// const two = 100;
// const three = [];

// const result = one && two && three;

// console.log(result);

// JS in the browser
// DOM = Document Object Model - It's an API that allows tech like JS to manipulate a web page,

// Selection methods
// getelementById() - Must be unique

// Below example fails. This is due to sequential execution of document and trying to look up Root ID in line 28 before it's been created in line 33.
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <script>
//       const rootRef = document.getElementById("root");
//       rootRef.innerHTML = "Hello";
//     </script>
//   </head>
//   <body>
//     <div id="root"></div>
//   </body>
// </html>

//events
// These work by listening for a type of event - click, mouseOver, my-event-type. You pass them a "handler" or "callback" function that runs when that event is fired.

// {
//   /* <script>
//   const rootRef = document.getElementById("root");
//   rootRef.innerHTML = "Hello";

//   const input1Ref = document.getElementById("input1");

//   input1Ref.addEventListener("input", (event) => {
//     // console.log(event.target.value); // This logs all the text added via the input
//     rootRef.innerHTML = event.target.value; // This allows you to add text to the pag via the dom as you type with the Div styling in this instance.
//   });

//   const btn1Ref = document.getElementById("btn1");

//   btn1Ref.addEventListener("click", (event) => {
//     console.log("Btn1 clicked", event, event.target.id); // This allows you to show which button is clicked and also low level detail on the event click istelf
//   });

//   console.log(btn1Ref);
// </script> */
// }

// <script>
//   const addRef = document.getElementById("add");
//   const minusRef = document.getElementById("minus");
//   const outputRef = document.getElementById("output");

//   addRef.addEventListener("click", (event) => {
//     if (outputRef.innerHTML == 10) {
//       // This part is a defensive check to prevent you from going above 10 and provides an alert message when you try to.
//       alert("You are greedy!");
//       return;
//     }
//     outputRef.innerHTML = Number(outputRef.innerHTML) + 1;
//   });

//   minusRef.addEventListener("click", (event) => {
//     if (outputRef.innerHTML == 0) {
//       // this is the same for stopping you from going to below 0.
//       return;
//     }
//     outputRef.innerHTML = Number(outputRef.innerHTML) - 1;
//   });
// </script>
