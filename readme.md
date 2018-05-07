

See the functioning project here:
https://iarobinson.github.io/twitchTV/


# Problems or Improvements

- Core Problem
There is a fundamental problem with the logic behind pulling the data from the API and displaying it immediately. Right now, the reason the 'live' button displays only live shows is because there is an error in relaying the offline shows to the DOM. For the purposes of this specific project, that is a mistake that makes this web application fit the user story requirements. It is a very ugly solution though.

- Improvements

Make it so the user can see additional details about what the twitcher is streaming.

I found the following API URL which allows us to get follower data:
https://wind-bow.glitch.me/twitch-api/channels/freecodecamp/follows

Right now the add/remove user interface is case sensitive so user must type user name exactly as it appears in the name column. It would be better if it wasn't case sensitive. 

Bonus: If the user could specify their list of twitchTV user IDs, the application might actually have value for someone.
