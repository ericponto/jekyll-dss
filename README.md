# jekyll-dss
Auto-generate style documentation from your CSS using Jekyll and DSS.

This project is small template for creating a style guide or pattern library or style documentation or whatever you want to call it. It uses DSS to parse JSDoc style comments in your CSS and then uses Jekyll to build the page.

## Quick Start

1. `npm install`
2. `grunt dss`
3. `jekyll serve`

## More details

### DSS

Document your CSS with JSDoc style comments using [DSS](https://github.com/darcyclarke/DSS). You can use CSS, Sass, Less, Stylus, whatever you want. Sass compilation is built into Jekyll, so that is what this example project is using.

Example:

```
/**
	* @name Buttons
	* @description This is an example of a button
	* @markup
	* <button class="button">Button</button>
*/
.button {}
```

### Config DSS Grunt task

Update the `dss` task in the `Gruntfile.js` to point at your documented stylesheets. The destination should be the `_data` folder so Jekyll can read when rendering.

Example:
```
dss: {
	build: {
		files: {
			"_data/styles.json": "_sass/**.*"
		}
	}
}
```


### Build the DSS JSON files

Run `grunt dss`

### Update the templates

The table of contents is found in `_includes/table-of-contents.html` and the template for each block is in `_includes/component.html`. The basic data for a block is:

```
{
	"name": "Buttons",
	"description": "This is an example of a button",
	"markup": {
		"example": "<button class=\"button\">Button</button>",
		"escaped": "&lt;button class=\"button\"&gt;Button&lt;/button&gt;"
	}
}
```

You can access it in Jekyll with code like:

```
<h2>{{ block.name }}</h2>
<p>{{ block.description }}</p>

<h3>Example</h3>
<div>{{ block.markup.example }}</div>
```

### Run Jekyll

`jekyll server`

And that's all!