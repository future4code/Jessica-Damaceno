/* IMPORTS */


import { connection } from "./connection"
import { authenticationData } from "./model/auth"
import { user } from "./model/user"
import { post } from "./model/post"
import { generateId } from "./services/idGenerator"
import { getTokenData } from "./services/authenticator"
import { compare, hash } from "./services/hashManager"
import app from "./app"


/* SERVER INIT */

app.listen(3003, () => {
   console.log("Server running on port 3003")
})

function generateToken(arg0: { id: string }): string {
   throw new Error("Function not implemented.")
}
