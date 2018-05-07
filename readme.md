

See the functioning project here:
https://iarobinson.github.io/twitchTV/


# Problems or Improvements

- Core Problem
There is a fundamental problem with the logic behind pulling the data from the API and displaying it immediately. Right now, the reason the 'live' button displays only live shows is because there is an error in relaying the offline shows to the DOM. For the purposes of this specific project, that is a mistake that makes this web application fit the user story requirements. It is a very ugly solution though.

- Improvements

A nice feature would be to get follower information from twitchers who are offline. Currently, the program displays 'unknown' for offline users. Get follower data like this:
https://wind-bow.glitch.me/twitch-api/channels/freecodecamp/follows

Right now the add/remove user interface is case sensitive so user must type user name exactly as it appears in the name column. It would be better if it wasn't case sensitive.

The project could do with a rework of it's style.
