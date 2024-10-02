// Подключение плагинов к gulp
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

// Функция запуска сервера
function serve() {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	});
}

// Описываем задачу копирования HTML-файлов
function html() {
    // минификация HTML (правила)
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
    return gulp.src('src/**/*.html')
        .pipe(plumber())
        .on('data', function(file) { // Функция минификации
            const buferFile = Buffer.from(htmlMinify.minify(file.contents.toString(), options))
            return file.contents = buferFile
})
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));; // тут нам нужно описать, что делает функция
}

// Описываем задачу копирования HTML-файлов
function css() {
    // Плагины для PostCSS
    const plugins = [
        autoprefixer(), // Автопрефиксы
        mediaquery(), // Медиа запросы
        cssnano()
    ];
    return gulp.src('src/**/*.css')
        .pipe(plumber())
        .pipe(concat('style.css'))
        .pipe(postcss(plugins)) // Загрузка плагинов в обработчик
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));;
}

// Описание scss
function scss() {
    const plugins = [
      autoprefixer(),
      mediaquery(),
      cssnano()
    ];
    return gulp.src('src/**/*.scss')
          .pipe(sass())
          .pipe(concat('bundle.css'))
          .pipe(postcss(plugins))
          .pipe(gulp.dest('dist/'))
          .pipe(browserSync.reload({stream: true}));
  }

// Перенос изобрадений
function images() {
    return gulp.src('src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}', { encoding: false })
            .pipe(gulp.dest('dist/images'))
            .pipe(browserSync.reload({stream: true}));
}

// Перенос svg
function svg() {
    return gulp.src('src/svg/**/*.svg')
            .pipe(gulp.dest('dist/svg'))
            .pipe(browserSync.reload({stream: true}));
}

// Перенос шрифтов 
function fonts() {
    return gulp.src('src/fonts/**/*.{woff,woff2,ttf}')
            .pipe(gulp.dest('dist/fonts'))
            .pipe(browserSync.reload({stream: true}));
}

// Перенос скриптов
function scrips() {
    return gulp.src('src/scripts/**/*.js')
            .pipe(gulp.dest('dist/scripts'))
            .pipe(browserSync.reload({stream: true}));
}

// Удаление файлов из папки dist/
function clean() {
    return del('dist');
}

// Функция для отслеживания изменений в src и автоматический запуск сборки проекта в папку dist 
function watchFiles() {
	gulp.watch(['src//*.html'], html);
	gulp.watch(['src/styles/**/*.css'], css);
    gulp.watch(['src/fonts/**/*.{woff,woff2}'], fonts);
    gulp.watch(['src/scripts/**/*.js'], scrips);
	gulp.watch(['src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}'], images);
    gulp.watch(['src/svg/**/*.svg'], svg);
    gulp.watch(['src/**/*.scss'], scss);
}

const build = gulp.series(clean, gulp.parallel(html, css, images, fonts, scrips, svg, scss));
const watchapp = gulp.parallel(build, watchFiles, serve); 

// строчки, которые позволяют вызвать эту задачу из терминала
exports.html = html;
exports.css = css;
exports.images = images;
exports.clean = clean;
exports.fonts = fonts;
exports.scrips = scrips;
exports.svg = svg;
exports.scss = scss;

// строки сборки проекта и запуска сервера
exports.build = build;
exports.watchapp = watchapp;

// дефолт задача для gulp
exports.default = watchapp; 
