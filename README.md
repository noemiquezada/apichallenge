# Code 2040 API Challenge
This is my AngularJS one page app solution to the Code 2040 API Challenge 2015-2016. 

## Challenge
The API Challenge consisted of four stages: 

1. Reverse a String - self explanatory
2. Needle in a haystack - Find the position of the needle (strings) in the haystack (array of strings)
3. Prefix - Find all strings that do not start with a prefix
4. The Dating Game - Given a datestamp in ISO 8601 format  and interval (number of seconds) give the new datestamp.

## My Approach

I took an incremental approach to the challenge. I started by reviewing and analyzing the different stages of the challenge, what was required (i.e. registration, passsing a token along with each request, using POST method to communicate with server) and created a blueprint of what I needed to implement before writing any code. I also put some thought on what AngularJS modules I could use to help with t

My rough blueprint followed a lose approach of the MVC (Model-View-Controller) framework. I created various Angular JS services (listed below) that encapsulated certain logic. 

The first service I created was the Challenge Service since my main concern in this challenge was to be able to implement the certain algorithms needed to pass each stage (i.e. reverse a string, find the needle in the haystack). I used console statements (tests/challenge.controller.js) to test that the algorithms worked before proceding on implementing any other aspect of the challenge. 

Once I had verified that the algorithms produced valid results, I began implementing the service that would interface with the Code2040Challenge API by focusing on registration and retrieving the token needed to submit the challenges. I used [**Restangular **](https://github.com/mgonto/restangular) service to simplify the communication with the Server. 

I used the browsers sessionStorage [**NgStorage**](https://github.com/gsklee/ngStorage) to store the token retrieved upon registration and created Session Storage so that it could interface with the browsers Session Storage. 

Once I was able to communicate with the server via the API, I began implemented Stage 1 template (templates/stage1.template.html) and controller (controllers/stage1.controller.js) and followed with implementing the other stages. 

**Full List of Services Created **

* Challenge Service - Service that houses methods that map to the stages of the API Challenge.
* API Service - Decoupled Restangular Service from Controllers by creating custom service to hide Restangular object from anywhere. This ApiRestangular service also configures the Restangular service to point the code2040. 
* Session Service - Service that creates an interface to access sessionStorage, which houses the token that is used in all Api requests.
* Authorization Service - Service that interfaces with the Api to register a user upon page load. 

## Improvements
Due to time constraints, as of now, this is a one page application that fetches from a cdn source for both javascript and css libraries and modules. If I had a little more time I would have used services such as gulp and bower to help manage and enhance my workflow wiht all libraries and assets. I would also take the time to improve the user interface as of now it is just using Bootstrap to provide structure and some color. 

## Screenshots
