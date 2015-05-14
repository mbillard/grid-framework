# Grid Framework

A highly customizable responsive grid framework.

Grid Framework lets you build the grid system that you want. It generates what you need and nothing else. It can also generate some popular grids like Bootstrap and Pure.


## Installation

Download `_grid-framework.scss` from the `src` directory.

Alternatively, you can download a predefined grid named `default-grid.css` that will cover most of your needs in terms of grids.


## Usage

Create a `.sass` or `.scss` file, import the grid framework, make the rows then generate the grid that you want. Here's a minimalistic example:

```scss
@import "grid-framework";

@include make-rows;

@include make-grid(3, 'xs');

@media (min-width: 480px) {
  @include make-grid(6, 'sm');
}

@media (min-width: 768px) {
  @include make-grid(12, 'md');
}
```

This will generate a 3 columns grid for very small screens (e.g. phones), a 6 columns grid for small screens (e.g. small tablets, big phones) and a 12 columns grid for everything else.

In your markup you can then create a responsive grid like this:

```html
<div class="row">
  <div class="col-xs-1-3 col-sm-1-6 col-md-1-12"></div>
  ...
</div>
```

This results in 3 columns on the smallest screens, 6 on small screens and 12 on everything else.


## Customization

Don't want a prefix? Omit it:

```scss
@include make-grid(12, '');
// .col-1-12, .col-2-12, etc.
```

Want _push_ and _pull_ functionality? Add it to the options:

```scss
@include make-grid(12, 'lg', 'offset' 'push' 'pull');
// .col-offset-lg-3-12, .col-push-4-12, .col-pull-5-12
```

Prefer `1-2` over `6-12`? Enable the smart class names:

```scss
$gf-smart-class-names: true; // before the import

@import "grid-framework";

@include make-grid(12, 'md');
// .col-md-1-2, .col-md-1-3, .col-md-1-4, .col-md-1
```

Don't need offsets? Fine:

```scss
@include make-grid(12, 'sm', ''); // '' == no options
```

Nostalgic about Bootstrap 2's `span` prefix? Ok:

```scss
$gf-prefix: 'span'; // before the import

@import "grid-framework";

@include make-grid(12, '');
// .span-1-12, .span-2-12, .span-3-12
```

## Contributing

1. Fork it ( http://github.com/<my-github-username>/grid-framework/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
