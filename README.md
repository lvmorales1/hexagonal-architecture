# Basic Hexagonal Architecture Example (Ports and Adapters)

This repository contains a simple example of how to implement the hexagonal architecture (also known as the ports and adapters architecture) in a TypeScript application.

## What is hexagonal architecture?

Hexagonal architecture is an architectural pattern that aims to separate the system's business logic from technical concerns, such as the user interface or database access. It is based on the idea that an application is made up of input and output "ports", which allow communication with the outside world, and "adapters", which are in charge of converting this information into something the application can understand and vice versa.

## How is this example organized?

This example was built using TypeScript and is divided into two modules:

- `core`: this module contains the application layer, which is responsible for orchestrating the application's data flow and business rules. Here are the classes that implement the application's use cases.

- `adapters`: this module contains the infrastructure layer, which is responsible for communicating with the outside world. Here are the classes that implement the application's input and output ports, as well as the adapters needed to communicate with different technologies.

## How to run this example?

To run this example, you will need a recent installation of Deno. Then simply run the following command from the root of the project:

```bash
deno task dev
```