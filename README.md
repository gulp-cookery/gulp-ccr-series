# gulp-ccr-series

Run sub tasks in series, each one running once the previous task has completed. A cascading configurable gulp recipe for [gulp-chef](https://github.com/gulp-cookery/gulp-chef).

## Install

``` bash
$ npm install --save-dev gulp-chef gulp-ccr-series
```

## Recipe

Series Tasking

## Ingredients

* [async](https://github.com/caolan/async)

* [async-done](https://github.com/gulpjs/async-done)

## Type

[Flow Controller](https://github.com/gulp-cookery/gulp-chef#writing-flow-controller)

## Usage

``` javascript
var gulp = require('gulp');
var chef = require('gulp-chef');

var meals = chef({
    src: 'src/',
    dest: 'dist/',
    series: {
        clean: {
        },
        styles: {
            src: '**/*.less',
            plugin: 'gulp-less',
            spit: true
        }
    }
});

gulp.registry(meals);
```
