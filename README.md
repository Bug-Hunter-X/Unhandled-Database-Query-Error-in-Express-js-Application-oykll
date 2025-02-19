# Unhandled Database Query Error in Express.js

This repository demonstrates a common error in Express.js applications where unhandled errors in database queries can lead to server crashes.  The `bug.js` file shows the problematic code.  The solution is provided in `bugSolution.js`. 

## Problem
The issue arises when a database query fails, and the error isn't properly handled within the Express.js route handler.  The application crashes rather than gracefully handling the error and returning an appropriate response to the client.

## Solution
The solution uses a try...catch block to handle the potential error during the database query. If an error occurs, a proper error response is sent to the client, preventing the server crash.  The improved error handling makes the application more robust and prevents unexpected shutdowns.