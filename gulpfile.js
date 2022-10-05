const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser-js");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");

function css(done) {
  src("src/scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("public/build/css"));

  done();
}

function js() {
  return src("src/js/app.js")
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
        mode: "production",
        watch: true,
        entry: "./src/js/app.js",
      })
    )
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./public/build/js"));
}

function dev(done) {
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", js);
  done();
}

exports.css = css;
exports.dev = dev;
exports.default = series(css);
