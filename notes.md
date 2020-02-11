

Dont
- GET /list-routines
- POST /new-routine. /create-routine, /routines/new

Do
- GET /routines
- POST /routines

- everything is a resource
- resources live at a URI/URL
- operations on those resources are expressed using HTTP methods
- hypermedia (HATEOAS) => links

## Exercise Journal

- view list of journals!!
- view a list of exercises!!
- add a new exercise!!!
- view a list of users!!! to follow
- view a list of my followers!!!
- register for an account!!!
- login/logout
- update my profile!!!
- view a user's public profile!!!
- view the sets for a workout
- view the exercies for a workout
- view (GET) all workouts that include x (EX: pushups) exercise
    - filter

https://www.google.com/search
? <= 'the beginning of the query string'
q = rest+api
&
oq = rest+api
&
aqs = chrome..69i57j0l5j69i65j69i60.2097j0j7
&
sourceid = chrome&ie=UTF-8

express turns the above query string into the object below.
all values are strings

req.quert = {
    q: "rest api",
    oq: "rest api"
    aqs: "chrome..69i57j0l5j69i65j69i60.2097j0j7"
    sourceid: "chrome&ie=UTF-8"
}

20 resources x 5  => 100 endpoints.

## Resources

- accounts/users => /api/users
- exercises => /api/exercises
    - create => POST /api/exercises
- routines => /api/routines
- workouts : a group of sets/exercises => /api/workouts
    - sets => /api/workouts/:id/sets
    - exercises => /api/workouts/:id/exercises
- splits
- sets =>
- muscle groups
- profiles <- same as account?


## What ways of sending information from the client to the server have we seen so far?

- Query String => req.query
- url parameters => req.params
- body => req.body
- headers => req.headers


