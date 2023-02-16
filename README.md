Project Blog admin front end

https://kitsunebackfire.github.io/project-blog-admin/

This is a react based front end that utilizes my project blog REST API. It allows me to create/edit/delete posts that are stored on MongoDB. It originally had cookie based authorization for users, but soon I realized Heroku Ecoplan didn't allow me to set cookies. Because of this, I opted to store a jsonwebtoken in localstorage. I got rid of the ability for further admin users to be created after creating the first admin account. Routing for this has been removed from the api. In addition, there is a value assigned to that admin user directly through the database.

This app is styled with tailwind css.
