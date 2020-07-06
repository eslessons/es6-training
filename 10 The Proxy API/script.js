/// PROXY API ///

// BASICS //

/*                                                     *
 *                     PROXY USAGE
 *
 *                   Basic situation
 *       Source code { var obj = { name: 'Max' } }
 *
 *                     Using Proxy
 *  Source code { Proxy { var obj = { name: 'Max'} } }
 *
 *             Proxy wraps and encloses code
 *
 *  Now if we want to access obj, we have to go through
 *  this proxy. We have to setup certain Traps for obj
 *  e.g 'get' Trap that prevents direct access to obj.
 *                                                      */
