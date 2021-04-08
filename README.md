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

_No JSDoc used because TypeScript provides type annotations._

**Key:**

-   🄲 – Class declaration
-   🄿 – Property
-   🄼 – Method
-   🅃 – Typedef

_Note that not all typedefs will be documented as they are straight from Spotify's [documentation](https://developer.spotify.com/documentation/)_

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
const categories = await client.browse.category("party");
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
const categories = await client.browse.categoryPlaylists("party");
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

</details>

<details>

<summary>🄲 Albums</summary>

</details>

<details>

<summary>🄲 Tracks</summary>

</details>

<details>

<summary>🄲 Episodes</summary>

</details>

<details>

<summary>🄲 Shows</summary>

</details>

<details>

<summary>🅃 Typedefs</summary>

-   <details>

    <summary>🅃 Main</summary>

    </details>

-   <details>

    <summary>🅃 Responses</summary>

    </details>

-   <details>

    <summary>🅃 Metadata</summary>

    </details>

</details>

## Future features

-   Include other three authorization flows
-   Use refresh tokens
-   Spotify user auth service
    -   Authorization scopes
    -   Access to user-related APIs
    -   Access to other APIs
