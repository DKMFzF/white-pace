const gulp = require('gulp');
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mediaquery = require('postcss-combine-media-query');
const cssnano = require('cssnano');
const htmlMinify = require('html-minifier');
const sass = require('gulp-sass')(require('sass'));

// Start server 

function serve() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
}

// pipe file.scss

function pagesScss() { 
  const plugins = [
      autoprefixer(),
      mediaquery(),
      cssnano()
  ];
  return gulp.src('src/pages/**/*.scss')
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

// pipe file.html

function html() {
  const options = {
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      sortClassName: true,
      useShortDoctype: true,
      collapseWhitespace: true,
      minifyCSS: true,
      keepClosingSlash: true
  };
  return gulp.src('src/pages/**/*.html')
      .pipe(plumber())
      .on('data', function(file) {
          const buferFile = Buffer.from(htmlMinify.minify(file.contents.toString(), options))
          return file.contents = buferFile
      })
      .pipe(gulp.dest('dist/'))
      .pipe(browserSync.reload({stream: true}));
}

// pipe scripts.js

function scripts() {
  return gulp.src('src/**/*.js')
          .pipe(gulp.dest('dist/scripts'))
          .pipe(browserSync.reload({stream: true}));
}

// pipe images

// function images() {
//   return gulp.src('src/**/*.{jpg,png,svg,gif,ico,webp,avif}', { encoding: false })
//     .pipe(gulp.dest('dist/images'))
//     .pipe(browserSync.reload({stream: true}));
// }

// pipe fonts

// function fonts() {
//     return gulp.src('src/vendor/fonts/**/*.{woff,woff2,ttf}')
//             .pipe(gulp.dest('dist/fonts'))
//             .pipe(browserSync.reload({stream: true}));
// }

// file monitoring

function watchFiles() {
  gulp.watch(['src/**/*.html'], html);
  gulp.watch(['src/**/*.scss'], pagesScss);
  gulp.watch(['src/**/*.js'], scripts);
//   gulp.watch(['src/**/*.{jpg,png,svg,gif,ico,webp,avif}'], images);
//   gulp.watch(['src/vendor/fonts/**/*.{woff,woff2,ttf}'], fonts);
}

// clean dev dist

function clean() {
  return del('dist');
}

const build = gulp.series(clean, gulp.parallel(html, pagesScss, scripts));
const watchapp = gulp.parallel(build, watchFiles, serve);

// command in console

exports.html = html;
exports.pagesScss = pagesScss;
// exports.images = images;
exports.clean = clean;
exports.scripts = scripts;
// exports.fonts = fonts;

exports.build = build;
exports.watchapp = watchapp;
exports.default = watchapp;