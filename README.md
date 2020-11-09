**_npm run build to build project_**
</br>
**_npm run dev to start the project in local host_**

[Link to GitHub]
(https://github.com/damon6291/wbdv-f20-group3-react)
</br>
[Link to GoogleDocs]
(https://docs.google.com/document/d/1JIwZsjX9bxcCCk8BZvdihdrX99Paa9HkdG1vkJlssNA/edit)

<h2>P1</h2>
Our application aims to analyze and chart a user’s music data in order to provide more in depth information and build better catered playlists for each individual user. These recommended playlists could then be shared. This will act as a social media space for music conversing as well as a platform for musical data analysis / music discovery.

One type of user that would use our platform would be a music enthusiast who would like to visualize their data and try to listen to more personalized suggestions based on their listening history, and then share and find new music on the social aspect.

Another type of user would be an upcoming artist who would like to gather a following by sharing their playlists to a wider audience, track their amount of fan interaction via likes and shares on their playlists, etc.

We intend to solve this issue by fetching user info from Spotify and Apple Music, and then use an algorithm to breakdown and analyze the musical information such as genre, producers, and other distinct data. We will then chart the data for the user, as well as provide the ability to create a playlist that will fetch songs most closely aligned to the users data preferences. From there the user can share that playlist to a social media section available, or they can search through the social media section and converse with others/listen to others playlist/song recommendations. It is important for sites like these to have a good aesthetic so we plan on getting users through a clean and easy user UI but also with some animation in order to make it feel more modern.

We plan on using the Spotify and Apple Music API’s in order to gather user data such as listening history and created playlists. These APIs also provide the ability to search for songs using specific parameters, which will allow us to build the aforementioned curated playlists.

<h2>P2</h2>
1. UML & Design

![alt text](./readmePicture/uml.png 'uml')
![alt text](./readmePicture/design.png 'design')
</br>

2. API - Spotify API: [https://api.spotify.com/](https://api.spotify.com/)

</br>
**Personalization**: 
[https://developer.spotify.com/documentation/web-api/reference/personalization/](https://developer.spotify.com/documentation/web-api/reference/personalization/)

**Track Data**: [https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/](https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/)

Gather top tracks of a genre or top genre and see if they match up with your top track parameters and try to match them

<h2>P3</h2>

Our application connects with spotify developers api. Current working feature is searching for playlists. When user searches for a track such as "Hello", our application will show top 20 playlists that best matches the search query.

We are currently implementing database or users for next assignment.
