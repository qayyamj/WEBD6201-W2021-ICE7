
namespace core
{
    export class Router 
    {
        //Instance Variables
        private m_activeLink:string;
        private m_linkData:string;
        private m_routingTable: string[];
        // constructors
        constructor() 
        {
            this.ActiveLink = "";
        }
        // Public Properties
        get ActiveLink() : string
        {
            return this.m_activeLink;
        }
        set ActiveLink(link:string) 
        {
            this.m_activeLink = link;
        }

        get LinkData() :string
        {
            return this.m_linkData;
        }
        set LinkData(data:string)
        {
            this.m_linkData = data;
        }

        // Public Methods
        /**
         * Adds a new route to the routing table
         * @param {string} route 
         * @returns {void}
         */
        public Add(route:string) : void
        {
            this.m_routingTable.push(route);
        }

        /**
         * This replaces the current Routing Table with a new one
         * Routes should begin with / character
         * @param {string} routingTable
         * @returns {void} 
         */
        public AddTable(routingTable:string[]) 
        {
            this.m_routingTable = routingTable;
        }

        /**
         * This method finds the index of the route in the routing table
         * returns -1 if route not found
         * @param {string} route 
         * @returns {number}
         */
        public Find(route: string) : number
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
        public Remove(route:string) : boolean
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
        public ToString() : string
        {
            return this.m_routingTable.toString();
        }
    }
    
}

// TODO: Need to move the code below to it's own file

let router = new core.Router();
router.AddTable(["/", "/home", "/about", "/services", "/contact", "/contact-list", "/projects", "/register", "/login", "/edit"]);

let route = location.pathname;  // alias for location.pathName

console.log(router);

if(router.Find(route) > -1)
{
    router.ActiveLink = (route == "/") ? "home" : route.substring(1);
}
else
{
    router.ActiveLink = "404";
}
