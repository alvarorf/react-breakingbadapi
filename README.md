### React-breakingbadapi

Hi, welcome to my React-breakingbadapi project. Please see the live version [here](https://www.react-breakingbadapi.tk).

This website is meant as a sample project.

It uses React and is backendless. It is served via Nginx in an AWS EC2 instance.

  

### How does it work?
This React app has three main components: **Header**, **Search** and **CharacterGrid**
When the page is loaded for the first time, the *useState* hook is used to initialize the *items*, *isLoading* and *query* variables. The *items* variable is set to an empty array, *isLoading* is set to ```true``` and query is set to an empty string.

After that, the *useEffect* hook and the *axios* package are used to retrieve the data (in JSON format) from [www.breakingbadapi.com](https://www.breakingbadapi.com) and store it in the *result* variable.

However, since this may take some time, while that happens, the **CharacterGrid** component takes the *isLoading* variable as a prop and, since it is set to ``true``, the **Spinner**  component (which is a functional component), returns the spinner gif image.

Once the data is loaded, we use the *setItems* method (from the *useState* hook) to set the items variable and store *result.data* into it and *isLoading* is set to ``false`` using the *setIsLoading* method of the *useState* hook.

Also, since *isLoading* is *false* now, we loop through each one of the elements in *items* (which we will just call *item*) and we pass its id *item.char_id* and the item itself (*item*) as  props to the **CharacterItem**.  The **CharacterItem** takes *item* as an argument and styles each one of its variables in a nice, visually appealing format, using Bootstrap 4 and custom CSS code, as a card.  (which uses the CSS transform property to rotate the element when you hover over a card).

As for the **Search** component: it returns, in JSX, a form with an input that uses *event.target.value* and the *useState* hook to edit the *query* variable. This variable is passed as a prop to *App.js* and is used to fetch the data that the user is requesting.

## Built with

To build this project, I used:

- React & React hooks

- The breaking bad API [www.breakingbadapi.com](https://www.breakingbadapi.com)

- Linux

- Nginx

- AWS EC2

## Screenshot

![Screenshot](./screenshot.png")