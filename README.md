# spotifyx

### **Fast-paced and versatile Spotify API wrapper for Node.**

### Covers:

-   Search API
-   Browse API
-   Albums API
-   Artists API
-   Tracks API
-   Shows API
-   Episodes API
-   User API
-   Markets API

## Installation and Usage

### Installation

Using NPM:

```
npm install --save spotifyx
```

Using Yarn:

```
yarn add spotifyx
```

### Usage

CommonJS

```js
const Spotify = require("spotifyx");
```

ES6

```js
import Spotify from "spotifyx";
```

## Simple Example

```js
import Spotify from "spotifyx";

(async () => {
    const client = new Spotify({
        clientId: "a-cool-id",
        clientSecret: "a-cool-secret",
    });

    await client.login();

    console.log(await client.search("Null Magma", ["artist"]));
})();
```

# Documentation

**Key:**

-   🄲 – Class declaration
-   🄿 – Property
-   🄼 – Method

_Most typedefs are from Spotify's [documentation](https://developer.spotify.com/documentation/)._

<details>

<summary>🄲 Spotify</summary>

## 🄲 `Spotify`

Constructs a new Spotify API client.

#### **Parameters:**

-   `credentials` – Client credentials to log in
    -   `clientId` – Client ID
    -   `clientSecret` – Client secret
    -   `redirectUrl?` – URL to redirect to

#### **Returns:**

-   `Spotify` – The newly created client

#### **Example:**

```js
const client = new Spotify({
    clientId: "a-cool-id",
    clientSecret: "a-cool-secret",
});
```

---

## **Properties**

### 🄿 `Spotify#token`

**`readonly string`**

The client's current access token

---

### 🄿 `Spotify#browse`

**`Browser`**

The client's Spotify browse API

---

### 🄿 `Spotify#artists`

**`Artists`**

The client's Spotify artists API

---

### 🄿 `Spotify#albums`

**`Albums`**

The client's Spotify albums API

---

### 🄿 `Spotify#tracks`

**`Tracks`**

The client's Spotify tracks API

---

### 🄿 `Spotify#episodes`

**`Episodes`**

The client's Spotify episodes API

---

### 🄿 `Spotify#shows`

**`Shows`**

The client's Spotify shows API

---

## **Methods**

### 🄼 `Spotify#login`

Logs the client in and creates an access token.

#### **Parameters:**

#### **Returns:**

-   `string` – The newly created access token

#### **Example:**

```js
await client.login();
```

---

### 🄼 `Spotify#search`

Searches Spotify using Spotify's search API.

#### **Parameters:**

-   `query` – Search query
-   `types` – Object types to search for
-   `options?` – Search options
    -   `market?` – Market to search within
    -   `limit?` – Search results limit
    -   `offset?` – Search results offset
    -   `includeExternal?` – Include externals in results

#### **Returns:**

-   `SearchResponse` – Search results

#### **Example:**

```js
const results = await client.search("Null Magma", ["artist"]);
```

---

### 🄼 `Spotify#user`

Obtains a user from Spotify using an ID.

#### **Parameters:**

-   `id` – The user's ID

#### **Returns:**

-   `PublicUserObject?` – User obtained from the user ID, or undefined if no user was found

#### **Example:**

```js
const user = await client.user("a-cool-id");
```

---

### 🄼 `Spotify#markets`

Gets all the markets.

#### **Parameters:**

#### **Returns:**

-   `string[]` – All markets

#### **Example:**

```js
const markets = await client.markets();
```

</details>

<details>

<summary>🄲 Browser</summary>

## 🄲 `Browser`

Wrapper for Spotify's browse API.

_private_

---

## **Methods**

### 🄼 `Browser#newReleases`

Fetches newest releases.

#### **Parameters:**

-   `options?` – Fetch options
    -   `country?` – Country code
    -   `limit?` – Fetch limit
    -   `offset?` – Fetch offset

#### **Returns:**

-   `BrowseNewReleasesResponse` – Fetched new releases

#### **Example:**

```js
const releases = await client.browse.newReleases({
    limit: 25,
    offset: 25,
});
```

---

### 🄼 `Browser#featuredPlaylists`

Fetches featured playlists.

#### **Parameters:**

-   `options?` – Fetch options
    -   `country?` – Country code
    -   `locale?` – Locale
    -   `timestamp?` – Timestamp
    -   `limit?` – Fetch limit
    -   `offset?` – Fetch offset

#### **Returns:**

-   `BrowseFeaturedPlaylistsResponse` – Fetched featured playlists

#### **Example:**

```js
const playlists = await client.browse.featuredPlaylists();
```

---

### 🄼 `Browser#allCategories`

Fetches all categories.

#### **Parameters:**

-   `options?` – Fetch options
    -   `country?` – Country code
    -   `locale?` – Locale
    -   `limit?` – Fetch limit
    -   `offset?` – Fetch offset

#### **Returns:**

-   `BrowseAllCategoriesResponse` – Fetched categories

#### **Example:**

```js
const categories = await client.browse.allCategories();
```

---

### 🄼 `Browser#category`

Fetches a category.

#### **Parameters:**

-   `category` – The category
-   `options?` – Fetch options
    -   `country?` – Country code
    -   `locale?` – Locale

#### **Returns:**

-   `BrowseCategoryResponse` – Fetched categories

#### **Example:**

```js
const category = await client.browse.category("party");
```

---

### 🄼 `Browser#categoryPlaylists`

Fetches a category's playlists.

#### **Parameters:**

-   `category` – The category
-   `options?` – Fetch options
    -   `country?` – Country code
-   `limit?` – Fetch limit
-   `offset?` – Fetch offset

#### **Returns:**

-   `PagingObject<SimplifiedPlaylistObject>` – Fetched playlists

#### **Example:**

```js
const playlists = await client.browse.categoryPlaylists("party");
```

---

### 🄼 `Browser#recommendations`

Fetches a category's playlists.

#### **Parameters:**

-   `seeds` – Seeds
    -   `artists` – Seed artists
    -   `genres` – Seed genres
    -   `tracks` - Seed tracks
-   `options?` – Fetch options
    -   _Not available_

#### **Returns:**

-   `BrowseRecommendationsResponse` – Fetched category platlists

#### **Example:**

_Not available_

---

### 🄼 `Browser#recommendationGenres`

Fetches recommendation genres.

#### **Parameters:**

#### **Returns:**

-   `string[]` – Fetched genres

#### **Example:**

```js
const genres = await client.browse.recommendationGenres();
```

</details>

<details>

<summary>🄲 Artists</summary>

## 🄲 `Artists`

Wrapper for Spotify's artists API.

_private_

---

## **Methods**

### 🄼 `Artists#get`

Retrieves an artist or multiple artists.

#### **Parameters:**

-   `ids` – Can either be an ID or array of IDs.

#### **Returns:**

_If a single ID is used:_

-   `ArtistsSingleArtistResponse` – The artist retrieved

_If an array of IDs is used:_

-   `ArtistsMultipleArtistsResponse` – The artists retrieved

#### **Example:**

```js
const artists = await client.artists.get(["a-id", "another-id"]);
```

---

### 🄼 `Artists#topTracks`

Retrieves an artist's top tracks.

#### **Parameters:**

-   `id` – Artist ID

#### **Returns:**

-   `ArtistsTopTracksResponse` – The artist's top tracks

#### **Example:**

```js
const topTracks = await client.artists.topTracks("an-id");
```

---

### 🄼 `Artists#related`

Retrieves an artist's related artists.

#### **Parameters:**

-   `id` – Artist ID

#### **Returns:**

-   `ArtistsRelatedArtistsResponse` – The artist's related artists

#### **Example:**

```js
const related = await client.artists.related("an-id");
```

---

### 🄼 `Artists#albums`

Retrieves an artist's albums.

#### **Parameters:**

-   `id` – Artist ID

#### **Returns:**

-   `ArtistsAlbumsResponse` – The artist's albums

#### **Example:**

```js
const albums = await client.artists.albums("an-id");
```

</details>

<details>

<summary>🄲 Albums</summary>

## 🄲 `Shows`

Wrapper for Spotify's shows API.

_private_

---

## **Methods**

### 🄼 `Albums#get`

Retrieves an album or multiple albums.

#### **Parameters:**

-   `ids` – Can either be an ID or array of IDs.
-   `options?` – Fetch options
    -   `market?` – Country code

#### **Returns:**

_If a single ID is used:_

-   `AlbumsSingleAlbumResponse` – The album retrieved

_If an array of IDs is used:_

-   `AlbumsMultipleAlbumsResponse` – The albums retrieved

#### **Example:**

```js
const albums = await client.albums.get(["an-id", "another-id"]);
```

---

### 🄼 `Albums#tracks`

Retrieves an album's tracks.

#### **Parameters:**

-   `id` – The album's ID
-   `options?` – Fetch options
    -   `market` – Country code
    -   `limit` – Fetch limit
    -   `offset` – Fetch offset

#### **Returns:**

-   `AlbumsTracksResponse` – The album's tracks

#### **Example:**

```js
const tracks = await client.albums.tracks("an-id");
```

</details>

</details>

<details>

<summary>🄲 Tracks</summary>

## 🄲 `Tracks`

Wrapper for Spotify's tracks API.

_private_

---

## **Methods**

### 🄼 `Tracks#get`

Retrieves a track or multiple tracks.

#### **Parameters:**

-   `ids` – Can either be an ID or array of IDs.
-   `options?` – Fetch options
    -   `market?` – Country code

#### **Returns:**

_If a single ID is used:_

-   `TracksSingleTrackResponse` – The track retrieved

_If an array of IDs is used:_

-   `TracksMultipleTracksResponse` – The tracks retrieved

---

### 🄼 `Tracks#audioFeatures`

Retrieves a track or multiple tracks' audio features.

#### **Parameters:**

-   `ids` – Can either be an ID or array of IDs.
-   `options?` – Fetch options
    -   `market?` – Country code

#### **Returns:**

_If a single ID is used:_

-   `TracksSingleTrackAudioFeatureResponse` – The audio feature retrieved

_If an array of IDs is used:_

-   `TracksMultipleTracksAudioFeaturesResponse` – The audio features retrieved

### 🄼 `Tracks#audioAnalysis`

Retrieves a track's audio analysis

#### **Parameters:**

-   `id` – Track ID

#### **Returns:**

-   `AudioAnalysisObject` – The audio analysis

</details>

<details>

<summary>🄲 Episodes</summary>

## 🄲 `Episodes`

Wrapper for Spotify's episodes API.

_private_

---

## **Methods**

### 🄼 `Episodes#get`

Retrieves an episode or multiple episodes.

#### **Parameters:**

-   `ids` – Can either be an ID or array of IDs.
-   `options?` – Fetch options
    -   `market?` – Country code

#### **Returns:**

_If a single ID is used:_

-   `EpisodesSingleEpisodeResponse` – The episode retrieved

_If an array of IDs is used:_

-   `EpisodesMultipleEpisodesResponse` – The episodes retrieved

</details>

<details>

<summary>🄲 Shows</summary>

## 🄲 `Shows`

Wrapper for Spotify's shows API.

_private_

---

## **Methods**

### 🄼 `Shows#get`

Retrieves a show or multiple shows.

#### **Parameters:**

-   `ids` – Can either be an ID or array of IDs.
-   `options?` – Fetch options
    -   `market?` – Country code

#### **Returns:**

_If a single ID is used:_

-   `ShowsSingleShowResponse` – The show retrieved

_If an array of IDs is used:_

-   `ShowsMultipleShowsResponse` – The shows retrieved

#### **Example:**

```js
const shows = await client.shows.get(["an-id", "another-id"]);
```

---

### 🄼 `Shows#episodes`

Retrieves a show's episodes.

#### **Parameters:**

-   `id` – The show's ID

#### **Returns:**

-   `ShowsEpisodesResponse` – The episodes retrieved

#### **Example:**

```js
const episodes = await client.shows.episodes("an-id");
```

</details>

## Future features

-   Include other three authorization flows
-   Use refresh tokens
-   Spotify user auth service
    -   Authorization scopes
    -   Access to user-related APIs
    -   Access to other APIs
