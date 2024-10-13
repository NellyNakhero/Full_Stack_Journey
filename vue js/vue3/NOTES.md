# WHAT IS VUEJS

Vue is a javascript framework used to create component based applications for single page applications.

- it can be used to create dynamic data driven website(SPAs).
- Can also be used to create stand alone widgets

<br/>

NB: Created widgets can be used and inserted anywhere in html site or any other fe framework used to build a site or an app.
And it can be resued in multiple sections of the website.


<br/>
<br/>


# VUE WEBSITES

- vue can be used to create a whole website with multiple pages and components.
- these pages are normally called simgle page applications.
- All routing is done on the browser and not the server


# WIDGET

- To use vue widget first insert the vue cdn: The cdn adds to our application all the vue functionalities including but not limited to vue create app.

example

<code>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vue Widget</title>

            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        </head>
        <body>

            <h1>Amazing Grace :) </h1>

            <script src="app.js" ></script>
        </body>
        </html>
</code>

- all vue code should be written in script file, or script section
- to start creating the vue widget, we add it vue app(to be created). its the job of this vue app to control a section or the whole website.


<br/>
<br/>

# CLICK EVENTS

- used to react to certain things that happen in the browser.
- used when we want to fire some events when a user clicks on some elements
- directives are used to convert normal element into a clickable component or the component that we want to react to.


<br/>
<br/>

# CONDITIONAL RENDERING
- used to show content depending on certail condition
- Uses directive v-if || v-show

<br/>
<br/>

# OUTPUT LIST
- uses directive v-for(used to loop through contents of a list)

<br/>
<br/>

# ATTRIBUTE BINDING
- its when we bing dynamic values into html attributes
- achieved by using directive v-bind: its shorthand is a colon (:) placed before an attribute to be bound

<br/>
<br/>

# DYNAMIC CLASSES
- It conditionally gives elements certain classes based on certain conditions


<br/>
<br/>

# COMPUTED PROPERTIES
- is a way to define a data property inside our components that depends on other data that we have inside that component.


<br/>
<br/>

# VUE CLI
- Its a tool used to boilerplate full vue applications which come along with all the configurations and structure needed to create a full vue website/spa.
- the command `vue create name_of_project` is used to create  a blank vue project
- the command `vue create name_of_project` is used to  live reload and serve the project files

<br/>
<br/>

# TEMPLATE REFS
- used to get a handle of the a dom element for any sort of manipulations.
- allows storing of references of a dom element inside a variable.

<br/>
<br/>

# PROPS
- used to pass data into the component from parent component