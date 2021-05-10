# Shoppies

# [View live site here](https://connordear.ca/shopify-frontend-challenge-2021/)

## Table of Contents

1. [Prompt](#prompt)
2. [My Design & Thoughts](#discussion)
3. [Implementation Summary](#implementation)
4. [Testing](#testing)
5. [Closing Thoughts](#closing)

## Prompt <a name="prompt"></a>

---

### The Shoppies: Movie awards for entrepreneurs

Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies.

### The Challenge (as presented by Shopify)

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

We'd like a simple to use interface that makes it easy to:

-   Search OMDB and display the results (movies only)
-   Add a movie from the search results to our nomination list
-   View the list of films already nominated
-   Remove a nominee from the nomination list

Technical requirements

1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.

A mockup of a very bare-bones version was also provided.

## <img src="./public/example-design.png" alt="Example Design" width="500"/>

## My Design Choices <a name="discussion"></a>

---

## <div>

## <img src="./public/shoppies-search.png" alt="Shoppies Search" width="500"/>

## <img src="./public/shoppies-complete.png" alt="Shoppies Complete" width="500"/>

## </div>

The main deviation from the design shown in the prompt is that instead of having two lists side-by-side, I opted to create a dropdown list in the search bar which would present the movies queried from the OMDB API.

I felt that this design created a more natural experience of searching and selecting rather than having the results populated in a static results list separate from the search box. One complication that this created was that positioning the nominees became somewhat strange, since the dropdown would either go over the nominees, or push them out of the way. I ended up going with pushing them out of the way since it created a fun, playful experience whenever you click open and close the search bar - but I'm not sure it is the best design. This kind of decision could be clarified with some deeper understanding of the potential users for this: e.g. is it important for the user to see the movies they have already nominated while searching?

The "Nominate" button was also removed from the results list, since the entire row of the search result is clickable in order to nominate the movie. This was done to help simplify the design, and is a quite natural way to interact with dropdown lists.

Movie posters (included in the query to OMDB) were added to both the nominations display and in the results list in order to help users quickly identify and select which movie they are intending to nominate.

The "Remove" button was relaced by displaying an "X" over the nomination. Clicking a nomination removes it (as described in a brief message above the nominations). Again I think this helps simplify the design by removing an extra button, but I do admit it does become slightly less clear how to remove a nomination.

For the banner & reaching the 5 nominations, I wasn't so sure if we were allowed to let users nominate more than 5 movies? I ended up leaving it but it would be quite easy to just set all the results list buttons to be disabled when the number of nominees > 5.

Sidenote: the spinner, banner, background animation were all small snippets of CSS I sniped, I take no credit for them but have linked to where I got them in my code.

<div>Favicon made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

---

## Implementation Summary <a name="implementation"></a>

I made use of some [Ant Design](https://ant.design/) components for getting the layout up and running, but for all of the actual components I built them from (mostly) scratch.

Some highlights I thought were cool to go through the process of building (or finding better implementation of what I was trying to do online):

-   debounced fetching of the movies (I have implemented primitive debounce before, and ended up finding a good hook to accomplish this)
-   Nominations are stored in a [recoil](http://recoiljs.org/) atom (a Map with their IMDB ID string as the key)
-   the nominees count is derived from the number of entries in the recoil atom through use of a selector
-   movie search results check the Map for their ID and disable themselves if they're already in the map
-   the page component monitors for nominee changes and saves the map to the local storage, loading it back in at load time. A possible improvement here could be to just store an array of the IMDB ID's, and then have the page query for the details by the ID's. The advantage here is that it would be much smaller in local storage in case a user wants to go crazy with nominations, and more importantly, the IDs could be inserted into the URL and the same loading logic could be re-used in order to create shareable links.

---

## Bugs encountered

The OMDB search did produce some duplicate entries which I found during my testing - I found that when I searched "inc", I would get duplicate entries for the movie "War, Inc.". This created an interesting bug since I was using the imdbID as the key for each of the results in the list. So even after resetting and clearing the array, the duplicated movie would still remain in the list.

I just chose to plug the results into a Map (key=imdbID) before constructing the results list to ensure no duplicate imdbID's were added.

---

## Testing <a name="testing"></a>

## <img src="./public/tests.png" alt="Example Design" width="500"/>

I actually learned a lot about React testing here with Enyzme/Jest, and was able to create some random initial state functions to help automate test creation.

---

## Closing Thoughts <a name="closing"></a>

Was a fun little project to work through, I learned some cleaner ways of doing fetching/debouncing than I had been using previously, and tried out some new styling practices in CSS.
