# Bottles
Welcome to Bottles, my first full-stack app! Here on Bottl Island, many messages in bottles wash up on the shore from far away. You can read these messages, leave comments on them, edit them, or make you own original bottle to send out to the sea. Messages are totally random, so you'll either end up with one totally new, or happen upon a familiar one that's been through a lot of changes. Have fun!
![ReadMeDemo1](https://github.com/Thomas-C-D/Bottles/assets/152713568/78efbdde-ec55-41ef-813a-f06749e5781b)
![ReadMeDemo2](https://github.com/Thomas-C-D/Bottles/assets/152713568/6c6f584b-3f08-4a01-a37a-812bc97380a7)
![ReadMeDemo3](https://github.com/Thomas-C-D/Bottles/assets/152713568/01f61a22-aa69-49cf-9f93-61da9c2ca0c5)
# Route Table
|       **URL**               | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**        
| --------------------------- | -------------- | ------------- | --------------- | ------------------------ |
| /messages                   | index          | GET           | read            | message-index.ejs            | 
| /messages/:id                   | show           | GET           | read            | message-details.ejs          | 
| /messages/new                   | new            | GET           |                 | new-message.ejs              | 
| /messages                     | create         | POST          | create          |                          | 
| /messages/:id/edit              | edit           | GET           | read            | edit-message.ejs             | 
| /messages/:id                   | update         | PATCH/PUT     | update          |                          | 
| /messages/:id                   | destroy        | DELETE        | delete          |                          | 
| /comments/new/:messageId    | new            | GET           | read            | new-comment.ejs              | 
| /comments/create/:messageId | create         | POST          | create          |                          | 
| /seed                       |                | GET           | delete & create |                          | 
| /info                      |                | GET           |                 | info.ejs                | 
| /*                          |                | GET           |                 | 404.ejs                  | 

# Wireframes
![Project2Wireframes1](https://github.com/Thomas-C-D/Bottles/assets/152713568/56cfdc27-4575-45a7-9fb7-e9e5cebf3a67)
![Project2Wireframes2](https://github.com/Thomas-C-D/Bottles/assets/152713568/6541ea57-5be4-42a8-ab0f-7a8aeb71f77e)

# Technologies Used
- HTML, CSS, & JavaScript
* Node.js
+ MongoDB
- VS Code
# Installation Instructions
Access Bottles by either:
- Opening it via Heroku through [this link](https://bottles-9c961fb6b846.herokuapp.com/messages)
  
or:
  + Cloning the repository to your local machine, where you can view it in VS Code.
# User Stories
+ As an average internet user, I want to have fun exploring the messages on the site and add to the conversations.
* As a team lead / hiring manager, I want to see what this prospective hire can do when it comes to full-stack apps.
- As a relative/associate of the creator, I want to see what my friend has created and join in on the fun.

# Unsolved Problems & Major Hurdles
**Font Animation Issues**

I managed to make the site's fonts animated by cycling through multiple similar font-families, but this had the unfortunate side effect of causing many elements of the site to stretch if left unattended to. Fortunately, some careful use of flex-boxes and positioning has largely solved this issue.

# What's Next
I hope to eventually add ambient audio and sound effects, as well as better illustrations and styling to the site in due time.
# Citations
- [W3Schools](https://www.w3schools.com/)
* Fonts by [jeti](https://fontenddev.com/), via [DaFont.com](https://www.dafont.com/jeti.d1589?page=1&l[]=10&l[]=1)
