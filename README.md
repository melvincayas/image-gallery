# Image Gallery with Next.js

This is a project using the Unplash API to fetch images with Next.js. The application will initially fetch 10 images and will keep doing so through infinite scroll with [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component). You can view it live [here](https://image-gallery-melvin.vercel.app).

The goals of this project are to:

- Use the Unsplash API to create an image gallery and support infinite scrolling that loads 10 images in one batch.
- Create a toggle button to toggle the image view from list to grid.
- Clicking on an image renders the image in full resolution with additional information such as the photographer, date, views, and downloads.

## Added Features

- Added loading screen on route change using animation from [react-loading](https://www.npmjs.com/package/react-loading)
- Add [Open Graph](https://ogp.me/) meta tags in `_document.js` and `Head` from `next/head` for social sharing
- Use [FontAwesome](https://fontawesome.com/) to load icons for layout button

## Built With

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)

## Installation

1. Clone this repo

```
git clone https://github.com/melvincayas/image-gallery.git
```

2. Install NPM packages

```
npm install
```

3. You must get an API access key from [Unsplash](https://unsplash.com/documentation#creating-a-developer-account). Please keep in mind that demo apps are limited to 50 requests per hour. Your fetches won't work if you exceed this limit.

4. Include the following in your `.env.local` file:

```
NEXT_PUBLIC_CLIENT_ID=YOUR_UNSPLASH_API_ACCESS_KEY
```

## Contributing

I'm always open to improving my code and the best way to do that is by having others critique it. If you see any bugs or opportunities to refactor, please let me know. It would be **highly appreciated**!

1. Fork this repo

2. Create your branch for improvement

```
git checkout -b your-improvement
```

3. Commit your changes

```
git commit -m "Refactored the code"
```

4. Push to your branch

```
git push origin your-improvement
```

5. Open a Pull Request

## Acknowledgements

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Unsplash API](https://unsplash.com/documentation)
- [FontAwesome](https://fontawesome.com/)
- [date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://www.npmjs.com/package/enzyme)
- [Open Graph Protocol](https://ogp.me/)
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
- [react-loading](https://www.npmjs.com/package/react-loading)

## Contact

Melvin Cayas  
[cayasmj@gmail.com](mailto:cayasmj@gmail.com?subject=[GitHub])  
[melvincayas.com](https://melvincayas.com/)

Links  
[Live](https://image-gallery-melvin.vercel.app)  
[GitHub](https://github.com/melvincayas/image-gallery)
