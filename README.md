# MMM-RandomPhoto
This a module for the [MagicMirror](https://github.com/MichMich/MagicMirror). It shows images from unsplash.it.

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/alacercogitatus/MMM-RandomPhoto.git`.
2. cd `cd MMM-RandomPhoto`
3. Execute `npm install` to install the node dependencies.

## Config
The entry in `config.js` can include the following options:

|Option|Description|
|---|---|
|`opacity`|The opacity of the image.<br><br>**Type:** `double`<br>Default 0.3|
|`animationSpeed`|How long the fade out and fade in of photos should take.<br><br>**Type:** `int`<br>Default 500|
|`updateInterval`|How long before getting a new image.<br><br>**Type:** `int`<br>Default 60 seconds|
|`greyscale`|Should the image be in greyscale.<br><br>**Type:** `bool`<br>Default: false| 
|`random`|Should the image be random.<br><br>**Type:** `bool`<br>Default: true|
|`blur`|Should the image be blurred.<br><br>**Type:** `bool`<br>Default: false|
|`show_info`|Should the image information (author) be shown.<br><br>**Type:** `bool`<br>Default: false|
|`info_position`|Where should the image info be shown.<br><br>**Type:** `string`<br>Default: top_bar|
|`height`|The Height.<br><br>**Type:** `int`<br>Default: 1080|
|`width`|The Width.<br><br>**Type:** `int`<br>Default: 1920|
# https://unsplash.it/1920/1080/?random|

Here is an example of an entry in `config.js`
```
{
	module: 'MMM-RandomPhoto',
	position: 'fullscreen_below',
	config: {
		opacity: 0.3,
		animationSpeed: 500,
		updateInterval: 60,
		blur: false
	}
},
```

## Dependencies
- [jquery](https://www.npmjs.com/package/jquery) (installed via `npm install`)

## Special Thanks
- [Michael Teeuw](https://github.com/MichMich) for creating the awesome [MagicMirror2](https://github.com/MichMich/MagicMirror) project that made this module possible.
