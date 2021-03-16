"use strict";

(function (core) {
    class Router {
        // constructors
        constructor() 
        {
            this.ActiveLink = "";
        }
        // Public Properties
        get ActiveLink() 
        {
            return this.m_activeLink;
        }
        set ActiveLink(link) 
        {
            this.m_activeLink = link;
        }

        // Public Methods
        /**
         * Adds a new route to the routing table
         * @param {string} route 
         * @returns {void}
         */
        Add(route) 
        {
            this.m_routingTable.push(route);
        }

        /**
         * This replaces the current Routing Table with a new one
         * Routes should begin with / character
         * @param {string} routingTable
         * @returns {void} 
         */
        AddTable(routingTable) 
        {
            this.m_routingTable = routingTable;
        }

        /**
         * This method finds the index of the route in the routing table
         * returns -1 if route not found
         * @param {string} route 
         * @returns {number}
         */
        Find(route) 
        {
            return this.m_routingTable.indexOf(route);
        }

        /**
         * Removes route from the routing table
         * Returns true if route removed succesfully
         * Otherwise returns false
         * @param {string} route 
         * @returns {boolean}
         */
        Remove(route) 
        {
            if (this.Find(route) > -1) {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        /**
         * This method returns the routing table as a comma-seperated string
         * @returns 
         */
        ToString() 
        {
            return this.m_routingTable.toString();
        }
    }
    core.Router = Router;
})(core || (core = {}));

let router = new core.Router();
router.AddTable(["/", "/home", "/about", "/services", "/contact", "/contact-list", "/projects", "/register", "/login", "/edit"]);

let route = location.pathname;  // alias for location.pathName
if(router.Find(route) > -1)
{
    router.ActiveLink = (route == "/") ? "home" : route.substring(1);
}
else
{
    router.ActiveLink = "404";
}
