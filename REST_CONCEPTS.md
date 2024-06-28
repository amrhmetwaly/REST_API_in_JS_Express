# REST API CONCEPTS

- Client
- Server
- Stateless
- Header
- Body
- Endpoint: a URI indicating where and how to find the resource on the internet such as a URL.
- Cacheable
- Uniform Interface
- Layered System: Every REST-enabled component has no access to other components other than with whom it is communicating.
- Code on Demand (CoD)

## Express Architecture

- Router: from Express that passes requrets to the corressponding controller.
- Controller: handels all stuff related to HTTP/s
- Service Layer has the business logic & exports services (methods) used by the controller.
- Data Access Layer: where interacting with the DB happens.

# Benefits of REST APIs

- Independent: client and server are independent. In other words, the REST protocol separates the data storage and the UI from the server.
- Scalability: REST APIs can be scaled by a dev team without much difficulty due to the separation between the client the server.
- Easy Integration: the use of ubiquitos standards, coupled with support across many languages, the use of HTTP protocol, & use by many devs with their aps are a recpie for ease of integration among many platforms.
- Flexibility: it is easy for devs to understand & Implement, it is format-agnostic with the ability to work with XML, JSON, HTML etc. & easy to modify

# REST API Design Principles

- Accept & respond with JSON
- Use of nounds instead of verbs in endpoint paths
- Allow API to filter, order, & paginate data
- Version your REST API e.g. v1, v2 etc.
- Use caching: redis for caching
- proper HTTP error handling
- Document your REST API like Swagger

# Planning your REST API

- Step 1: Understand the objectives of building the API
  - who is your target user for this API?
  - what products/services & data do you want them to access?
  - what technologies/systems will need to integrate with the API?
- Step 2: List out the user funcitonality of your API
  - list out what your API needs to do.
  - build out user stories from this list.
  - breakdown the work and build a backlog from your list.
- Step 3: Determine the type of API you are building
  - Will this be a REST API, SOAP based, RPC etc.?
- Step 4: Build an initial roadmap for your API
  - Build out the long-term strategy and direction for your API. It is never too early to start planning for this. This roadmap can change over time.

# Authentication methods with REST APIs

- HTTP Authentication: Send credentials with every API call.
- API Key Authentication: unique secret key that is passed with every API call.
- OAuth Authentication: This orchestrates approvals automatically between an API owner & the service.
- No Authentication
