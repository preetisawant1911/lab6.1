# Lab 6.1.9: TypeScript and Object-Oriented Programming

#Scenario
You are working as a software developer for a company that manages a large inventory of products.  
The system must handle both **physical items** (electronics, apparel) and **digital products** (e-books, software licenses).  
To simplify and extend the codebase, the team is adopting an **object-oriented design** using TypeScript.



#Objective
By the end of this lab, you will:
- Use **TypeScript** with type annotations and interfaces.
- Apply **object-oriented programming concepts**: inheritance, encapsulation, abstraction, polymorphism.
- Build a small but functional **inventory tracker** prototype.



#Setup Project
```bash
mkdir inventory-tracker
cd inventory-tracker
npm init -y
npm install typescript @types/node --save-dev
npx tsc --init
