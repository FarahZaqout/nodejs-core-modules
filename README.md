# Nodejs Core Modules

clone the repo, read teh readme and do the challenge.

## The querystring module `qs`:

Before we discuss the querystring module in nodejs, let us first revisit what `URI` means, and what query and params are.

### URI:

**URI** stands for universal resource identifier. We use it to identify, locate and access resources on the server.
Here's a breakdown of a link you normally type in the browser:
<br/>

![http link example](https://camo.githubusercontent.com/0d9696983168efcbc666689bb87c54871115f04b/68747470733a2f2f636d647265662e6e65742f5f6d656469612f68617264776172652f62696769702f75726c2e706e67)

**_In a link, anything that comes after the `?` is part of the http query._**

---

### Querystring vs Params

A query is used to store variables in the http link as the picture above shows. However, we also use the `params` to store variables in the request link. So what is the difference between the two?

**Params** is used to identify the resource. For example, If I want to identify a user by name `user/:name` is the correct way to do it.

**Query** is used to search, sort, filter or do something with already identified resources. For example:
`api.giphy.com/v1/stickers/trending?q=limit=20`

In the URI above, we have already identified the source to be `trending` and now we can do additional things with it, like set a `limit` to how many images we want to receive. We can also filter it to get trending images of `terry crews` and his glorious `P O W A A A A A A H` as follows:

`api.giphy.com/v1/stickers/trending?q=limit=20&name=terry%20%crews`

---

Now that we understand the difference between the query and params and how they fit in a uri, let's use nodejs to extract params from a query.

- run the script `npm run qs`
- navigate to localhost:3000.
- Use the form to send a request to the backend.
- See the terminal output.

Try to parse the incoming querystring and extract variables from it using the nodejs's `qs` module.
